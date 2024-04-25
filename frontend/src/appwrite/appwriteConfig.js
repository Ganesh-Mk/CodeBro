import { Account, Client, ID } from 'appwrite'

const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('662a003e05c7a9165a2a')

export const account = new Account(client)
export { ID } from 'appwrite'