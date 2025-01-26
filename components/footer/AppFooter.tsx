import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter: React.FC = () => {
    return (
        <Footer className="text-center bg-white px-6 shadow-md">
            ©2025 Created by Arman Manukyan
        </Footer>
    );
};

export default AppFooter;
