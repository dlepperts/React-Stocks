import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log(this.props.stocks)
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stockObj => {
            return <Stock key={stockObj.id} stock={stockObj} buyOrSell={this.props.buyOrSell}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;
