const myModal = document.getElementById("myModal")
const signUp = document.getElementById("signUp")

const myModalAtive = new bootstrap.Modal(myModal)

signUp.addEventListener('click', () => {
myModalAtive.show()
})