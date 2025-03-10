/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase-admin";

// Lista de correos permitidos
const ALLOWED_EMAILS = ["iglesiaimep6@gmail.com", "p.avilaf1998@gmail.com"];

const AuthContext = createContext<{
  user: any;
  googleSignIn: () => void;
  logOut: () => void;
}>({
  user: null,
  googleSignIn: () => {},
  logOut: () => {},
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user.email && !ALLOWED_EMAILS.includes(user.email)) {
          signOut(auth); // Cierra la sesión si el correo no está permitido
          alert("Acceso denegado. Solo usuarios autorizados pueden iniciar sesión.");
        }
      })
      .catch((error) => {
        // manejando errores 
        if (error.code === "auth/cancelled-popup-request") {
          console.log("La solicitud de inicio de sesión fue cancelada.");
        } else if(error.code === "auth/popup-closed-by-user") {
          console.log("La ventana emergente de inicio de sesión fue cerrada.");
        } else {
          console.error("Error al inciar sesion con Google:", error);
        }
      });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email && ALLOWED_EMAILS.includes(currentUser.email)) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};