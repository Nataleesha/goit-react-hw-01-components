import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.row}>
      <td className={css.cell}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}