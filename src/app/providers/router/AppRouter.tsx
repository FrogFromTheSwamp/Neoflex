import { Routes, Route} from 'react-router-dom';
import { LoginPage } from '../../../pages/login/ui/LoginPage';
import {UsersPage} from '../../../pages/users/ui/UsersPage';
import { Result } from 'antd';

export function AppRouter() {

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage /> }
      />

      <Route
        path="/users"
        element={<UsersPage /> }
      />

      <Route
        path="*"
        element={<Result status="404" title="404" subTitle="Страница не найдена..." />}
      />
    </Routes>
  );
}
