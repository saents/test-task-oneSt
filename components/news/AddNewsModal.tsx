import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { useAppDispatch } from "@/store/hooks/hooks";
import { addNews } from "@/store/slices/newsSlice";

interface AddNewsModalProps {
    open: boolean;
    onClose: () => void;
}

const AddNewsModal: React.FC<AddNewsModalProps> = ({ open, onClose }) => {
    const dispatch = useAppDispatch();

    const [form] = Form.useForm();

    const handleCancel = () => {
        form.resetFields();
        onClose();
    };

    const handleOk = () => {
        form.validateFields().then((values) => {
            const { title, description, imageUrl, sourceUrl } = values;
            dispatch(
                addNews({
                    title,
                    description,
                    author: "",
                    content: "",
                    publishedAt: "",
                    source: {
                        id: "",
                        name: ""
                    },
                    url: sourceUrl,
                    urlToImage: imageUrl
                })
            ).then(() => {
                form.resetFields();
                onClose();
            });
        });
    };

    return (
        <Modal
            title="Add News"
            open={open}
            onCancel={handleCancel}
            footer={null}
        >
            <Form form={form} layout="vertical" onFinish={handleOk}>
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: "Title is required!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: "Description is required!" }]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    label="Image URL"
                    name="imageUrl"
                    rules={[
                        { required: true, message: "Image URL is required!" },
                        {
                            // 1) An http/https URL:  https://..., http://...
                            // 2) A data URI for images (Base64 encoded): data:image/<type>;base64,...
                            pattern: /^((https?:\/\/.*)|(data:image\/[a-zA-Z0-9+\/]+;base64,.*))$/,
                            message:
                                "Image URL must start with http://, https://, or be a data:image/...;base64 URI"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Source URL"
                    name="sourceUrl"
                    rules={[
                        { required: true, message: "Source URL is required!" },
                        {
                            pattern: /^https?:\/\/.+/i,
                            message: "Source URL must start with http:// or https://"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item className={'flex justify-end pt-4'}>
                    <Button className={'min-w-20'} htmlType="submit" type="primary">
                        Add
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddNewsModal;
