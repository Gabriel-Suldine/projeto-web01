import axios from 'axios'

const api = axios.create({
    baseURL: 'https://randomuser.me/api/',
    timeout: 3000,
  });

export async function getContacts(){
    const contacts = await api.get('?results=8&nat=br')
    return contacts.data.results
}