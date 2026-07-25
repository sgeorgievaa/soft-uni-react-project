import { useCallback, useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/comments';

export const useComments = (bookId) => {
    const [comments, setComments] = useState([]);

    const fetchComments = useCallback(() => {
        if (!bookId) {
            return;
        }

        const searchParams = new URLSearchParams({
            where: `bookId="${bookId}"`,
            sortBy: '_createdOn desc',
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setComments)
            .catch(() => setComments([]));
    }, [bookId]);

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    return { comments, setComments };
};

export const useCreateComment = () => {
    const { request: authRequest } = useAuth();

    const create = (bookId, name, comment) => {
        return authRequest.post(baseUrl, { bookId, name, comment });
    };

    return { create };
};