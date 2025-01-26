import React from "react";
import MainLayout from "@/components/layout/MainLayout";

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <div className="mt-6">
                <h1 className="text-2xl font-bold">Welcome to the Home Page!</h1>
                <p>Some landing content or anything else you like.</p>
            </div>
        </MainLayout>
    );
};

export default HomePage;
