import { useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

const getErrorMessage = (err) => {
    switch (err.code) {
        case 'auth/invalid-credential':
        case 'auth/wrong-password':
        case 'auth/user-not-found':
            return "Email or password don't match.";
        case 'auth/email-already-in-use':
            return 'A user with this email already exists.';
        case 'auth/invalid-email':
            return 'Please enter a valid email address.';
        case 'auth/weak-password':
            return 'Password must be at least 6 characters long.';
        case 'auth/network-request-failed':
            return 'Network error. Please check your connection.';
        default:
            return 'Something went wrong. Please try again.';
    }
};

export const useLogin = () => {
    const login = async (email, password) => {
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            throw new Error(getErrorMessage(err));
        }
    };

    return { login };
};

export const useRegister = () => {
    const register = async (email, password, username) => {
        try {
            const credential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(credential.user, { displayName: username });
            return credential;
        } catch (err) {
            throw new Error(getErrorMessage(err));
        }
    };

    return { register };
};

export const useLogout = () => {
    useEffect(() => {
        signOut(auth);
    }, []);
};