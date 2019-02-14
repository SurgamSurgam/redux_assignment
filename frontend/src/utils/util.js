import axios from 'axios';

export const getAllUsers = () => axios.get("/users");
export const deleteUser = (id) => axios.delete(`/users/${id}`)
export const addUser = (body) => axios.post("/users", body)
