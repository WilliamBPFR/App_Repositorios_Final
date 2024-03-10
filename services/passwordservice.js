import bcrypt from 'bcryptjs'


const encriptpassword = async (password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    // Combina el "salt" con la contraseña
    const hash_password = await bcrypt.hash(password, salt);
    return [hash_password, salt];
  }

const comparepassword = async (password, hash_password_bd,salt) => {
    // console.log("Password:", password);
    // console.log("Hash Password BD:", hash_password_bd);
    // console.log("Salt:", salt);
    // const hash_password_login = await bcrypt.hash(password, salt);
    // console.log("Hash Password Login:", hash_password_login);
    return await bcrypt.compare(password, hash_password_bd);
}

export {encriptpassword, comparepassword};