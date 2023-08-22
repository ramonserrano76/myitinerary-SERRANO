import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Cities from './pages/Cities/Cities.jsx';
import CityDetail from './pages/CityDetail/CityDetail.jsx';
import LayoutMain from './layouts/Layoutmain/Layoutmain.jsx';

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
                element: <CityDetail element={<CityDetailContainer />} />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

function CityDetailContainer() {
    const { id } = useParams(); // Obtiene el id de la URL

    // Hacer una llamada para obtener los datos del id
    // Supongamos que obtienes los datos en cityData
    const cityData = getCityDataById(id);

    return <CityDetail {...cityData} />;
}
export default App;