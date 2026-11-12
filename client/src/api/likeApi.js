import { useCallback, useEffect, useState } from "react";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    where,
} from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";

const likesRef = collection(db, 'likes');

export const useLikes = (bookId) => {
    const [likes, setLikes] = useState([]);
    const { userId } = useAuth();

    const fetchLikes = useCallback(() => {
        if (!bookId) {
            return;
        }

        getDocs(query(likesRef, where('bookId', '==', bookId)))
            .then(snapshot => setLikes(snapshot.docs.map(snap => ({ _id: snap.id, ...snap.data() }))))
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
    const { userId } = useAuth();

    // The ID "bookId_userId" is what makes a second like from the same user impossible
    const like = (bookId) => setDoc(doc(db, 'likes', `${bookId}_${userId}`), {
        bookId,
        _ownerId: userId,
        _createdOn: serverTimestamp(),
    });

    const unlike = (likeId) => deleteDoc(doc(db, 'likes', likeId));

    return { like, unlike };
};