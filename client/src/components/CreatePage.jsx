import { useState } from "react";
import "../App.css";
import "./Page.css";

function CreatePage() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(event) {
    event.preventDefault();
    setShow(true);
    setUsername(document.getElementById("username").value);
    setEmail(document.getElementById("email").value);
    setPassword(document.getElementById("password").value);
  }
  return (
    <>
      <form onSubmit={submit}>
        <label for="username">
          Username:
          <input type="text" id="username" name="username" />
        </label>
        <br />
        <br />
        <label for="email">
          Email:
          <input type="email" id="email" name="email" />
        </label>
        <br />
        <br />
        <label for="password">
          Password:
          <input type="password" id="password" name="password" />
        </label>
        <br />
        <br />
        <button type="submit"> Submit </button>
      </form>
      <p>
        {show && (
          <>
            <div className="box-view">
              <span>Username</span>: {username}
              <br />
              <span>Email</span>: {email}
              <br />
              <span>Password</span>: {password}
            </div>
          </>
        )}
      </p>
    </>
  );
}

export default CreatePage;
