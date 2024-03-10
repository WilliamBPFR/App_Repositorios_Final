import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { comparepassword } from "./passwordservice";

async function signin_user(datos_usuarios) {
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
                    return Promise.reject("Contraseña incorrecta.");
                }
            }
        }

        if (foundUser) {
            console.log("Usuario encontrado");
            return foundUser;
        } else {
            return Promise.reject("Usuario no encontrado. Revise sus credenciales.");
        }
    } catch (e) {
        console.error("Error adding document: ", e);
        return Promise.reject("Error interno.");
    }
}


export { signin_user };
