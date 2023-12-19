import React from 'react'
import Slider from 'react-slick';
import '../../../assets/css/social.css';
import '../../../assets/css/park_gallery.css';
import '../../../assets/css/client_slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFetch from "react-fetch-hook";

export default function Client_slider() {

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
                  centerMode: true,
                  centerPadding: '80px',
                  adaptiveHeight: true,
                  infinite: true
                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                centerMode: false,
                centerPadding: '0px',
                adaptiveHeight: false,
                infinite: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0px',
                adaptiveHeight: false,
                infinite: true
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

    const { isLoading, data, error } = useFetch(
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories"
    );


    return (
        <>
            <div className='customis_sec client_Slider' id='social'>
                <div className='row no_LR_margin'>
                    <div className='col-12 no_padding'>
                        <div className="animate_txt ">
                            <h2 ref={social_hd} id='social_hd' className='section_sub_heading ovrview_sub_hd customise_hd'>Driving Business Excellence</h2>
                        </div>
                        <p className='sub_para ovrview_subpara customise_para p_opacity clnt_sldr_desc' ref={social_para1} id='social_para1'>Strategic implementation of Horizon's top-tier industrial and logistics real estate solutions.</p>
                    </div>
                </div>

                <div className='row no_LR_margin'>
                    <div className='col-12 no_padding p_opacity' ref={social_para2} id='social_para2'>
                        <Slider {...custm_slider} className=' custm_main_slider social_main_slider'>


                        {data && data.map(({ id , acf , title , content , slug}) => (
                            <div className='custm_outer_sld' key={id}>
                                <div className='custm_inner'>

                                    <div className='content_div'>
                                        <img src={acf.client_stories_image} className='client_img'></img>
                                        <div className='content_div_inner'>
                                            <p className='sldr_hd' dangerouslySetInnerHTML={{ __html: title.rendered }}></p>
                                            <div className='hidn_dv'>
                                                <p className='csm_para' dangerouslySetInnerHTML={{ __html: acf.small_description }}></p>
                                                <a href={'/case-studies/'+ slug}>Read More</a>
                                            </div>
                                        </div>
                                        <div class="clnt_ovrlay_box"></div>
                                    </div>
                                   
                                </div>
                            </div>
                        ))}    

                            {/* <div className='custm_outer_sld'>
                                <div className='custm_inner'>
                                    <div className='content_div'>
                                        <div className='content_div_inner'>
                                            <p>Design is the Mix of emotions</p>
                                            <div className='hidn_dv'>
                                                <p className='csm_para '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique posuere eros,
                                                vitae tristique quam scelerisque at.</p>
                                                <a href='#'>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>
                                    <div className='content_div'>
                                        <div className='content_div_inner'>
                                            <p>Design is the Mix of emotions</p>
                                            <div className='hidn_dv'>
                                                <p className='csm_para '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique posuere eros,
                                                vitae tristique quam scelerisque at.</p>
                                                <a href='#'>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div> */}

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
