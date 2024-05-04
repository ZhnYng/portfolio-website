import {apiVersion, dataset, projectId, useCdn} from '../env'

const clientConfig = {
    projectId,
    dataset,
    apiVersion,
    useCdn: useCdn, // set true for production and false for development
}

export default clientConfig