import PropTypes from 'prop-types';
import { Item } from 'components/Statistics/Itemstat';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {{ title } && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
