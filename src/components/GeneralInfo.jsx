import { useContext } from "react";
import { FormContext } from "../context/formContext";
function GeneralInfo() {
  // Parse in objects state and destructure from App data and control for general input
  const { data, control } = useContext(FormContext);
  const { general } = data;
  const { setGeneral } = control;
  // Destructure data further more for testing
  const { name, email, number } = general;

  function handleInput(e) {
    setGeneral((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  return (
    <>
      <div id="general-info">
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={handleInput}
          name="email"
          id="email"
          value={email}
        />
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleInput}
          name="name"
          id="name"
          value={name}
        />
        <input
          type="number"
          placeholder="Enter your Mobile number"
          onChange={handleInput}
          name="number"
          id="number"
          value={number}
        />
      </div>
    </>
  );
}
export default GeneralInfo;
