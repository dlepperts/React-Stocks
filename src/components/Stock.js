import React from 'react'

const Stock = (props) => {
  const {id, ticker, name, type, price} = props.stock
  // console.log(props.handleClick)

  return (
    <div className="card" onClick={() => props.buyOrSell(id)}>
      <div className="card-body">
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">{
            price
          }</p>
      </div>
    </div>
  )
};

export default Stock;
