export default function Education(props) {
  const { data, control } = props;
  const { schoolName, courseOfStudy, date } = data;

  function handleInput(e) {
    control((p) => ({ ...p, [e.target.name]: e.target.value }));
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
