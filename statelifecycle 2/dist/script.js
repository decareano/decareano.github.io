function MyComponent(props) {
  const someString = "something in the air";
  return /*#__PURE__*/(
    React.createElement("div", { className: "class1 class2" }, /*#__PURE__*/

    React.createElement("h2", null, "Hello, ", props.planet), /*#__PURE__*/
    React.createElement("p", null, someString), /*#__PURE__*/
    React.createElement("p", null, 18 + 4)));



}
const element1 = /*#__PURE__*/React.createElement(MyComponent, { planet: "Tierra" });
ReactDOM.render(
element1,
document.getElementById('root'));





// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }
// const element = <Welcome name="Sara" />
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )