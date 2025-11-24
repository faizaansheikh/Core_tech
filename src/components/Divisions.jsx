import { bgcolor } from '../utils'
import React from 'react'
import img from '../images/1.1.jpg'
import img2 from '../images/2a.jpg'
import img3 from '../images/sales.jpg'
import img4 from '../images/service.jpg'
import Image from 'next/image'
function Divisions() {
    const arr = [
        {
            img: img3,
            title: 'Sales & Marketing',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },
        {
            img: img4,
            title: 'Services',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },
        {
            img: img2,
            title: 'Application',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },

        {
            img: img,
            title: 'Project',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },

    ]
    const openGmailCompose = (title) => {
        const sendTo = () => {
            if (title === 'Sales & Marketing') {
                return 'zd@az-scientificsolutions.com'
            } else if (title === 'Services' || title === 'Application') {
                return 'sr@az-scientificsolutions.com'
            } else {
                return 'su@az-scientificsolutions.com'
            }
        }
        const params = new URLSearchParams({
            to: sendTo(),
            su: "From Coretech  Divisions",
            body: `Asking about ${title} division`,
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
        <div className='lg:mx-[200px] '>
            <h2 className='text-4xl md:text-5xl text-center  pt-20 pb-4 mb-6' style={{ borderBottom: `2px solid ${bgcolor}` }}>Divisions</h2>
            {arr.map((x, i) => (
                <div key={i} className="relative flex justify-center items-center w-full my-8 ">
                    {/* Timeline vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-6 z-0" style={{ backgroundColor: bgcolor }} />



                    {i % 2 === 0 ? (
                        <>
                            <div data-aos={'fade-top'} className="group relative w-full h-[350px] md:h-[290px] border-1 border-black rounded-l-[10px]  cursor-pointer overflow-hidden bg-[black] shadow-2xl shadow-black z-20" onClick={() => openGmailCompose(x.title)}>
                                {/* Background Image */}
                                <Image
                                    src={x.img}
                                    alt="Banner"
                                    className="object-cover w-full h-full rounded-l-[10px]"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm md:backdrop-blur-[0px] md:group-hover:backdrop-blur-[6px] transition-all duration-300 ease-in-out rounded-l-[10px]" />
                                {/* Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 ">
                                    <h1 className="text-2xl md:text-5xl font-bold mb-2 transition-all duration-500 md:group-hover:-translate-y-2">
                                        {x.title} <br /> Division
                                    </h1>
                                    {/* <p className="text-[12px] lg:text-[17px] mt-2 text-start md:text-center md:hidden md:px-4 group-hover:block opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                                        {x.desc}
                                    </p> */}
                                </div>
                            </div>
                            <div className="w-full h-[300px]" />
                        </>
                    ) : (
                        <>
                            <div className="w-full h-[300px]" />
                            <div data-aos={'fade-top'} className="group relative w-full h-[350px] md:h-[290px] border-1 border-black rounded-r-[10px]  cursor-pointer overflow-hidden bg-[black] shadow-2xl shadow-black z-20" onClick={() => openGmailCompose(x.title)}>
                                {/* Background Image */}
                                <Image
                                    src={x.img}
                                    alt="Banner"
                                    className="object-cover w-full h-full rounded-r-[10px]"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm md:backdrop-blur-[0px] md:group-hover:backdrop-blur-[6px] transition-all duration-300 ease-in-out rounded-r-[10px]" />
                                {/* Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                                    <h1 className="text-2xl md:text-5xl font-bold mb-2 transition-all duration-500 md:group-hover:-translate-y-2">
                                        {x.title} <br /> Division
                                    </h1>
                                    {/* <p className="text-[12px] lg:text-[17px] mt-2 text-start md:text-center md:hidden md:px-4 group-hover:block opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                                        {x.desc}
                                    </p> */}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}




        </div>
    )
}


export default Divisions