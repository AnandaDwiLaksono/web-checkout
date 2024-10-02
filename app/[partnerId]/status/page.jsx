'use client'

import React from 'react'
import Image from 'next/image'

export default function Status() {
  return (
    <>
      <div className='flex flex-col gap-6'>
        <div className='rounded-full bg-[#24B07E] p-[30px] mx-auto'>
          <Image
            src='/assets/icons/success.svg'
            alt='Icon Success'
            width={106}
            height={106}
            className='h-auto w-auto'
          />
        </div>
        <div className='font-bold text-center'>
          Pembayaran Berhasil
        </div>
      </div>
      <div className='mx-[19px] mb-[29px]'>
        <button className='px-5 py-[15px] rounded-[10px] bg-[#192028] shadow-md w-full'>
          <div className='text-white font-medium'>
            Lakukan Pembelian Lain
          </div>
        </button>
      </div>
    </>
  )
}
