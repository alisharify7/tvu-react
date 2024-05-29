import React from "react";

const TopHeader = () => {
  // top white navbar section
  return (
    // top header
    <section className="container-fluid fs-08">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-10 d-flex justify-content-between align-items-center">
          <div className="icon-right d-flex flex-row-reverse justify-content-end ">
            <button className="btn btn-primary rounded-1 d-none d-md-inline-flex ">
              {" "}
            </button>
            <div className="mx-2 text-normal-brand-blue d-none d-lg-inline-flex ">
              <span className="mx-1">+آ</span>
              <span className="mx-1">-آ</span>
            </div>
            <span className="fs-08 text-muted mx-1 d-none d-md-block">
              ۱۴۰۳ پنجشنبه ۲۰ اردیبهشت{" "}
            </span>
            <div className="mx-2 text-normal-brand-blue">
              <span className="mx-1 on-hover-orange cursor-pointer">EN</span>|
              <span className="mx-1 on-hover-orange cursor-pointer">FA</span>
            </div>
            <a href="#" className="mx-1 fs-01 text-normal-brand-blue">
              <i className="bi bi-box-arrow-right"></i>
            </a>
            <a href="#" className="mx-1 fs-01 text-normal-brand-blue">
              <i className="bi bi-diagram-3"></i>
            </a>
            <a href="#" className="mx-1 fs-01 text-normal-brand-blue">
              <i className="bi bi-rss"></i>
            </a>
            <a href="#" className="mx-1 fs-01 text-normal-brand-blue">
              <i className="bi bi-house-fill"></i>
            </a>
          </div>
          <div className="text-left me-auto d-flex flex-row-reverse justify-content-between align-items-center text-normal-brand-blue d-none d-lg-inline-flex">
            <a href="#" className="text-decoration-none mx-2 on-hover-orange">
              میز خدمت
            </a>
            <a href="#" className="text-decoration-none mx-2 on-hover-orange">
              پست الکترونیک
            </a>
            <a href="#" className="text-decoration-none mx-2 on-hover-orange">
              اتوماسیون اداری
            </a>
            <a href="#" className="text-decoration-none mx-2 on-hover-orange">
              آموزش مجازی
            </a>
            <a href="#" className="text-decoration-none mx-2 on-hover-orange">
              سامانه پرسنلی
            </a>
            <span className="ms-3 text-muted">خدمات:</span>
          </div>
          <span className=" p-2">
            <i className="bi bi-search btn btn-primary bg-normal-brand-blue"></i>
          </span>
        </div>
      </div>
    </section>
    // end of top header
  );
};

export { TopHeader };
