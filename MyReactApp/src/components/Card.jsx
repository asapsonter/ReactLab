import mypic from '../assets/mypic.jpg'

function MyCard(){
    return(
        <div className="card">
            <img className='card-image' src={mypic} alt="profile pic"></img>
           <h2> Sam Sonter</h2>
            <h1 style={{color: "green"}}>hahah</h1>
        </div>
    );
}

export default MyCard