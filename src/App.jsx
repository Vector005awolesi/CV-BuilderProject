import Renderer from "./components/Renderer";
import Form from "./Form";
import "./App.css";
import { useState } from "react";

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
  });
  const formData = {
    general: generalInfoInputs,
    education: educationInputs,
    pratical: praticalExperienceInputs,
  };

  const [submitted, setSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
    setIsEditing(false)
  }
  return (
    <>
      {submitted && !isEditing ? (
        <Renderer data={formData} editMode={isEditing} control={setIsEditing} />
      ) : (
        <Form
          general={generalInfoInputs}
          setGeneral={setGeneralInfoInputs}
          education={educationInputs}
          setEducation={setEducationInputs}
          pratical={praticalExperienceInputs}
          setPratical={setPraticalExperienceInputs}
          submit={handleSubmit}
          editMode={isEditing}
        />
      )}
    </>
  );
}

export default App;
