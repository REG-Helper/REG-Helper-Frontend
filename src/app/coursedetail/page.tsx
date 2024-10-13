import React from 'react';
import { Navbar } from '@/modules/navbar';
import courseData from './CE.json';

const cleanDesc = (desc: string) => {
  let cleanedDesc = desc.replace(/<\/?[^>]+(>|$)/g, '');
  cleanedDesc = cleanedDesc
    .replace(/&nbsp;/g, ' ')  
    .replace(/�/g, '')      
    .replace(/&quot;/g, '"') 
    .replace(/&amp;/g, '&') 
    .replace(/&lt;/g, '<') 
    .replace(/&gt;/g, '>') 
    .replace(/\\/g, '') 
    .replace(//g, '');   

    const parts = cleanedDesc.split(/(?=\s*[\u0E00-\u0E7F])|(?<=[\u0E00-\u0E7F]\s*)|(?=\s*[a-zA-Z0-9.,;:()])|(?<=[a-zA-Z0-9.,;:()]\s*)/);
  
    const separatedParts = parts
      .filter(part => part !== ''); 
  
    return separatedParts;
  };

export default function CourseDetail () {
    if (!courseData) return <div>Loading...</div>;

    return (
      <>
        <Navbar/>
        <div className='px-10 mb-4'>
            <h1 className='text-3xl font-bold py-5 text-blue-900'>{courseData.subject_id}</h1>
            <h1 className='text-xl font-semibold text-blue-900'>{courseData.subject_name_en} </h1>
            <h1 className='text-xl font-semibold text-blue-900'>{courseData.subject_name_th}</h1>
            <div className="grid grid-cols-2 items-center space-y-2 mt-4">
              <div className='flex flex-col'>
                <span className="font-medium text-gray-500">อาจารย์</span>
                {courseData.sections.map((section) => (
                  <p>{section.teacher.th.join(', ')}</p>
                ))}
              </div>
              <div className='flex flex-col'>
                <span className="font-medium text-gray-500">รูปแบบรายวิชา</span>
                <span>วิชาเลือก</span>
              </div>
              <div className='flex flex-col'>
                <span className="font-medium text-gray-500">หน่วยกิต</span>
                <span>3(3-0-6)</span>
              </div>
            </div>
            <div className='mt-4 flex flex-col space-y-2'>
              <span className='font-medium text-gray-500'>คำอธิบายรายวิชา (ภาษาไทย)</span>
              <p>{cleanDesc(courseData.desc)} </p>
              <span className='font-medium text-gray-500'>คำอธิบายรายวิชา (ภาษาอังกฤษ)</span>
              <p>{cleanDesc(courseData.desc)} </p>
            </div>

            <h2 className='mt-4 font-semibold text-blue-900'>วันที่เปิดสอน</h2>
            {courseData.sections.map((section) => (
                <div key={section.section}>
                  <p>Section: {section.section} - {section.day} {section.times.join(', ')}</p>
                </div>
            ))}
        </div>
      </>
    );
};