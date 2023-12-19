import React from 'react'
import '../../../assets/css/park_inside_spotlight.css';
import Helmet from 'react-helmet';

export default function Park_const_devel_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec'>

            <Helmet>
                <title>Industrial Park compliances</title>
                <meta name="description" content="Ensure seamless park compliance and approval processes with HiParks. Our innovative platform simplifies regulatory procedures, helping parks adhere to standards effortlessly." />
                <meta name="keyword" content="Industrial parks compliances" />

                <meta property="og:title" content="Industrial Park compliances" />
                <meta property="og:description" content="Ensure seamless park compliance and approval processes with HiParks. Our innovative platform simplifies regulatory procedures, helping parks adhere to standards effortlessly." />
                <meta property="og:image" content="" />

                <meta name="twitter:title" content="Industrial Park compliances" />
                <meta name="twitter:description" content="Ensure seamless park compliance and approval processes with HiParks. Our innovative platform simplifies regulatory procedures, helping parks adhere to standards effortlessly." />
                <meta name="twitter:image" content="" />
            </Helmet>

            <img src={require('../../../assets/img/solutions_inside/parks_compliance/park_complnce_spotlight_new.webp')} alt='Grade a industrial and logistics park park compliances and approvals' className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../../assets/img/home_sldr_arrow.png')}></img>

            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  / <a href='/solutions'> Solutions</a> / PARK COMPLIANCES AND APPROVALS</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='spotlight_content_dv'>
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12 '>
                        <div className='spotlight_content_box'>
                            <div className='spotlight_inner_content'>
                                <div className='prk_dtl_line2'>
                                    <h1 className='spotlight_pg_title bg_size_ttl'>PARK COMPLIANCES AND APPROVALS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
