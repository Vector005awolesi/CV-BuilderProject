import Renderer from "./components/Renderer";
import Form from "./components/Form";
import "./styles/App.css";
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
    dateFrom: "",
    dateUntil: "",
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
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <>
      {submitted && !isEditing ? (
        <div className="submitted-wrap">
          <Renderer data={formData} onEdit={handleEdit} showActions />
        </div>
      ) : (
        <div className="builder-layout">
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
          <Renderer data={formData} />
        </div>
      )}
    </>
  );
}

export default App;
