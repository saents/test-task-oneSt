import {JSX, useEffect} from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/hooks/hooks";

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const router = useRouter();
    const { isAuthenticated } = useAppSelector((state) => state.user);

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace("/login");
        }
    }, [isAuthenticated, router]);

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;
