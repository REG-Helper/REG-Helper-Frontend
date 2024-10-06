import { NextResponse } from "next/server";

export async function GET() {
    const data = [{
        course_id: '94000001',
        course_name: 'Principle of Software Developing',
        credits: 3,
    },
    {
        course_id: '94000002',
        course_name: 'Discrete Structure',
        credits: 3,
    },
    {
        course_id: '94000003',
        course_name: 'Computer Networks',
        credits: 3,
    },
    ]
    return NextResponse.json(data);
}