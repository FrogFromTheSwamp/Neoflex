import { Alert } from 'antd';

export function ErrorMessage({ message }: { message: string }) {
  return <Alert message={message} type="error" showIcon />;
}
