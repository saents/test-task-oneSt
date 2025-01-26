import React, { useEffect, useState } from "react";
import {Form, Input, Button, Alert, Card} from "antd";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { loginUser } from "@/store/slices/userSlice";
import { useRouter } from "next/router";
import MainLayout from "../components/layout/MainLayout";

const LoginPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { isAuthenticated, error, loading } = useAppSelector((state) => state.user);

    const [showError, setShowError] = useState<string | null>(null);

    useEffect(() => {
        if (isAuthenticated) {
            router.replace("/profile");
        }
    }, [isAuthenticated, router]);

    useEffect(() => {
        if (error) {
            setShowError(error);
        }

        return () => {
            setShowError(null);
        }
    }, [error]);

    const onFinish = (values: any) => {
        dispatch(loginUser({ username: values.username, password: values.password }));
    };

    return (
        <MainLayout>
            <div className="flex flex-col justify-center items-center w-full h-full ">
                <Card
                    className="min-w-96 max-w-96"
                    title={<h1 className="text-2xl p-5 text-center">Login Page</h1>}>
                    <Form
                        name="login-form"
                        onFinish={onFinish}
                        layout="vertical"
                        className="w-full max-w-sm"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{required: true, message: "Please input your username!"}]}
                        >
                            <Input placeholder="admin"/>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{required: true, message: "Please input your password!"}]}
                        >
                            <Input.Password placeholder="12345"/>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                className="mt-2"
                                block
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                    {
                        error && <Alert message={error} type="error" className="mt-4"/>
                    }
                </Card>
            </div>
        </MainLayout>
    );
};

export default LoginPage;
