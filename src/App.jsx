import Renderer from "./components/Renderer";
import Form from "./components/Form";
import "./styles/App.css";
import { useState } from "react";
import { ActionContext } from "./context/ActionContext";
import { FormContext } from "./context/formContext";

function App() {
  const [generalInfoInputs, setGeneralInfoInputs] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [educationInputs, setEducationInputs] = useState({
    schoolName: "",
    courseOfStudy: "",
    date: "",
  });

  const [praticalExperienceInputs, setPraticalExperienceInputs] = useState({
    companyName: "",
    position: "",
    about: "",
    dateFrom: "",
    dateUntil: "",
  });
  const formData = {
    general: generalInfoInputs,
    education: educationInputs,
    pratical: praticalExperienceInputs,
  };
  const formControls = {
    setGeneral: setGeneralInfoInputs,
    setEducation: setEducationInputs,
    setPratical: setPraticalExperienceInputs,
  };

  const [submitted, setSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <>
      <FormContext.Provider
        value={{
          data: formData,
          control: formControls,
          editMode: isEditing,
          submit: handleSubmit,
        }}
      >
        <ActionContext.Provider
          value={{ onEdit: handleEdit, showActions: true }}
        >
          {submitted && !isEditing ? (
            <div className="submitted-wrap">
              <Renderer />
            </div>
          ) : (
            <div className="builder-layout">
              <Form />
              <Renderer />
            </div>
          )}
        </ActionContext.Provider>
      </FormContext.Provider>
    </>
  );
}

export default App;
