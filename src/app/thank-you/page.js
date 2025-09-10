import React from 'react'
import GlobalButton from '@/components/GlobButton';

export default function ThankYou()  {
  return (
    <>
        <div className='py-16 lg:py-24 px-16'>
          <div className='max-w-[1420px] mx-auto bg-slate-100 py-28 rounded-2xl'>
              <div className='text-center'>
                <h1 className='extra_font_family text-[#212121] font-bold text-[36px] md:text-[46px] lg:text-[56px]'>Thank You</h1>
                <p className='text-[#575757] font-normal text-2xl mt-[10px] mb-[24px] lg:mb-[40px] m-auto max-w-3xl'>Thank you for your interest. We will get in touch soon.</p>
                <div className='flex justify-center'>
                  <GlobalButton title="Back to Home" link="/"/>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}