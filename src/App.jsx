import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/home";
import TermsAndConditions from "./pages/termsAndConditionsPage/TermsAndConditions";
import PrivacyPolicyPage from "./pages/privacyPolicy/privacyPolicyPage";
import RefundPolicyPage from "./pages/refundpage/refundPolicyPage";
import FaqPage from "./pages/FAQpage/FaqPage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";



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
        </Routes>
      </BrowserRouter>
    </div>
  )
}