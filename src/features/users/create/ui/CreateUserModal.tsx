import { Modal, Form, Input, Button } from 'antd';
import { useCreateUser } from '../model/useCreateUser';
import { ErrorMessage } from '../../../../shared/ui/ErrorMessage';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function CreateUserModal({ open, onClose }: Props) {
  const [form] = Form.useForm();

  const mutation = useCreateUser(() => {
    form.resetFields();
    onClose();
  });

 const handleSubmit = async () => {
  try {
    const values = await form.validateFields();
    mutation.mutate(values);
  } catch (err) {
    console.log('Ошибка валидации:', err);
  }
};

  return (
    <Modal
      open={open}
      onCancel={mutation.isPending ? undefined : onClose}
      footer={null}
      title="Создать пользователя"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Имя"
          rules={[{ required: true, message: 'Введите имя' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="avatar"
          label="Ссылка на аватар"
          rules={[
            { required: true, message: 'Введите ссылку' },
            { type: 'url', message: 'Некорректная ссылка' },
          ]}
        >
          <Input />
        </Form.Item>

        <Button
          type="primary"
          onClick={handleSubmit}
          loading={mutation.isPending}
          disabled={mutation.isPending}
        >
          Создать
        </Button>
      </Form>

      {mutation.error && ( <ErrorMessage message={(mutation.error as Error).message} /> )}
    </Modal>
  );
}
