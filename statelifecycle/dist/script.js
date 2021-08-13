// From here: 1.

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 5000);

// to here: 2. 
// I see two functions: One Clock with props and the other 
// tick function as a regular function (ie: not component with react-DOM method in it)

// encapsulate the clock. dont know what that is but I play
// Clock was a function now it's a class
// date will be moved from props to state....stay tune...
// this.props gets replaced by this.state
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "Hello, world and back!"), /*#__PURE__*/
      React.createElement("h2", null, "It is ", this.state.date.toLocaleTimeString(), ".")));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(Clock, null), //this is redundant. it should be just <Clock />
// how do we do it? with STATE...
document.getElementById('root'));