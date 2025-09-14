import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import Articles from "./pages/Articles";
import CXO from "./pages/CXO";
import About from "./pages/About";
import Team from "./pages/Team";
import GenAI from "./pages/GenAI";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Article from "./components/Article/Article";
import Article2 from "./components/Article/Article2";
import Article3 from "./components/Article/Article3";
import Article4 from "./components/Article/Article4";
import Article5 from "./components/Article/Article5";
import Article6 from "./components/Article/Article6";
import Article7 from "./components/Article/Article7";
import Article8 from "./components/Article/Article8";
import Article9 from "./components/Article/Article9";
import Speakers from "./pages/Speakers";
import Enterprise1 from "./components/Enterprise1";
import EnterpriseSignals from "./pages/EnterpriseSignals";
import Enterprise2 from "./components/Enterprise2";
import Enterprise3 from "./components/Enterprise3";
import Enterprise4 from "./components/Enterprise4";
import Enterprise5 from "./components/Enterprise5";
import Function from "./pages/Function";
import Contact from "./pages/Contact";
import WeeklyDigest from "./pages/WeeklyDigest";
import BIS from "./pages/BIS";
import Customs from "./pages/Customs";
import Fintech from "./pages/Fintech";
import Article10 from "./components/Article/Article10";
import Article11 from "./components/Article/Article11";
import Article12 from "./components/Article/Article12";
import CXO4 from "./components/CXO4";
import Enterprise6 from "./components/Enterprise6";
import Enterprise7 from "./components/Enterprise7";
import Enterprise8 from "./components/Enterprise8";
import Enterprise9 from "./components/Enterprise9";
import Enterprise10 from "./components/Enterprise10";
import Enterprise11 from "./components/Enterprise11";
import Enterprise12 from "./components/Enterprise12";
import Article13 from "./components/Article/Article13";
import Article14 from "./components/Article/Article14";
import Article15 from "./components/Article/Article15";
import Article16 from "./components/Article/Article16";

import Article17 from "./components/Article/Article17";
// import Article18 from "./components/Article/Article18";
import Article19 from "./components/Article/Article19";

const App = () => {
  useEffect(() => {
    const handleRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleRightClick);
    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);
  return (
    <>
      <Header className="fixed top-0 left-0 right-0 z-50" />

      <main className="mx-auto">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/cxos" element={<CXO />} />
          <Route path="/function" element={<Function />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/gen-ai-policy" element={<GenAI />} />
          <Route path="/about/privacy-policy" element={<Privacy />} />
          <Route path="/about/terms-of-use" element={<Terms />} />
          <Route path="/about/contact" element={<Contact />} />

          {/* Article Pages */}
          <Route path="/articles/article/1" element={<Article />} />
          <Route path="/articles/article/2" element={<Article2 />} />
          <Route path="/articles/article/3" element={<Article3 />} />
          <Route path="/articles/article/4" element={<Article4 />} />
          <Route path="/articles/article/5" element={<Article5 />} />
          <Route path="/articles/article/6" element={<Article6 />} />
          <Route path="/articles/article/7" element={<Article7 />} />
          <Route path="/articles/article/8" element={<Article8 />} />
          <Route path="/articles/article/9" element={<Article9 />} />
          <Route path="/cxo/4" element={<CXO4 />} />
          <Route path="/articles/article/10" element={<Article10 />} />
          <Route path="/articles/article/11" element={<Article11 />} />
          <Route path="/articles/article/12" element={<Article12 />} />
          <Route path="/articles/article/13" element={<Article13 />} />
          <Route path="/articles/article/14" element={<Article14 />} />
          <Route path="/articles/article/15" element={<Article15 />} />
          <Route path="/articles/article/16" element={<Article16 />} />

          <Route path="/articles/article/17" element={<Article17 />} />
          {/* <Route path="/articles/article/18" element={<Article18 />} /> */}
          <Route path="/articles/article/19" element={<Article19 />} />
          <Route path="/experts" element={<Speakers />} />
          <Route path="/weekly-digest" element={<WeeklyDigest />} />
          <Route path="/weekly/bis" element={<BIS />} />
          <Route path="/weekly/customs" element={<Customs />} />
          <Route path="/weekly/fintech" element={<Fintech />} />

          {/* Enterprise Signals */}
          <Route path="/news-&-analysis" element={<EnterpriseSignals />} />
          <Route
            path="/enterprise-signals/enterprise/1"
            element={<Enterprise1 />}
          />
          <Route
            path="/enterprise-signals/enterprise/2"
            element={<Enterprise2 />}
          />
          <Route
            path="/enterprise-signals/enterprise/3"
            element={<Enterprise3 />}
          />
          <Route
            path="/enterprise-signals/enterprise/4"
            element={<Enterprise4 />}
          />
          <Route
            path="/enterprise-signals/enterprise/5"
            element={<Enterprise5 />}
          />
          <Route
            path="/enterprise-signals/enterprise/6"
            element={<Enterprise6 />}
          />
          <Route
            path="/enterprise-signals/enterprise/7"
            element={<Enterprise7 />}
          />
          <Route
            path="/enterprise-signals/enterprise/8"
            element={<Enterprise8 />}
          />
          <Route
            path="/enterprise-signals/enterprise/9"
            element={<Enterprise9 />}
          />
          <Route
            path="/enterprise-signals/enterprise/10"
            element={<Enterprise10 />}
          />
           <Route
            path="/enterprise-signals/enterprise/11"
            element={<Enterprise11 />}
          />
          <Route
            path="/enterprise-signals/enterprise/12"
            element={<Enterprise12 />}
          />
        </Routes>
      </main>

      <Footer className="fixed bottom-0 left-0 right-0 z-50" />
    </>
  );
};

export default App;
