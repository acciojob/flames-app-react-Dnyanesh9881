import React, { useState } from "react";
import "../styles/App.css";

let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [relationship, setRelationship] = useState("");
  const [btnClick, setBtnClick] = useState(false);
  // console.log(name1, name2)
  if (name1.trim() === "" && name2.trim() === "") {
    setBtnClick(false);
    setRelationship("Please Enter valid input");
    return;
  }
  function calculateRelationship(e) {
    e.preventDefault();
    let str1 = name1;
    let str2 = name2;
    for (let s of str1) {
      if (str2.includes(s)) {
        str1 = str1.replace(s, "");
        str2 = str2.replace(s, "");
      }
    }
    setName1(str1);
    setName2(str2);
    setBtnClick(true);
    setRelationship(arr[(str1.length + str2.length) % 6]);
  }

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <form>
        <input
          type="text"
          name="name1"
          data-testid="input1"
          placeholder="Enter First name"
          onChange={(e) => setName1(e.target.value)}
          //   value={name1}
        />
        <input
          type="text"
          name="name2"
          data-testid="input2"
          placeholder="Enter Second name"
          onChange={(e) => setName2(e.target.value)}
          //   value={name2}
        />
        <button
          data-testid="calculate_relationship"
          type="submit"
          onClick={(e) => calculateRelationship(e)}> calculate Relationship Future</button>
        <button
          data-testid="clear"
          type="reset"
          onClick={() => {
            setName1("");
            setName2("");
            setBtnClick(false);
            setRelationship("");
          }}> Reset</button>
      </form>
      <h3 data-testid="answer">{btnClick && relationship}</h3>
    </div>
  )
};

export default App;
