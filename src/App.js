import Container from "./Components/Container";
import Header from "./Components/Header";
import SideBar from "./Components/SiderBar";
import AffiliatesContainer from "./Components/AffiliatesPage/AffiliatesContainer";
import "./styles.css";
import Home from "./pages/Home";
import Affiliates from "./pages/Affiliates";
import Plant from "./pages/Plant";
import Assets from "./pages/Assets";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import { CommonProvider } from "./context/common";


const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='/affiliates' element={<Affiliates />} />
      <Route path='/plant' element={<Plant />} />
      <Route path='/assets' element={<Assets />} />
    </Routes>
  )
}

export default function App() {
  return (
    <>
      <CommonProvider>
        <div id="outer-container">
          <Header />
          <div class="header-border"></div>
          <SideBar />
          <div id="container">
            <div id="content">
              <Router />
            </div>
          </div>
        </div>
        <Footer />
      </CommonProvider>
    </>
  );
}


 // <Container variant="outer-container">
    //   <Router />
    //   <Header />
    //   <SideBar />
    //   <AffiliatesContainer />
    // </Container>
