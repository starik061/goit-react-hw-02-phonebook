import PropTypes from 'prop-types';
import { Transaction } from "../Transaction/Transaction.jsx"
import {TransactionsTable } from "./TransactionsHistory.styled.jsx"
export const TransactionHistory = ({ items }) => {
    
  return (
    <TransactionsTable>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
          {items.map(({id, type, amount, currency}) => {
            return <Transaction key={id} type={type} amount={amount} currency={currency} />
 })}
  </tbody>
</TransactionsTable>
)    
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }