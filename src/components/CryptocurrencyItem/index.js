// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currencyData

  return (
    <li className="item-list-container">
      <div className="logo-and-name">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>

      <div className="usd-and-euro-values">
        <p className="usd-value">{usdValue}</p>
        <p className="usd-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
