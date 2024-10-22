"use client"

import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import logo from '@/../public/kmitl-sublogo.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion';

interface Course {
  course_id: string;
  course_name: string;
  credits: number;
}

interface Credits {
  group: string;
  credits_remained: number;
  credits_requirement: number;
}

function ViewRemainingCredits() {

  const [course, setCourse] = useState<Course[]>([]);
  const [credit, setCredit] = useState<Credits[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try{
        const [res1, res2] = await Promise.all(
          [
            fetch('http://localhost:3000/api/suggest_course'),
            fetch('http://localhost:3000/api/remaining_credits'),
          ]);

        const course_data = await res1.json();
        const credit_data = await res2.json();

        setCourse(course_data);
        setCredit(credit_data);
      } catch(error){
          console.log('error');
      }
    };
    fetchData();
  }, [])
  return (
    <main>
      {/* --------------------------- NavBar -----------------------------------------------------*/}
      <div className="box-border flex h-16 w-full justify-between bg-gray-200 px-8 font-kanit text-base">
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
      <div className="mx-16 my-8 font-kanit text-2xl font-bold">
        หมวดวิชาที่เหลือ
      </div>
      <ul>
      {credit.map((item) => (
        <div>
          <Accordion type="multiple" className="w-full">
         <div className="mx-16">
           <AccordionItem value={item.group}>
             <AccordionTrigger>
               <div className="flex flex-col text-left font-kanit">
                 <div className="text-base font-bold">
                   คุณเหลือวิชาหมวด{item.group} {item.credits_remained} หน่วยกิต
                 </div>
                 <div className="text-xs">หลักสูตรต้องการ {item.credits_requirement} หน่วยกิต</div>
               </div>
             </AccordionTrigger>
             <AccordionContent>
               <div className="font-kanit text-2xl font-bold">วิชาที่แนะนำ</div>
                 <div className="font-kanit grid grid-flow-row grid-cols-12 gap-[8px] my-4 text-gray-500">
                   <div>รหัสวิชา</div>
                   <div className='font-kanit col-start-4 col-end-8'>ชื่อวิชา</div>
                   <div>หน่วยกิต</div>
                 </div>
                 <div>
                   <ul>
                     {course.map((item) => (
                      <div className='grid grid-flow-rowoc grid-cols-12 gap-[8px]'>
                        <div className="my-1 font-roboto">{item.course_id}</div>
                        <div className="my-1 col-start-4 col-end-8 font-roboto">{item.course_name}</div>
                        <div className="my-1 mx-[24px] font-roboto">{item.credits}</div>
                      </div>
                    ))}
                  </ul>
                  </div>
            </AccordionContent>
          </AccordionItem>
          </div>
          </Accordion>
        </div>
      ))} 
      </ul>
    </main>
  )
}

export default ViewRemainingCredits