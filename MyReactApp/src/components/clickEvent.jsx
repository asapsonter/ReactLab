

function ClickEVent() {
    const handleClick = () => console.log("gong si");
    const handleClick2 = (name) => console.log(`${name}"gong si"`);
    return(<button onClick={()=>handleClick2("bro")}>Click me</button>)

}

export default ClickEVent;