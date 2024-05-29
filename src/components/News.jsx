import React from "react";
import { GenUniqueKey } from "./Common";


const PublisherRow = ({img, text})=>{
  return (
    <div className="d-flex justify-content-center align-items-center my-2">
      <a href="#" className="text-decoration-none m-0 p-0 w-100 d-flex justify-content-between align-content-center">
        <img src={img} alt="img" style={{width:"30%"}}/>
        <p className="text-end w-100 px-3">{text}</p>
      </a>
    </div>
  )
}

function NewsSection() {
  const news_link = [
    "پیام تبریک رئیس دانشگاه فنی و حرفه‌ای به مناسبت فرارسیدن روز معلم",
    "تجمع بزرگ دانشگاهیان دانشگاه فنی و حرفه‌ای در حمایت از خیزش دانشجویان بیدار دانشگاه‌های آمریکا و اروپا",
    "بیانیه ریاست دانشگاه فنی و حرفه‌ای در محکوم کردن رفتار غیرانسانی پلیس آمریکا با دانشگاهیان حامی مردم مظلوم غزه",
    "پیام تبریک رئیس دانشگاه فنی و حرفه‌ای به مناسبت فرارسیدن روز معلم",
    "دیدار هیئت رئیسه دانشگاه فنی و حرفه‌ای کشور با خانواده شهید حسن طهرانی مقدم",
    "بیانیه ریاست دانشگاه فنی و حرفه‌ای در محکوم کردن رفتار غیرانسانی پلیس آمریکا با دانشگاهیان حامی مردم مظلوم غزه",
    "دیدار هیئت رئیسه دانشگاه فنی و حرفه‌ای کشور با خانواده شهید حسن طهرانی مقدم",
    "بیانیه ریاست دانشگاه فنی و حرفه‌ای در محکوم کردن رفتار غیرانسانی پلیس آمریکا با دانشگاهیان حامی مردم مظلوم غزه",
  ]
  const Publishers_data = [
    {img:'/assets/publisher/1.jpg', text:"بازاریابی آموزش عالی «درک چگونگی ساخت و ارتقاء برند دانشگاه"},
    {img:'/assets/publisher/2.jpg', text:"مدارهای منطقی دیجیتال و تحلیل مسائل کاربردی"},
    {img:'/assets/publisher/3.jpg', text:"مبانی خاکشناسی کشاورزی"},
    {img:'/assets/publisher/4.jpg', text:"نانو مواد در پیل سوختی الکلی مستقیم"},
  ]

  return (
    <section className="container-fluid py-2 persian-font">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-7 col-12 my-auto my-sm-3 bg-news mx-2 px-0">
          <div className="news-section px-0">
            <p className="m-0 text-dark-brand-blue p-2 fw-bolder">اخبار</p>
            <hr className="bg-bg-dark-brand-blue text-dark-brand-blue m-0 p-0 w-100 mb-3" />
            <div className="row justify-content-center align-items-center">
                <div className="col-11 col-md-6">
                  <a href="#" className="text-decoration-none text-center px-2 py-5 text-normal-brand-blue fw-bolder">
                    <img alt="fake news image" className="img-fluid" src="/assets/news/1.jpg" />
                    <p className="my-4">آغاز ثبت نام اعضای هیئت علمی، کادر آموزشی و دانشجویان دانشگاه فنی و حرفه‌ای در سی و پنجمین نمایشگاه بین‌المللی کتاب از 19 تا 29 اردیبهشت</p>
                  </a>
                </div>
                <div className="col-11 col-md-6">
                <ul className="list-unstyled m-0 p-0">
                {news_link.map(each=>{
                  return (<a className="text-decoration-none text-muted fs-09 m-2 px-4 d-block" href="#">◼ {each}</a>)
                })}
              </ul>
                </div>
            </div>
            <hr className="bg-bg-dark-brand-blue text-dark-brand-blue m-0 p-0 w-100 mb-2" />
            <div className="d-flex justify-content-center align-items-center pb-2 ps-2 ">
              <a href="#" className="text-normal-brand-blue text-decoration-none me-auto fs-09">آرشیو</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-12 my-auto my-sm-3 bg-news p-0 mx-2">
        <p className="text-dark-brand-blue fw-bolder p-2 m-0">انتشارات</p>
            <hr className="bg-bg-dark-brand-blue text-dark-brand-blue m-0 p-0 w-100 mb-3" />
              {Publishers_data.map(e=>{
                return (<PublisherRow key={GenUniqueKey()} img={e.img} text={e.text} />)
              })}
            <hr className="bg-bg-dark-brand-blue text-dark-brand-blue m-0 p-0 w-100 my-2" />
            <div className="d-flex justify-content-center align-items-center pb-2 ps-2 ">
              <a href="#" className="text-normal-brand-blue text-decoration-none me-auto fs-09">آرشیو</a>
            </div>
        </div>
      </div>
    </section>
  );
}

export { NewsSection };
