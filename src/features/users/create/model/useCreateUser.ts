import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '../../../../entities/user/api/createUser';

export function useCreateUser(onSuccess?: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); 
      if (onSuccess) onSuccess();
    },
  });
}
