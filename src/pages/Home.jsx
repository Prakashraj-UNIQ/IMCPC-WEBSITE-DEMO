import React from 'react'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer1.jsx'
import WhoWeAre from "../components/WhoWeAre";
import FeatureProduct from "../components/FeatureProduct.jsx"
import OurProcess from '../components/OurProcess.jsx';
import SpiceAppOverview from '../components/SpiceAppOverview.jsx';
import Membership from '../components/Membership.jsx';
import PrivacyPolicy from '../components/PrivacyPolicy';
import ContactUs from '../components/ContactUs1.jsx';


export default function Home() {
  return (
    <div>
      <Header />
      <WhoWeAre />
      <FeatureProduct />
      <OurProcess />
      <SpiceAppOverview />
      <ContactUs/>
      
      {/* <Membership/> */}
    </div>
  )
}
