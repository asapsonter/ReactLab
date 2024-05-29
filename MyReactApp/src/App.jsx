

import './App.css'
import UserGreeting from './components/UserGreeting.jsx';

function App() {



  return (
    <>
      <div className="card">
        <UserGreeting isLoggedIn={true} username=" sam"/>
      </div>
    </>
  );
}

export default App
