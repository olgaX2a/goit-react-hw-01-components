import "./App.css";
import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";

import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
// import transactions from './data/transactions.json';
// import friends from './data/friends.json';

function App() {
  return (
    <>
      <Container>
        <Profile
          avatarUrl={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={statisticalData} />
      </Container>
      <Container>
        <Statistics stats={statisticalData} />
      </Container>
      {/* <Container>
        <FriendList friends={friends} />
      </Container>
      <Container>
        <TransactionHistory items={transactions} />
      </Container> */}
    </>
  );
}

export default App;
