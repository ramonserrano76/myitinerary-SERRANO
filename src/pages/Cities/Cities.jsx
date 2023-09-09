import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../redux/citySlice';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './cities.css';
import Cards from '../../../src/components/cards/Cards.jsx';

const Cities = () => {

    const dispatch = useDispatch();
    const { data: cities, loading, error } = useSelector((state) => state.cities);
    const [filteredCities, setFilteredCities] = useState(cities);
    const inputBusqueda = useRef(null);
    const inputBusqueda2 = useRef(null);

    useEffect(() => {
        dispatch(fetchCities());        
        
    }, [dispatch]);

    useEffect(() => {
        // Esta parte se encargará de cargar todas las ciudades al principio
        if (cities && cities.length > 0) {
            setFilteredCities(cities);
        }
    }, [cities]);


    // Verificar si los datos se están cargando
    if (loading) {
        return <p>Loading...</p>;
    }

    // Verificar si ocurrió un error
    if (error) {
        return <p>Error: {error}</p>;
    }

    // Verificar si no hay datos disponibles
    if (!cities) {
        return <p>No data available</p>;
    }

    const handleInput = () => {
        const title = inputBusqueda.current.value.trim(); // Elimina espacios en blanco
        const location = inputBusqueda2.current.value.trim(); // Elimina espacios en blanco

        if (title === '' && location === '') {
            // Si ambos campos están vacíos, muestra todas las ciudades
            setFilteredCities(cities);
        } else {
            // Filtrar las ciudades por título y ubicación
            setFilteredCities(cities.filter((city) =>
                city.title.toLowerCase().includes(title.toLowerCase()) &&
                city.location.toLowerCase().includes(location.toLowerCase())
            ));
        }
    }

    return (
        <div className="cities-container">
            <div className="hero2">
                <div className="hero2-image-container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="searchByCountry" style={{ marginTop: '9rem', marginBottom: '5px' }}>Explore the cities and find your perfect trip.</label>
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

            {filteredCities.length > 0 ? (
                <div className="d-flex row mt-5" style={{ marginTop: '100px' }}>
                    {filteredCities.map((item) => (
                        <Cards key={item._id} item={item} />
                    ))}
                </div>
            ) : (
                <div className="d-flex row mt-5" style={{ marginTop: '100px' }}>
                    <p>No Data</p>

                </div>
            )}

        </div>
    );
}

export default Cities;