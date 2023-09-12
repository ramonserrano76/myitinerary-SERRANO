import React from 'react';
// import { createContext } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signInWithToken } from "./redux/userSlice.js";
import Home from './pages/Home/Home.jsx';
import Cities from './pages/Cities/Cities.jsx';
import CityDetail from './pages/CityDetail/CityDetail.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import LayoutMain from './layouts/Layoutmain/Layoutmain.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import io from 'socket.io-client'

// // Crea un contexto de Socket.io
// const SocketContext = createContext();

// const socket = io('http://localhost:8090/api/cities', {
//     withCredentials: true, // esto asegura que las credenciales se incluyan en las solicitudes
//     extraHeaders: {
//         //"my-custom-header": "abcd", // Agrega encabezados personalizados si es necesario
//     },
// })

// // Manejo de error de conexión WebSocket
// socket.on('connect_error', (error) => {
//     console.error('Error en la conexión WebSocket:', error);
// });

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutMain />,
        children: [
            {
                path: "/", // Ruta raíz
                element: <Navigate to="/home" />, // Redirigir a /home
            },
            {
                path: "/signin", // signin
                element: <SignIn />, // ruta a SignIn
            },
            {
                path: "/signup", // signin
                element: <SignUp />, // ruta a SignUp
            },
            {
                path: "/home", // Nueva ruta /home
                element: <Home />,
            },
            {
                path: "/cities",
                element: <Cities />,
            },
            {
                path: "/cities/:id",
                element: <CityDetail />,
            },
        ],
    },
])

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(signInWithToken());
        }
    }, []);
    return <RouterProvider router={router} />
}

export default App;

// return <SocketContext.Provider value={socket}>
// </SocketContext.Provider>