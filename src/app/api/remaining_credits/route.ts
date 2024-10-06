import { NextResponse } from "next/server";

export async function GET() {
    const data = [{
        group: 'เสรี',
        credits_remained: 9,
        credits_requirement: 15,
    },
    {
        group: 'บังคับเลือกภาค',
        credits_remained: 6,
        credits_requirement: 12,
    },
    ]
    return NextResponse.json(data);
}