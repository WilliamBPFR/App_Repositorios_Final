import { NextResponse } from "next/server";
import { collection, getDocs,addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { cookies } from 'next/headers'
import { verifyToken } from "@/services/jwtservice";


//Registrar Usuario
export async function POST(request) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    
    if(verifyToken(token)){
        return new Response("Usuario ya logueado", { status: 400 });
    }
    return Response.json({token:theme});
}

export async function GET(request) {
    return new Response("Usuario o contraseña incorrectos", { status: 400 });
}
async function verificar_correo_no_registrado(email) {
    const querySnapshot = await getDocs(collection(db, "users"));
    let existe = false;
    querySnapshot.forEach((doc) => {
        if (doc.data().correo == email) {
            existe = true;
            return existe;
        }
    });
    return existe;
}