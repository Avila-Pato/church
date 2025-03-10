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
        <div className=" items-center inline-flex ">
            {loading ? (
                <p>Cargando...</p>
            ) : !user ? (
                <button className="bg-orange-600 p-2 rounded-xl font-semibold" onClick={handleLogin}>
                    Adm
                </button>
            ) : (
                <div>
                    {/* <p className="text-white font-semibold text-xl">Hola {user.displayName}</p> */}
                    <img
                        src={user.photoURL || ""}
                        alt="user"
                        className="w-10 h-10 rounded-full inline-flex"
                    />
                    <button className="bg-orange-600 p-2 rounded-xl font-semibold" onClick={handleLogout}>
                        Salir
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoginUser;