import React, { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../components/common/ProtectedRoute";
import {useAppDispatch, useAppSelector} from "@/store/hooks/hooks";
import { checkAuthState } from "@/store/slices/userSlice";

const ProfilePage: React.FC = () => {
    const {username} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(checkAuthState());
    }, [dispatch]);

    return (
        <ProtectedRoute>
            <MainLayout>
                <div className="mt-6 flex justify-center flex-col items-center gap-1.5">
                    <h1 className="text-2xl font-bold">Profile Page</h1>
                    <p>This page is only accessible when authenticated!</p>
                    <p>Some profile content or anything else you like.</p>
                    {username && <p>Username: {username}</p>}
                </div>
            </MainLayout>
        </ProtectedRoute>
    );
};

export default ProfilePage;
