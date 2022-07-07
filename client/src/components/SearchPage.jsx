import { useState } from "react";
import "../App.css";
import "./Page.css";

function SearchPage() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExp] = useState("");
  const [level, setLevel] = useState("");

  function submit(event) {
    event.preventDefault();
    setShow(true);
    setUsername(document.getElementById("username").value);
    setEmail(document.getElementById("email").value);
    setExp(document.getElementById("exp").value);
    setLevel(document.getElementById("level").value);
  }
  return (
    <>
      <form onSubmit={submit}>
        <label for="username">
          Username:
          <input type="username" id="username" name="username" />
        </label>
        <br />
        <label for="email">
          Email:
          <input type="email" id="email" name="email" />
        </label>
        <br />
        <label for="exp">
          Experience:
          <input type="exp" id="exp" name="exp" />
        </label>
        <br />
        <label for="level">
          Level:
          <input type="level" id="level" name="level" />
        </label>
        <br />
        <button type="submit"> Search </button>
      </form>
      <p>
        {show && (
          <>
            <div className="box-view">
              <span>Username</span>: {username}
              <br />
              <span>Email</span>: {email}
              <br />
              <span>Experience</span>: {experience}
              <br />
              <span>Level</span>: {level}
              <br />
            </div>
          </>
        )}
      </p>
    </>
  );
}

export default SearchPage;
