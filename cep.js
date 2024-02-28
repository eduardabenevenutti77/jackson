// const retorno = fetch('https://viacep.com.br/ws/89213300/json')
//     .then(response => response.json())
//     .then(data => console.log(data))

async function getCep(cep) {
    const response = await fetch(
        `https://viacep.com.br/ws/${cep}/json` 
    )
    const json = await response.json()
    console.log(json)
}

getCep(89218585)