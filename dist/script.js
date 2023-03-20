const App = () => {
  const [exp, setExp] = React.useState("");
  const [ans, setAns] = React.useState(0);
  const display = sym => {
    setExp(prev => prev + sym);
  };
  const calculation = () => {
    setAns(eval(exp));
  };
  const allclear = () => {
    setExp("0");
    setAns(0);
  };
  const clear = () => {
    setExp(prev => prev.split("").slice(0, prev.length - 1).join(""));
    setAns(0);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "grid" }, /*#__PURE__*/
    React.createElement("div", { onClick: display, className: "dis" }, /*#__PURE__*/
    React.createElement("input", { type: "text", value: exp, placeholder: "0", id: "display", disabled: true }), /*#__PURE__*/React.createElement("div", { className: "total" }, ans)), /*#__PURE__*/

    React.createElement("button", { onClick: allclear, className: "padButton AC tomato", id: "clear" }, "AC"), /*#__PURE__*/
    React.createElement("button", { onClick: clear, className: "padButton C tomato", id: "c" }, "C"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("/"), className: "padButton div", id: "divide" }, "/"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("*"), className: "padButton times", id: "multiply" }, "\xD7"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("7"), className: "padButton seven dark-gray", id: "seven" }, "7"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("8"), className: "padButton eight dark-gray", id: "eight" }, "8"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("9"), className: "padButton nine dark-gray", id: "nine" }, "9"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("-"), className: "padButton minus", id: "subtract" }, "-"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("4"), className: "padButton four dark-gray", id: "four" }, "4"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("5"), className: "padButton five dark-gray", id: "five" }, "5"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("6"), className: "padButton six dark-gray", id: "six" }, "6"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("+"), className: "padButton plus", id: "add" }, "+"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("1"), className: "padButton one dark-gray", id: "one" }, "1"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("2"), className: "padButton two dark-gray", id: "two" }, "2"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("3"), className: "padButton three dark-gray", id: "three" }, "3"), /*#__PURE__*/
    React.createElement("button", { onClick: calculation, className: "padButton equal blue", id: "equals" }, "="), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("0"), className: "padButton zero dark-gray", id: "zero" }, "0"), /*#__PURE__*/
    React.createElement("button", { onClick: () => display("."), className: "padButton dot dark-gray", id: "decimal" }, "."))));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));