import React from 'react'

import Header from '../components/global/header';
import Esg_spotlight from '../components/spotlight/esg_spotlight';
import Esg_overview from '../components/sections/esg_ovrview';
import Esg_env from '../components/sections/esg_env';
import Governance from '../components/sections/governance';
import Report from '../components/sections/report';
import Social from '../components/sections/social';
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";
import Helmet from 'react-helmet';

export default function Esg_page() {

  let body = useRef(null);
  var tl_1 = gsap.timeline()
 
  useEffect(() => {

    tl_1.to(body,{
      opacity: "1",
      pointerEvents: "auto",
      ease: Power4.easeInOut,
      delay: 1.2
    });
    return () => {
      tl_1.to(body, {
        opacity: "0",
        pointerEvents: 'none'
      });
    }

  })

  return (
    <>
      <Transition/>
      <div className='sustainability_page'>
        <Helmet>
            <title>Complied Grade A industrial park which meets your sustainability goals</title>
            <meta name="description" content="Our Industrial Parks are environmentally sustainable and ensure that our operations have minimal impact on the environment and reduce carbon emissions." />
        </Helmet>
        <div ref={(el) => (body = el)} className="Headd">
          
            <Header />
            <Esg_spotlight />
            <Esg_overview />
            <Esg_env />
            <Social />
            <Governance />
            <Report /> 
            <Footer />

        </div>
      </div>
    </>
  )
}
