import PropTypes from 'prop-types'

//props = read-only properties that are shared between components.
// this allows parent components to send data to child components. 
function Student(props){

    return (
      <div className='student-card'>
        <p > Name: {props.name}</p>
        <p> Age: {props.age}</p>
        <p> Student: {props.isStudent ? "yes":"no"}</p>
      </div>
    );

}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: 'guest',
    age: 0,
    isStudent: false
}

export default Student