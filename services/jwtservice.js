import jwt from 'jsonwebtoken';
const tiempoExpiracion = 3600; //  En segundos (1 hora)

function createToken(payload){

    const secreto = process.env.JWTPASSWORD; // Clave secreta para firmar el token
    console.log("Secreto:::")
    console.log(secreto)
    // Firmar el token con el secreto
    const token = jwt.sign(payload, secreto,{expiresIn: tiempoExpiracion});
    console.log('Token JWT:', token);

    return token;
}

function verifyToken(token){
    console.log("Token:::")
    console.log(token)
    const secreto = process.env.JWTPASSWORD; // Clave secreta para firmar el token
    // Verificar un token JWT
    const result = jwt.verify(token.value, secreto, (error, decoded) => {
        if (error) {
            console.error('Error al verificar el token:', error.message);
            return false;
        } else {
            console.log('Token decodificado:', decoded);
            return true;
        }
    });
    return result;
}

export {createToken, verifyToken};