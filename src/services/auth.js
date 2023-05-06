import axios from "axios"

export const authServices = () => {
    const registration = (registerData) => {
        return axios.post('https://whispering-river-87788.herokuapp.com/api/register', registerData)
    }
    return {registration}
}

