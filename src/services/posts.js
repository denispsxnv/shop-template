import axios from 'axios'

const url = "https://whispering-river-87788.herokuapp.com/api/products"

const getPosts = () => {
    return axios.get(url)
}
console.log(getPosts)

 export default {
    get: getPosts
 }