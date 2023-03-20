const App = () => {
  const [exp,setExp]=React.useState("");
  const [ans,setAns]=React.useState(0);
  const display=(sym)=>{
    setExp((prev)=>prev+sym);
  };  
  const calculation=() => {
    setAns(eval(exp));
};
const allclear=()=>{
  setExp("0");
  setAns(0);
};
const clear=()=>{
  setExp(prev=>prev.split("").slice(0,prev.length-1).join(""));
  setAns(0);
};
  
  return (
    <div className="container">
      <div className="grid">
        <div onClick={display} className="dis" >
          <input type="text"  value={exp} placeholder="0" id="display" disabled/><div className="total" >{ans}</div>
        </div>
        <button onClick={allclear} className="padButton AC tomato"id="clear">AC</button>
        <button onClick={clear} className="padButton C tomato"id="c">C</button>
        <button onClick={()=>display("/")} className="padButton div" id="divide">/</button>
        <button onClick={()=>display("*")} className="padButton times"id="multiply">×</button>
        <button onClick={()=>display("7")} className="padButton seven dark-gray" id="seven">7</button>
        <button onClick={()=>display("8")} className="padButton eight dark-gray"id="eight">8</button>
        <button onClick={()=>display("9")} className="padButton nine dark-gray"id="nine">9</button>
        <button onClick={()=>display("-")} className="padButton minus"id="subtract">-</button>
        <button onClick={()=>display("4")} className="padButton four dark-gray"id="four">4</button>
        <button onClick={()=>display("5")} className="padButton five dark-gray"id="five">5</button>
        <button onClick={()=>display("6")} className="padButton six dark-gray"id="six">6</button>
        <button onClick={()=>display("+")} className="padButton plus"id="add">+</button>
        <button onClick={()=>display("1")} className="padButton one dark-gray"id="one">1</button>
        <button onClick={()=>display("2")} className="padButton two dark-gray"id="two">2</button>
        <button onClick={()=>display("3")} className="padButton three dark-gray"id="three">3</button>
        <button onClick={calculation} className="padButton equal blue"id="equals">=</button>
        <button onClick={()=>display("0")} className="padButton zero dark-gray"id="zero">0</button>
        <button onClick={()=>display(".")} className="padButton dot dark-gray"id="decimal">.</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
