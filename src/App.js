import React from "react";
import { TopHeader } from "./components/Header";
import { MainIndex } from "./components/Index";
import { GenUniqueKey } from "./components/Common";
import { OrgSliders } from "./components/Organisation";
import { NewsSection } from "./components/News";
import { AchivmentContianer } from "./components/Achivment";
import { ConfNewsSection } from "./components/ConfNews";
import { PortalContainer } from "./components/Portal"
import { FooterContainer } from "./components/Footer";

// bundle font css in main script
import "vazirmatn/Vazirmatn-font-face.css";

const App = () => {
  /**
   * main index component
   */
  return (
    <>
      <TopHeader key={GenUniqueKey()} />
      <MainIndex key={GenUniqueKey()} />
      <OrgSliders key={GenUniqueKey()} />
      <NewsSection key={GenUniqueKey()} />
      <AchivmentContianer key={GenUniqueKey()} />
      <ConfNewsSection key={GenUniqueKey()} />
      <PortalContainer  key={GenUniqueKey()} />
      <FooterContainer key={GenUniqueKey()} />
    
    </>
  );
};
export default App;

// export {
//     AppClass
// }
