import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { checkAuthState } from "@/store/slices/userSlice";
import { fetchNews, setSearchQuery } from "@/store/slices/newsSlice";
import NewsList from "@/components/news/NewsList";
import AddNewsModal from "@/components/news/AddNewsModal";
import {Input, Button, Spin, Alert} from "antd";

const NewsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { searchQuery, error, loading  } = useAppSelector((state) => state.news);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {isAuthenticated} = useAppSelector((state) => state.user);
    useEffect(() => {
        dispatch(checkAuthState());
        dispatch(fetchNews());
    }, [dispatch]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (
        <MainLayout>
            <div className="mt-6 w-3/4 flex flex-col ">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">News Page</h1>
                    {
                        isAuthenticated && (
                            <Button type="primary" onClick={openModal}>
                                Add News
                            </Button>
                        )
                    }
                </div>

                <div className="mt-4 mb-4">
                    <Input
                        placeholder="Search news..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>

                {error && <Alert message={error} className={'text-center'} type="error" /> }
                {loading && <Spin size={"large"} />}

                <React.Suspense fallback={<Spin />}>
                    <NewsList />
                </React.Suspense>

                <AddNewsModal open={isModalVisible} onClose={closeModal} />
            </div>
        </MainLayout>
    );
};

export default NewsPage;
