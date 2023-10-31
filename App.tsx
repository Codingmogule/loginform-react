// import Message from "./Message";//after importing now we can use it
import "./App.css"
import React, { useState } from "react"; //for us to create logic for which form is going to be displayed first

import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
function App() {
  //create a new component for app
  const [currentForm, setCurrentForm] = useState("Login"); //creating new state

  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm(formName);
  }; //to add functionality to the button.Function takes for name as an argument

  //modify the logic inside return
  return (
    <>
      <div>
        
        <LoginPage/>
        <RegisterPage/>
      </div>
      {currentForm == "login" ? (
        <LoginPage onFormSwitch={toggleForm} />
      ) : (
        <RegisterPage onFormSwitch={toggleForm} />
      )}
    </>
  );
  //pass function toggle form to our current form
  //we want to have our message component in the div so we need to import it
} /* //now we can use the component message just like any other html element */
export default App; //so it can be used somewhere else
