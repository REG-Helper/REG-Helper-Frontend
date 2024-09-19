import { paths } from '@/shared/routes';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import logo from '@/shared/components/ui/kmitl-sublogo.png';
import webdev_icon from '@/shared/components/ui/webdev2_icon.png';
import pentester_icon from '@/shared/components/ui/pentest_icon.png';
import interpreter_icon from '@/shared/components/ui/interpreter_icon.png';
import { Button } from '@/shared/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion';

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

export default function HomePage() {
  return (
    <main>
      {/* <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-[300px] h-[300px] bg-gray-50 flex flex-col text-center p-4 rounded-lg shadow-md gap-4">
        <h1 className="font-bold text-2xl">Hello</h1>
        <Button>Click Me</Button>
      </div>
    </div> */}
      {/* <div className="w-[1051px] h-[679px] bg-black">
    <AspectRatio></AspectRatio>
    </div> */}

      {/* --------------------------- NavBar -----------------------------------------------------*/}
      <div className="box-border flex h-16 w-full justify-between bg-gray-200 px-8 font-sans text-base">
        <div className="box-border flex items-center space-x-8 px-8">
          <div>
            <Image src={logo} width={100} height={100} alt="Logo" />
          </div>
          <div>ค้นหาวิชาเรียน</div>
          <div>แนะนำวิชาเรียน</div>
        </div>
        <div className="box-border flex items-center px-8">My Account</div>
      </div>

      {/* --------------------------- View Credit Accordion -----------------------------------------------------*/}
      <div className="mx-16 my-8 font-sans text-2xl font-bold">
        หมวดวิชาที่เหลือ
      </div>
      <Accordion type="multiple" className="w-full">
        <div className="mx-16">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex flex-col text-left">
                <div className="text-base font-bold">
                  คุณเหลือวิชาหมวดเสรี 9 หน่วยกิต
                </div>
                <div className="text-xs">หลักสูตรต้องการ X หน่วยกิต</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="font-sans text-2xl font-bold">วิชาที่แนะนำ</div>
              <div className="flex w-6/12 justify-between">
                <div className="flex flex-col">
                  <div className="my-4 text-gray-500">รหัสวิชา</div>
                  <div className="my-1">64000001</div>
                  <div className="my-1">64000002</div>
                  <div className="my-1">64000003</div>
                </div>
                <div className="flex flex-col">
                  <div className="my-4 text-gray-500">ชื่อวิชา</div>
                  <div className="my-1">Subject01</div>
                  <div className="my-1">Subject02</div>
                  <div className="my-1">Subject03</div>
                </div>
                <div className="flex flex-col text-center">
                  <div className="my-4 text-gray-500">หน่วยกิต</div>
                  <div className="my-1">3</div>
                  <div className="my-1">3</div>
                  <div className="my-1">3</div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </div>
        <div className="mx-16">
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex flex-col text-left">
                <div className="text-base font-bold">
                  คุณเหลือวิชาหมวดบังคับเลือกภาค 9 หน่วยกิต
                </div>
                <div className="text-xs">หลักสูตรต้องการ X หน่วยกิต</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="font-sans text-2xl font-bold">วิชาที่แนะนำ</div>
              <div className="flex w-6/12 justify-between">
                <div className="flex flex-col">
                  <div className="my-4 text-gray-500">รหัสวิชา</div>
                  <div className="my-1">64000001</div>
                  <div className="my-1">64000002</div>
                  <div className="my-1">64000003</div>
                </div>
                <div className="flex flex-col">
                  <div className="my-4 text-gray-500">ชื่อวิชา</div>
                  <div className="my-1">Subject01</div>
                  <div className="my-1">Subject02</div>
                  <div className="my-1">Subject03</div>
                </div>
                <div className="flex flex-col text-center">
                  <div className="my-4 text-gray-500">หน่วยกิต</div>
                  <div className="my-1">3</div>
                  <div className="my-1">3</div>
                  <div className="my-1">3</div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>

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
  );
}
