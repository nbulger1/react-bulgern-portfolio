import React, { useState } from "react";
import "./style.css";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../../utils/helpers";

function Form() {
  // Create state variables for the fields in the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessageName, setErrorMessageName] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessageMessage, setErrorMessageMessage] = useState("");

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

  const handleEmailError = (e) => {
    if (!validateEmail(email)) {
      setErrorMessageEmail("Please enter a valid email");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
  };

  const handleNameError = (e) => {
    // Then we check to see if the name is filled out, if not we send an error message to enter a name
    if (!name) {
      setErrorMessageName("Please enter a name");
      return;
    }
  };

  const handleMessageError = (e) => {
    // Then we check to see if the message is filled out, if not we send an error message to enter a message
    if (!message) {
      setErrorMessageMessage("Please enter a message");
      return;
    }
  };

  const handleKeyPressName = (event) => {
    setErrorMessageName("");
  };

  const handleKeyPressEmail = (event) => {
    setErrorMessageEmail("");
  };

  const handleKeyPressMessage = (event) => {
    setErrorMessageMessage("");
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();

    // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessageEmail("Please enter a valid email");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // Then we check to see if the name is filled out, if not we send an error message to enter a name
    if (!name) {
      setErrorMessageName("Please enter a name");
      return;
    }

    // Then we check to see if the message is filled out, if not we send an error message to enter a message
    if (!message) {
      setErrorMessageMessage("Please enter a message");
      return;
    }

    // If successful, clear out the input values
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessageName("");
    setErrorMessageEmail("");
    setErrorMessageMessage("");
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
          className="name-box"
          required=""
          onBlur={handleNameError}
          onKeyDown={handleKeyPressName}
        />
        <p className="error-text">{errorMessageName}</p>
        <p>Email</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Valid Email Address"
          className="email-box"
          required=""
          onBlur={handleEmailError}
          onKeyDown={handleKeyPressEmail}
        />
        <p className="error-text">{errorMessageEmail}</p>
        <p>Message</p>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter a Message"
          className="message-box"
          required=""
          onBlur={handleMessageError}
          onKeyDown={handleKeyPressMessage}
        />
        <p className="error-text">{errorMessageMessage}</p>
        <button
          type="button"
          className="submit-button"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {/* {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )} */}
    </div>
  );
}

export default Form;
