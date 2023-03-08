import { useQuery } from 'react-query'
import { Api } from '../service/api'

export const useGetApi = () => {
    return useQuery('getGithubApi', async () => {
        const {data} = await Api.get('/NathanCavalcanteFerreira/repos');
        return data
    })
}