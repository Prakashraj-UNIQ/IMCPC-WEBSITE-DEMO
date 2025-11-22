

import OurJourney from "../components/OurJourney"
import VisionMission from "../components/VisionMission"
import WhatWeDo from "../components/WhatWeDo"
import ContactUs from '../components/ContactUs1.jsx'
import Banner from '../components/Banner.jsx'

export default function AboutUs() {
  return (
    <div>
      <Banner 
        eyebrowText="Idukki Mass Cardamom Producer Company"
        title={
          <>
            About US: <br />
            <span className="text-emerald-400">The Heart of Our Business</span>
          </>
        }
        description="IMCPC  is a producer-owned organisation registered under the Companies Act as a Farmer Producer Company.
                    Our mission is to empower small and marginal cardamom farmers of Idukki by providing a stable and transparent marketplace, scientific grading standards, and assured value for their produce."
        // You can omit badgeIcon, it will default to Award
/>
  
    <WhatWeDo/>
    <VisionMission/>
    <OurJourney/>
    <ContactUs/>
    </div>
  )
}
