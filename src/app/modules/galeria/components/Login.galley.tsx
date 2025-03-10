"use client";
import { useUserAuth } from "@/app/context/AuthContext";
import { useEffect, useState } from "react";

const LoginUser = () => {
    const { user, googleSignIn, logOut } = useUserAuth();
    const [loading, setLoading] = useState(true);

    const handleLogin = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // Simular una carga inicial
        const timer = setTimeout(() => {
            setLoading(false);
        }, 50);

        // Limpiar el timer cuando el componente se desmonte
        return () => clearTimeout(timer);
    }, []);

    console.log(user);

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : !user ? (
                <button className="bg-fuchsia-300 p-2 rounded-lg" onClick={handleLogin}>
                    Login
                </button>
            ) : (
                <div>
                    <p className="text-white font-semibold text-xl">Hola {user.displayName}</p>
                    <img
                        src={user.photoURL || ""}
                        alt="user"
                        className="w-10 h-10 rounded-full inline-flex"
                    />
                    <button className="bg-fuchsia-300 p-2 rounded-lg" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoginUser;