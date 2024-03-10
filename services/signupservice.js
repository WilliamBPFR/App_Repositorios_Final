import { collection, getDocs,addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
async function register_user(datos_usuarios) {
    try {
        if(await verificar_correo_no_registrado(datos_usuarios.correo)){
            console.log(datos_usuarios.correo + " ya se encuentra registrado")
            return Promise.reject("El correo ya se encuentra registrado.");
        }
        const docref = await addDoc(collection(db, "users"), datos_usuarios);
        console.log("Document written with ID: ", docref.id);
        return docref.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        return Promise.reject("Ocurrió un error al registrar el usuario.");
    }
};

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

export { register_user};