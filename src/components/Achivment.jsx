import React from "react";
import { GenUniqueKey } from "./Common";

const AchiveMentROW = ({ img, text }) => {
    return (
        <a href="#" className="m-0 my-2 text-decoration-none text-normal-brand-blue  d-inline-block d-flex justify-content-between align-content-center w-100 ">
            <img alt="img achivement section"  src={ img } style={{width:150, height:100}}/>
            <p className="text-end w-100  me-2">{text}</p>
        </a>
    )
}


const AnnouncementRow = ({text, img})=>{
    return (
        <a href="#" className="m-0 my-3 text-decoration-none text-normal-brand-blue  d-inline-block d-flex justify-content-between align-content-center w-100 ">
            <img alt="img announcement section" src={ img } style={{width:150, height:100}}/>
            <p className="text-end w-100  me-2">{text}</p>
        </a>
    )
}

const AchivmentContianer = () => {
    const achriveMent_DATA = [
        { text: "کسب رتبه نخست نشریات چند رسانه‌ای توسط دانشجوی دانشگاه فنی و حرفه‌ای", img: "/assets/achivments/1.jpg" },
        { text: "کسب رتبه دوم جشنواره قرآنی، فرهنگی، هنری و ادبی شهید آوینی در بخش قرآنی رشته حفظ بیست جزء توسط دانشجوی دانشگاه فنی و حرفه‌ا", img: "/assets/achivments/2.jpg" },
        { text: "کسب مقام نایب قهرمانی دانشجوی آموزشکده دختران کرمانشاه در مسابقات قهرمانی آسیا", img: "/assets/achivments/3.jpg" },
        { text: "کسب مقام دانشجویان دانشگاه فنی و حرفه‌ای در مسابقات بین‌المللی کشتی پهلوانی (جام فجر)", img: "/assets/achivments/4.jpg" },
        { text: "کسب مدال نقره دانشگاه فنی‌و‌حرفه‌ای استان قم در بیست و یکمین دوره مسابقات ملی مهارت", img: "/assets/achivments/5.jpg" },
    ];

    const annoncment_DATA=[
        {text:"نیازسنجی تجهیزات خوابگاه‌های ملکی", img:"/assets/announcement/1.jpg"},
        {text:"دانشگاه فنی و حرفه‌ای مقدم دانشجویان نوورود را گرامی می دارد", img:"/assets/announcement/2.jpg"},
        {text:"دانشگاه فنی و حرفه‌ای مقدم دانشجویان نوورود را گرامی می دارد", img:"/assets/announcement/2.jpg"},
        {text:"دانشگاه فنی و حرفه‌ای مقدم دانشجویان نوورود را گرامی می دارد", img:"/assets/announcement/2.jpg"},
        {text:"دانشگاه فنی و حرفه‌ای مقدم دانشجویان نوورود را گرامی می دارد", img:"/assets/announcement/2.jpg"},
    
    ]
    

    return (
        <section className="container-fluid py-2 persian-font">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-12 bg-news d-flex flex-column justify-content-center align-items-center fw-bold">
                    <p className="text-center text-dark-brand-blue p-2 m-0">دستاوردها</p>
                    <hr className="bg-bg-dark-brand-blue text-dark-brand-blue m-0 p-0 w-100 mb-2" />
                    {
                        achriveMent_DATA.map(e => {
                            return (<AchiveMentROW key={GenUniqueKey()} text={e.text} img={e.img} />)
                        })
                    }
                    <hr className="bg-bg-dark-brand-blue text-dark-brand-blue m-0 p-0 w-100 mb-2" />
                    <a href="#" className="text-start d-block text-dark-brand-blue p-1 w-100 text-decoration-none">اطلاعیه</a>
                </div>
                <div className="col-lg-5 col-12 bg-news mx-1">
                    <p className="text-center text-dark-brand-blue p-2 m-0 fw-bold">دستاوردها</p>
                    <hr className="bg-bg-dark-brand-blue text-dark-brand-blue m-0 p-0 w-100 mb-2" />
                    {
                        annoncment_DATA.map(e => {
                            return (<AnnouncementRow key={GenUniqueKey()} text={e.text} img={e.img} />)
                        })
                    }
                    <hr className="bg-bg-dark-brand-blue text-dark-brand-blue m-0 p-0 w-100 mb-2" />
                    <a href="#" className="text-start d-block fw-bold text-dark-brand-blue p-1 w-100 text-decoration-none">اطلاعیه</a>

                </div>
            </div>
        </section>
    )
}


export {
    AchivmentContianer,
}