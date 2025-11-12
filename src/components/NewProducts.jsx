
'use client';
import React from 'react'
import { EyeOutlined, MessageOutlined } from '@ant-design/icons';
import { Card, Tooltip } from 'antd';
import { bgcolor } from '@/utils';
import Carousel from 'react-multi-carousel';
import img4 from '../images/Petra SUPRA.jpg';
function NewProducts() {
    const products = [
        {
            img: '/p4.png',
            url: 'https://www.adsystems-sa.com/products',
            title: 'Thermal Oxidation Rig',
            desc: 'AD Systems specializes in the design, manufacturing, selling and servicing of unique test equipment for the evaluation of physical properties'
        },
        {
            img: '/p6.png',
            url: 'https://orbisbv.com/all-products/',
            title: 'MICRO-DISTILLATION Unit',
            desc: 'Develop high end laboratory equipment that saves worldwide customers time and money while producing the best achievable test results'
        },
        {
            img: '/p7.png',
            url: 'https://www.teinstruments.com/instruments/analyzers/',
            title: 'COMBUSTION ANALYZER',
            desc: 'Trace Elemental Instruments B.V., designs, develops, manufactures, markets, sells and supports a range of laboratory equipment '
        },
        {
            img: img4,
            url: 'https://www.xos.com/petra-supra/product?id=69930778601',
            title: 'XRF',
            desc: 'XOS specializes in the design, manufacturing, selling and servicing of unique test equipment for the evaluation of physical properties'
        },
        // {
        //     img: 'https://orbisbv.com/wp-content/uploads/2021/05/CPPP-Sep2.png',
        //     url: 'https://ech.de/index.php/en/company',
        //     title: 'ECH',
        //     desc: 'Assembling and marketing the scientific devices for laboratory analysis, factory process control and on-site mobile analysis'
        // },
        {
            img: '/p1.png',
            url: ' https://www.stanhope-seta.co.uk/shop-search/',
            title: 'Petroleum test equipment',
            desc: 'Stanhope-Seta design and manufacture quality control instruments used to measure the physical characteristics that determine product quality and consistency.'
        },


        {
            img: '/p2.png',
            url: 'https://www.linseis.com/en/instruments/thermal-analysis/',
            title: 'Thermal analyzers',
            desc: 'More than 60 years ago LINSEIS started the production of thermal analysis recorders and instruments'
        },
        // {
        //     img: 'https://orbisbv.com/wp-content/uploads/2021/01/AirProbe-300x300.png',
        //     url: 'https://www.grscientific.com/',
        //     title: 'GR Scientific',
        //     desc: 'The very successful Aquamax KF takes its new place alongside the ECH AQUA 40.00 Karl Fischer product line'
        // },

        {
            img: '/p3.png',
            url: 'https://www.labtechsrl.com/en/products',
            title: 'Laboratory instruments',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },





        {
            img: '/p5.png',
            url: 'https://www.adsystems-sa.com/products/9',
            title: 'AUTOMATIC SMOKE POINT ANALYZER',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },

        {
            img: '/p8.png',
            url: 'https://www.milestonesrl.com/products/microwave-digestion',
            title: 'MICROWAVE DIGESTION',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },
        {
            img: '/p9.png',
            url: 'https://www.milestonesrl.com/products/mercury-determination',
            title: 'MERCURY Analysis',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },
        {
            img: '/p10.png',
            url: 'https://www.labtechsrl.com/en/products/organic-sample-preparation',
            title: 'Solid Phase Extraction',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },


        {
            img: '/p11.png',
            url: 'https://www.ducom.com/high-frequency-reciprocating-rig-hfrr',
            title: 'HFRR( High Frequency Reciprocating Rig)',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        }, {
            img: '/p12.png',
            url: 'https://www.ducom.com/universal-tester-unitest',
            title: 'Mechanical Analyzers (Tribology)',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        }, {
            img: '/p13.png',
            url: 'https://www.paltro.com/products/test-and-measurement/bocle--automated-ball-on-cylinder-lubricity-evaluator',
            title: 'BOCLE ( Lubricity)',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        }, {
            img: '/p14.png',
            url: 'https://www.paltro.com/products/advanced-microscopy-measurements/microfusion-lite',
            title: 'Multi modal microscopy',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        }, {
            img: '/p16.png',
            url: ' https://omnitek.nl/products',
            title: 'Automatic viscometer ASTM D445',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        }, {
            img: '/p15.png',
            url: 'https://omnitek.nl/products/Cito-S-flow-IV-Autosampler-for-fully-automated-viscosity-testing',
            title: 'S-Flow Viscometer',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },



    ]
    const openGmailCompose = () => {

        const params = new URLSearchParams({
            to: 'info@az-scientificsolutions.com',
            su: "From Az Scientific Solutions",
            body: `Asking about Quotation`,
            cc: "",
            bcc: "",
            fs: "1",   // full screen compose
            view: "cm" // compose view
        });

        const url = `https://mail.google.com/mail/?${params.toString()}`;
        // Open in new tab
        window.open(url, "_blank", "noopener,noreferrer");
    };
    return (
        <div className='mx-[30px] md:mx-[100px] lg:mx-[200px]'>
            <h2 className='text-4xl md:text-5xl text-center  pt-20 pb-4 mb-15' style={{ borderBottom: `2px solid ${bgcolor}` }}>OUR PRODUCTS</h2>
            {/* parent  */}
            {/* <div className='  w-full h-[auto] flex justify-center flex-wrap gap-8'> */}
            <div className=' z-100 '>
                <Carousel
                    arrows
                    autoPlaySpeed={3000}
                    infinite
                    keyBoardControl
                    pauseOnHover
                    showDots
                    // renderDotsOutside
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 800 },
                            items: 3,
                            partialVisibilityGutter: 0
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 300 },
                            items: 2,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    swipeable
                >
                    {
                        products.map((x, i) => (
                            <div key={i} style={{ height: 360, border: '1px solid black', borderRadius: '10px', margin: '0px 10px 50px 10px' }}>
                                <Card

                                    style={{ height: 350, marginBottom: '3px' }}
                                    className='shadow-xl my-4 '
                                    cover={
                                        <img
                                            alt="example"
                                            src={typeof x.img === 'string' ? x.img : x.img.src}
                                            className='p-1 h-[200px]  object-contain'
                                        />
                                    }
                                    actions={[
                                        <Tooltip title='Request Quotation' onClick={openGmailCompose}>


                                            <MessageOutlined key="setting" classID='' style={{ color: bgcolor, fontSize: '17px', paddingBottom: '' }} />

                                        </Tooltip>,
                                        <Tooltip title='View' >
                                            <a href={x.url} target='_black'>
                                                <EyeOutlined key="edit" classID='' style={{ color: bgcolor, fontSize: '18px', paddingBottom: '' }} />
                                            </a>
                                        </Tooltip>

                                    ]}
                                >
                                    <h3 className='text-xl font-[500] text-center h-[50px] mb-3'>{x.title}</h3>
                                    {/* <p className='text-sm mt-2 flex-grow overflow-hidden h-[80px]'>{x.desc}</p> */}
                                    <div className='w-full h-[1px] bg-[lightgrey] mt-0'></div>

                                </Card>
                            </div>

                        ))
                    }
                </Carousel>



            </div>
        </div>
    )
}

export default NewProducts