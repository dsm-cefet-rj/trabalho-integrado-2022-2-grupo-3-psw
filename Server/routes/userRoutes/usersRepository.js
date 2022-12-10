const fs = require('fs');
//import * as fsa from 'fs/promises';

const usuariosFileName = 'users.json'

async function salvarUsuario(user) {
    let usuarios = await getUsuarios()
    usuarios.push(user);
    await fsa.writeFile(usuariosFileName, JSON.stringify(usuarios));
}

async function getUsuarios() {

    if (!fs.existsSync(usuariosFileName)) {
        await fsa.writeFile(usuariosFileName, JSON.stringify([]));
        return [];
    }
    let usersFile = await fsa.readFile(usuariosFileName);
        let usuarios = JSON.parse(usersFile);
        return usuarios;
}

// async function temAcessoArquivo (nomeDoArquivo) {
//     try {  
//         await fs.access(__dirname + '/' + nomeDoArquivo);
//         return true;

//     } catch {
//         return false;
//     }
// }

module.exports = salvarUsuario;
module.exports = getUsuarios;