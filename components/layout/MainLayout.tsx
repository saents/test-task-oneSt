import React from "react";
import { Layout } from "antd";
import AppHeader from "@/components/header/AppHeader";
import AppFooter from "@/components/footer/AppFooter";

const { Content } = Layout;

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Layout className="min-h-screen w-full">
            <AppHeader />
            <Content className="flex justify-center items-center p-4">{children}</Content>
            <AppFooter />
        </Layout>
    );
};

export default MainLayout;
