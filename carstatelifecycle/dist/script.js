function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
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
class Car extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "changeColor",







    () => {
      this.setState({ color: "Brown" });
    });this.state = { brand: "Ford", model: "Mustang", color: "red", year: 1964 };}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "My ", this.state.brand), /*#__PURE__*/
      React.createElement("p", null, "It is a ",
      this.state.color, ", ", this.state.model, " from ", this.state.year, "."), /*#__PURE__*/

      React.createElement("button", {
        type: "button",
        onClick: this.changeColor }, "Change color")));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Car, null), document.getElementById('root'));