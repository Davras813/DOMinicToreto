let bd = [
    {
        email: "mcocuy@mail.com",
        password: "compaq",
        username: "striker",
        active: true
    },

    {
        email: "CRocuy@mail.com",
        password: "compaq",
        username: "carlosReact",
        active: true
    },

    {
        email: "DB@mal.com",
        password: "compaq",
        username: "danielaButstrap",
        active: false
    }
]

function sayHi() {

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    //if (username === "" || username.length < 8) return alert("El campo usuario no cumple las condiciones")
    console.log(username);
    console.log(password);

    for (let index = 0; index < bd.length; index++) {
        if (((username == bd[index].username) || (username == bd[index].email)) && password == bd[index].password) {
            if (bd[index].active) { return (alert("Se logeo!!")) } else return(alert("El usuario no esta activo."))
        }
    }
    alert("No fue posible loguearlo!!")
}


// function sayHi() {

//     let username = document.querySelector("#username").value;
//     let password = document.querySelector("#password").value;

//     if (username === "" || username.length < 8) return alert("El campo usuario no cumple las condiciones")
//     console.log(username);
//     console.log(password);

//     // let json = {
//     //     llave: valor
//     // }
//     let persona = {
//         name: "Michael",
//         lastname: "Cocuy",
//         age: 25,
//         id: 1,
//         tel: "12345"
//     }

//     let carro = {
//         color: "amarillo",
//         marca: "chevrolet",
//         asientos: 5,
//         prende: true,
//         encendido: () => {},
//         taxiste: persona.name
//     }

//     console.log(persona);
// }