import PropTypes from "prop-types";
function UserGreeting(props) {
    const welcomeMsg = <h3 className="welcomeMsg">welcome {props.username}</h3>
    const loginMsg = <h3 className="plsLogin">pls login</h3> 
return props.isLoggedIn ? welcomeMsg : loginMsg;
}

UserGreeting.propTypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string
}
export default UserGreeting;
