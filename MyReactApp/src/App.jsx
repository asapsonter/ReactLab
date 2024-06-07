

import './App.css'
import List from './components/List.jsx';

function App() {

  const frisbeeTeams = [
    { id: 1, name: "N one", rank: 1 },
    { id: 2, name: "nova", rank: 2 },
    { id: 3, name: "zen", rank: 3 },
    { id: 4, name: "storm", rank: 4 },
    { id: 5, name: "power new", rank: 5 },
  ];

  const footballTeams = [
    { id: 1, name: "N one", rank: 1 },
    { id: 2, name: "nova", rank: 2 },
    { id: 3, name: "zen", rank: 3 },
    { id: 4, name: "storm", rank: 4 },
    { id: 5, name: "power new", rank: 5 },
  ];

  return (
    <>
      <div className="card">
        <List items={frisbeeTeams} category= "fruits"/>
        <List items={footballTeams} category= "FootballTeams"/>
      </div>
    </>
  );
}

export default App
