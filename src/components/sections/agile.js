import React from 'react'
import '../../assets/css/agile.css'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";

export default function Agile() {


    // gloabl line GSAP
    gsap.registerPlugin(ScrollTrigger); 

    // Heading text animation variable
    const txt_animate = useRef(null);

    // Image animation variable
    const img_animation = useRef(null);
    
    // Para animation variable
    const para_aniamtion = useRef(null);

    // border animation variable
    const agileBorder_aniamtion = useRef(null);

    // video tag play code
    const videoEl = useRef(null);
    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
    };

    const videoEl1 = useRef(null);
    const attemptPlay1 = () => {
      videoEl1 &&
      videoEl1.current &&
      videoEl1.current.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
    };
    
  
    useEffect(() => {
    
        // Heading text animation code
        gsap.to("#txt_animate", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate",
                markers: false
            }
        });

        // Image animation code
        gsap.to("#img_animation", {
            xPercent:100,
            duration: 1,
            ease: "linear",
            delay: 0.8,
            scrollTrigger: {
                trigger: "#img_animation",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#para_aniamtion", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#para_aniamtion",
                markers: false
            }
        });

        // border animation code
        gsap.to("#agileBorder_aniamtion", {
            opacity:1,
            duration: .5,
            ease: "linear",
            delay: 0.5,
            width: "100%",
            scrollTrigger: {
                trigger: "#agileBorder_aniamtion",
                markers: false
            }
        });

      attemptPlay();
      attemptPlay1();
    }, []);

    return (
        <>

<div className='agile_sec snap_sec mob_pd_LR tab_pd_LR' >
                <div className='cstm_container'>

                    <div className='row'>
                        <div className='col-12'>
                            <p className='section_name p_opacity' ref={para_aniamtion} id='para_aniamtion'>Growth journeys start with agile partnerships</p>
                            <hr className='add_border p_opacity' ref={agileBorder_aniamtion} id='agileBorder_aniamtion'/>
                        </div>
                    </div>

                    <div className='row agile_row'>
                        <div className='col-lg-6 col-md-12 col-12'>
                            <div className="animate_txt ">
                                <h2 ref={txt_animate} className='section_heading' id='txt_animate'>AGILE. </h2>
                            </div>
                            <div className="animate_txt section_heading">
                                <h2 ref={txt_animate} className='section_heading' id='txt_animate'>FOR Your Growth. </h2>
                            </div>
                            {/* <h2 className='section_heading'>AGILE. <br /> FOR Your Growth</h2> */}
                        </div>
                        <div className='col-lg-6 col-md-12 col-12'>
                            <p className='sub_para p_opacity' ref={para_aniamtion} id='para_aniamtion'>Horizon Industrial Parks provides best-in-class solutions for India's industrial and warehousing needs with speed and precision.</p>
                        </div>
                    </div>

                    <div className='row col_row_2'>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <h2 className='agile_col_title p_opacity' ref={para_aniamtion} id='para_aniamtion'>Best-in-class <br /> solutions</h2>

                            <div className='reveal_img'>
                                <div className='reveal_img_dv' ref={img_animation} id='img_animation'></div>
                                {/* <img className='agile_img' src={require('../../assets/img/agile_img2.jpg')} ></img> */}

                                <video id='agile_video' className='agile_img gloabl_video' controls playsInline loop muted src={require('../../assets/video/Horizon_Industrial_Parks_Brand_Manifesto1.mp4')} ref={videoEl} />

                            </div>
                            
                            <p className='para para_pd no_mg_top p_opacity' ref={para_aniamtion} id='para_aniamtion' >As one of the largest developers and managers of Grade A industrial and logistics parks in the country, we leverage our team’s vast experience in this sector and our pan India presence to provide right-fit solutions for our customers in an agile manner.</p>

                            <a href='/explore' className='arrow_btn btn_spc p_opacity desktop_btn' ref={para_aniamtion} id='para_aniamtion'>Explore Horizon</a>

                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <h2 className='agile_col_title p_opacity' ref={para_aniamtion} id='para_aniamtion'>Global <br />Experience</h2>
                            
                            <div className='reveal_img'>
                                <div className='reveal_img_dv' ref={img_animation} id='img_animation'></div>
                                {/* <img className='agile_img agile_new_img' src={require('../../assets/img/agile_img1.jpg')} ></img> */}
                                <video className='agile_img gloabl_video' playsInline loop muted src={require('../../assets/video/global_experience.mp4')} ref={videoEl1} /> 
                        
                            </div>
                            
                            <p className='para para_pd  no_mg_top p_opacity' ref={para_aniamtion} id='para_aniamtion'>Backed by Blackstone’s global experience in logistics management and operating expertise, Horizon Industrial Parks is a full-service platform of distinguished assets in India's prime urban centres and Tier 2 markets. We are committed to delivering a positive Environmental, Social and Governance (ESG) impact. </p>

                            <a href='/explore' className='arrow_btn btn_spc p_opacity mobile_btn' ref={para_aniamtion} id='para_aniamtion'>Explore Horizon</a>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
