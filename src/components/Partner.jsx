import React from 'react';
import './nav.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bgcolor } from '@/utils';
import { Card, Tooltip } from 'antd';
import img1 from '../images/new/yoke.png'
import img2 from '../images/new/thermakon.png'
import img3 from '../images/new/paltro.png'
import img4 from '../images/new/labtech.png'
const partners = [
    {
        img: img1,
        url: 'http://www.yoke-fac.com/',
        title: 'Yoke Instruments ',
        desc: 'Yoke Instrument is a high-tech enterprise that is dedicated in R&D, manufacturing, sales and services of laboratory.'
    },

    {
        img: img2,
        url: 'https://www.thermcon.biz/',
        title: 'ThermCon',
        desc: 'ThermCon Scientific is an innovative and research-oriented brand with more than 20 years of experience in the field of thermal analysis and thermal conductivity instruments'
    },
    {
        img: img3,
        url: 'https://www.paltro.com/',
        title: 'Paltro',
        desc: 'Intelligent robotic platforms that are configurable for everything from testing and measurement applications to mobility and industrial automation'
    },
    {
        img: img4,
        url: 'https://www.labtechsrl.com/en/',
        title: 'LabTech',
        desc: 'Labtech’s range virtually satisfies the needs of any modern lab with its 16 models divided in 4 families covering low and high speed, ventilated and refrigerated, small and large capacity'
    },

]

const Partner = () => {
    return (
        <div className='mx-[30px] md:mx-[100px] lg:mx-[200px]'>
            <h2 className='text-4xl md:text-5xl text-center  pt-20 pb-4 mb-10' style={{ borderBottom: `2px solid ${bgcolor}` }}>OUR BUSINESS PARTNERS & SUPPLIERS
            </h2>
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
                        items: 4,
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
                    partners.map((x, i) => (
                        <div key={i} className=''>
                            <Card
                                onClick={() => window.open(x.url)}
                                style={{ weight: 230, height: 330, border: '2px solid grey', margin: '10px 10px 50px 10px' }}
                                className='shadow-2xl cursor-pointer hover:scale-106 z-80 transition-transform duration-300 '
                                cover={
                                    <img
                                        alt="example"
                                        src={typeof x.img === 'string' ? x.img : x.img.src}
                                        className='p-6 h-[150px] shadow'
                                    />
                                }
                            // actions={[
                            //     <Tooltip title='Request Quotation'>
                            //         <a href={x.url} target='_black'>

                            //             <MessageOutlined key="setting" classID='' style={{ color: bgcolor, fontSize: '17px', padding: '0px 0' }} />
                            //         </a>
                            //     </Tooltip>,
                            //     <Tooltip title='View'>
                            //         <a href={x.url} target='_black'>
                            //             <EyeOutlined key="edit" classID='' style={{ color: bgcolor, fontSize: '18px', padding: '0px 0' }} />
                            //         </a>
                            //     </Tooltip>

                            // ]}
                            >
                                <h3 className='text-xl font-[500]'>{x.title}</h3>
                                <p className='text-sm mt-2 flex-grow overflow-hidden h-[80px]'>{x.desc}</p>


                            </Card>
                        </div>

                    ))
                }
            </Carousel>
        </div>
    );
};

export default Partner;
