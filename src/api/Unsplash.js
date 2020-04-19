import axios from 'axios'

const Unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID IBEz-zmaqvqmC57IKeRCu9H1JJbjR5CajAw6lQgjyc8'
  }
})

export default Unsplash
