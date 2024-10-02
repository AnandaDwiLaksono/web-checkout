'use client'

import Image from 'next/image'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

import { Dialog, DialogBody, DialogCloseButton, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

export default function ModalConfirmation({ selected }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const params = useParams()

  const numberFormat = new Intl.NumberFormat('id-ID')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button 
          className="px-5 py-[15px] rounded-[10px] bg-[#192028] shadow-md hover:bg-opacity-50 hover:scale-95 disabled:opacity-50 disabled:pointer-events-none"
          disabled={selected === null ? true : false}
        >
          <div className="text-white font-medium">
            Konfirmasi Pembayaran
          </div>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Image 
              src="/assets/icons/info.svg"
              alt="Icon Info"
              width={18}
              height={18}
              className='w-auto h-auto'
            />
            <div>Detail Pembayaran</div>
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <div>Pastikan pembayaran anda benar</div>
          <div className='flex flex-col gap-[15px]'>
            <div className='flex justify-between'>
              <div>Tagihan</div>
              <div>Rp {numberFormat.format(searchParams.get('amount'))}</div>
            </div>
            <div className='flex justify-between'>
              <div>Metode Pembayaran</div>
              <Image
                src={selected?.icon}
                alt={`Icon ${selected?.name}`}
                width={100}
                height={20}
                className='h-5 w-auto'
              />
            </div>
            <div className='flex justify-between'>
              <div>Biaya Admin</div>
              <div>Rp {numberFormat.format(selected?.fee)}</div>
            </div>
            <div className='flex justify-between'>
              <div>Total Pembayaran</div>
              <div>Rp {numberFormat.format(parseInt(searchParams.get('amount')) + selected?.fee)}</div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogCloseButton />
          <button
            className="px-5 py-[15px] rounded-[10px] bg-[#192028] shadow-md w-full hover:bg-opacity-70 hover:scale-95 flex justify-center"
            onClick={() => router.push(`/${params.partnerId}/waiting?amount=${searchParams.get('amount')}&trxid=${searchParams.get('trxid')}`)}
          >
            <div className="text-white font-medium">
              Bayar
            </div>
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
