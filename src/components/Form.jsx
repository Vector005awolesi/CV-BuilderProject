import GeneralInfo from "./GeneralInfo";
import Education from "./EducationSection";
import PraticalExperience from "./PraticalExperience";
function Form(props){
    const{general , setGeneral , education, setEducation , pratical , setPratical , submit , editMode} = props
    return (
        <>
          <div id="form">
          <GeneralInfo
            data={general}
            control={setGeneral}
          />
          <Education data={education} control={setEducation} />
          <PraticalExperience
            data={pratical}
            control={setPratical}
          />
          <button type="submit" onClick={submit}>
            {editMode === true ? "Save" : "Submit"}
          </button>
          </div>
        </>
    )
}

export default Form