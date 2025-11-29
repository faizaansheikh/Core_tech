'use client';
import GlassEffect from '../../components/GlassEffect'
import React from 'react'

import Divisions from '../../components/Divisions';
import Clients from '@/components/Clients';
import NewProducts from '@/components/NewProducts';
import Partner from '@/components/Partner';
import Products from '../products/Products';
import AboutSec from '@/components/AboutSec';
import Image from 'next/image';
import about from '../../images/about32.jpg'

function About() {
    return (
        <>



            <div className="w-full  h-auto lg:h-[auto] md:mt-22 flex flex-col items-center justify-center lg:flex-row px-12" >

                <div className="w-full hidden lg:flex justify-center items-center px-0" >
                    <Image
                        src={about}
                        alt="Developer at desk"
                        className="object-cover w-full max-w-[320px] md:max-w-[600px] h-[400px] rounded-[20px] shadow-lg  brightness-70"
                    />

                </div>


                <div className="w-full flex flex-col justify-start items-start px-0 md:px-12 pt-0">
                    <p className="text-xl md:text-3xl font-bold mb-4" id="about">About Coretech </p>
                    <p
                        className={`text-sm md:text-base text-black
                            }`}
                    >
                        Core Tech Scientific & Laboratory Equipment Trading was established in Dubai, UAE. We are providingservices to
                        educational institutes, research & development centers, oil & gas industry, government and private sector laboratories,
                        food safety & environmental laboratories, local manufacturing industries etc.

                        <br />
                        <br />
                        Core Tech Scientific & Laboratory Equipment Trading came along withvast experience of more than 20 years in the field
                        of analytical, bio analytical & scientific researchinstruments.
                        <br />
                        <br />
                        We have business partnership with a number of premier manufacturers and suppliers of scientific instrumentation around
                        the globe. We are fully capable of meeting the challenges of providingscientific solutions tolaboratories with latest technology,
                        instrumentation and services in the fields.
                    </p>


                </div>
            </div>

            <div className='mx-4 lg:mx-[120px] mb-[0px] mt-[100px] '>
                <AboutSec />
            </div>

            <div className="mt-[70px] mb-[40px] pb-20 w-full h-[auto] md:mt-[60px]" style={{ backgroundColor: '' }} id="partner">

                <Partner />
            </div>
            <div className="mt-[70px] mb-[80px] md:mt-[40px]" id="products">
                <NewProducts />

            </div>
            {/* <div className="mt-[70px] mb-[40px] pb-20 w-full h-[auto] md:mt-[60px]" style={{ backgroundColor: '' }} id="clients">

                <Clients />
            </div> */}
            <div className='mx-4  mb-[0px] mt-[60px] md:mt-[20px]'>

                <Divisions />
            </div>
        </>
    )
}

export default About