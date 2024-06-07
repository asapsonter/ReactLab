


function List(props) {
 /// prop key
  const teamsList = props.items;
  const category = props.category;
    
    // eslint-disable-next-line react/jsx-key
    const teams = teamsList.map(team => 
                    <li key={team.id}>
                    {team.name}:
              &nbsp;{team.rank}</li>);

    return(<>
    <h3>{category}</h3><ol>{teams}</ol>
        </>)
}


export default List