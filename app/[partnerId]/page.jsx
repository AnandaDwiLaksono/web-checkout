'use client'

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import ModalConfirmation from "@/components/shared/ModalConfirmation";

export default function Payment() {
  const ewalletList = [
    {
      name: "DANA",
      icon: "/assets/images/dana.png",
      fee: 1000,
    },
    {
      name: "Finpay Money",
      icon: "/assets/images/finpay.png",
      fee: 0,
    },
    {
      name: "GoPay",
      icon: "/assets/images/gopay.png",
      fee: 0,
    },
    {
      name: "Jenius Pay",
      icon: "/assets/images/jenius.png",
      fee: 0,
    },
    {
      name: "LinkAja",
      icon: "/assets/images/linkaja.png",
      fee: 0,
    },
    {
      name: "LinkAja Web Checkout",
      icon: "/assets/images/linkaja.png",
      fee: 0,
    },
    {
      name: "OVO",
      icon: "/assets/images/ovo.png",
      fee: 0,
    },
    {
      name: "ShopeePay",
      icon: "/assets/images/shopeepay.png",
      fee: 0,
    },
    {
      name: "Virgo",
      icon: "/assets/images/virgo.png",
      fee: 0,
    },
  ];

  const [selectedEwallet, setSelectedEwallet] = useState(null);

  const searchParams = useSearchParams();

  const numberFormat = new Intl.NumberFormat('id-ID');

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="justify-center flex">
          <Image
            src="/assets/images/logo-grabpay.png"
            alt="Logo GrabPay"
            width={200}
            height={36}
            className="h-auto w-auto"
            priority
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-[5px]">
            <Image
              src="/assets/icons/money.svg"
              alt="Icon Money"
              width={19}
              height={16}
              className="h-auto w-auto"
            />
            <div className="font-semibold">
              Nominal Pembayaran
            </div>
          </div>
          <div className="flex justify-between p-[15px] items-center rounded-[10px] bg-white shadow-md">
            <div className="text-sm">
              Nominal Tagihan
            </div>
            <div className="text-xl font-medium">
              Rp {numberFormat.format(searchParams.get('amount'))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[5px]">
            <Image
              src="/assets/icons/card.svg"
              alt="Icon Card"
              width={24}
              height={24}
            />
            <div className="font-semibold">
              Metode Pembayaran
            </div>
          </div>
          <div className="flex flex-col p-[15px] gap-[10px]">
            <div>E-Wallet</div>
            {ewalletList.map((item) => (
              <div key={item.name} className="relative">
                <button
                  className={`w-full h-12 flex justify-between items-center rounded-[10px] shadow-md p-[15px] gap-[10px] bg-white ${selectedEwallet?.name == item.name && ('bg-[#0C0C0C] bg-opacity-5 border border-solid border-[#0C0C0C]')}`}
                  onClick={() => setSelectedEwallet(item)}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={240}
                    height={40}
                    className="h-[30px] object-contain w-auto"
                    priority
                  />
                  {item.fee == 0 ? (
                    <div className="italic font-semibold">
                      Gratis
                    </div>
                  ) : (
                    <div className="text-sm">
                      Rp {numberFormat.format(item.fee)}
                    </div>
                  )}
                </button>
                {selectedEwallet?.name == item.name && (
                  <div className="absolute -top-2 -right-2">
                    <Image
                      src="/assets/icons/checkmark.svg"
                      alt="Icon Checkmark"
                      width={24}
                      height={24}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[15px] px-6">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              Total Pembayaran
            </div>
            <div className="text-xl font-medium">
              Rp {numberFormat.format(parseInt(searchParams.get('amount')) + (selectedEwallet?.fee || 0))}
            </div>
          </div>
          <ModalConfirmation selected={selectedEwallet} />
        </div>
      </div>
    </>
  );
}
