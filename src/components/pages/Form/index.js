import React, { useState } from "react";
import "./style.css";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../../utils/helpers";

function Form() {
  // Create state variables for the fields in the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, and message
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();

    // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // Then we check to see if the name is filled out, if not we send an error message to enter a name
    if (!name) {
      setErrorMessage("Please enter a name");
      return;
    }

    // Then we check to see if the message is filled out, if not we send an error message to enter a message
    if (!message) {
      setErrorMessage("Please enter a message");
      return;
    }

    // If successful, clear out the input values
    setName("");
    setEmail("");
    setMessage("");
    alert(`Thank you for your message! Natalie will get back to you soon!`);
  };

  return (
    <div className="form-container">
      <form className="form">
        <p>Name</p>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Full Name"
        />
        <p>Email</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Valid Email Address"
        />
        <p>Message</p>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter a Message"
          className="message-box"
        />
        <button type="button" class="submit-button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
