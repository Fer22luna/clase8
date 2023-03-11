const form = document.getElementById('formSignup')  


// Escuchar el evento de submit cuando mande, el preventDefault lo usamos para que no recargue la pagina de vuelta, envia los datos pero no recarga
form.addEventListener('submit', e => {
  e.preventDefault()

  const data = new FormData(form)
  const obj = {}  // el neuvo objeto es el que voy a mandar en el fetch

  data.forEach((value, key) => obj[key] = value) // data es un array y lo reccorro con el forEach
  // aca va a capturar los valores y las keys, por ejemplo lo completo con Fernando(valor) y el key seria first_name el name del input

  const url = '/users'
  const headers = {
    'Content-Type': 'application/json'
  }
  const method = 'POST'
  const body = JSON.stringify(obj)

  fetch(url, {
    headers,
    method,
    body
  })
    .then(response => response.json()) // al objeto o la respuesta necesito que lo conviertas en un obejto de JS
    .then(data => console.log(data)) // luego a la data le entregamos la data
    .catch(error => console.log(error))
})
