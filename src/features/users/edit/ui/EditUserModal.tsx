import { Modal, Form, Input, Button } from 'antd';
import { useEditUser } from '../model/useEditUser';
import { User } from '../../../../entities/user/types/user';
import { ErrorMessage } from '../../../../shared/ui/ErrorMessage';

interface Props {
  open: boolean;
  onClose: () => void;
  user: User | null; 
}

export function EditUserModal({ open, onClose, user }: Props) {
  const [form] = Form.useForm();

  const mutation = useEditUser(() => {
    form.resetFields();
    onClose();
  });

  const handleSubmit = () => {
    form.validateFields()
      .then((values) => {
        mutation.mutate({ id: user!.id, ...values });
      })
      .catch((err) => {
        console.log('Ошибка валидации:', err);
      });
  };

  return (
    <Modal
      open={open}
      onCancel={mutation.isPending ? undefined : onClose}
      footer={null}
      title="Редактировать пользователя"
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          id: user?.id,
          name: user?.name,
          avatar: user?.avatar,
        }}
      >
        <Form.Item label="ID" name="id">
          <Input disabled />
        </Form.Item>

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
          Сохранить
        </Button>

        {mutation.error && (
          <ErrorMessage message={(mutation.error as Error).message} />
        )}
      </Form>
    </Modal>
  );
}
