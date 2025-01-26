import React, { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "@/store/hooks/hooks";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsCard from "./NewsCard";
import {generateKey} from "@/utils";

const ITEMS_PER_PAGE = 9;
const INITIAL_PAGE_ITEMS_LIST_COUNT = 10;

const NewsList: React.FC = () => {
    const { items, searchQuery, error, loading } = useAppSelector((state) => state.news);

    const filteredItems = useMemo(() => {
        return items.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, items]);

    const [visibleCount, setVisibleCount] = useState(INITIAL_PAGE_ITEMS_LIST_COUNT);

    useEffect(() => {
        setVisibleCount(ITEMS_PER_PAGE);
    }, [searchQuery]);

    const fetchMoreData = () => {
        // For demonstration, a small delay is added; in real use-cases you might fetch data from an API or do some async work here.
        setTimeout(() => {
            setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
        }, 200);
    };

    return (
        <InfiniteScroll
            className={'!overflow-hidden flex flex-wrap justify-center'}
            dataLength={visibleCount}
            next={fetchMoreData}
            hasMore={visibleCount < filteredItems.length}
            loader={<span />}
        >
            {filteredItems.slice(0, visibleCount).map((news, idx) => (
                <NewsCard key={generateKey(news.title)} news={news} index={idx} />
            ))}
        </InfiniteScroll>
    )
};

export default NewsList;
