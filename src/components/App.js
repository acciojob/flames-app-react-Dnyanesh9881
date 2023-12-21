import React, {useState} from "react";
import '../styles/App.css';

let arr=["Siblings", "Friends","Love", "Affection", "Marriage", "Enemy"];
const App =()=>{
    const[name1,setName1]=useState("");
    const[name2,setName2]=useState("");
  const[relationship, setRelationship]=useState(0);
    // console.log(name1, name2)

    function calculateRelationship(e){
     e.preventDefault();
     let str1=name1
     let str2=name2
     for(let s of str1){
        if(str2.includes(s)){
          str1=str1.replace(s,"");
            str2=str2.replace(s,"");
        }
     }
setName1(str1);
setName2(str2);
     setRelationship(arr[(str1.length+str2.length)%6]);

    }
    
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <form>
                <input type="text" data-testid="input1" placeholder="Enter First name"
                onChange={(e)=>setName1(e.target.value)}/>
                <input type="text" data-testid="input2" placeholder="Enter Second name"
                onChange={(e)=>setName2(e.target.value)}/>
                    <button data-testid="calculate_relationship" type="submit" onClick={(e)=>calculateRelationship(e)}>calculate Relationship Future</button>
                    <button data-testid="clear" type="reset" onClick={()=>setRelationship("")}>Reset</button>
                  
               </form>
               {
                relationship!="" && (
              <h3>{relationship}</h3>
               )}
        </div>
        )
    }
    



export default App;
