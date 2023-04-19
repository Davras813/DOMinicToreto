


// let consulta = [
//     {
//         username: "carlosReact",
//         password: "react1ero",
//         email: "ilobreact@mail.com",
//         active: true
//     },
//     {
//         username: "danielaBootstrap",
//         password: "compaq",
//         email: "sweet@mail.com",
//         active: false
//     }
// ]

// function login() {

//     //capturar datos
//     let username = document.querySelector("#username").value
//     let password = document.querySelector("#password").value

//     for (let user of consulta) {
//         console.log(user)

//         if (username === user.username || username === user.email) {
//             if (password === user.password && user.active) {
//                 return alert("Sesión iniciada")
//             }

//             return alert("La contraseña es incorrecta o el usuario fue inactivado")
//         }
//     }

//     return alert("el usuario no existe")

// }

// function viewPass() {

//     let type = document.querySelector("#password").type
//     //return document.querySelector("#password").type = type === "password" ? "text" : "password"

//     if (type === "password") {
//         document.querySelector("#password").type = "text"
//     } else {
//         document.querySelector("#password").type = "password"
//     }
// }




// let bd = [
//     {
//         email: "mcocuy@mail.com",
//         password: "compaq",
//         username: "striker",
//         active: true
//     },

//     {
//         email: "CRocuy@mail.com",
//         password: "compaq",
//         username: "carlosReact",
//         active: true
//     },

//     {
//         email: "DB@mal.com",
//         password: "compaq",
//         username: "danielaButstrap",
//         active: false
//     }
// ]

// function sayHi() {

//     let username = document.querySelector("#username").value;
//     let password = document.querySelector("#password").value;

//     //if (username === "" || username.length < 8) return alert("El campo usuario no cumple las condiciones")
//     console.log(username);
//     console.log(password);

//     for (let index = 0; index < bd.length; index++) {
//         if (((username == bd[index].username) || (username == bd[index].email)) && password == bd[index].password) {
//             if (bd[index].active) { return (alert("Se logeo!!")) } else return(alert("El usuario no esta activo."))
//         }
//     }
//     alert("No fue posible loguearlo!!")
// }

// function viewPass() {
//     let type = document.querySelector("#password").type

//     if (type==="password") {
//         document.querySelector("#password").type="text"
//     }else{
//         document.querySelector("#password").type="password"
//     }
// }

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