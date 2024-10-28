import axios from 'axios';
import { useAuth } from '../components/AuthContext';

// Define the user DTOs for consistency with your backend
export interface CreateUserDto {
  email: string;
  name?: string;
  phone?: string;
  profileImageUrl?: string;
  password: string;
}

export interface UpdateUserDto {
  email: string;
  name?: string;
  phone?: string;
  profileImageUrl?: string;
}

// Reusable UserService for CRUD operations
export const useUserService = () => {
  const { token } = useAuth();

  const headers = { Authorization: `Bearer ${token}` };

  const createUser = async (user: CreateUserDto) => {
    return axios.post('/user', user, { headers });
  };

  const updateUser = async (userId: number, user: UpdateUserDto) => {
    return axios.patch(`/user/${userId}`, user, { headers });
  };

  const getUser = async (userId: number) => {
    return axios.get(`/user/${userId}`, { headers });
  };

  const deleteUser = async (userId: number) => {
    return axios.delete(`/user/${userId}`, { headers });
  };

  const getAllUsers = async () => {
    return axios.get(`/user`, { headers });
  };

  return { createUser, updateUser, getUser, deleteUser, getAllUsers };
};
