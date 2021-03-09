import React, {useEffect} from 'react';
import './Home.css';
import Button from '../../UI/Button/Button';
import HomeSvg from '../../Svg/HomeSvg/HomeSvg';


const Home = () => {

    useEffect(() => {
        window.scroll(0, 0)
     }, [])
 

    return (
        <div id="home" className='home__section'>
           
            <div 
            data-aos="fade-in" 
            data-aos-easing="ease-in-out"  
            data-aos-once= {true}  
            className="home__section--textBox">
                <h1 className="main__heading heading--home">
                Mollify
                </h1>
                <p className="paragraph paragraph--home">
                Mollify means to appease   anger or sadness or anxiety. We are trying to do exactly that with the help of our application, Mollify.
                </p>


            <Button buttonType='scrollButton'>About us</Button>
                
            </div>
     
          <HomeSvg />      
</div>
    )
}

export default Home;