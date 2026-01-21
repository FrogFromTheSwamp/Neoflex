import { useAuthGuard } from '../../../features/auth/model/useAuthGuard';

export function UsersPage() {
  useAuthGuard(); 

  return (
    <div>
      <h1>Список пользователей</h1>
    </div>
  );
}
