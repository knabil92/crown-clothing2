import React from 'react'
import './item.style.scss'
import {withRouter} from 'react-router-dom'

const Item = ({title, imageUrl, size, history, linkUrl}) => (
  <div className={`${size} item`}
  onClick={()=> history.push(`${linkUrl}`)}
  >
    <div
    className="background-image"
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    />
    <div className="inner-box">
      <h1 className="product">{title.toUpperCase()}</h1>
      <span className="shop-now">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(Item);