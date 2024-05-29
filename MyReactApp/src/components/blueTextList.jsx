
import  {useState} from "react";

function BlueTextList(){

    const [list, updateList]  = useState([]);

    const handleInputChange = (Event) => {
        updateList([...list, Event.target.value]);
        Event.target.value = " ";
    };

    return (
      <div>
        <input type="text" onBlur={handleInputChange} />
        <ul>
          {list.map((item, index) => (
            <li key={index} style={{ color: "blue" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );


}

export default BlueTextList;