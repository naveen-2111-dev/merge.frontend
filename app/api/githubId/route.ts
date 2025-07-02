import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { z } from 'zod'

const schema = z.object({
    tooken: z.string(),
}).strict()

export async function POST(request: Request) {
    let data
    try {
        data = await request.json()
    } catch (error) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
    }

    const result = schema.safeParse(data);

    if (!result.success) {
        return NextResponse.json({ error: 'Invalid payload', details: result.error.format() }, { status: 400 })
    }

    const { tooken } = result.data;
    (await cookies()).set({
        name: 'token',
        value: tooken,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
    })

    return NextResponse.json({ message: 'Cookie set successfully' })
}
