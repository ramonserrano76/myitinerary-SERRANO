import React from 'react';
import { createContext } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Cities from './pages/Cities/Cities.jsx';
import CityDetail from './pages/CityDetail/CityDetail.jsx';
import LayoutMain from './layouts/Layoutmain/Layoutmain.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client'

// Crea un contexto de Socket.io
const SocketContext = createContext();

const socket = io('http://localhost:8090/api/cities', {
    withCredentials: true, // esto asegura que las credenciales se incluyan en las solicitudes
    extraHeaders: {
        //"my-custom-header": "abcd", // Agrega encabezados personalizados si es necesario
    },
})

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
    return <SocketContext.Provider value={socket}>
        <RouterProvider router={router} />
        </SocketContext.Provider>
}

export default App; 