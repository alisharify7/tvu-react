
function makeFakeSubMenulist(t, s) {
  // t = title
  // s = status of submenus
  const menu = {
    text: t,
    submenu: s,
  };
  if (s === false) {
    menu["submenu"] = [];
    return menu;
  }

  let submenuOptions = [];
  for (let index = 0; index < 7; index++) {
    submenuOptions.push({
      text: `منو ${index}`,
      href: "#",
    });
  }
  menu["submenu"] = submenuOptions;
  return menu;
}

const menuDropDownDataTitles = [
  { t: "واحد های ستادی", s: true },
  { t: "مراکز عملی", s: true },
  { t: "دانشکده ها", s: false },
  { t: "سامانه ها", s: true },
  { t: "پایگاه خبری", s: false },
  { t: "ارتباط با دانشگاه", s: false },
  { t: " دانشگاههای کشور", s: false },
  { t: "مناقضه و مزایده", s: false },
  { t: "ورود کاربر", s: false },
];
const menuDropDownData = [
  {
    text: "درباره دانشگاه",
    submenu: [
      { text: "درباره دانشگاه", href: "/about-us/" },
      { text: "هیئت امنای دانشگاه", href: "#" },
      { text: "هیئت رییسه دانشگاه", href: "#" },
      { text: "اعضای هیئت علمی ", href: "#" },
      { text: "حامیان و خیرین", href: "#" },
      { text: "اعضای هیئت علمی دانشگاه", href: "#" },
      { text: "اهداف و برنامه ها", href: "#" },
      { text: "گالری و تصاویر", href: "#" },
    ],
  },
  ...menuDropDownDataTitles.map((each) => {
    return makeFakeSubMenulist(
      each.t,
      each.s
    );
  }),
];


function fetch_menuDropDownData(){
    /**
     * this method is calling an api endpoint for getting the dropdown data
     * it could be fetch or Axios
     */
    return menuDropDownData
}

console.log('====================================');
console.log(fetch_menuDropDownData());
console.log('====================================');
export {
    fetch_menuDropDownData
}