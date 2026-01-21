import { useUsers } from '../model/useUsers';
import { formatDate } from '../../../shared/lib/formatDate';
import { Button, List, Avatar } from 'antd';
import { User } from '../../../entities/user/types/user';
import { useAuthGuard } from '../../../features/auth/model/useAuthGuard';
import { ErrorMessage } from '../../../shared/ui/ErrorMessage';
import { useState } from 'react';
import { CreateUserModal } from '../../../features/users/create/ui/CreateUserModal';
import { EditUserModal } from '../../../features/users/edit/ui/EditUserModal';

export function UsersPage() {
  useAuthGuard(); 

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const { data, isLoading, error } = useUsers();

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <Button onClick={logout}>Выход</Button>
      </div>

      <List
        loading={isLoading}
        dataSource={data}
        renderItem={(user: User) => (
          <List.Item onClick={() => setSelectedUser(user)}>
            <List.Item.Meta
              avatar={<Avatar src={user.avatar} />}
              title={user.name}
              description={`Зарегистрирован ${formatDate(user.createdAt)}`}
            />
          </List.Item>
        )}
      />

      {error && <ErrorMessage message='Ошибка загрузки пользователей' /> }

      <div style={{ marginTop: 24, textAlign: 'left' }}>
        <Button type="primary" onClick={() => setIsCreateOpen(true)}>Создать пользователя</Button>
      </div>

      <CreateUserModal open={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
      { selectedUser && ( <EditUserModal open={!!selectedUser} onClose={() => setSelectedUser(null)} user={selectedUser} />) }
    </div>
  );
}
