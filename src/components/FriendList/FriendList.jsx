import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem.jsx';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friends-list']}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
