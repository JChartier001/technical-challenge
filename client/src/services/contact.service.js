import axios from 'axios';

export const getAllContacts = () => {
  return axios.get('http://localhost:3001/contact');
};

export const createContact = (contact) => {
  return axios.post('http://localhost:3001/contact', contact);
};

export const getContactById = (id) => {
  return axios.get(`http://localhost:3001/contact/${id}`)
}

export const updateContact = (contact) => {
  return axios.patch(`http://localhost:3001/contact/${contact.id}`, contact)
}
export const deleteContact = (id) => {
  return axios.delete(`http://localhost:3001/contact/${id}`);
};

