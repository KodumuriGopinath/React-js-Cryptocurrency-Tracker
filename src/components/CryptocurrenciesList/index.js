// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrency()
  }

  getCryptocurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    console.log(blogsData)
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <div className="currency-container">
              <div className="currency-items">
                <p className="coin-type">Coin Type</p>
                <div className="usd-and-euro">
                  <p className="usd">USD</p>
                  <p className="usd">EURO</p>
                </div>
              </div>
              <ul>
                {blogsData.map(item => (
                  <CryptocurrencyItem currencyData={item} key={item.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
