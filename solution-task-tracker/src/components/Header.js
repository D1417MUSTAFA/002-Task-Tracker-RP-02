//  import PropTypes from "prop-types";
// import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, toggleShow, showAddTask }) => {
  // const handleClick = () => {
  //   console.log("click with handle from header");
  // };
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button 
      toggleShow = {toggleShow}
      color = {showAddTask ? 'red' : 'purple'}
      text= {showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}/>
    </div>
  );
};

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };
// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };
// Header.defaultProps = { title:"Task Tracker"}

// title = "Task Default"  in props area
export default Header;
