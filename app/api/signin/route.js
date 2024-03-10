import { NextResponse } from "next/server";
import { createToken } from '@/services/jwtservice.js';
import { signin_user } from '@/services/authservice.js';
import { collection, getDocs,addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { comparepassword } from "@/services/passwordservice";

//Registrar Usuario
export async function POST(request) {
    const res = await request.json();
    
    const datos_usuarios = {
        correo: res.correo,
        hash_password: res.hash_password,
        fecha_creacion: new Date().getTime(), 
        nombre: res.nombre,
        salt: res.salt
    }
    try {
        if(await verificar_correo_no_registrado(datos_usuarios.correo)){
            console.log(datos_usuarios.correo + " ya se encuentra registrado")
            return new Response("Correo ya registrado", { status: 400 });
        }
        const docref = await addDoc(collection(db, "users"), datos_usuarios);
        console.log("Document written with ID: ", docref.id);
        return Response.json({id:docref.id});
    } catch (e) {
        console.error("Error adding document: ", e);
        return new Response("Ocurrió un error al registrar el usuario.",{status: 500});
    }
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