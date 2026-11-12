import { useEffect, useState } from "react";
import {
    addDoc,
    collection,
    getDocs,
    query,
    serverTimestamp,
    Timestamp,
    where,
} from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";

const commentsRef = collection(db, 'comments');

const byNewest = (a, b) =>
    (b._createdOn?.toMillis() ?? 0) - (a._createdOn?.toMillis() ?? 0);

export const useComments = (bookId) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (!bookId) {
            return;
        }

        let ignore = false;

        getDocs(query(commentsRef, where('bookId', '==', bookId)))
            .then(snapshot => {
                if (!ignore) {
                    setComments(
                        snapshot.docs
                            .map(snap => ({ _id: snap.id, ...snap.data() }))
                            .sort(byNewest)
                    );
                }
            })
            .catch(() => {
                if (!ignore) {
                    setComments([]);
                }
            });

        // cleanup: ignore a late response if the book changed or the page was left
        return () => {
            ignore = true;
        };
    }, [bookId]);

    return { comments, setComments };
};

export const useCreateComment = () => {
    const { userId } = useAuth();

    const create = async (bookId, name, comment) => {
        const data = { bookId, name, comment, _ownerId: userId };

        const ref = await addDoc(commentsRef, {
            ...data,
            _createdOn: serverTimestamp(),
        });

        // addDoc returns only a reference, so build the object the UI needs
        return { _id: ref.id, ...data, _createdOn: Timestamp.now() };
    };

    return { create };
};