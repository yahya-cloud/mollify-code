import React, {useState} from 'react';
import './Stats.css';

import StatCard from './StatCard/StatCard';
import {Bar} from 'react-chartjs-2';



const Stats = () => {

    
    const [data, setData] = useState({
        labels:["Cases", "Active", "Deaths","Recovered" ],
        datasets:[{
            label:"people",
            data:[11210799, 5945233 ,1133291, 4811942  ],
            backgroundColor:["#EAA62C","#E84D54","#7A4A81", "#25B5F1"],
        }]
    })

    const statCardsData = [
        {
            num: "1,12,10,799",
            info: "Cases",
            color: "#EAA62C"
        },
        {
            num: "59,45,233 ",
            info: "Active",
            color: "#E84D54"
        },
        {
            num: "11,33,291",
            info: "Deaths",
            color: "#7A4A81"
        },
        {
            num: "48,11,942",
            info: "Recovered",
            color: "#25B5F1"
        }
        
    ]

    return (
        <div className="stats__container">
        <h1
        data-aos="fade-up" 
        data-aos-easing="ease-int-out" 
        data-aos-duration="800"
        data-aos-once= {true}   
        className='main__heading heading--stats'> Why India Need Us</h1>
            <div className='info__container'>

            <div className='info__cards'>
                <p
                data-aos="fade-up" 
                data-aos-easing="ease-int-out" 
                data-aos-duration="800"
                data-aos-once= {true}  
                className='paragraph paragraph--info'>
                According to recent surveys and reports that has come out from them are concerning and need proper attention. Through mollify we are trying are best to solve the problem that people are facing ie reducing these numbers
                </p>

                <div className='info__cards--container'>

                {statCardsData.map((card,index) => {
                 return <StatCard 
                 key={index}
                 num={card.num}
                 info={card.info}
                 color={card.color}
                 animationDelay={((index + 1) * 200) / 2}
                 />
                })}
                </div>

            </div>

            <div
            data-aos="fade-up" 
            data-aos-easing="ease-int-out" 
            data-aos-duration="800"
            data-aos-offset= "200"
            data-aos-once= {true}  
            className='info__chart'>
            <Bar
            
            data= {data}
            options={{
                title:{
                display:true, 
                padding:15,
                text: "Per 100% people",
                fontColor:"#8f8f8f",
                fontSize: 20
                },
                
                layout:{
                    padding:{
                        top: 10
                    }
                },
                legend:{
                    display: false,
                    align: "center",
                    position:"bottom",
                    fontColor: "white",
                    labels:{
                        boxWidth:60,
                        fontSize:15,
                        fontColor: "#fff",
                        padding: 20
                    }
                },

                scales: {
                    yAxes: [{
                       ticks: {
                        min: 0,
                        }
                            }]
                        },
                
                // responsive: true,
                maintainAspectRatio:false          
                
            }}
            />
            </div>


            </div>
        </div>
    )
}


export default Stats;