

function ClickEVent() {
    //const handleClick = () => console.log("gong si");
    // const handleClick2 = (name) => console.log(`${name}"gong si"`);
    // return(<button onClick={()=>handleClick2("bro")}>Click me</button>)
    // let count = 0;
    // const handleclick = (name) =>{
    //     if(count < 3){
    //      count ++  
    //      console.log(`${name} "you clicked me" ${count} times`); 
    //     } else {
    //         console.log(`${name} stop clicking me`)
    //     }
        

    // };
    const handleclick = (event) => event.target.textContent = "So cool";

    return <button onClick={(event) => handleclick(event)}>Click me</button>;

}

export default ClickEVent;