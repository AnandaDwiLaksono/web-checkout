'use client'

import { useSearchParams, useSelectedLayoutSegment } from 'next/navigation'
import Image from 'next/image'

export default function RootLayout({ children }) {
  const segment = useSelectedLayoutSegment();
  const params = useSearchParams();

  const numberFormat = new Intl.NumberFormat('id-ID');

  console.log(segment);

  return (
    segment === null ? (
      <>
        {children}
      </>
    ) : (
      <div className='flex flex-col justify-between min-h-[calc(100vh-56px)] pt-1 gap-5'>
        <div className='flex flex-col gap-[30px] p-5 rounded-[10px] bg-white'>
          <div className='flex gap-2'>
            <Image
              src='/assets/images/logo-grabpay.png'
              alt='Logo Grabpay'
              width={200}
              height={30}
              className='h-auto w-auto'
              priority
            />
          </div>
          <div className='flex flex-col gap-[15px]'>
            <div>ID Transaksi</div>
            <div className='flex justify-between p-[15px] rounded-[10px] bg-[#F5F8FD]'>
              <div className='text-3xl'>
                {params.get('trxid')}
              </div>
              <Image
                src='/assets/icons/copy.svg'
                alt='Icon Copy'
                width={17}
                height={20}
                className='h-auto w-auto'
              />
            </div>
          </div>
          <div className='flex flex-col gap-[15px] px-[15px] '>
            <div className='flex justify-between'>
              <div>No. Handphone</div>
              <div>081234567890</div>
            </div>
            <div className='flex justify-between'>
              <div>Tagihan</div>
              <div>Rp {numberFormat.format(params.get('amount'))}</div>
            </div>
            <div className='flex justify-between'>
              <div>Metode Pembayaran</div>
              <Image
                src='/assets/images/dana.png'
                alt='Logo Dana'
                width={100}
                height={20}
                className='h-5 w-auto'
                priority
              />
            </div>
            <div className='flex justify-between'>
              <div>Admin</div>
              <div>Rp {numberFormat.format(1000)}</div>
            </div>
            <div className='flex justify-between'>
              <div>Total Pembayaran</div>
              <div className='font-bold'>
                Rp {numberFormat.format(2000)}
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    )
  );
}
