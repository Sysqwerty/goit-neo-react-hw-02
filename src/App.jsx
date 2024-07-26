import Profile from './components/profile/Profile';
import userData from './userData.json';
import friends from './friends.json';
import FriendList from './components/friendList/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
