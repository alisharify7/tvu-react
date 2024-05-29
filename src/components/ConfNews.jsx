import { GenUniqueKey, ImageSliders } from "./Common"

const ConfNewsSection = () => {
    const conf_data = [
        { img: '/assets/conferences/1.jpg' },
        { img: '/assets/conferences/2.webp' },
        { img: '/assets/conferences/3.webp' },
    ]

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


    return (
        <section className="container-fluid py-2 persian-font bg-news my-2">
            <div className="row justify-content-center align-items-center">

                <div className="col-lg-3 mx-1 col-12 bg-white">
                    <p className="m-0 text-dark-brand-blue p-2 fw-bolder">کنفرانس‌ها و همایش‌ها</p>
                    <hr className="bg-bg-dark-brand-blue text-dark-brand-blue m-0 p-0 w-100 mb-3" />

                    <ImageSliders key={GenUniqueKey()} images={conf_data.map(e => e.img)} />

                    <hr className="bg-bg-dark-brand-blue text-dark-brand-blue m-0 p-0 w-100 my-2" />
                    <div className="d-flex justify-content-center align-items-center pb-2 ps-2 ">
                        <a href="#" className="text-normal-brand-blue text-decoration-none me-auto fs-09">آرشیو</a>
                    </div>

                </div>
                <div className="col-lg-3 mx-1 col-12 bg-white my-3 my-lg-auto ">
                    <p className="m-0 text-dark-brand-blue p-2 fw-bolder">پرمخاطب‌ترین اخبار</p>
                    <hr className="bg-bg-dark-brand-blue text-dark-brand-blue m-0 p-0 w-100 mb-3" />
                    <ul className="list-unstyled m-0 p-0">
                        {news_link.map(each => {
                            return (<a className="text-decoration-none text-muted fs-09 m-2 my-3 px-4 d-block" href="#">◼ {each}</a>)
                        })}
                    </ul>

                    <hr className="bg-bg-dark-brand-blue text-dark-brand-blue m-0 p-0 w-100 my-2" />
                    <div className="d-flex justify-content-center align-items-center pb-2 ps-2 ">
                        <a href="#" className="text-normal-brand-blue text-decoration-none me-auto fs-09">آرشیو</a>
                    </div>

                </div>

                <div className=" my-3 my-lg-auto col-lg-3 mx-1 col-12 d-flex justify-content-center align-items-center">
                    <a href="#" className="d-flex justify-content-center align-items-center d-block" style={{width:"100%", height:580}}>
                        <img  src="/assets/estelam.jpg" className="img-fluid" style={{height:"100%"}} alt="estelam img"/>
                    </a>
                </div>

            </div>
        </section>

    )
}


export { ConfNewsSection }