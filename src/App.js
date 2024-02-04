import React from "react"
import Section from './components/Section'
import Nav from "./components/Nav"

export default function App() {
  // const [darkNav, setDarkNav] = React.useState(true)
  return (
    <>
      <Nav />
      <Section
        // nav={darkNav}
        title="Model Y"
        itemTextLight
        description="Lease starting at $379/mo*"
        video="model-y.mp4"
        leftBtnText="Custom Drive"
        rightBtnText="Demo Drive"
        footerText={`*Excludes taxes and fees with price subject to change. Available in select states.`}
        linkText="See Details"
        footerTextLight
      />
      <Section
        title="Model 3"
        description="Lease starting at $329/mo*"
        backgroundImg="model-3.jpg"
        mobileImg="model-3.jpg"
        leftBtnText="Custom Drive"
        rightBtnText="Demo Drive"
        footerText={`*Excludes taxes and fees with price subject to change. Available in select states.`}
        linkText="See Details"
      />
      <Section
        title="Model X"
        description="From $68,590*"
        moreInfo="After Federal Tax Credit & Est. Gas Savings"
        backgroundImg="model-x.jpg"
        mobileImg="model-x-mobile.jpg"
        leftBtnText="Custom Drive"
        rightBtnText="Demo Drive"
        footerText={`*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change.`}
        linkText="Learn about est. gas savings."
        footerTextLight
      />
      <Section
        title="Model S"
        description="From $71,090*"
        moreInfo="After Est. Gas Savings"
        backgroundImg="model-s.jpg"
        mobileImg="model-s-mobile.jpg"
        leftBtnText="Custom Drive"
        rightBtnText="Demo Drive"
        footerText={`*Price before savings is $74,990, excluding taxes and fees. Subject to change.`}
        linkText="Learn about est. gas savings."
      />
      <Section
        backgroundImg="cybertruck.jpg"
        mobileImg="cybertruck-mobile.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Experience Tesla"
        itemTextLight
        description="Schedule a Demo Drive Today"
        video="demoDrive.webm"
        leftBtnText="Custom Drive"
      />
      <Section
        title="Solar Panels"
        headerTextLight
        moreInfoLink="Schedule a Virtual Consultation"
        backgroundImg="solarPanels.jpg"
        mobileImg="solarPanels.jpg"
        leftBtnText="Custom Drive"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Solar Roof"
        moreInfo="Produce Clean Energy From Your Roof"
        backgroundImg="solarRoof.jpg"
        mobileImg="solarRoof-mobile.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Powerwall"
        backgroundImg="powerwall.jpg"
        mobileImg="powerwall-mobile.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        mobileImg="accessories-mobile.jpg"
        leftBtnText="Shop Now"
      />
    </>
  )
}