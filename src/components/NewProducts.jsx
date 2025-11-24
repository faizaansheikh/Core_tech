
'use client';
import React from 'react'
import { EyeOutlined, MessageOutlined } from '@ant-design/icons';
import { Card, Tooltip } from 'antd';
import { bgcolor } from '@/utils';
import Carousel from 'react-multi-carousel';
// import img4 from '../images/Petra SUPRA.jpg';
function NewProducts() {
    const products = [
        {
            img: '/new_pr/1.png',
            url: 'http://www.yoke-fac.com/double-beam-spectrophotometer-p00206p1.html',
            title: 'Double Beam Spectrophotometer',
            desc: 'AD Systems specializes in the design, manufacturing, selling and servicing of unique test equipment for the evaluation of physical properties'
        },
        {
            img: '/new_pr/2.png',
            url: 'http://www.yoke-fac.com/atomic-absorption-spectrophotometer-p00182p1.html',
            title: 'Atomic Absorption Spectrophotometer',
            desc: 'More than 60 years ago LINSEIS started the production of thermal analysis recorders and instruments'
        },
        {
            img: '/new_pr/3.png',
            url: 'http://www.yoke-fac.com/flame-photometer-p00186p1.html',
            title: 'Flame Photmeter',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },

        {
            img: '/new_pr/4.png',
            url: ' https://www.thermcon.biz/EN,24/dsc-600--high-precision-differential-scanning-calorimeter.html',
            title: 'DSC 600 – Scanning Calorimeter',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },
        {
            img: '/new_pr/5.png',
            url: 'https://www.thermcon.biz/EN,34/lfa-1000-laser-flash-thermal-conductivity-diffusivity-tester.html',
            title: 'LFA 1000 Laser Flash Thermal Conductivity &Diffusivity Tester',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },
        {
            img: '/new_pr/6.png',
            url: 'https://www.thermcon.biz/EN,15/sta-1500-simultaneous-thermal-analyzer-tga--dsc.html',
            title: 'STA 1500 Simultaneous Thermal Analyzer',
            desc: 'Develop high end laboratory equipment that saves worldwide customers time and money while producing the best achievable test results'
        },
        {
            img: '/new_pr/7.png',
            url: 'https://www.ducom.com/high-frequency-reciprocating-rig-hfrr',
            title: 'HIGH FREQUENCY RECIPROCATING RIG (HFRR 4.2)',
            desc: 'Trace Elemental Instruments B.V., designs, develops, manufactures, markets, sells and supports a range of laboratory equipment '
        },
        {
            img: '/new_pr/8.png',
            url: 'https://www.ducom.com/four-ball-tester-fbt-3',
            title: 'Four Ball tester',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },
        {
            img: '/new_pr/9.png',
            url: '',
            title: 'Ducom',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },
        {
            img: '/new_pr/10.png',
            url: '',
            title: 'RFP 2.0',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },
        {
            img: '/new_pr/11.png',
            url: 'https://www.paltro.com',
            title: 'UNITTEST (paltro)',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        }, {
            img: '/new_pr/12.png',
            url: 'https://www.labtechsrl.com/en/products',
            title: 'XELSIUS – Reaction Station',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        }, {
            img: '/new_pr/13.png',
            url: 'https://www.labtechsrl.com/en/products/water-chillers',
            title: 'Water chillers',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        }, {
            img: '/new_pr/14.png',
            url: 'https://www.labtechsrl.com/en/products/rotary-evaporators',
            title: 'Rotary Evaporators',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        }, {
            img: '/new_pr/15.png',
            url: 'https://www.labtechsrl.com/en/products/hotplates',
            title: 'Hotplates',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },



    ]
    const openGmailCompose = () => {

        const params = new URLSearchParams({
            to: 'info@az-scientificsolutions.com',
            su: "From Coretech ",
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