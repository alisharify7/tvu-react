import { React } from "react";

import { fetch_menuDropDownData } from "../fake_data";
import { ImageSliders, GenUniqueKey } from "./Common";

// import logoleft from "../assets/logo-left.png";
// import logoright from "../assets/logo.png";
// import aparatlogo from "../assets/aparat.png";
// import eitaalogo from "../assets/eitaa.png";

const aparatlogo = "/assets/aparat.png";
const eitaalogo = "/assets/eitaa.png";
const logoleft = "/assets/logo-left.png";
const logoright = "/assets/logo.png";

const IndexHeaderImages = () => {
  /*
   * this component returns two main images for index kh and logo
   */
  return (
    <div className="col-12 col-md-10">
      <div className="row">
        <div className="col-md-6 col-12 d-flex justify-content-md-start justify-content-center p-0">
          <img alt="logo" src={logoright} className="img-fluid" />
        </div>
        <div className="col-md-6 col-12 d-none d-md-inline-flex d-flex justify-content-end p-0 ">
          <img alt="logo" src={logoleft} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

const MakeMenuItem = ({ text, submenu = [] }) => {
  /**
   incoming data has submenu render act differently <make submenu >
  */ 
  
  const DropDownMenu=(text, sub)=>{
    // inner function<component> for creating menu items that have submenu
    return (
      <li className="nav-item dropdown border-menu pe-2 pe-md-auto" key={GenUniqueKey()}>
      <a className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown">&nbsp;{text}&nbsp;</a>
      <ul className="dropdown-menu">
        {sub.map(e=>{
          return (
            <li key={GenUniqueKey()}><a className="dropdown-item text-dark text-end" href={e.href}>{e.text}</a></li>
          )
        })}
      </ul>
  </li>
)
}

  const SimpleMenu = (text, href)=>{
    /**
     * this function return simple menu item with not submenu
     */
    return (
      <li className="nav-item border-menu pe-2 pe-md-auto" key={GenUniqueKey()}>
        <a className="nav-link text-white" href={href}>
          {text}
        </a>
      </li>
    )
  }

  return (
    submenu.length === 0 ? SimpleMenu(text, "#") : DropDownMenu(text, submenu)
  );
};

const IndexHeaderMenu = () => {
  /**
   * making index header Menu component
   */
  const menuDropDownData = fetch_menuDropDownData();

  return (
      <div className="col-12 col-md-10 border border-white px-0 my-3">

        <nav className="navbar navbar-expand-lg p-0 m-0 " dir="rtl">
          <div className="container-fluid px-0">
            
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#responsive-collapse" >
              <span className="navbar-toggler-icon border-0 pe-2 pe-md-auto"></span>
            </button>

            <div className="collapse navbar-collapse" id="responsive-collapse">
              <ul className="navbar-nav  px-0">
                {menuDropDownData.map((each, index) => {
                    return (
                      <MakeMenuItem
                        key={index}
                        text={each.text}
                        submenu={each.submenu}
                      />
                    );
                  })}

              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
};

const IndexHeaderNewsText = () => {
  /**
   * this components returns news of the day in the scrolling-text animation.
   */
  return (
    <div className="col-12 col-md-10 fs-09">
      <div className="row justify-content-center align-items-center">
        <div className="col-2 col-md-1 text-white p-1 m-0 text-start">
          سرخط خبرها
        </div>
        <div className="col-8 col-md-10 p-0 m-0">
          <div className="scroll overflow-hidden">
            <div className="LeftToRight">
              <p className="p-0 m-0 mx-3 text-warning">
                آغاز ثبت نام اعضای هیئت علمی، کادر آموزشی و دانشجویان دانشگاه
                فنی و حرفه‌ای در سی و پنجمین نمایشگاه بین‌المللی کتاب از 19 تا
                29 اردیبهشت
              </p>
              <p className="p-0 m-0 mx-3 text-warning">
                پیام تبریک رئیس دانشگاه فنی و حرفه‌ای به مناسبت فرارسیدن روز
                معلم
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 col-md-1 d-flex justify-content-sm-end justify-content-center p-0 m-0 align-items-center ">
          <a href="#" className="mx-1">
            <img
              style={{ width: 26, height: 26 }}
              alt="eitaa logo"
              src={eitaalogo}
            />
          </a>
          <a href="#" className="mx-1">
            <img
              style={{ width: 26, height: 26 }}
              alt="aparat logo"
              src={aparatlogo}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const IndexSliderContainer = () => {
  return (
    <div className="col-12 col-md-10 fs-09 my-2">
      <div className="row justify-content-center align-items-center">
        <div
          className="col-lg-9 col-12 my-auto my-sm-2"
          style={{ height: "100%" }}
        >
          <ImageSliders key={GenUniqueKey()} />
        </div>
        <div
          className="col-lg-3 col-12 my-auto my-sm-2"
          style={{ height: "100%" }}
        >
          <div className="card rounded-0 border-0">
            <div className="card-header m-0 rounded-0 py-1 fs-09 text-white bg-normal-brand-blue">
              <i className="bi bi-camera2 fs-5"></i>
              <span className="mx-1"> چند رسانه ای</span>
            </div>
            <div className="card-body p-0 m-0 rounded-0 bg-gradient-multi-media text-white text-center">
              <ImageSliders imgHeight={310}>
                <p className="p-3 m-0 fw-bolder text-white">
                  گزیده سخنان دکتر محمدعلی زلفی گل، وزیر علوم، تحقیقات و فناوری
                  در اولین کنفرانس ملی مهارت ایران
                </p>
              </ImageSliders>
              <hr className="m-0 p-0" />
              <div className="d-flex justify-content-around align-items-center">
                <a
                  href="#"
                  className="m-0 py-2 text-decoration-none  text-white"
                >
                  گزارش تصویری
                </a>
                |
                <a
                  href="#"
                  className="m-0 py-2 text-decoration-none  text-white"
                >
                  گالری
                </a>
                |
                <a
                  href="#"
                  className="m-0 py-2 text-decoration-none  text-white"
                >
                  پادکست
                </a>
              </div>
            </div>
            <div className="card-footer p-0 m-0 rounded-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainIndex = () => {
  return (
    // main index
    <section className="container-fluid bg-gradient-index py-2 persian-font">
      <div className="row justify-content-center align-items-center">
        <IndexHeaderImages key={GenUniqueKey()} />
        <IndexHeaderMenu key={GenUniqueKey()} />
        <IndexHeaderNewsText key={GenUniqueKey()} />
        <IndexSliderContainer key={GenUniqueKey()} />
      </div>
    </section>
    // end of main index
  );
};

export { MainIndex };
