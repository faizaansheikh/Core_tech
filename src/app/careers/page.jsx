'use client'
import React from 'react'
import { Col, Input, Row } from 'antd'
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import MyButton from '../../components/MyButton';
import { bgcolor } from '@/utils';

function Careers() {
  return (
    <div className='mt-12'>
      {/* <h2 className='text-4xl md:text-5xl text-center mx-4 md:mx-52  pt-5 pb-4 mb-20' style={{ borderBottom: `2px solid ${bgcolor}` }}>Careers</h2> */}
      {/* F4F4F4 */}
      <div className='bg-grey-200 w-[full] h-[auto] flex justify-evenly items-center flex-wrap' data-aos={'fade-right'}>

        <div className="  w-[400px] h-[auto]  flex justify-center  flex-col mb-8 pl-4" >
          <h2 className='text-4xl md:text-6xl text-start   pb-4 mb-10' >Careers</h2>
          <p style={{ color: bgcolor }} className='text-4xl'>Aim Higher</p>
          <p style={{ color: bgcolor }} className='text-4xl'>Reach Farther</p>
          <p style={{ color: bgcolor }} className='text-4xl'>Dream Bigger.</p>
          <p className='mt-6 text-xl'>A better career is out there.
            We’ll help you find it.
            We’re your first step to becoming
            everything you want to be.</p>

        </div>






        <div className='bg-[#F4F4F4] border-2 rounded-[20px] border-black w-[780px] h-full p-6 shadow-2xl m-2' >
          {/* <h2 className='text-3xl'>We'd love to help</h2>
          <p>Reach Out and we'll get in touch within 24 hours</p> */}
          <form action="" onSubmit={() => { }}>
            <Row gutter={12} className='mt-4'>
              <Col span={12} xs={24} md={12} className='mb-4'>
                <Input size="large" placeholder="Name" prefix={<UserOutlined />} required />
              </Col>
              <Col span={12} xs={24} md={12} className='mb-4'>
                <Input size="large" placeholder="Applied For" prefix={<UserOutlined />} required />
              </Col>
              <Col span={12} xs={24} md={12} className='mb-4 '>
                <Input size="large" placeholder="Email" prefix={<MailOutlined />} required />
              </Col>

              <Col span={12} xs={24} md={12} className='mb-4 '>
                <Input size="large" placeholder="Phone" prefix={<PhoneOutlined />} required />
              </Col>
              <Col span={12} xs={24} md={12} className='mb-4 '>
                <Input size="large" placeholder="Organization" prefix={<MailOutlined />} required />
              </Col>

              <Col span={12} xs={24} md={12} className='mb-4 '>
                <Input size="large" placeholder="Address" prefix={<PhoneOutlined />} required />
              </Col>
             
              <Col span={24} className='mt-4'>
                <TextArea rows={6} size="large" placeholder="Leave Us a message" maxLength={12} required />
              </Col>
              <Col span={24} className='mt-4'>

                <MyButton title="Send Message" className='text-white text-center text-[16px]' type='submit' />
              </Col>
            </Row>
          </form>
        </div>


      </div>
    </div >
  )
}

export default Careers