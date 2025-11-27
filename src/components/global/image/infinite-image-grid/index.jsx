"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import Card from "@/components/global/card/Card";
import Link from "next/link";
import { slugify } from "@/lib/slug";

export default function InfiniteImageGrid({
  slug,
  initialData,
  initialPage,
  totalPages,
}) {
  const [foods, setFoods] = useState(initialData);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(initialPage < totalPages);

  const loadMoreRef = useRef(null);

  const fetchMore = useCallback(async () => {
    if (loading || !hasNextPage) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `${
          process.env.NEXT_PUBLIC_APP_URL
        }/api/image/search/${encodeURIComponent(slug)}?page=${
          page + 1
        }&limit=20`
      );

      setFoods((prev) => [...prev, ...res.data.data]);
      setPage(res.data.page);
      setHasNextPage(res.data.page < res.data.totalPages);
    } catch (err) {
      console.error("Error fetching more foods:", err);
    } finally {
      setLoading(false);
    }
  }, [loading, hasNextPage, page, slug]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMore();
        }
      },
      { threshold: 0.1 }
    );

    const el = loadMoreRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, [fetchMore]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {foods.map((food) => {
          const foodSlug = slugify(food.title);
          return (
            <div
              key={food._id}
              className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <Card slug={foodSlug} image={food} index={food._id} />
            </div>
          );
        })}
      </div>

      {loading && (
        <div className="flex justify-center items-center h-20">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}

      {hasNextPage && <div ref={loadMoreRef} className="h-10"></div>}
    </>
  );
}
