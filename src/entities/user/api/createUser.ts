import { api } from '../../../shared/api/axiosInstance';
import { User } from '../../../entities/user/types/user';

export async function createUser(data: { name: string; avatar: string }): Promise<User> {
  const res = await api.post<User>('/users', data);
  return res.data;
}
