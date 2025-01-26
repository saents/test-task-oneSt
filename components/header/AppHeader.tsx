import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout } from 'antd';
import { useAppSelector, useAppDispatch } from '@/store/hooks/hooks';
import { logout } from '@/store/slices/userSlice';
import Image from "next/image";
import AppLogo from "@/public/images/letter-n.png";

const { Header } = Layout;

// Extend this interface so we can store href for active check
interface NavItem {
    key: string;
    label: string;
    href?: string;               // optional, because logout won't link anywhere
    onClick?: () => void;        // optional, for special items like logout
}

const AppHeader: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAppSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(logout());
        router.push('/login');
    };

    // Build your nav items
    const items: NavItem[] = useMemo(() => {
        return [
            {
                key: 'home',
                label: 'Home',
                href: '/',
            },
            {
                key: 'news',
                label: 'News',
                href: '/news',
            },
            {
                key: 'profile',
                label: 'Profile',
                href: '/profile',
            },
            ...(isAuthenticated
                ? [
                    {
                        key: 'logout',
                        label: 'Logout',
                        onClick: handleLogout,
                    },
                ]
                : [
                    {
                        key: 'login',
                        label: 'Login',
                        href: '/login',
                    },
                ]),
        ];
    }, [isAuthenticated]);

    return (
        <Header className="flex items-center w-full justify-between bg-white px-6 shadow-md">
            <div className="text-2xl font-bold text-blue-500">
                <Link href={'/'} className={'flex justify-center items-center gap-1.5'}>
                    <Image src={AppLogo} alt={'News App'} width={42} height={42}/>
                    News App
                </Link>
            </div>
            <nav>
                <ul className="flex space-x-6">
                    {items.map((item) => {
                        // Check if item is “active” by comparing the router pathname to `item.href`
                        const isActive = item.href && router.pathname === item.href;

                        // Common styling for all nav items
                        let navItemClasses = 'text-gray-700 hover:text-blue-500';
                        // If it’s active, override some classes
                        if (isActive) {
                            navItemClasses = 'text-blue-500 font-semibold';
                        }

                        if (item.onClick) {
                            // For logout (or any clickable item without href)
                            return (
                                <li key={item.key}>
                                    <button
                                        onClick={item.onClick}
                                        className={navItemClasses}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            );
                        }

                        // If the item has a normal link
                        return (
                            <li key={item.key}>
                                <Link
                                    href={item.href || '#'}
                                    className={navItemClasses}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </Header>
    );
};

export default React.memo(AppHeader);
