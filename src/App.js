import React, { Component } from 'react';
import formatNumber from 'format-number';
import profile from './images/profile.jpg';
import './App.css';
import { store } from './store';
import { setBalance } from './actions';
class App extends Component {
  render() {

    const handleWithdraw = e => {
      const money = Number(e.target.dataset.cash);
      store.dispatch(setBalance(money));
    };
    return (
      <div className='App'>
        <img className='App__userpic' src={profile} alt='user' />
        <p className='App__username'>Hello, {store.getState().username}! </p>
        <div className='App__amount'>
          {formatNumber({ prefix: '$' })(store.getState().amount)}
          <p className='App__amount--info'>Total Amount</p>
        </div>

        <section className='App__buttons'>
          <button onClick={handleWithdraw} data-cash={10000}>
            WITHDRAW $10,000
          </button>
          <button onClick={handleWithdraw} data-cash={5000}>
            WITHDRAW $5,000
          </button>
        </section>

        <p className='App__giveaway'>Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
