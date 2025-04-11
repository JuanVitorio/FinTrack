import axios from 'axios'

axios.get("http://localhost:8000/api/transacoes?format=json")
.then(response=>{
    console.log(response.data)
})
.catch(error => {
    console.log('Erro ao buscar transações:', error)
})