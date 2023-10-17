const myForm = document.getElementById("my-form")
const inName = document.getElementById("in-name")
const exampleInputEmail1 = document.getElementById("exampleInputEmail1")
const exampleInputPassword1 = document.getElementById("exampleInputPassword1")
const exampleInputPassword2 = document.getElementById("exampleInputPassword2")

myForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if(exampleInputPassword1.value !== exampleInputPassword2.value){
        alert("As senhas devem ser iguais.")
    } else {
        const newUser = {
            name: inName.value,
            email: exampleInputEmail1.value,
            password: exampleInputPassword1.value
        }
        createUser(newUser)
    } 
})

async function createUser(newUser){
    try{
        console.log(newUser)
        const response = await api.post("/users/create", newUser)
        console.log(response)
    }catch(err){
        console.log("Erro: ", err)
    }
}

