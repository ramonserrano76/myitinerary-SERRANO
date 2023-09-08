import React, { useEffect, useRef, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../redux/citySlice';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap styles
import './cities.css';
import Cards from '../../../src/components/cards/Cards.jsx';
import { createContext } from 'react';

// Crea un contexto de Socket.io
const SocketContext = createContext();

const Cities = () => {
    const dispatch = useDispatch();
    const { data: fetchCitiesData, loading, error } = useSelector((state) => state.cities);

    // Crea las referencias para los inputs de búsqueda
    const inputBusqueda = useRef(null);
    const inputBusqueda2 = useRef(null);

    // Estado local para las ciudades filtradas
    const [filteredCities, setFilteredCitiesLocal] = useState([]);

    useEffect(() => {
        // Inicializa filteredCities con los datos iniciales
        setFilteredCitiesLocal(fetchCitiesData);

        dispatch(fetchCities());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!fetchCitiesData) {
        return <p>No data available</p>;
    }

    const handleInput = () => {
        const title = inputBusqueda.current.value;
        const location = inputBusqueda2.current.value;

        // Realiza la búsqueda en la lista de ciudades
        const filteredCities = fetchCitiesData.filter((city) => {
            return city.title.toLowerCase().includes(title.toLowerCase()) && city.location.toLowerCase().includes(location.toLowerCase());
        });

        // Actualiza el estado local con las ciudades filtradas
        setFilteredCitiesLocal(filteredCities);
    };

    return (
        <div className="cities-container">
            <div className="hero2">
                <div className="hero2-image-container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="searchByCountry"  style={{ marginTop: '9rem', marginBottom: '5px' }}>Explore the cities and find your perfect trip.</label>
                                <input
                                    type="text"
                                    className="form-control min-w-0"
                                    placeholder="Search by Country"
                                    alt="Search by Country"
                                    id="searchByCountry"
                                    onInput={handleInput}
                                    ref={inputBusqueda}
                                />
                                <input
                                    type="text"
                                    className="form-control min-w-0"
                                    placeholder="Search by City"
                                    alt="Search by City"
                                    id="searchByCity"
                                    onInput={handleInput}
                                    ref={inputBusqueda2}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex row mt-5" style={{ marginTop: '100px' }}>
                {filteredCities.map((item) => (
                    <Cards key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Cities;
