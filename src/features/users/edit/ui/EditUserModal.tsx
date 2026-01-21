import { Modal, Form, Input, Button } from "antd";
import { useEditUser } from "../model/useEditUser";
import { User } from "../../../../entities/user/types/user";
import { ErrorMessage } from "../../../../shared/ui/ErrorMessage";
import { useDeleteUser } from "../../delete/model/useDeleteUser";

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

  const deleteMutation = useDeleteUser(() => {
    onClose();
  });

  const handleDelete = () => {
    if (user) {
      deleteMutation.mutate(user.id);
    }
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        mutation.mutate({ id: user!.id, ...values });
      })
      .catch((err) => {
        console.log("Ошибка валидации:", err);
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
          rules={[{ required: true, message: "Введите имя" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="avatar"
          label="Ссылка на аватар"
          rules={[
            { required: true, message: "Введите ссылку" },
            { type: "url", message: "Некорректная ссылка" },
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
        <Button
          danger
          onClick={handleDelete}
          loading={deleteMutation.isPending}
          disabled={deleteMutation.isPending}
          style={{ marginTop: 16, marginLeft: 16 }}
        >
          Удалить
        </Button>

        {mutation.error && (
          <ErrorMessage message={(mutation.error as Error).message} />
        )}
        {deleteMutation.error && ( 
            <ErrorMessage message={(deleteMutation.error as Error).message} />
        )}
      </Form>
    </Modal>
  );
}
