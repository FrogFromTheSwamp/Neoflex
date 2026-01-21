import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../../../features/auth/model/loginApi';
import { useNavigate } from 'react-router-dom';

export function useLoginPage() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) =>
      loginApi(username, password),
    onSuccess: (token) => {
      localStorage.setItem('token', token);
      navigate('/users');
    },
  });

  return {
    handleLogin: (username: string, password: string) =>
      mutation.mutate({ username, password }),
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
