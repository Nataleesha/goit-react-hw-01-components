import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import { getRandomHexColor } from './randomHexColor';

export const Item = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
