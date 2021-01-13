import React,{useState} from 'react';
import "./App.css";




function App() {

  const [firstName,setFirstName] = useState('')
  const [lastName,setlastName] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
 


  const submitForm = ()=>{
    var user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
  };


  

return (
    <div className="App">
      <form>
        <label htmlFor="firsName">first Name:</label>
        <input type = "text"
         id = "firstName" 
         onChange={(e)=>{setFirstName(e.target.value);
         }}
         />
        <label htmlFor = "lastName">last Name:</label>
        <input type = "text" 
        id = "lastName"
        onChange={(e)=>{setlastName(e.target.value);
        }}
        />
        <label htmlFor = "email">email:</label>
        <input type = "text" 
        id = "email"
        onChange={(e)=>{setemail(e.target.value);
        }}
        />
        <label htmlFor = "password">password:</label>
        <input type = "password" 
        id = "password"
        onChange={(e)=>{setpassword(e.target.value);
        }}
        />
        <input type = "button" onClick={submitForm} value = "Submit"/>
      </form>

     
    </div>
  );
}

export default App;