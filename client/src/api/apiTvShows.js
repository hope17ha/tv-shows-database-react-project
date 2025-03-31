const baseUrl = 'http://localhost:3030/jsonstore/tv-shows'
import {requester} from '../utils/request'

export default {

    async create(tvShowData){
        return requester('POST', baseUrl, tvShowData)
    }
}