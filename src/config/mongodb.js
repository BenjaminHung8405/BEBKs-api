/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
const MONGODB_URI = 'mongodb+srv://nphung8405:6rVZY7RWlmgd4ICF@cluster0.5jzbx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const DATABASE_NAME = 'bebks_ebooks_database'

import {MongoClient, ServerApiVersion} from 'mongodb';

let bebksDataInstance = null

const mongoClientInstance = new MongoClient(MONGODB_URI,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

export const CONNECT_DB = async () => {
    await mongoClientInstance.connect()
    bebksDataInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
    if(!bebksDataInstance) throw new Error('Must connect to Database first!')
        return bebksDataInstance
}