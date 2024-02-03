import Header from "./components/header";
import "../src/styles/apps.scss";
import "../src/styles/header.scss";
import "../src/styles/banner.scss";
import "../src/styles/main.scss";
import "../src/styles/content3.scss";
import "../src/styles/footer.scss";
import "../src/styles/phonesilder.scss";
import "../src/styles/document.scss";
import "../src/styles/mediaquery.scss";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./components/main";
import Footer from "./components/footer";
import Slider from "./components/slider";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    // <div className="App">
    //   <Header/>

    // </div>

    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

      <div class="gradient">
        <Main />
        <Slider />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
