const FooterContainer = () => {
  return (
    <>
      <section className="container-fluid py-2 persian-font bg-gradient-footer-index pb-5 ">
        <div className="row justify-content-center align-items-center pb-5">
          <div className="col-4 col-md-3">
            <nav className="pe-3">
              <a
                className="text-decoration-none text-white fs-09 text-center"
                href="./fa/content/id/id=1"
              >
                درباره دانشگاه
              </a>
              <br />
              <a
                className="text-decoration-none text-white fs-09 text-center"
                href="./fa/msg/add"
              >
                ارتباط با دانشگاه
              </a>
              <br />
              <a
                className="text-decoration-none text-white fs-09 text-center"
                href="http://news.tvu.ac.ir"
                target="_blank"
              >
                پایگاه خبری
              </a>
              <br />
              <a
                className="text-decoration-none text-white fs-09  text-center"
                href="https://khedmat.tvu.ac.ir"
                target="_blank"
              >
                میز خدمت
              </a>
              <br />
            </nav>
          </div>
          <div className="col-4 col-md-3">
            <nav>
              <a
                className="text-decoration-none text-white fs-09 text-center"
                href="./"
              >
                مراکز علمی
              </a>
              <br />
              <a
                className="text-decoration-none text-white fs-09 text-center"
                href="./"
              >
                دانشکده&zwnj;ها
              </a>
              <br />
              <a
                className="text-decoration-none text-white fs-09 text-center"
                href="./"
              >
                واحدهای ستادی
              </a>
              <br />
              <a
                className="text-decoration-none text-white fs-09 text-center"
                href="./"
              >
                سامانه&zwnj;ها
              </a>
              <br />
            </nav>
          </div>
          <div className="col-4 col-md-3 d-none d-md-block">
            <img
              alt="logo"
              style={{ width: 180, height: 100 }}
              src="/assets/msrt-logo.png"
            />
          </div>

          <div
            style={{ height: 2, width: "75%" }}
            className="bg-white my-4 col-4 col-md-3"
          ></div>
          <div className="col-9">
            <section>
              <p className="fs-09 m-0 text-white">
                <i className="text-white fs-09 bi bi-geo-alt-fill"></i> نشانی:
                تهران، میدان ونک، خیابان برزیل شرقی، پلاک ۴ ساختمان مرکزی
                دانشگاه فنی‌وحرفه‌ای
              </p>
              <p className="fs-09 m-0 text-white">
                <i className="text-white fs-09 bi bi-mailbox"></i> کدپستی:
                ۱۴۳۵۷۶۱۱۳۷
              </p>
              <p className="fs-09 m-0 text-white">
                <i className="text-white fs-09 bi bi-telephone-fill"></i> شماره
                تماس: ۰۲۱-۴۲۳۵۰۰۰۰
              </p>
              <p className="fs-09 m-0 text-white">
                <i className="text-white fs-09 bi bi-telephone-inbound-fill"></i>{" "}
                فکس: ۰۲۱-۸۸۱۹۰۶۰۸
              </p>
              <p className="fs-09 m-0 text-white">
                <i className="text-white fs-09 bi bi-at"></i> پست الکترونیکی:
                info@tvu.ac.ir
              </p>
              <p className="fs-09 m-0 text-white">
                <i className="text-white fs-09 bi bi-envelope"></i> پست
                الکترونیکی روابط عمومی: audiovisual@tvu.ac.ir
              </p>
            </section>
          </div>
        </div>
      </section>

      <div className="container-fluid bg-white py-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-10">
            <span className="fs-09 me-auto me-sm-5  text-muted px-2"> ©کلیه حقوق این سایت متعلق به دانشگاه فنی و حرفه‌ای می‌باشد.</span>

          </div>

        </div>
      </div>
    </>
  );
};

export { FooterContainer };
