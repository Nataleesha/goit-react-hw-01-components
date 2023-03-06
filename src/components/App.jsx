import { Profile } from './Profile/Profile.jsx';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics.jsx';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList.jsx';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './Transaction/TransactionHistory.jsx';
import transactions from './Transaction/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Statistics" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
