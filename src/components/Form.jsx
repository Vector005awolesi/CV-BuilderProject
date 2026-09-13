import GeneralInfo from "./GeneralInfo";
import Education from "./EducationSection";
import PraticalExperience from "./PraticalExperience";
import { useContext } from "react";
import { FormContext } from "../context/formContext";
function Form() {
  const { editMode, submit } = useContext(FormContext);
  return (
    <>
      <div id="form">
        <GeneralInfo/>
        <Education/>
        <PraticalExperience/>
        <button type="submit" onClick={submit}>
          {editMode === true ? "Save" : "Submit"}
        </button>
      </div>
    </>
  );
}

export default Form;
