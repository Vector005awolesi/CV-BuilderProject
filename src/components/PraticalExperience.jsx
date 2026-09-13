import { useContext } from "react";
import { FormContext } from "../context/formContext";
export default function PraticalExperience() {
  const { data, control } = useContext(FormContext);
  const { pratical } = data;
  const { setPratical } = control;
  const { companyName, position, about, dateFrom, dateUntil } = pratical;

  function handleInput(e) {
    setPratical((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <div id="praticalExperience">
        <input
          type="text"
          placeholder="Current Company name"
          name="companyName"
          id="companyName"
          onChange={handleInput}
          value={companyName}
        />
        <input
          type="text"
          placeholder="Current Position"
          name="position"
          id="position"
          onChange={handleInput}
          value={position}
        />
        <textarea
          name="about"
          id="about"
          placeholder="Tell us about your self"
          onChange={handleInput}
          value={about}
        ></textarea>
        <input
          type="date"
          name="dateFrom"
          id="dateFrom"
          onChange={handleInput}
          value={dateFrom}
        />
        <input
          type="date"
          name="dateUntil"
          id="dateUntil"
          onChange={handleInput}
          value={dateUntil}
        />
      </div>
    </>
  );
}
