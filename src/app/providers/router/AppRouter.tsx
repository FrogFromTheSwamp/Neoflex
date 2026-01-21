import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../../../pages/login/ui/LoginPage';
import UsersPage from '../../../pages/users/ui/UsersPage';
import { Result } from 'antd';

export function AppRouter() {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      <Route
        path="/login"
        element={token ? <Navigate to="/users" /> : <LoginPage />}
      />

      <Route
        path="/users"
        element={token ? <UsersPage /> : <Navigate to="/login" />}
      />

      <Route
        path="*"
        element={<Result status="404" title="404" subTitle="Страница не найдена..." />}
      />
    </Routes>
  );
}
