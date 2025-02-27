import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ComingSoon(props) {
  const getTimeDifference = (launchDate) => {
    const difference = +new Date(launchDate) - +new Date();
    let temp = Math.floor(difference / 1000);
    const days = Math.floor(temp / 86400);
    temp -= days * 86400;
    const hours = Math.floor(temp / 3600) % 24;
    temp -= hours * 3600;
    const minutes = Math.floor(temp / 60) % 60;
    temp -= minutes * 60;
    const seconds = temp % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const addLeadingZeros = (value) => {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  };

  const updateCountdown = () => {
    const launchDate = "19 Dec 2022, 11:30:00";
    const t = getTimeDifference(launchDate);
    console.log(t);
    if(t.days===0 && t.hours===0 && t.minutes===0 && t.seconds===0){
      window.open('http://tharang.ihrd.ac.in/', '_blank');
    }
    setDays(addLeadingZeros(t.days));
    setHours(addLeadingZeros(t.hours));
    setMinutes(addLeadingZeros(t.minutes));
    setSeconds(addLeadingZeros(t.seconds));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startCountdown = () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  };

  const [days, setDays] = React.useState("00");
  const [hours, setHours] = React.useState("00");
  const [minutes, setMinutes] = React.useState("00");
  const [seconds, setSeconds] = React.useState("00");

  useEffect(() => {
    startCountdown();
  }, [startCountdown]);

  return (
    <section className="page-title comimg-soon">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header__logo">
              <Link to="/">
                <img
                  src={require("../assets/images/logo/tharang.png")}
                  alt=""
                  width={480}
                  height={40}
                />
              </Link>
            </div>
            {/* <div className="sub-heading">
              <p>Site Under Construction</p>
              <span>Site</span>
            <span>Under</span>
            <span>construction</span>
            </div> */}
            <p data-aos="zoom-in" data-aos-duration="800" className="text-wrap">
              {/* <h3>Comming</h3> */}
              <h2 className="title text-uppercase">Coming Soon</h2>
            </p>
          </div>
          <div className="col-md-12">
            <div className="featured-countdown">
              <span className="slogan"></span>
              <span className="js-countdown" data-timer="1865550"></span>
              <ul className="desc">
                <li class="h4">
                  <p>{days}</p> Days
                </li>
                <li class="h4">
                  <p>{hours}</p> Hours
                </li>
                <li class="h4">
                  <p>{minutes}</p> Minutes
                </li>
                <li class="h4" id="seconds">
                  <p>{seconds}</p> Seconds
                </li>
              </ul>
            </div>
            {/* <form action="#" className="newlletter-form" id="subscribe-form">
                            <span></span>
                            <input type="email" placeholder="Your Email Address" required="" id="subscribe-email" />
                            <div className="btn-pst">
                                <button className="tf-button-st2 btn-effect" type="submit" id="subscribe-button"> <span className="effect">Sign Up</span></button>
                            </div>
                        </form> */}
            {/* <ul className="widget-social">
                            <li><Link to="#"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3939 2.15771C15.0931 1.72611 15.6163 1.04651 15.8657 0.245795C15.2087 0.648314 14.4899 0.93186 13.7403 1.08417C12.701 -0.0509573 11.0544 -0.327196 9.72052 0.409811C8.38665 1.14682 7.69575 2.71461 8.03387 4.23714C5.34261 4.09764 2.83523 2.78502 1.13566 0.625923C0.248691 2.20557 0.701952 4.22489 2.17149 5.24062C1.64009 5.22298 1.12047 5.07443 0.65597 4.80734C0.65597 4.82183 0.65597 4.83633 0.65597 4.85083C0.656277 6.4963 1.77944 7.91367 3.34147 8.23977C2.84857 8.37823 2.33154 8.39862 1.82985 8.29937C2.26914 9.70654 3.52519 10.6706 4.95682 10.6993C3.77111 11.6602 2.30679 12.1813 0.799487 12.1788C0.532319 12.1792 0.26536 12.1633 0 12.1313C1.53064 13.1468 3.31212 13.6859 5.13154 13.684C7.66279 13.7019 10.0954 12.6716 11.8852 10.8234C13.6751 8.97517 14.6728 6.46335 14.6552 3.84977C14.6552 3.69997 14.6518 3.55098 14.6451 3.4028C15.3006 2.91362 15.8664 2.30763 16.3158 1.61329C15.7051 1.8928 15.0573 2.07631 14.3939 2.15771Z" fill="#B9B9BF"/>
                                </svg>                                                 
                                </Link></li>
                            <li><Link to="#"><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.316406 8.47173C0.317386 12.6399 3.32969 16.1889 7.421 16.8421V10.9204H5.28465V8.47173H7.42352V6.60769C7.32791 5.72443 7.62775 4.84414 8.24172 4.20557C8.85569 3.567 9.72016 3.23634 10.6007 3.30326C11.2327 3.31353 11.8631 3.37017 12.4869 3.47272V5.55621H11.4225C11.0561 5.50792 10.6877 5.62968 10.4211 5.88721C10.1545 6.14474 10.0186 6.51016 10.0516 6.88052V8.47173H12.385L12.012 10.9212H10.0516V16.8421C14.4763 16.1385 17.579 12.0725 17.112 7.58976C16.645 3.10701 12.7718 -0.223214 8.29829 0.0116966C3.8248 0.246607 0.317117 3.96441 0.316406 8.47173Z" fill="#B9B9BF"/>
                                </svg>                            
                                </Link></li>
                            <li><Link to="#">
                                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.7825 0.246C19.4413 -0.0385268 18.9055 -0.0792374 18.3514 0.139526H18.3505C17.7678 0.369474 1.8563 7.08181 1.20856 7.35604C1.09074 7.39631 0.0618162 7.77389 0.167802 8.61494C0.262416 9.37323 1.08938 9.68729 1.19036 9.72352L5.23557 11.0858C5.50394 11.9644 6.4933 15.206 6.71209 15.8986C6.84856 16.3303 7.07099 16.8975 7.46082 17.0143C7.80289 17.144 8.14313 17.0255 8.36329 16.8555L10.8364 14.5994L14.8289 17.6616L14.924 17.7176C15.1951 17.8357 15.4548 17.8947 15.7027 17.8947C15.8942 17.8947 16.078 17.8594 16.2536 17.7887C16.8517 17.5471 17.091 16.9866 17.116 16.923L20.0982 1.67803C20.2801 0.863818 20.0272 0.449553 19.7825 0.246ZM8.80316 11.6307L7.43853 15.2096L6.0739 10.7359L16.536 3.13064L8.80316 11.6307Z" fill="#B9B9BF"/>
                                    </svg>                                                               
                                </Link></li>
                            <li><svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.0903 2.53289C18.9102 1.5201 18.0525 0.782535 17.0571 0.552272C15.5676 0.230263 12.8108 0 9.82817 0C6.84729 0 4.04642 0.230263 2.5551 0.552272C1.56147 0.782535 0.701975 1.47332 0.521957 2.53289C0.340174 3.68421 0.160156 5.29605 0.160156 7.36842C0.160156 9.44079 0.340174 11.0526 0.566079 12.2039C0.747861 13.2167 1.60559 13.9543 2.59922 14.1846C4.18055 14.5066 6.89141 14.7368 9.87406 14.7368C12.8567 14.7368 15.5676 14.5066 17.1489 14.1846C18.1425 13.9543 19.0003 13.2635 19.182 12.2039C19.3621 11.0526 19.588 9.39402 19.6338 7.36842C19.5421 5.29605 19.3162 3.68421 19.0903 2.53289ZM7.38911 10.5921V4.14474L12.9008 7.36842L7.38911 10.5921Z" fill="#B9B9BF"/>
                                </svg>
                                </li>
                            <li><Link to="#"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2519 0H3.01376C1.70091 0 0.632812 1.0681 0.632812 2.38095V17.619C0.632812 18.9319 1.70091 20 3.01376 20H18.2519C19.5647 20 20.6328 18.9319 20.6328 17.619V2.38095C20.6328 1.0681 19.5647 0 18.2519 0ZM16.35 8.72524C16.2419 8.73524 16.1323 8.7419 16.0214 8.7419C14.7723 8.7419 13.6747 8.09952 13.0361 7.12857C13.0361 9.67571 13.0361 12.5738 13.0361 12.6224C13.0361 14.8648 11.2181 16.6829 8.97567 16.6829C6.73329 16.6829 4.91519 14.8648 4.91519 12.6224C4.91519 10.38 6.73329 8.5619 8.97567 8.5619C9.06043 8.5619 9.14329 8.56952 9.22662 8.57476V10.5757C9.14329 10.5657 9.06138 10.5505 8.97567 10.5505C7.83091 10.5505 6.90329 11.4781 6.90329 12.6229C6.90329 13.7676 7.83091 14.6952 8.97567 14.6952C10.1204 14.6952 11.1314 13.7933 11.1314 12.6486C11.1314 12.6033 11.1514 3.3181 11.1514 3.3181H13.0638C13.2438 5.0281 14.6242 6.37762 16.35 6.50143V8.72524Z" fill="#B9B9BF"/>
                                </svg>                                                      
                                </Link></li>
                            <li><Link to="#"><svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.8611 1.63424C16.1304 0.245933 13.3927 0.0105971 13.2755 0.00213148C13.0937 -0.013106 12.9205 0.0884779 12.8458 0.256091C12.839 0.266249 12.7796 0.403387 12.7133 0.616713C13.858 0.809722 15.2643 1.19743 16.5363 1.98471C16.7401 2.10999 16.803 2.3775 16.6773 2.58066C16.5941 2.71442 16.4531 2.78722 16.3071 2.78722C16.2289 2.78722 16.1491 2.76521 16.0778 2.72119C13.8903 1.36843 11.1593 1.30071 10.6328 1.30071C10.1063 1.30071 7.37364 1.36843 5.18784 2.72119C4.98404 2.84817 4.71569 2.78552 4.59001 2.58236C4.46264 2.3775 4.52548 2.11169 4.72928 1.98471C6.00136 1.19913 7.40761 0.809722 8.55231 0.618406C8.48607 0.403387 8.42663 0.267943 8.42154 0.256091C8.34511 0.0884779 8.17357 -0.0164919 7.99015 0.00213148C7.87296 0.0105971 5.13519 0.245932 3.38077 1.65287C2.46535 2.4977 0.632812 7.43467 0.632812 11.7029C0.632812 11.7791 0.653193 11.8519 0.690557 11.9179C1.95414 14.1324 5.40353 14.7114 6.18988 14.7368C6.19327 14.7368 6.19837 14.7368 6.20346 14.7368C6.34273 14.7368 6.47351 14.6708 6.55503 14.5591L7.34986 13.4687C5.20482 12.9168 4.10938 11.9788 4.04654 11.923C3.86651 11.7655 3.84952 11.4912 4.00917 11.3118C4.16712 11.1323 4.44226 11.1154 4.62228 11.2728C4.64776 11.2965 6.66542 13.0031 10.6328 13.0031C14.607 13.0031 16.6247 11.2898 16.645 11.2728C16.8251 11.1171 17.0985 11.1323 17.2582 11.3135C17.4161 11.4929 17.3991 11.7655 17.2191 11.923C17.1562 11.9788 16.0608 12.9168 13.9158 13.4687L14.7106 14.5591C14.7921 14.6708 14.9229 14.7368 15.0622 14.7368C15.0673 14.7368 15.0724 14.7368 15.0757 14.7368C15.8621 14.7114 19.3115 14.1324 20.5751 11.9179C20.6124 11.8519 20.6328 11.7791 20.6328 11.7029C20.6328 7.43467 18.8003 2.4977 17.8611 1.63424ZM7.80673 9.96918C6.96603 9.96918 6.28499 9.19376 6.28499 8.23549C6.28499 7.27722 6.96603 6.50179 7.80673 6.50179C8.64742 6.50179 9.32846 7.27722 9.32846 8.23549C9.32846 9.19376 8.64742 9.96918 7.80673 9.96918ZM13.4589 9.96918C12.6182 9.96918 11.9372 9.19376 11.9372 8.23549C11.9372 7.27722 12.6182 6.50179 13.4589 6.50179C14.2996 6.50179 14.9806 7.27722 14.9806 8.23549C14.9806 9.19376 14.2996 9.96918 13.4589 9.96918Z" fill="#B9B9BF"/>
                                </svg>                                                       
                                </Link></li>
                        </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
