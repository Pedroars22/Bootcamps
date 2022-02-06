function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Pedro', 'Admin');
usuarios.set('Paloma', 'Admin');
usuarios.set('Silva', 'User');
usuarios.set('Julieta', 'Admin');

console.log(getAdmins(usuarios));