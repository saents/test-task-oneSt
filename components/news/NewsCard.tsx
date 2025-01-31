import React from "react";
import Image from "next/image";
import {Button, Card, message, Typography} from "antd";
import {getFibonacciNumber} from "@/utils";
import {isPrime} from "@/utils";
import {useAppDispatch, useAppSelector} from "@/store/hooks/hooks";
import {deleteNews} from "@/store/slices/newsSlice";
import {INewsItem, INewsItemSource} from "@/types/news";
import {tempImageUrl} from "@/utils";

interface NewsCardProps {
    news: INewsItem,
    index: number,
    key?: any
}

const NewsCard: React.FC<NewsCardProps> = ({news, index}) => {
    const dispatch = useAppDispatch();
    const {isAuthenticated} = useAppSelector((state) => state.user);
    const fibNumber = getFibonacciNumber(index);
    const primeCheck = isPrime(fibNumber);

    const handleDelete = () => {
        dispatch(deleteNews(String(news.id))).then(() => {
            message.success("News deleted successfully");
        });

    };

    return (
        <Card
            hoverable
            className="m-4 min-w-full"
            cover={
                <Image
                    src={news.urlToImage ?? tempImageUrl}
                    width={1000}
                    height={1000}
                    quality={100}
                    alt={news.title}
                    className="object-cover w-full h-52"
                />
            }
        >
            <Typography.Title level={3} className="text-xl font-bold">
                {news.title} -  Fib({index})={String(fibNumber)}{" "}
                {primeCheck && (
                    <span className="text-green-500 ml-2">(Prime!)</span>
                )}
            </Typography.Title>

            <Typography.Paragraph className="mt-2">{news.description}</Typography.Paragraph>

            <a href={news.url} target={'_blank'}>
                <Button className="mt-4 mr-5">
                    View source
                </Button>
            </a>

            {
                isAuthenticated && (
                    <Button danger className="mt-4" onClick={handleDelete}>
                        Delete
                    </Button>
                )
            }
        </Card>
    );
};

export default React.memo(NewsCard);
