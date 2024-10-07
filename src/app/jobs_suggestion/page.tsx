'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
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

interface Jobs {
  rank: number;
  color: string;
  jobs_title: string;
  description: string;
  jobs_image: StaticImageData;
}

function JobsSuggestion() {
  const [jobs, setJobs] = useState<Jobs[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/suggest_jobs');
        const jobs_data = await response.json();
        setJobs(jobs_data);
      } catch (error) {
        console.log('error');
      }
    };
    fetchData();
  }, []);
  return (
    <main>
      {/* ------------------------------- Jobs Suggestion -------------------------- */}
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="mx-16 my-8 mb-2 me-2 box-border rounded-[8px] bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl hover:text-zinc-600 focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
            Jobs Suggestion
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-between">
              <AlertDialogTitle>
                <div>อาชีพที่เหมาะกับคุณ</div>
              </AlertDialogTitle>
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
              <div className='flex flex-row justify-between'>
                <div className="mx-4 mt-[32px] box-border flex h-12 w-80 flex-col items-center justify-center rounded-t-xl border-2 border-solid border-black bg-silver">
                  <div className="text-base font-bold text-black">Rank 2</div>
                </div>
                <div className="mx-4 mt-[32px] box-border flex h-12 w-80 flex-col items-center justify-center rounded-t-xl border-2 border-solid border-black bg-gold">
                  <div className="text-base font-bold text-black">Rank 1</div>
                </div>
                <div className="mx-4 mt-[32px] box-border flex h-12 w-80 flex-col items-center justify-center rounded-t-xl border-2 border-solid border-black bg-bronze">
                  <div className="text-base font-bold text-black">Rank 3</div>
                </div>
                </div>
                <ul className="flex flex-row justify-between">
                {jobs.map((item) => (
                  <div>
                    <div className="mx-4 box-border flex h-80 w-80 flex-col items-center rounded-b-xl border-2 border-solid border-black bg-white">
                      <div className="my-4">
                        <Image src={item.jobs_image} height={150} alt="image" />
                      </div>
                      <div className="text-base font-bold text-black">
                        {item.jobs_title}
                      </div>
                      <div className="my-4 w-[250px] px-4 text-base font-medium text-black">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="mx-4 my-8 flex justify-between">
              
                <div>
               
                  <div className="mx-4 mt-16 box-border flex h-12 w-80 flex-col items-center justify-center rounded-t-xl border-2 border-solid border-black bg-silver">
                    <div className="text-base font-bold text-black">Rank 2</div>
                  </div>
                 
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
              
             
                <div>
                  
                  <div className="mx-4 box-border flex h-12 w-80 flex-col items-center justify-center rounded-t-xl border-2 border-solid border-black bg-gold">
                    <div className="text-base font-bold text-black">Rank 1</div>
                  </div>
                  
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
               
                <div>
                  
                  <div className="mx-4 mt-16 box-border flex h-12 w-80 flex-col items-center justify-center rounded-t-xl border-2 border-solid border-black bg-bronze">
                    <div className="text-base font-bold text-black">Rank 3</div>
                  </div>
                 
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
              </div> */}
              </ul>
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

export default JobsSuggestion;
