import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputLabel,
  NativeSelect,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

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
        <h1>
          <center>Registration Form</center>
        </h1>
      </p>

      <form className="register">
        <div>
          {/* <label>First name : </label> */}
          <TextField
            id="fname"
            label="First Name"
            variant="outlined"
            required
          />
          <br />
        </div>
        <div>
          {/* <label>Last name : </label> */}
          {/* <input type="text" name="lname" id="lname" placeholder="Last Name" /> */}
          <TextField id="lname" label="Last Name" variant="outlined" required />
          <br />
        </div>
        <div>
          {/* <label>About yourself : </label> */}
          <textarea
            rows="9"
            cols="50"
            id="aboutme"
            placeholder="About me"
          />{" "}
          <br />
          {/* <TextArea label="About me" /> */}
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
        <br />
        <InputLabel htmlFor="select">Age :</InputLabel>{" "}
        <NativeSelect id="age">
          <option value="18">18</option>
          <option value="18">19</option>
          <option value="18">20</option>
          <option value="20">21</option>
          <option value="18">22</option>
          <option value="18">23</option>
          <option value="18">24</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="38">38</option>
        </NativeSelect>
        <br />
        {/* <div id="gender">
          <label>Gender : </label>
          <input type="radio" name="gender" value="Male" />
          Male
          <input type="radio" name="gender" value="Female" />
          Female
        </div> */}
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          id="gender"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <br />
        <div id="skill">
          <label>Skills : </label>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="React"
            />

            <FormControlLabel control={<Checkbox />} label="Java" />

            <FormControlLabel control={<Checkbox />} label="NodeJS" />

            <FormControlLabel control={<Checkbox />} label=".Net" />
          </FormGroup>

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
