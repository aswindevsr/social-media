import React from 'react'
import './trend-card.css'
import { TrendData } from '../../Data/TrendData'

const TrentCard = () => {
  return (
    <div className="trend-card">
        <h3>Trends for you</h3>
        {TrendData.map((item)=>(
            <div className="trend">
                <span>#{item.name}</span>
                <span>{item.shares}k shares</span>
            </div>
        ))}
    </div>
  )
}

export default TrentCard