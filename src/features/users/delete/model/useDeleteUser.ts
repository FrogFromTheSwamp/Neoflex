import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../../../../entities/user/api/deleteUser';

export function useDeleteUser(onSuccess?: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); 
      if (onSuccess) onSuccess();
    },
  });
}
