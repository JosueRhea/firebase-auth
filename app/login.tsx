"use client";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const Login = () => {
  const handleOnClick = async () => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);

    const idToken = await userCredential.user.getIdToken();

    await fetch("/api/login", {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    window.location.reload();
  };
  return (
    <div>
      <button onClick={handleOnClick}>Login with Google</button>
    </div>
  );
};
