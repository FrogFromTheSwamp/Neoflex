import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../../entities/user/api/getUsers';

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
}
