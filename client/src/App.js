import React, { useEffect } from 'react';
import Map from './components/Map/Map';
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
        </div>
    )
}

export default App;