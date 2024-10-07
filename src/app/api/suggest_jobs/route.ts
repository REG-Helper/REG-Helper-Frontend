import { NextResponse } from "next/server";
import Image from 'next/image';
import webdev_icon from '@/../public/webdev2_icon.png';
import pentester_icon from '@/../public/pentest_icon.png';
import interpreter_icon from '@/../public/interpreter_icon.png';

export async function GET() {
    const data = [
        {
            rank: '2',
            color: 'silver',
            jobs_title: 'Penetration Tester',
            description: 'คุณได้ A ในวิชา ICT Security และ Penetration Testing',
            jobs_image: pentester_icon
        },
        {
            rank: '1',
            color: 'gold',
            jobs_title: 'Web Developer',
            description: 'คุณได้ A ในวิชา SoftDev และได้ D ในวิชา Digital',
            jobs_image: webdev_icon
        },
        {
            rank: '3',
            color: 'bronze',
            jobs_title: 'Interpreter',
            description: 'คุณลงเรียนรายวิชาหมวดภาษาทั้งหมด 6 รายวิชา',
            jobs_image: interpreter_icon
        },
    ]
    return NextResponse.json(data);
}