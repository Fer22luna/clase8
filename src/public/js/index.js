const socket = io()


const swal = async () => {
    const chatBox = document.getElementById("chatBox")
    const result = await Swal.fire({
        title: "Identificate",
        input: "text",
        text: "Ingresa el usuario para identificarte en el chat",
        inputValidator: value => {
            return !value && "Necesitas escribir un nombre de usuario para continuar!"
        },
        allowOutsideClick: false
    })
    const user = result.value

    socket.emit('newUser', user)

    socket.on('userConnected', user => {
        console.log(`hola ${user}`)
        
        Swal.fire({
            text: `Bienvenido ${user} al chat!`,
            toast: true,
            position: "top-right",
            showConfirmButton: false,
            timer: 7000,
            timerProgressBar: true,
            icon: "success",
            background: "#030366",
            color: "#fff"
        })
    })




    chatBox.addEventListener('keyup', e => {
        if (e.key === "Enter") {
            if (chatBox.value.trim().length > 0) {
                const message = {
                    user: user,
                    message: chatBox.value

                }
                socket.emit("message", message)

            }
            chatBox.value = ""
        }

    }
    )
}
swal()

socket.on("messageLogs", async data => {
    const log = document.getElementById("messageLogs")
    let messages = ""
    data.forEach(message => {
        messages += `${message.user} dice: ${message.message}</br>`
    })
    log.innerHTML = messages

     
})

socket.on("newClient", user => {
    console.log(user + "holaaaaaaaaaaaaaaaaaaaaa")
})