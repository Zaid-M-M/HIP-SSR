import React from 'react'
import Slider from 'react-slick';
import '../../assets/css/park_gallery.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

import $ from "jquery";
import { useEffect } from 'react';
// import Vimeo from '@u-wave/react-vimeo';
export default function Park_gallery() {

    let { slug } = useParams(); 
    const { isLoading, data, error } = useFetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?slug=${slug}`
    );


    const park_photo = {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        centerMode: true,
        centerPadding: '40px',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px'
                }
            }
        ]
    };

    const park_lightbox_photo = {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500
    };

    useEffect(() => {

        $('.siteplan_btn').on("click", function() {

            $('.siteplan_light_box').addClass('open_light_box');
            $('.lightbox_overlay').addClass('overlay_open');
            $('body').css('overflow','hidden');
            $('html, body').animate({
                scrollTop: $(".park_gallery_sec").offset().top
             }, 100);
        });
        $('.photo_btn').on("click", function() {

            $('.photo_light_box').addClass('open_light_box');
            $('.lightbox_overlay').addClass('overlay_open');
            $('body').css('overflow','hidden');
            $('html, body').animate({
                scrollTop: $(".park_gallery_sec").offset().top
             }, 100);
        });

        $('.close_btn').on("click", function() {
            $('.park_lightbox').removeClass('open_light_box');
            $('.lightbox_overlay').removeClass('overlay_open');
            $('body').css('overflow','visible');
        });

        // $('.prk_gallery_tabs li a').on("click", function() {
        //     console.log('working video');
        //     var player = document.getElementById("vimeoWrap");
        //     var data = { method: "pause" };
        //     player.contentWindow.postMessage(JSON.stringify(data), "*");
        // });


    
     

        var pathname = window.location.pathname;
        console.log(pathname);

        if(pathname === '/parks/dobbaspet-ii'){
            $('.video_tabs_li').hide();
        }
        else if(pathname === '/parks/delhi-ii'){
            $('.video_tabs_li').hide();
        }
        else if(pathname === '/parks/bhayala'){
            $('.video_tabs_li').hide();
            $('.photo_tabs_li').hide();
        }
        else if(pathname === '/parks/verna'){
            $('.video_tabs_li').hide();
        }
        // else if(pathname === '/parks/patancheru'){
        //     $('.site_tabs_li').hide();
        // }
        else {
            $('.site_tabs_li').show();
            $('.photo_tabs_li').show();
            $('.video_tabs_li').show();
        }
        
    })

  return (
    <>
        {data && data.map(({ id, title , acf , content }) => (
        <div className='park_gallery_sec snap_sec' key={id}>
            <div className='lightbox_overlay'></div>
            <div className=''>
                <div className='row prk_hd_row no_LR_margin'>
                    <div className='col-12'>
                        <p className='section_heading prk_glry_ttl'>Park Gallery</p>
                    </div>
                </div>
                <div className='row prk_tab_content_row no_LR_margin'>
                    <div className='col-lg-3 col-md-6 col-12'>
                        
                        {/* Tab Nav */}
                        <ul className="nav nav-pills prk_gallery_tabs" role="tablist">

                            <li className="nav-item site_tabs_li">
                                <a className="nav-link active" data-bs-toggle="pill" href="#siteplan">Site plan</a>
                            </li>
                            <li className="nav-item photo_tabs_li">
                                <a className="nav-link " data-bs-toggle="pill" href="#photos">Photos</a>
                            </li>
                            <li className="nav-item video_tabs_li">
                                <a className="nav-link" data-bs-toggle="pill" href="#video">videos</a>
                            </li>
                        </ul>

                    </div>

                    <div className='col-lg-9 col-md-12 col-12 no_right_padding park_grly_col2'>

                            {/*  Tab panes  */}
                            <div className="tab-content">

                                {/* Siteplan  */}
                                <div id="siteplan" className="tab-pane  active">
                                    
                                    {/* <div className='row'>

                                        {acf.site_plan.map(siteplan_photo => (    
                                            <div className='col-lg-6 col-lg-6 col-12 siteplan_img_col' key={id}>
                                                <img className='sitepln_img' src={siteplan_photo}></img>
                                            </div>
                                        ))}
                                        
                                    </div> */}

                                    <Slider {...park_photo} className='park_photo_slider'>
                                        
                                        {/* item */}

                                        {acf.site_plan.map(siteplan_photo => (    
                                            <div className='prk_p_slide' key={id}>
                                                <div className='prk_photo_content'>
                                                    <img src={siteplan_photo}></img>
                                                </div>
                                            </div>
                                        ))}

                                    </Slider>
                                    {/* Siteplan lightbox START*/}
                                    <div className='lightbox_btn siteplan_btn'>
                                        <img src={require('../../assets/img/svg/lightbox_icon.svg').default}></img>
                                    </div>
                                    {/* Siteplan lightbox END*/}

                                </div>

                                {/* Photo */}
                                <div id="photos" className="tab-pane fade">

                                    <Slider {...park_photo} className='park_photo_slider'>
                                        
                                        {/* item */}

                                        {acf.photo.map(sngl_photo => (    
                                            <div className='prk_p_slide' key={id}>
                                                <div className='prk_photo_content'>
                                                    <img src={sngl_photo}></img>
                                                </div>
                                            </div>
                                        ))}

                                    </Slider>

                                    {/* Photo lightbox START*/}
                                    <div className='lightbox_btn photo_btn'>
                                        <img src={require('../../assets/img/svg/lightbox_icon.svg').default}></img>
                                    </div>
                                    {/* Photo lightbox END*/}

                                </div>
                                
                                {/* Video */}
                                <div id="video" className="tab-pane fade">

                                    <Slider {...park_photo} className='park_photo_slider'>
                                        
                                        {/* item */}

                                        {acf.video_vimeo_link.map((sub)=>

                                            <div className='prk_p_slide' key={id}>
                                                <div className='prk_photo_content'>
                                                    <iframe id='vimeoWrap' className="vm-vid" src={sub.park_video} allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                                                </div>
                                            </div>

                                        )}




                                    </Slider>

                                </div>
                            </div>    

                    </div>
                </div>
            </div> 

            {/* Siteplan Lightbox Start*/} 
            <div className='park_lightbox siteplan_light_box'>

                <div className='inner_light_box siteplan_inner'>
                    <img className='close_btn' src={require('../../assets/img/svg/close_icon_wht.svg').default}></img>

                    <Slider {...park_lightbox_photo} className='park_lightbox_photo'>

                        {acf.site_plan.map(siteplan_photo => (    
                            <div className='lb_prk_sld prk_siteplan_sld' key={id}>
                                <div className='lb_prk_sld_content siteplan_img_div prk_siteplan_img_div'>
                                    <img src={siteplan_photo}></img>
                                </div>
                            </div>
                        ))}

                    </Slider>
                </div>
            </div>   
            {/* Siteplan Lightbox End*/}    
            
                                            
            {/* Photo Lightbox Start*/} 
            <div className='park_lightbox photo_light_box'>

                <div className='inner_light_box'>
                    <img className='close_btn' src={require('../../assets/img/svg/close_icon_wht.svg').default}></img>

                    <Slider {...park_lightbox_photo} className='park_lightbox_photo'>

                        {acf.photo.map(sngl_photo => (    
                            <div className='lb_prk_sld' key={id}>
                                <div className='lb_prk_sld_content'>
                                    <img src={sngl_photo}></img>
                                </div>
                            </div>
                        ))}

                    </Slider>
                </div>
            </div>   
            {/* Photo Lightbox End*/}    


        </div>  
        ))} 
    </>
  )
}
