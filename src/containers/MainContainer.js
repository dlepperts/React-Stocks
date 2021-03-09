import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      stocks: [],
      sortBy: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocksArr => {
      const updatedStocks = stocksArr.map(stockObj => {
        return {
          ...stockObj,
          isBought: false
        }
      })
      this.setState({
        stocks: updatedStocks
      })

    })
  }

  buyOrSell = (id) => {
    const updatedStocks = this.state.stocks.map(stockObj => {
      if (stockObj.id === id) {
        return {
          ...stockObj,
          isBought: !stockObj.isBought
        }
      } else {
        return stockObj
      }
    })

    this.setState({
      stocks: updatedStocks
    })
  }

  updateSortBy = (e) => {
    console.log(e.target.value)
    // this.setState({
    //   sortBy: e.target.value
    // })
  }

  renderStocks = () => {
    let updatedStocks = []
    this.state.stocks.map(stockObj => {
      if (stockObj.isBought === false) {
        updatedStocks.push(stockObj)
      } 
    })
    // return updatedStocks

    if (this.state.sortBy === 'alphabetically') {

      updatedStocks.sort(function(stockA, stockB) {
        const nameA = stockA.name.toUpperCase(); // ignore upper and lowercase
        var nameB = stockB.name.toUpperCase(); // ignore upper and lowercase
        
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

    } 
    // else if (this.state.sortBy === 'description') {
    //   updatedTransactions.sort(function(transactionA, transactionB) {
    //     const descriptionA = transactionA.description.toUpperCase(); // ignore upper and lowercase
    //     var descriptionB = transactionB.description.toUpperCase(); // ignore upper and lowercase
        
    //     if (descriptionA < descriptionB) {
    //       return -1;
    //     }
    //     if (descriptionA > descriptionB) {
    //       return 1;
    //     }
    //     return 0;
    //   });
    return updatedStocks
  }

  renderMyStocks = () => {
    let updatedStocks = []
    this.state.stocks.map(stockObj => {
      if (stockObj.isBought === true) {
        updatedStocks.push(stockObj)
      } 
    })
    return updatedStocks
  }

  render() {
    // console.log(this.state.stocks)
    return (
      <div>
        <SearchBar updateSortBy={this.updateSortBy}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.renderStocks()} buyOrSell={this.buyOrSell} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.renderMyStocks()} buyOrSell={this.buyOrSell}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
