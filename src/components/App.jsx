import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateFullName(event) {
    const newFullName = event.target.value;
    const name = event.target.name;
    setFullName((prevName) => {
      if (name === "fName") {
        return {
          fName: newFullName,
          lName: prevName.lName,
          email: prevName.email
        };
      } else if (name === "lName") {
        return {
          fName: prevName.fName,
          lName: newFullName,
          email: prevName.email
        };
      } else {
        return {
          fName: prevName.fName,
          lName: prevName.fName,
          email: newFullName
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <h5>{fullName.email}</h5>
      <form>
        <input
          value={fullName.fName}
          name="fName"
          placeholder="First Name"
          onChange={updateFullName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={updateFullName}
          value={fullName.lName}
        />
        <input
          value={fullName.email}
          name="email"
          placeholder="email"
          onChange={updateFullName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
