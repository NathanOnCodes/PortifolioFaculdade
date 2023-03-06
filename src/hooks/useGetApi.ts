import { useQuery } from 'react-query'
import { Api } from '../service/api'

export const useGetApi = () => {
    return useQuery('getGithubApi', async () => {
        const {data} = await Api.get('/NathanCavalcanteFerreira/repos');
        console.log(data)
        return data
    })
}