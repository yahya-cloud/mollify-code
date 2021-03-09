import React, { useEffect} from 'react';
import Home from './Home/Home';
import About from './About/About';
import Stats from './Stats/Stats';

const HomePage = (props) => {

    useEffect(() => {
        props.setPage('home')
        return () => {
         props.setPage('not-home')
        }
    }, [props])
    return (
        <div >
            <Home />
            <About />
            <Stats />
         
        </div>
    )
}

export default HomePage;