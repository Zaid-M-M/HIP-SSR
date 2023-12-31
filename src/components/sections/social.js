import React from 'react'
import Slider from 'react-slick';
import '../../assets/css/social.css';
import '../../assets/css/park_gallery.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Social() {

    const custm_slider = {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        centerMode: true,
        centerPadding: '140px',
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                  centerMode: true,
                  centerPadding: '50px',
                  adaptiveHeight: true
                }
            },
            {
                breakpoint: 835,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                  centerMode: false,
                  centerPadding: '140px',
                  adaptiveHeight: true,
                  infinite: false
                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                centerMode: false,
                centerPadding: '0px',
                adaptiveHeight: true,
                infinite: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: '0px',
                adaptiveHeight: true,
                infinite: false
              }
            }
        ]
    };


    // gloabl line GSAP
    gsap.registerPlugin(ScrollTrigger); 

    // Heading text animation variable
    const social_hd = useRef(null);
    
    // Para animation variable
    const social_para1 = useRef(null);
    const social_para2 = useRef(null);

    // border animation variable
    const agileBorder_aniamtion = useRef(null);

    useEffect(() => {

        // Heading text animation code
        gsap.to("#social_hd", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#social_hd",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#social_para1", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#social_para1",
                markers: false
            }
        });
        // Para animation code
        gsap.to("#social_para2", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#social_para2",
                markers: false
            }
        });

    }, []);


    return (
        <>
            <div className='customis_sec' id='social'>
                <div className='row no_LR_margin'>
                    <div className='col-12'>
                        <div className="animate_txt ">
                            <h2 ref={social_hd} id='social_hd' className='section_sub_heading ovrview_sub_hd customise_hd scl_bdr'>SOCIAL</h2>
                        </div>
                        <p className='sub_para ovrview_subpara customise_para p_opacity' ref={social_para1} id='social_para1'>At Horizon, we believe that real progress happens when everyone benefits. We are committed to inclusive <br></br> growth by providing opportunities within our ecosystem for differently abled individuals.</p>
                    </div>
                </div>

                <div className='row no_LR_margin'>
                    <div className='col-12 no_padding p_opacity' ref={social_para2} id='social_para2'>
                        <Slider {...custm_slider} className=' custm_main_slider social_main_slider'>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>

                                    <div className='content_div'>
                                        <div>
                                            <p>Inclusion {'&'} Diversity</p>
                                            <p className='csm_para'>Our inclusion and diversity policy mandates that we assimilate 2% of differently-abled employees in our property management team.</p>
                                            
                                        </div>
                                    </div>
                                    <div className='img_div'>
                                        <img src={require('../../assets/img/Diversity_inclusion.jpg')}></img>
                                    </div>
                                </div>
                            </div>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>
                                    <div className='content_div'>
                                        <div>
                                            <p>Employee Training</p>
                                            <p className='csm_para'>We engage in special training sessions for employees:</p>
                                            
                                            <ul className='soc_li'>
                                                <li>To sensitise them on inclusion and diversity</li>
                                                <li>Create awareness around sustainability </li>
                                                <li>Define leadership KRAs around specific ESG-related action points</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='img_div'>
                                        <img src={require('../../assets/img/Employee_Training.jpg')}></img>
                                    </div>
                                </div>
                            </div>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>
                                    <div className='content_div'>
                                        <div>
                                            <p>Community actions</p>
                                            <p className='csm_para'>We contribute actively to the social, economic and environmental development of the communities in which we operate.</p>
                                            <ul className='soc_li'>
                                                <li>Our focus areas include support to schools, vocational training programmes and health facilities</li>
                                                <li>We organise health check-up camps, conduct fire-safety drills and organise training and awareness sessions at our parks </li>
                                               
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    <div className='img_div'>
                                        <img src={require('../../assets/img/CSR_community.jpg')}></img>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
