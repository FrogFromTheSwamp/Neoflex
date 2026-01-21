import { api } from '../../../shared/api/axiosInstance';
import { User } from '../types/user';

export async function getUsers(): Promise<User[]> {
  const res = await api.get<User[]>('/users');
  return res.data;
}
