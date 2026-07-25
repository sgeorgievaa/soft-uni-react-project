import { useCallback, useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/likes';

export const useLikes = (bookId) => {
    const [likes, setLikes] = useState([]);
    const { userId } = useAuth();

    const fetchLikes = useCallback(() => {
        if (!bookId) {
            return;
        }

        const searchParams = new URLSearchParams({
            where: `bookId="${bookId}"`,
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setLikes)
            .catch(() => setLikes([]));
    }, [bookId]);

    useEffect(() => {
        fetchLikes();
    }, [fetchLikes]);

    const myLike = likes.find(like => like._ownerId === userId);

    return {
        likesCount: likes.length,
        hasLiked: !!myLike,
        myLike,
        refetchLikes: fetchLikes,
    };
};

export const useToggleLike = () => {
    const { request: authRequest } = useAuth();

    const like = (bookId) => authRequest.post(baseUrl, { bookId });
    const unlike = (likeId) => authRequest.delete(`${baseUrl}/${likeId}`);

    return { like, unlike };
};