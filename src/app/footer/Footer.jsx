'use client';
import React from 'react'
import { bgcolor } from '../../utils'

function Footer() {
    const menu = [
        { title: 'Home', link: '#home' },
        { title: 'About Us', link: '#about' },
        { title: 'Partners', link: '#partner' },
        { title: 'Products', link: '#products' },
        { title: 'Services', link: '#services' },
        { title: 'Careers', link: '/careers' },

    ];

    return (
        <div>
            <div
                style={{ backgroundColor: bgcolor }}
                className="w-full h-auto text-white py-12   flex flex-col md:flex-row flex-wrap justify-around items-start pl-12 md:pl-0"
            >
                {/* <div className="w-full flex flex-wrap"> */}
                {/* Left Side: Contact Info */}
                {/* flex-grow md:flex-[2] w-full md:w-1/3 pl-4 md:pl-0 */}
                {/* <div className="flex flex-row justify-start items-center text-white py-12 
                        
                          "> */}


                <div>
                    <h2 className="text-2xl md:text-4xl mb-4">Address</h2>
                 
                    <p>office no B59,</p>
                    <p>Abdul Hamed Ahmed 101,</p>
                    <p>AL Quoz 3, Dubai, UAE</p>
                    <p> </p>
                    <br />

                </div>


                <div className='w-[247px] pb-6 md:pb-0'>
                    <h2 className="text-2xl md:text-3xl mb-4">Quick Links</h2>
                    <ul>
                        {menu.map((x, i) => (
                            <a href={x.link} key={i} className=''>
                                <li
                                    className={`
                                }`}
                                // onClick={() => handleLinks(x)}
                                >
                                    {x.title}
                                </li>
                            </a>

                        ))}
                    </ul>

                </div>

                <div className=''>
                    <h2 className="text-2xl md:text-4xl mb-4">Contact Us</h2>
                    {/* <h2>Info:</h2> */}
                    <p>Email: info@coretech.ae</p>
                    <p>Tel: 009-71-569629495</p>
                    <p>Fax: +92-21-34965714</p>

                </div>

            </div>
            <div
                className=" w-[full]  h-[300px] md:h-[350px]"
            >
                <iframe
                    src="https://www.google.com/maps?q=25.152928239852184,55.2427125929736&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{border:0}}
                    // allowfullscreen=""
                    loading="lazy"
                    // referrerpolicy="no-referrer-wh/en-downgrade"
                    >
                </iframe>

            </div>
            <div style={{ backgroundColor: bgcolor }} className='w-full h-[50px] flex justify-center items-center text-white py-10'>
                <p>
                    © 2018 CORETECH SCIENTIFIC & LABORATORY EQUIPMENT CO.LLC. All Rights Reserved

                </p>
            </div>
        </div>
    )
}

export default Footer
