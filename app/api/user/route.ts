import { NextRequest } from "next/server";
import client from "@/db";
import { useRouter } from "next/navigation";

export async function GET() {
    const user = await client.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}
export async function POST(req: NextRequest) {
    // extract the body
    const body = await req.json();
    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    return Response.json({
        message: "You are logged in!"
    })
}