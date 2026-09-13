import { useContext } from "react";
import { FormContext } from "../context/formContext";
export default function Education() {
  const { data, control } = useContext(FormContext);
  const { education } = data;
  const { setEducation } = control;
  const { schoolName, courseOfStudy, date } = education;

  function handleInput(e) {
    setEducation((p) => ({ ...p, [e.target.name]: e.target.value }));
  }
  return (
    <>
      <div id="educationSection">
        <input
          type="text"
          placeholder="Enter School Name"
          name="schoolName"
          id="schoolName"
          value={schoolName}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Enter Course of study"
          name="courseOfStudy"
          id="titleOfStudy"
          value={courseOfStudy}
          onChange={handleInput}
        />
        <input
          type="date"
          name="date"
          id="dateOfStudy"
          onChange={handleInput}
          value={date}
        />
      </div>
    </>
  );
}
