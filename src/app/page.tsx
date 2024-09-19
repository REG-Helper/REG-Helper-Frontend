import { paths } from '@/shared/routes';
import { redirect } from 'next/navigation';
import Image from "next/image";
import logo from "@/shared/components/ui/kmitl-sublogo.png";
import { Button } from "@/shared/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";

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
} from "@/shared/components/ui/alert-dialog";

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
      <div className="box-border w-full h-16  flex justify-between px-8 font-sans text-base bg-gray-200">
        <div className="box-border flex space-x-8 items-center px-8">
          <div>
            <Image src={logo} width={100} height={100} alt="image" />
          </div>
          <div>ค้นหาวิชาเรียน</div>
          <div>แนะนำวิชาเรียน</div>
        </div>
        <div className="box-border px-8 flex items-center">My Account</div>
      </div>

      {/* --------------------------- View Credit Accordion -----------------------------------------------------*/}
      <div className="font-sans text-2xl font-bold my-8 mx-16">
        หมวดวิชาที่เหลือ
      </div>
      <Accordion type="multiple" className="w-full">
        <div className="mx-16">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex flex-col text-left">
                <div className="font-bold text-base">
                  คุณเหลือวิชาหมวดเสรี 9 หน่วยกิต
                </div>
                <div className="text-xs">หลักสูตรต้องการ X หน่วยกิต</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="font-sans text-2xl font-bold">วิชาที่แนะนำ</div>
              <div className="flex justify-between w-6/12">
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
                <div className="font-bold text-base">
                  คุณเหลือวิชาหมวดบังคับเลือกภาค 9 หน่วยกิต
                </div>
                <div className="text-xs">หลักสูตรต้องการ X หน่วยกิต</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="font-sans text-2xl font-bold">วิชาที่แนะนำ</div>
              <div className="flex justify-between w-6/12">
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
          <div className="mx-16 my-8">
            Jobs Suggestion
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>อาชีพที่เหมาะกับคุณ</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex justify-between mx-4 my-8">
                <div className="box-border w-80 h-96 mx-4 bg-silver"></div>
                <div>
                  {/* Header Box */}
                  <div className="box-border w-80 h-12 mx-4 bg-gold rounded-t-xl border-solid border-2 border-black flex flex-col justify-center items-center">
                    <div className="text-base text-black font-bold">Rank 1</div>
                  </div>
                  {/* Main Box */}
                  <div className="box-border w-80 h-80 mx-4 bg-white rounded-b-xl border-solid border-2 border-black">
                  <div className="text-base text-black font-bold">Web Developer</div>
                  <div className="text-base text-black font-bold">คุณได้ A ในวิชา SoftDev และได้ D ในวิชา Digital</div>
                  </div>
                </div>
                <div className="box-border w-80 h-96 mx-4 bg-bronze"></div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {/* <AlertDialogAction>Continue</AlertDialogAction> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}

