'use client'
import React, { useState } from 'react'
import { Col, Input, Row } from 'antd'
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import MyButton from '../../components/MyButton';

import { bgcolor } from '@/utils';


function Contact() {
    const [vals, setVals] = useState({
        name: '',
        email: '',
        phone: '',
        reason: '',
        msg: '',
    })
    const openGmailCompose = (title) => {

        if (vals.name === '' || vals.email === '' || vals.phone === '' || vals.phone === '' || vals.msg === '' || vals.reason === '') {
            return alert("Please fill all fields")
        }
        const params = new URLSearchParams({
            to: 'info@coretech.ae',
            su: "Contact Info",
            body: vals.msg,
            cc: "",
            bcc: "",
            // fs: "1",  
            view: "cm" // compose view
        });

        const url = `https://mail.google.com/mail/?${params.toString()}`;
        // Open in new tab
        window.open(url, "_blank", "noopener,noreferrer");
        setVals({
            name: '',
            email: '',
            phone: '',
            reason: '',
            msg: '',
        })
    };
    const handleChange = (e) => {
        setVals({
            ...vals,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className=''>
            <h2 className='text-4xl md:text-5xl text-center mx-4 md:mx-52  pt-8 pb-4 mb-15' style={{ borderBottom: `2px solid ${bgcolor}` }}>Contact</h2>
            {/* F4F4F4 */}
            <div className='bg-grey-200 w-[full] h-[auto] flex justify-center items-center flex-wrap' >

                {/* <div className=" relative w-[550px] h-[600px] m-2" >
                    <Image
                        src={img}
                        alt="Banner"
                        fill
                        // width={'100%'}
                        // height={300}
                        className="object-cover p-0  "
                    />

                </div> */}




                {/* bg-[#F4F4F4] */}

                <div className=' border-1 rounded-[20px] border-bldack w-[780px] h-full p-6 shadow-2xl mx-2 lg:m-0' data-aos={'fade-right'}>
                    <h2 className='text-4xl  pb-3'>Contact us</h2>
                    <p className='text-[17px]'>Please send your enquiry to core tech using the form below and we’ll connect you with the best member of our team for your query as soon as possible.</p>

                    <Row gutter={12} className='mt-4'>
                        <Col span={12} xs={24} md={12} className='mb-4'>
                            <Input size="large" name='name' value={vals.name} onChange={handleChange} placeholder="Name" prefix={<UserOutlined className='px-1' />} style={{ padding: '13px 13px', fontSize: '18px' }} required />
                        </Col>
                        <Col span={12} xs={24} md={12} className='mb-4 md:mb-0'>
                            <Input size="large" name='email' value={vals.email} onChange={handleChange} placeholder="Email" prefix={<MailOutlined className='px-1' />} style={{ padding: '13px 13px', fontSize: '16px' }} required />
                        </Col>

                        <Col span={12} xs={24} md={12} className='mb-4 md:mb-0'>
                            <Input size="large" name='phone' value={vals.phone} onChange={handleChange} placeholder="Phone" prefix={<PhoneOutlined className='px-1' />} style={{ padding: '13px 13px', fontSize: '16px' }} required />
                        </Col>
                        <Col span={12} xs={24} md={12} className='mb-4 md:mb-0'>
                            <Input size="large" name='reason' value={vals.reason} onChange={handleChange} placeholder="Why are you contacting us" prefix={<UserOutlined className='px-1' />} style={{ padding: '13px 13px', fontSize: '16px' }} required />
                        </Col>
                        <Col span={24} className='mt-4'>
                            <TextArea rows={6} size="large" name='msg' value={vals.msg} onChange={handleChange} placeholder="Leave Us a message" maxLength={12} style={{ padding: '13px 13px', fontSize: '16px' }} required />
                        </Col>
                        <Col span={24} className='mt-4'>

                            <MyButton title="Send Message" className='text-white text-center text-[16px]' Click={openGmailCompose} />
                        </Col>
                    </Row>

                </div>


            </div>
        </div >
    )
}

export default Contact