import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss' ;
import { Modal } from "react-bootstrap";
import './styles.scss'

SliderItem.propTypes = {
    item : PropTypes.object,
};

function SliderItem(props) {
    const {item} = props;

    const [isOpen, setOpen] = useState(false)

    const [modalShow, setModalShow] = useState(false);

    
    return (
        <div className={`box-slider ${item.classAction}`}>
            {/* <img className='bg-slider' src={item.bgImg} alt="cybox" /> */}
            
            <div className="box-slider__main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-box">
                                <h1 className="title">{item.title}</h1>
                                <p className="sub-title">{item.desc}</p>
                                <div className="wrap-btn">
                                {item.general.map((item, index) => {
                                        return (
                                            // <div className="box corner-box">
                                            //     <p>{item[0].charAt([0]).toUpperCase() + item[0].slice(1)}</p>
                                            //     <h6 className="h7">{item[1]}</h6>
                                            // </div>
                                        
                                            
                                            <>
                                            <Link to={item[1]} className="tf-button btn-effect popup-youtube" onClick={()=> setOpen(true)}>
                                            
                                                <span className="boder-fade"></span>                                     
                                                <span className="effect">{item[0].charAt([0]).toUpperCase() + item[0].slice(1)}</span>
                                            </Link>
        
                                            
                                        </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-6 col-md-12">
                            <div className="image">
                                <img src={item.img} alt="HOVER IMAGE" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="0MsihWKqBmg" onClose={() => setOpen(false)} /> */}

            {/* <Modal
                show={modalShow}
                onHide={setModalShow}
            > */}
            {/* <Modal.Header closeButton></Modal.Header>

                <div className="modal-body center">
                                <div className="box-wallet-inner">
                                    <div className="sc-box">
                                        <div className="img">
                                            <img src="assets/images/common/icon-1.png" alt="Crybox" />
                                        </div>
                                        <h6 className="heading"><a href="#">Meta Mask</a> </h6>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                    </div>
                                    <div className="sc-box">
                                        <div className="img">
                                            <img src="assets/images/common/icon-6.png" alt="Crybox" />
                                        </div>
                                        <h6 className="heading"><a href="#"> Bitski</a></h6>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                    </div>
                                    <div className="sc-box">
                                        <div className="img">
                                            <img src="assets/images/common/vector.png" alt="Crybox" />
                                        </div>
                                        <h6 className="heading"><a href="#">Fortmatic</a> </h6>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                    </div>
                                    <div className="sc-box">
                                        <div className="img">
                                            <img src="assets/images/common/icon-2.png" alt="Crybox" />
                                        </div>
                                        <h6 className="heading"><a href="#">Coinbase Wallet</a> </h6>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                    </div>
                                    <div className="sc-box">
                                        <div className="img">
                                            <img src="assets/images/common/icon-3.png" alt="Crybox" />
                                        </div>
                                        <h6 className="heading"><a href="#">Authereum</a> </h6>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                    </div>
                                    <div className="sc-box">
                                        <div className="img">
                                            <img src="assets/images/common/icon-4.png" alt="Crybox" />
                                        </div>
                                        <h6 className="heading"><a href="#">Kaikas</a> </h6>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                    </div>
                                </div>  
                            </div>
            </Modal> */}

            {/* <div className="modal fade popup" id="popup_bid" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="header-popup">
                        <h5>Connect to a wallet</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    
                </div>
            </div>
        </div> */}
        </div>
    );
}

export default SliderItem;