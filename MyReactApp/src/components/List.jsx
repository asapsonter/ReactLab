


function List() {
    const frisbeeTeams = [
      { id: 1, name: "N one", rank: 1 },
      { id: 2, name: "nova", rank: 2 },
      { id: 3, name: "zen", rank: 3 },
      { id: 4, name: "storm", rank: 4 },
      { id: 5, name: "power new", rank: 5 },
    ];
    
    // eslint-disable-next-line react/jsx-key
    const teams = frisbeeTeams.map(team => <li key={team.id}>
                                                    {team.name}:
                                                    &nbsp;{team.rank}</li>);

    return( <ol>{teams}</ol>)
}


export default List