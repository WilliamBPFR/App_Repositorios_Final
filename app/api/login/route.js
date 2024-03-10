import { collection, getDocs,addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { comparepassword } from "@/services/passwordservice";
import { createToken} from '@/services/jwtservice.js';

export async function POST(request) {

    const res = await request.json();
    console.log(res)
    const datos_usuarios = {
        correo: res.correo,
        password: res.password,
    }
    try {
        const docrefs = await getDocs(collection(db, "users"));
        let foundUser = null;

        for (const doc of docrefs.docs) {
            const userData = doc.data();
            if (userData.correo === datos_usuarios.correo) {
                if (await comparepassword(datos_usuarios.password, userData.hash_password, userData.salt)) {
                    foundUser = userData;
                    break;
                } else {
                    return new Response("Contraseña incorrecta.", { status: 400 });
                }
            }
        }

        if (foundUser) {
            console.log("Usuario encontrado");
            console.log(foundUser)
            const token = createToken(foundUser);
            console.log("Token generado:::")
            console.log(token)
            return new Response(token, { 
                status: 200,
                headers: { 'Set-Cookie': `token=${token}` },
            },);
        } else {
            return new Response("Usuario no encontrado. Revise sus credenciales.", { status: 400 });
        }
    } catch (e) {
        console.error("Error adding document: ", e);
        return new Response("Error interno.", { status: 500 });
    }
}
