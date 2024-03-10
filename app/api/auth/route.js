import { cookies } from 'next/headers'
import { verifyToken } from "@/services/jwtservice";

export async function POST(request) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    
    if(verifyToken(token)){
        return new Response("Usuario ya logueado", { status: 200 });
    }else{
        return new Response("Usuario no logueado", { status: 400 });
    }
}