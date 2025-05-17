import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/home";
import TermsAndConditions from "./pages/termsAndConditionsPage/TermsAndConditions";
import PrivacyPolicyPage from "./pages/privacyPolicy/privacyPolicyPage";
import RefundPolicyPage from "./pages/refundpage/refundPolicyPage";
import FaqPage from "./pages/FAQpage/FaqPage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import BlogsAndVlogsPage from "./pages/blogsAndVlogs/BlogsAndVlogsPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ServicePage from "./pages/Services/ServicePage";
import AboutPage from "./pages/aboutPage/aboutPage";



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/termsAndConditions" element={<TermsAndConditions/>}/>
          <Route path="/privacyPolicy" element={<PrivacyPolicyPage/>}/>
          <Route path="/refundPolicy" element={<RefundPolicyPage/>}/>
          <Route path="/faq" element={<FaqPage/>}/>
          <Route path="/contactUs" element={<ContactUsPage/>}/>
          <Route path="/blogsAndVlogs" element={<BlogsAndVlogsPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/services" element={<ServicePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}