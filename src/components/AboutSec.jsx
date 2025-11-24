import React from 'react'
import { GoGoal } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";
export default function AboutSec() {
    const arr = [
        // {
        //     id: 1,
        //     icon: (id) => <MdOutlineSettings size={80} />,
        //     title: 'Technical Department',
        //     desc: 'We are committed with our customers to provide highest level of after sales services with the team of highly qualified and experienced personnel’s which includes Ph.D’s (Analytical Chemistry) , Application & Electronic Engineers.'
        // },

        {
            id: 1,
            icon: (id) => <FaRegEye size={80} color='#29303bff' />,
            title: 'Our Vision',
            desc: 'To deliver beyond the customer’s expectationin field of Scientific Instrumentation, a platform where we grow together.'
        },
        {
            id: 2,
            icon: (id) => <GoGoal size={75} color='#29303bff' />,
            title: 'Our Mission',
            desc: 'To set new standards inproviding scientificsolutions,based onthe customer’s satisfactionthroughexperience, knowledge and  latest technology.'
        },
        {
            id: 3,
            icon: (id) => <LuBadgeCheck size={80} color='#29303bff' />,
            title: 'Our Values',
            desc: 'Integrity, Honesty, Professionalism & Respect.'
        }
    ]
    return (
        <div className="w-full h-auto flex flex-wrap items-center justify-center gap-6">
            {arr.map((x, i) => (
                <div
                    key={i}
                    className="hover:rotate-5 w-full sm:w-[48%] lg:w-[30%] h-[300px] bg-[whitesmoke] flex flex-col items-center justify-center border border-[grey] hover:border-black hover:scale-105 transition-transform duration-500 shadow-xl"
                >
                    <div>{x.icon()}</div>
                    <h2 className="font-[600] text-2xl text-[#29303bff] pb-2 pt-2">{x.title}</h2>
                    <p className="text-center text-[#29303bff] px-6">{x.desc}</p>
                </div>
            ))}
        </div>

    )
}
