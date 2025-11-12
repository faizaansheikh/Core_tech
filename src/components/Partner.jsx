import React from 'react';
import './nav.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bgcolor } from '@/utils';
import { Card, Tooltip } from 'antd';
import ducom from '../images/ducom.png'
import linsis from '../images/linsis.png'
import paltro from '../images/paltro.png'
import orbis from '../images/orbis.png'
import omni from '../images/omni.png'
import xos from '../images/XOS.jpg'

const partners = [
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/ad-system.png',
        url: 'https://www.adsystems-sa.com/',
        title: 'AD Systems',
        desc: 'Specialized in automation with unique features in petroleum equipment'
    },
    {
        img: xos,
        url: 'https://www.adsystems-sa.com/',
        title: 'XOS',
        desc: 'Specialized in manufacturing of X-Ray based analyzers.'
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/milestone.png',
        url: 'https://www.milestonesrl.com/index.php/',
        title: 'Milestone S.r.l. ',
        desc: 'Specialized in advance microwave sample preparation.'
    },

    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/5.png',
        url: 'https://www.stanhope-seta.co.uk/',
        title: ' Stanhope-Seta',
        desc: 'A worldwide benchmark for quality control instrumentation.'
    },

    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/trace.png',
        url: 'http://teinstruments.com/',
        title: 'Trace Elemental',
        desc: 'Manufacturer of combustion analyzers for industrial and environmental testing.'
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/11.png',
        url: 'http://labtechsrl.com/#products',
        title: 'Lab Tech Srl.',
        desc: 'Your Reliable Laboratory Solution Provider.'
    },

    {
        img: orbis,
        url: 'https://orbisbv.com',
        title: 'ORBIS BV',
        desc: 'Manufacturers of automatic petroleum testing equipments'
    },
    {
        img: omni,
        url: 'https://omnitek.nl/',
        title: 'Omni Tech',
        desc: 'Manufactures state of the art  automatic viscometers'
    },
    {
        img: ducom,
        url: 'https://omnitek.nl/',
        title: 'Ducom',
        desc: 'Next-generation testers for tribology, mechanical and petroleum testing'
    },
    {
        img: linsis,
        url: 'https://linseis.com/en/our-products/',
        title: 'Linseis Thermal  ',
        desc: 'Manufacturer of measuring instruments for thermal analysis and the investigation of thermophysical properties for materials research.'
    },
    {
        img: paltro,
        url: 'https://omnitek.nl/',
        title: 'Paltro',
        desc: 'Building industry leading robotic test platforms'
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
