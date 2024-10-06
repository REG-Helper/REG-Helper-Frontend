import React from 'react'
import Image from 'next/image';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from '@/shared/components/ui/alert-dialog';
import webdev_icon from '@/../public/webdev2_icon.png';
import pentester_icon from '@/../public/pentest_icon.png';
import interpreter_icon from '@/../public/interpreter_icon.png';


function JobsSuggestion() {
  return (
    <main>
    {/* ------------------------------- Jobs Suggestion -------------------------- */}
    <AlertDialog>
    <AlertDialogTrigger>
      <div className="mx-16 my-8 mb-2 me-2 box-border rounded-md bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl hover:text-zinc-600 focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
        Jobs Suggestion
      </div>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <div className='flex justify-between'>
        <AlertDialogTitle><div>อาชีพที่เหมาะกับคุณ</div></AlertDialogTitle>
        <AlertDialogCancel>
          <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          </div>
        </AlertDialogCancel>
        </div>
        <AlertDialogDescription>
          <div className="mx-4 my-8 flex justify-between">
            {/* Second Box */}
            <div>
              {/* Header Box */}
              <div className="mx-4 mt-16 box-border flex h-12 w-80 flex-col items-center justify-center rounded-t-xl border-2 border-solid border-black bg-silver">
                <div className="text-base font-bold text-black">Rank 2</div>
              </div>
              {/* Main Box */}
              <div className="mx-4 box-border flex h-80 w-80 flex-col items-center rounded-b-xl border-2 border-solid border-black bg-white">
                <div className="my-4">
                  <Image src={pentester_icon} height={150} alt="image" />
                </div>
                <div className="text-base font-bold text-black">
                  Penetration Tester
                </div>
                <div className="my-4 w-[250px] px-4 text-base font-medium text-black">
                  คุณได้ A ในวิชา ICT Security และ Penetration Testing
                </div>
              </div>
            </div>
            {/* First Box */}
            <div>
              {/* Header Box */}
              <div className="mx-4 box-border flex h-12 w-80 flex-col items-center justify-center rounded-t-xl border-2 border-solid border-black bg-gold">
                <div className="text-base font-bold text-black">Rank 1</div>
              </div>
              {/* Main Box */}
              <div className="mx-4 box-border flex h-80 w-80 flex-col items-center rounded-b-xl border-2 border-solid border-black bg-white">
                <div className="my-4">
                  <Image src={webdev_icon} height={150} alt="image" />
                </div>
                <div className="text-base font-bold text-black">
                  Web Developer
                </div>
                <div className="my-4 w-[250px] px-4 text-base font-medium text-black">
                  คุณได้ A ในวิชา SoftDev และได้ D ในวิชา Digital
                </div>
              </div>
            </div>
            {/* First Box */}
            <div>
              {/* Header Box */}
              <div className="mx-4 mt-16 box-border flex h-12 w-80 flex-col items-center justify-center rounded-t-xl border-2 border-solid border-black bg-bronze">
                <div className="text-base font-bold text-black">Rank 3</div>
              </div>
              {/* Main Box */}
              <div className="mx-4 box-border flex h-80 w-80 flex-col items-center rounded-b-xl border-2 border-solid border-black bg-white">
                <div className="my-4">
                  <Image src={interpreter_icon} height={150} alt="image" />
                </div>
                <div className="text-base font-bold text-black">
                  Interpreter
                </div>
                <div className="my-4 w-[250px] px-4 text-base font-medium text-black">
                  คุณลงเรียนรายวิชาหมวดภาษาทั้งหมด 6 รายวิชา
                </div>
              </div>
            </div>
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        
        {/* <AlertDialogAction>Continue</AlertDialogAction> */}
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  </main>
  )
}

export default JobsSuggestion