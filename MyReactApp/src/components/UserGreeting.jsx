import PropTypes from "prop-types";
function UserGreeting(props) {
// TODO
// change both statements to variables. 
return(props.isLoggedIn ? <h3>welcome {props.username}</h3> : <h3>pls login</h3>)
}

UserGreeting.propTypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string
}
export default UserGreeting;
