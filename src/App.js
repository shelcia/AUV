import React, { useState, useEffect } from "react";
import "./styles/style.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/About";
import AchievementsPage from "./components/Achievement";
import Vehicles from "./components/Vehicles/Vehicles";
import Sponsors from "./components/Sponsors";
import Posts from "./components/Posts/Posts";
import Teams from "./components/Teams/Teams";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "react-loader-spinner";
import "animate.css/animate.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Logo from "./assets/new_logo.png";
// import Fullpage, {
//   FullPageSections,
//   FullpageSection,
// } from "@ap.cx/react-fullpage";

const Loading = () => (
  <div className="loading">
    <img src={Logo} alt="logo" />
    <Loader type="MutatingDots" color="#0dc1f7" height={100} width={100} />
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isLoading = null;
    isLoading = setTimeout(() => setLoading(false), 6000);
    return () => clearInterval(isLoading);
  });
  return (
    <React.Fragment>
      {loading && <Loading />}
      {!loading && (
        <React.Fragment>
          <LandingPage />
          {/* <div data-spy="scroll" data-target="#navbar" data-offset="50"> */}
          {/* <div id="fullPage"> */}
          <Navbar />
          <AboutPage />
          <AchievementsPage />
          <Vehicles />
          <Sponsors />
          <Posts />
          <Teams />
          <Contact />
          {/* </div> */}
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     let isLoading = null;
//     isLoading = setTimeout(() => setLoading(false), 500);
//     return () => clearInterval(isLoading);
//   });
//   return (
//     <React.Fragment>
//       {loading && <Loading />}
//       {!loading && (
//         <React.Fragment>
//           <Navbar />
//           <Fullpage>
//             <FullPageSections>
//               <FullpageSection>
//                 <LandingPage />
//               </FullpageSection>
//               <FullpageSection>
//                 <AboutPage />
//               </FullpageSection>
//               <FullpageSection>
//                 <AchievementsPage />
//               </FullpageSection>
//               <FullpageSection>
//                 <Sponsors />
//               </FullpageSection>
//               <FullpageSection>
//                 <Posts />
//               </FullpageSection>
//               <FullpageSection>
//                 <Teams />
//               </FullpageSection>
//               <FullpageSection>
//                 <Contact />
//                 <Footer />
//               </FullpageSection>
//             </FullPageSections>
//           </Fullpage>
//         </React.Fragment>
//       )}
//     </React.Fragment>
//   );
// };
// export default App;

//  "homepage": "http://auv.github.io/AUV",
//    "predeploy": "npm run build",
//"deploy": "gh-pages -d build",
