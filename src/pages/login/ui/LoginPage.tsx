import { Form, Input, Button } from 'antd';
import { useLoginPage } from '../model/useLogin';
import { ErrorMessage } from '../../../shared/ui/ErrorMessage';
import { useAuthGuard } from '../../../features/auth/model/useAuthGuard';

export function LoginPage() {
  useAuthGuard();

  const { handleLogin, isLoading, error } = useLoginPage();

  const onFinish = (values: { username: string; password: string }) => {
    handleLogin(values.username, values.password);
  };

  return (
    <div style={{ maxWidth: 300, margin:  '50px auto' }}>
      <p>Авторизация</p>
      <Form onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: 'Введите логин' }]}>
          <Input placeholder="Логин" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Введите пароль' }]}>
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading} block>
          Войти
        </Button>
      </Form>

      {error && <ErrorMessage message={(error as Error).message} />}
    </div>
  );
}
