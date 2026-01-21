import { api } from '../../../shared/api/axiosInstance';
import { User } from '../../../entities/user/types/user';

export async function updateUser(data: { id: string; name: string; avatar: string }): Promise<User> {
  const res = await api.put<User>(`/users/${data.id}`, {
    name: data.name,
    avatar: data.avatar,
  });
  return res.data;
}
