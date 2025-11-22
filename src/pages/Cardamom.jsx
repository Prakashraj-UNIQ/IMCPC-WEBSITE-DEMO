import React from 'react'
import ContactUs from '../components/ContactUs1.jsx'
import GradesQuality from '../components/GradesQuality.jsx'
import GradingProcess from '../components/GradingProcess.jsx'
import StorageHandlingStandards from'../components/StorageHandlingStandards.jsx'
import MarketRates from '../components/MarketRates.jsx'
import Banner from '../components/Banner.jsx'


export default function Cardamom () {
  return (
    
    <div>
      <Banner 
        eyebrowText="Idukki Mass Cardamom Producer Company"
        title={
          <>
            Grades & Quality: <br />
            <span className="text-emerald-400">The Heart of Our Business</span>
          </>
        }
        description="IMCPC follows strict grading norms based on colour, size, purity, and moisture content to ensure every pod meets global standards."
        // You can omit badgeIcon, it will default to Award
/>
   <GradesQuality/>
   <MarketRates/>
   <GradingProcess/>
   <StorageHandlingStandards/>
   <ContactUs/> 
   
    </div>
  )
}
