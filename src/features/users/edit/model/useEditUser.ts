import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../../../../entities/user/api/updateUser';

export function useEditUser(onSuccess?: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); 
      if (onSuccess) onSuccess();
    },
  });
}
