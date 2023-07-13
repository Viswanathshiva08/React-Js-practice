import React from 'react'
import PropTypes from 'prop-types';
import './Header.css';
import Button from '../Button/Button';

 const Header = ({title}) => {

  const onClick = () => {
    console.log('on click');
  }
  return (
    <header className='header'>
      <h2>{title}</h2>
      <Button color='green' text='Add' onClick={onClick}/>

    </header>


  )
}

/*
 const Header = (props) => {
  return (
    <h3>{props.title}</h3>
style={headingStyle}
  )
}


*/
    
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}

// CSS in JS file
const headingStyle = {
  color:'green', 
  backgroundColor:'black'
}

export default Header;