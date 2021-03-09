import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.stocks.map(stockObj => {
              return <Stock key={stockObj.id} stock={stockObj} buyOrSell={this.props.buyOrSell}/>
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
