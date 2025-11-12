'use client'
import { bgcolor } from '@/utils'
import React from 'react';
import Carousel from 'react-multi-carousel';
import img1 from '../images/clients/pso.png'
import img2 from '../images/clients/parco.png'
import img3 from '../images/clients/papco.png'
import img4 from '../images/clients/atock-removebg-preview.png'
import img5 from '../images/clients/sgs.png'
import img6 from '../images/clients/intertek-removebg-preview.png'

import img7 from '../images/clients/hamdard.png'
import img8 from '../images/clients/qarshi.png'
import img9 from '../images/clients/hascol.png'
import img10 from '../images/clients/pu.png'
import img11 from '../images/clients/pcsir.png'
import img12 from '../images/clients/synergy.png'
import img13 from '../images/clients/hubco.png'
import img14 from '../images/clients/engro.png'
import img15 from '../images/clients/ke.png'
import img16 from '../images/clients/biotech.png'
import img17 from '../images/clients/ku.png'
function Clients() {
    const items = [
        { title: 'PSO ', img: img1 },
        { title: 'Parco ', img: img2 },
        { title: 'Papco', img: img3 },
        { title: 'Attock', img: img4 },
        { title: 'SGS', img: img5 },
        { title: 'Intertek ', img: img6 },


        { title: 'Hamdard', img: img7 },
        { title: 'Qarshi', img: img8 },
        { title: 'Hascol  ', img: img9 },
        { title: 'Punjab University', img: img10 },
        { title: 'PCSIR ', img: img11 },
        { title: 'Cynergy ', img: img12 },
        { title: 'Hubco', img: img13 },
        { title: 'Engro Fertilizers', img: img14 },
        { title: 'K-Electric', img: img15 },
        { title: 'Biotech', img: img16 },
        { title: 'Karachi University', img: img17 },

    ];

    


    return (
        <div className='lg:mx-[200px] '>
               <h2 className='text-4xl md:text-5xl text-center  pt-20 pb-4 mb-10' style={{ borderBottom: `2px solid ${bgcolor}` }}>OUR VALUED CUSTOMERS</h2>
            
            {/* <p className='text-center text-md px-4 md:mx-0 md:text-xl pb-6 mb-6' style={{ borderBottom: `2px solid ${bgcolor}` }}>
                We have business partnership with a number of premier manufacturers and suppliers of scientific instrumentation around the globe.
                We are fully capable of meeting the challenges of providing scientific solutions to laboratories with latest technology, instrumentation
                and services in the technical, medical and industrial fields.
            </p> */}
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
                        items: 5,
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
                {items.map((x, index) => (
                    <div
                        data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                        key={index}
                        className="mx-2 mb-10"
                    >
                        <div
                            className="
                                group relative text-xl 
                                border border-[#071E4C] 
                                transition-transform duration-500 
                                hover:scale-90 hover:border-black hover:rotate-3
                                h-[120px] w-[full] /* sab box same size */
                                flex items-center justify-center 
                                cursor-pointer 
                                rounded-[10px] 
                                shadow-xl shadow-[grey] hover:shadow-2xl hover:bg-[white]/90
                                px-2
                                text-center
                                text-black
                                bg-[white]
                                mt-4
                                backdrop-blur-xl
                                 "
                        >
                            {/* Image */}
                            <img
                                alt="example"
                                src={typeof x.img === 'string' ? x.img : x.img.src}
                                className="p-0 h-full w-full object-contain"
                            />

                            {/* Title overlay */}
                            <div className="
                              absolute inset-0 
                              flex items-center justify-center 
                              bg-black/70 bg-opacity-50 
                              text-white text-md font-semibold 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300
                              ">
                                {x.title}
                            </div>
                        </div>
                    </div>
                ))}

            </Carousel>

        </div>
    )
}

export default Clients