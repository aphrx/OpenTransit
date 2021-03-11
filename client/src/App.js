import React, { useEffect } from 'react';
import Map from './components/Map/Map';
import HUD from './components/HUD/HUD';
import { useDispatch } from 'react-redux';
import { getTrains } from './actions/trains';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setInterval(() => {
            dispatch(getTrains());
        }, 500)
        
    }, [dispatch]);

    return (
        <div>
            <Map />
            <HUD />
        </div>
    )
}

export default App;