import axios from 'axios'

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5001/'
        })

        this.api.interceptors.request.use((config) => {
            const token = localStorage.getItem('token')
            if (token) {
                config.headers = {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
            return config
        }, (error) => {
            console.log(error)
        })

        this.api.interceptors.response.use((response) => response , 
            (error) => {
                if(error.response.status === 401){
                    localStorage.removeItem('token')
                    window.location = '/'
                }
                throw error
            })
    }

    login = async (loginInfo) => {
        try {
            const { data } = await this.api.post('/auth/login', loginInfo)
            localStorage.setItem('token', data.token)
            return { data }
        } catch (error) {
            throw error
        }
    }

    getAllSodas = async () => {
        try {
            const { data } = await this.api.get('/soda')
            return data
        } catch (error) {
            throw error
        }
    }

    createNewSoda = async (newSoda) => {
        try {
            const { data } = await this.api.post('/soda', newSoda)
            return data
        } catch (error) {
            throw error
        }
    }
}

export default new Api()