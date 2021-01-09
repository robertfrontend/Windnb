import axios from 'axios'

const url = 'https://my-json-server.typicode.com/robertrm0/demo'


export default {
    async getHoteles(data) {
        const datos = await axios.get(`${url}/${data}`)
        return datos
    }
}