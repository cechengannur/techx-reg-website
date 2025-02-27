import React, { useEffect, useState } from "react";
import * as R from 'ramda'
import './styles.css'



function GDImageViewer(data) {
  const [imgIds, setImgIds] = useState([]);
  
  const [style, setStyle] = useState({ });

  const [hover, setHover] = useState(true);

  const [newWindow, setNewWindw] = useState(true);

  const [clickable, setClickable] = useState(true);

  const [modal, setModal] = useState(true);

  const [showHeader, setShowHeader] = useState();

  const [classNames, setClassNames] = useState(true);

  const [ids, setIds] = useState(true);

  const [excludes, setExcludes] = useState(true);

  const GOOGLE_API_KEY = data.data.gkey;
  const GOOGLE_DRIVE_URL_START =
    "https://www.googleapis.com/drive/v2/files?q=%27";
  const GOOGLE_DRIVE_URL_END = "%27+in+parents&key=";
  const GOOGLE_DRIVE_PUBLIC_DIRECTORY_ID = data.data.dirId;
  const GOOGLE_DRIVE_IMG_URL = "http://drive.google.com/uc?export=view&id=";
  const options = data.data.options;
  const header = data.data.header;
  useEffect(() => {
    loadData();
    loadSettings(options);
  }, []);

  function loadSettings(options) {
    if (options.style) {
      setStyle(options.style);
    }
    if (options.onClick) {
      setClickable(true);
      if (options.onClick.newWindow) {
        setNewWindw(true);
      }
      if (options.onClick.modal) {
        setModal(true);
      }
    }
    if (options.hover) {
      setHover(true);
    }
    if (header) {
      setShowHeader(true);
    }

    if (options.attachClass) {
      setClassNames(options.attachClass);
    }

    if (options.attachId) {
      setIds(options.attachId);
    }
    if (options.exclude) {
      setExcludes(options.exclude);
    }
  }

  async function loadData() {
    await fetch(
      GOOGLE_DRIVE_URL_START +
      GOOGLE_DRIVE_PUBLIC_DIRECTORY_ID  +
      GOOGLE_DRIVE_URL_END +
      GOOGLE_API_KEY
    )
      .then(response => response.json())
      .then(jsonResp => {
        setImgIds(jsonResp.items);
      });
  }

  function checkFormat(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  function ModalView(props) {
    return (
      <div>
        <div id="modal-container" className="modal">
          <span className="close">&times;</span>
          <div className="imageSlider-container">
          <button className="navButton prvBtn">&#8249;</button>
          <img className="modal-content" id="curr-modal" alt="" />
          <button className="navButton nxtBtn">&#8250;</button>
          </div>
          <div id="caption" />
        </div>
      </div>
    );
  }

  function showModal(imgId,currKey) {
    const modal = document.getElementById("modal-container");
    const modalImg = document.getElementById("curr-modal");
    modalImg.src = imgId;
    modal.style.display = "block";
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      modal.style.display = "none";
    };
    const prevBtn = document.getElementsByClassName("navButton prvBtn")[0];
    prevBtn.onclick = function () {
      if(currKey>0)
      {
        modalImg.src = GOOGLE_DRIVE_IMG_URL + imgIds[--currKey]["id"];
      }
    };
    const nextBtn = document.getElementsByClassName("navButton nxtBtn")[0];
    nextBtn.onclick = function () {
      if(currKey<imgIds.length-1)
      {
        modalImg.src = GOOGLE_DRIVE_IMG_URL + imgIds[++currKey]["id"];
      }
      
    };
  }

  const renderImages = (className, id, exclude, item ,i) => {
    return (
      <div className="grid-item">

        {modal && <ModalView />}
        {!exclude && (
          <div>
          <img
            style={style}
            className={
              (clickable ? " gd-pointer " : "") +
              (" gd-img ") +
              (hover ? " gd-pointer gd-hover " : "") + className
            }
            onClick={() => {
              modal && showModal(GOOGLE_DRIVE_IMG_URL + item.id,i);
            }}
            src={GOOGLE_DRIVE_IMG_URL + item.id}
            id={id ? id : null}
            key={i}
            alt={item.title}
          />
          <p>{item.title.split(".jpeg")}</p>
          </div>
        )}
      </div>
    )

  }

  const renderMain = (className, id, exclude, href, target, item, i) => {
    if (!R.isEmpty(href)) {
      return (
        <a
          href={href}
          target={target}
        >
          {renderImages(className, id, exclude, item, i)}
        </a>
      )
    }
    return (
      renderImages(className, id, exclude, item, i)
    )
  }

  return (
    <>

      {imgIds &&
        imgIds.map((item, i) => {
          const title = R.propOr("", "title", item)
          if (checkFormat(item.title)) {
            const className = R.propOr("", title, classNames)
            const id = R.propOr("", title, ids)
            const exclude = R.propOr("", title, excludes);
            const href = !modal && clickable ? GOOGLE_DRIVE_IMG_URL + item.id : ""
            const target = newWindow ? "_blank" : ""
            return(renderMain(className, id, exclude, href, target, item, i))
          }
        })}
      
   </>
  );
}

export default GDImageViewer;