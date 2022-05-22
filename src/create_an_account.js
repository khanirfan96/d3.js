import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import './App.css';
import { Link } from "react-router-dom";


export default function Create__account() {

    const history = useHistory ();
    const Bar_page = () => {
      let path = `/Bar_chart`;
      history.push(path)
  }

  const initialValues = {  email: "", password: "", confirmpassword: "", phone_number: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const checkboxHandler = () => {
    
    setAgree(!agree);
    
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = "Password is required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Password is not matching!";
    } 

    if (!values.number) {
        errors.number = "Phone Number is required";
      } else if (values.number.length < 10) {
        errors.phone_number = "Phone Number must be 10 digits";
      } else if (values.number.length > 10) {
        errors.number = "Phone Number cannot exceed more than 10 characters";
      }
    return errors;
  };
  

  return (
    <div className="container">

    <form onSubmit={handleSubmit}>
      <h1>Create an account</h1>
      <div className="ui divider"></div>
      <div className="ui form">
      <div className="field">
          <label className="label-css">Your Email address</label>
          <br></br><br></br>
          <input
          className="input_field"
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="field">
          <label className="label-css">Your Password</label>
          <br></br><br></br>
          <input
           className="input_field"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <br></br>
        <div className="field">
          <label className="label-css">Confirm Your Password</label>
          <br></br><br></br>
          <input
           className="input_field"
            type="password"
            name="confirmpassword"
            value={formValues.confirmpassword}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.confirmpassword}</p>
        <div className="field">
          <label className="label-css">Your full name</label>
          <br></br><br></br>
          <input
           className="input_field"
            type="text"
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div className="field">
          <label className="label-css">Phone Number</label>
          <br></br><br></br>
          <input
           className="input_field"
            type="tel"
            name="number"
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.number}</p>
        <br></br><br></br>

        <div>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree"> <b>I read and agree to terms and conditions</b></label>
        </div>
        <br></br><br></br>
        <button onClick={Bar_page} >Craete Account</button>

        {/* <Button variant="contained" size="large" >Create Account</Button> */}
       
      </div>
    </form>
  </div>     
  );
}


