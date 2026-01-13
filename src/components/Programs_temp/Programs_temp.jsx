import React from 'react'
import './Programs_temp.css'
import Buy_car from '../../assets/Buy_car.png'
import Sell_car from '../../assets/Sell_car.jpeg'
import Finance_car from '../../assets/Finance_car.jpg'
import Buy_car_icon from '../../assets/Buy_car_icon.png'
import Sell_car_icon from '../../assets/Sell_car_icon.jpg'
import Finance_car_icon from '../../assets/Finance_car_icon.png'




const Programs_temp = () => {
  return (
    <div className='programs' id="">
        <div className="program">
            <img src={Buy_car} alt="" />
           <div className="caption">
            <img src={Buy_car_icon} alt=""/>
           <p>buy a car</p>
           </div>
    </div>
        <div className="program">
            <img src={Sell_car} alt="" />
            <div className="caption">
            <img src={Sell_car_icon} alt=""/>
           <p>sell a car</p>
           </div>
    </div>
        <div className="program">
            <img src={Finance_car} alt="" />
            <div className="caption">
            <img src={Finance_car_icon} alt=""/>
           <p>Finance a car</p>
           </div>
    </div>
    </div>
  )
}

export default Programs_temp
