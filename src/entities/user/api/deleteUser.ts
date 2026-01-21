import { api } from '../../../shared/api/axiosInstance';

export async function deleteUser(id: string): Promise<void> {
  await api.delete(`/users/${id}`);
}
