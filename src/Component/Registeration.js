import React from "react";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
function App() {
  const history = useHistory();

  const profilePage = () => {
    history.push("/profile");
    handle();
  };

  const handle = () => {
    var fname = document.getElementById("fname").value;
    localStorage.setItem("fname", fname);
    var lname = document.getElementById("lname").value;
    localStorage.setItem("lname", lname);
    var aboutMe = document.getElementById("aboutme").value;
    localStorage.setItem("aboutme", aboutMe);
    var age = document.getElementById("age").value;
    localStorage.setItem("age", age);
    var gender = document.getElementById("gender").value;
    localStorage.setItem("gender", gender);
  };

  return (
    <>
      <p className="title">
        <h1><center>Registration Form</center></h1>
      </p>

      <form className="App">
        <div>
          <label>First name : </label>
          <input type="text" name="fname" id="fname" placeholder="First Name" required />
          <br />
        </div>
        <div>
          <label>Last name : </label>
          <input type="text" name="lname" id="lname" placeholder="Last Name" />
          <br />
        </div>
        <div>
          <label>About yourself : </label>{" "}
          <textarea rows="9" cols="50" id="aboutme" /> <br />
          <br />
        </div>
        <label for="avatar">Choose a profile picture: </label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
        <br />
        <label for="age">Age : </label>
        <select name="age1" id="age">
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="38">38</option>
        </select>
        <br />
        <div id="gender">
          <label>Gender : </label>
          <input type="radio" name="gender" value="Male" />Male
          <input type="radio" name="gender"  value="Female" />Female
        </div>
        <br />
        <div id="skill">
          <label>Skills : </label>
          <label> React</label>{" "}
          <input type="checkbox" name="field name" value="React" />
          <label> Java</label>{" "}
          <input type="checkbox" name="field name" value="Java" />
          <label> NodeJS</label>{" "}
          <input type="checkbox" name="field name" value="NodeJS" />
          <label> .Net </label>{" "}
          <input type="checkbox" name="field name" value=".Net" />
          <br />
        </div>

        <div>
          <li>
            <Link to="">Already Have an account</Link>
          </li>
          <br />
          <li>
            <Link to="">Forgot Password</Link>
          </li>
        </div>

        <br />

        <button className="btn btn-success" onClick={profilePage}>
          SUBMIT
        </button>
      </form>
    </>
  );
}

export default App;
