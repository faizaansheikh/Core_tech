import { bgcolor } from '@/utils'
import React from 'react'
import MyButton from './MyButton'
function Product() {
    const arr = [
        {
            img: 'https://orbisbv.com/wp-content/uploads/2021/05/ColdBlock2.png',
            url: 'https://www.adsystems-sa.com/',
            title: 'AD Systems',
            desc: 'AD Systems specializes in the design, manufacturing, selling and servicing of unique test equipment for the evaluation of physical properties'
        },
        {
            img: 'https://orbisbv.com/wp-content/uploads/2021/05/CFPP-Sep2.png',
            url: 'https://www.milestonesrl.com/index.php/',
            title: 'Milestone S.r.l. ',
            desc: 'Milestone Helping Chemists Milestone has been active since 1988 in the field of advanced microwave sample preparation.'
        },
        {
            img: 'https://orbisbv.com/wp-content/uploads/2021/05/CPPP-Sep2.png',
            url: 'https://ech.de/index.php/en/company',
            title: 'ECH',
            desc: 'Assembling and marketing the scientific devices for laboratory analysis, factory process control and on-site mobile analysis'
        },
        {
            img: 'https://orbisbv.com/wp-content/uploads/Micro-1.png',
            url: 'https://www.stanhope-seta.co.uk/',
            title: ' Stanhope-Seta',
            desc: 'Stanhope-Seta design and manufacture quality control instruments used to measure the physical characteristics that determine product quality and consistency.'
        },


        {
            img: 'https://orbisbv.com/wp-content/uploads/2020/08/STARDist_00002-300x300.png',
            url: 'https://linseis.com/en/our-products/',
            title: 'Linseis Thermal Analysis ',
            desc: 'More than 60 years ago LINSEIS started the production of thermal analysis recorders and instruments'
        },
        {
            img: 'https://orbisbv.com/wp-content/uploads/2021/01/AirProbe-300x300.png',
            url: 'https://www.grscientific.com/',
            title: 'GR Scientific',
            desc: 'The very successful Aquamax KF takes its new place alongside the ECH AQUA 40.00 Karl Fischer product line'
        },
        {
            img: 'https://www.milestonesrl.com/templates/yootheme/cache/98/pyro-high-throughput-98233fef.png',
            url: 'http://teinstruments.com/',
            title: 'Trace Elemental Instruments',
            desc: 'Trace Elemental Instruments B.V., designs, develops, manufactures, markets, sells and supports a range of laboratory equipment '
        },
        {
            img: 'https://www.milestonesrl.com/templates/yootheme/cache/63/duopur-6380111a.png',
            url: 'http://labtechsrl.com/#products',
            title: 'Lab Tech Srl.',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },

        // {
        //     img: img1,
        //     url: 'https://orbisbv.com/#special',
        //     title: 'ORBIS BV',
        //     desc: 'Develop high end laboratory equipment that saves worldwide customers time and money while producing the best achievable test results'
        // },
        // {
        //     img: img1,
        //     url: 'https://omnitek.nl/',
        //     title: 'Omni Tech',
        //     desc: 'OmniTek provides fully automatic kinematic viscosity instrumentation compliant with ASTM 445/446, ASTM D7279 (Houillon)'
        // },

    ]
    return (

        <div className='mx-[30px] md:mx-[100px] lg:mx-[200px]'>
            <h2 className='text-4xl md:text-5xl text-center  pt-5 pb-4 mb-20' style={{ borderBottom: `2px solid ${bgcolor}` }}>Our Products</h2>

            <div className='flex justify-center items-center gap-10 flex-wrap'>

                {
                    arr.map((x, i) => (
                        <div
                            data-aos={i % 2 === 0 ? 'flip-left' : 'flip-right'}
                            key={i}
                            className="w-[330px] h-[400px]"
                        >
                            <div className="w-full h-full border border-black flex flex-col justify-between group overflow-hidden cursor-pointer shadow-2xl shadow-black rotate-0 hover:rotate-5 transition-all duration-1000">
                                <div className="w-full h-[350px] relative">
                                    <img
                                        src={x.img}
                                        alt={`product ${i + 1}`}
                                        className=""
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            padding: '5px',
                                            objectFit: 'contain',
                                        }}
                                    />
                                    
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/70 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-between pb-2">
                                        <div className='text-center text-white'></div>
                                        <div className='text-center text-white text-2xl px-3 mt-4'>Seta Oil Test Centrifuge – 4 place - 90000-3</div>
                                        <div>
                                            <span className='mr-2'> <a href={x.url} target="_blank" rel="noopener noreferrer">
                                                <MyButton title="View More" className="text-white" />
                                            </a></span>
                                            <span className='ml-2'><MyButton title="Request a quotation" className="text-white" /></span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="w-full h-[50px] bg-black text-white text-center flex items-center justify-center text-xl"
                                    style={{ backgroundColor: bgcolor }}
                                >
                                    {x.title}
                                </div>
                            </div>
                        </div>


                    ))
                }
            </div>

        </div>
    )
}

export default Product