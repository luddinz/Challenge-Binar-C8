import { useState } from "react";
import "../App.css";
import "./Page.css";

function EditPage() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function submit(event) {
    event.preventDefault();
    setShow(true);
    setName(document.getElementById("name").value);
    setPhone(document.getElementById("phone").value);
  }
  return (
    <>
      <form onSubmit={submit}>
        <label for="name">
          Name:
          <input type="text" id="name" name="name" />
        </label>
        <br />
        <label for="phone">
          Phone:
          <input type="phone" id="phone" name="phone" />
        </label>
        <br />
        <button type="submit"> Edit </button>
      </form>
      <p>
        {show && (
          <>
            <div className="box-view">
              <span>Name</span>: {name}
              <br />
              <span>Phone</span>: {phone}
            </div>
          </>
        )}
      </p>
    </>
  );
}

export default EditPage;
