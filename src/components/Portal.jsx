import { GenUniqueKey } from "./Common"

const PortalHeader = () => {
    return (
        <div className="bg-dark-brand-blue col-lg-10 col-12 my-2">
            <p className="m-0 text-white p-2">پورتال‌ها</p>
        </div>
    )
}

const PortalMain = () => {
    const portals_data = [
        { icon: "folder-symlink", text: "سامانه انتقال و میهمانی دانشجویان" },
        { icon: "ui-checks-grid", text: "سامانه جامع مسابقات فرهنگی" },
        { icon: "person-workspace", text: "سامانه ویدیو کنفرانس" },
        { icon: "briefcase", text: "مناقصه و مزایده" },
        { icon: "person-video3", text: "آموزش‌های عالی آزاد و خاص" },
        { icon: "diagram-3", text: "سامانه آموزش مجازی نهاد رهبری (اساتید)" },
        { icon: "display", text: "سامانه پشتیبانی فناوری اطلاعات" },
        { icon: "boxes", text: "فن‌تیوپ" },
        { icon: "pc", text: "فکس‌سرور" },
        { icon: "droplet", text: "سامانه جامع همای رحمت" },

        { icon: "headset", text: "مرکز مشاوره و سلامت دانشجویی" },
        { icon: "person-video3", text: "سامانه حامیان صندوق رفاه دانشجویان" },
        { icon: "telephone", text: "نظام پذیرش پیشنهادات" },
        { icon: "mortarboard-fill", text: "تازه‌های دانشجویی" },


    ]

    return (
        <div className="col-12 col-lg-10 my-3 bg-light-white-brand-blue">
            <div className="row justify-content-center align-items-center">
                {portals_data.map(e => {
                    const icon = `bi bi-${e.icon} text-white fs-1 mt-1`
                    const text = e.text
                    return (
                        <div className="col-3 col-md-1 mx-4 d-flex flex-column justify-content-center align-items-center my-2">
                            <a href="#" style={{ borderRadius: "50%", width: 70, height: 70 }} className="p-3 bg-dark-brand-blue d-block d-flex flex-column justify-content-center align-items-center">
                                <i class={icon}></i>
                            </a>
                            <p className="m-0 fs-07 text-center my-2">{text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const PortalFooter = () => {
    const universityINFO = [
        { icon: "journal-bookmark", title: "رشته تحصیلی", value: "200" },
        { icon: "boxes", title: "پروژه‌ها", value: "2156" },
        { icon: "building", title: "دانشکده و آموزشکده", value: "181" },
        { icon: "mortarboard", title: "دانشجو", value: "170717" },
        { icon: "person-video3", title: "مدرس", value: "17313" },
        { icon: "mortarboard-fill", title: "دانش آموختگان", value: "382070" },
    ]

    universityINFO.forEach(each => {
        each['icon'] = `<i class="bi bi-${each.icon}"></i>`
        return each
    })

    return (

        <div className="col-12 col-lg-10 my-3 py-5   bg-dark-brand-blue">
            <div className="row justify-content-center align-items-center py-3">

                <div className="col-10 col-sm-6 col-md-2 d-flex flex-column justify-content-center align-items-center">
                    <i class="bi bi-journal-bookmark fs-1 text-white"></i>
                    <p className="m-0 my-1 text-center fs-5 text-white">رشته تحصیلی</p>
                    <p className="m-0 my-1 text-center fs-5 text-white">200</p>
                </div>
                <div className="col-10 col-sm-6 col-md-2 d-flex flex-column justify-content-center align-items-center">
                    <i class="bi bi-boxes fs-1 text-white"></i>
                    <p className="m-0 my-1 text-white text-center fs-5">پروژه‌ها</p>
                    <p className="m-0 my-1 text-center fs-5 text-white">2156</p>
                </div>
                <div className="col-10 col-sm-6 col-md-2 d-flex flex-column justify-content-center align-items-center">
                    <i class="bi bi-building fs-1 text-white"></i>
                    <p className="m-0 my-1 text-center text-white" style={{ fontSize: 16 }}>دانشکده و آموزشکده</p>
                    <p className="m-0 my-1 text-center fs-5 text-white">181</p>
                </div>
                <div className="col-10 col-sm-6 col-md-2 d-flex flex-column justify-content-center align-items-center">
                    <i class="bi bi-mortarboard fs-1 text-white"></i>
                    <p className="m-0 my-1 text-center text-white fs-5">دانشجو</p>
                    <p className="m-0 my-1 text-center fs-5 text-white">170717</p>
                </div>
                <div className="col-10 col-sm-6 col-md-2 d-flex flex-column justify-content-center align-items-center">
                    <i class="bi bi-person-video3 fs-1 text-white"></i>
                    <p className="m-0 my-1 text-center fs-5 text-white">مدرس</p>
                    <p className="m-0 my-1 text-center fs-5 text-white">17313</p>
                </div>
                <div className="col-10 col-sm-6 col-md-2 d-flex flex-column justify-content-center align-items-center">
                    <i class="bi bi-mortarboard-fill fs-1 text-white"></i>
                    <p className="m-0 my-1 text-center fs-5 text-white">دانش آموختگان</p>
                    <p className="m-0 my-1 text-center fs-5 text-white">382070</p>
                </div>

            </div>
        </div>
    )
}

const PortalContainer = () => {
    return (
        <section className="container-fluid py-2 persian-font">
            <div className="row justify-content-center align-items-center">
                <PortalHeader key={GenUniqueKey()} />
                <PortalMain key={GenUniqueKey()} />
                <PortalFooter key={GenUniqueKey()} />
            </div>
        </section>
    )
}


export {
    PortalContainer
}