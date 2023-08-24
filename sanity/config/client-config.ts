import {apiVersion, dataset, projectId} from '../env'

const clientConfig = {
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // set true for production and false for development
}

export default clientConfig