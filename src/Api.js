import axios from 'axios'

const url = 'https://my-json-server.typicode.com/robertrm0/demo'

function traerDatos() {
    return axios(`${url}/hoteles`)
            .then(res => {
                return res
            })
}

export default {
    traerDatos
}