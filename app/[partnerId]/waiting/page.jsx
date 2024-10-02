'use client'

import { useParams, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Waiting() {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()

  const countdownDate = new Date("2024-08-08 13:34:00").getTime()

  const [countdown, setCountdown] = useState(countdownDate - new Date().getTime())

  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000).toString().padStart(2, '0');

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdownDate - new Date().getTime())
    }, 1000)
    
    return () => clearInterval(interval)
  }, [countdownDate])
  
  if (countdown < 0) {
    router.push(`/${params.partnerId}/status?amount=${searchParams.get('amount')}&trxid=${searchParams.get('trxid')}`)
  }

  return (
    <div>
      <div className='flex justify-between px-5 h-[25vh] mt-8'>
        <div className='text-sm w-1/2'>
          Selesaikan pembayaran anda dalam
        </div>
        <div className='text-3xl font-medium'>
          {countdown <= 0 ? (
            <div>00:00:00</div>
          ) : (
            <div>{hours}:{minutes}:{seconds}</div>
          )}
        </div>
      </div>
      <div className='flex gap-[5px] px-[30px]'>
        <Image
          src='/assets/icons/info.svg'
          alt='Icon Info'
          width={18}
          height={18}
          className='h-auto w-auto'
          style={{ filter: 'brightness(0) invert(0)' }}
        />
        <div className='text-sm'>
          Halaman ini akan diperbarui saat pembayaran sudah selesai
        </div>
      </div>
      <div className='flex gap-[5px] px-[30px] mt-[22px] mb-[31px]'>
        <Image
          src='/assets/icons/tanda-tanya.svg'
          alt='Icon Tanda Tanya'
          width={18}
          height={18}
          className='h-auto w-auto'
        />
        <div className='text-sm cursor-pointer'>
          Bagaimana cara membayar menggunakan Dana?
        </div>
      </div>
      <div className='mx-5 mb-[14px]'>
        <button
          className='py-[15px] px-5 rounded-[10px] bg-[#192028] shadow-md w-full hover:bg-opacity-70 hover:scale-95'
          onClick={() => router.push(`/${params.partnerId}/status?amount=${searchParams.get('amount')}&trxid=${searchParams.get('trxid')}`)}
        >
          <div className='text-white font-medium'>
            Cek Status Pembayaran
          </div>
        </button>
      </div>
    </div>
  )
}
