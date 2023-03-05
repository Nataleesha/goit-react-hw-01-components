import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem.jsx';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({friends}) => {
  console.log(css);
  return (
    <ul className={css['friends-list']}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array
};
