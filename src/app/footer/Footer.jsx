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
                    <h2>Head Office:</h2>
                    <p>Suit 1, Osama Heaven,</p>
                    <p>Plot No, A-137-138,</p>
                    <p>Block 4-A, Near Patel hospital,</p>
                    <p>Gulshan-e-Iqbal, Karachi, Pakistan</p>
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
                    <h2>Info:</h2>
                    <p>Email: info@az-scientificsolutions.com</p>
                    <p>Tel: +92-21-34965714</p>
                    <p>Fax: +92-21-34965714</p>

                </div>
            
            </div>
            <div
                className=" w-[full]  h-[300px] md:h-[350px]"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.9313804258227!2d67.09219217488223!3d24.934407442295466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339f529a2339b%3A0xce9ecdce85428e5d!2sOsama%20Heaven%20Apartments!5e0!3m2!1sen!2s!4v1752669057041!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div style={{ backgroundColor: bgcolor }} className='w-full h-[50px] flex justify-center items-center text-white py-10'>
                <p>
                    © 2018 Coretech . All Rights Reserved

                </p>
            </div>
        </div>
    )
}

export default Footer
