import "./Renderer.css";

function Renderer(props) {
  const { data , editMode , control } = props; 
  const { general, education, pratical } = data;
  // Generl destructuring
  const { name, email, number } = general;
  // Education destructuring
  const { schoolName, courseOfStudy, date } = education;
  // Pratical destructuring
  const { companyName, position, about } = pratical;
  function handleReload() {
    window.location.reload();
  }

  function handleEdit(){
    control(true);
  }
  return (
    <>
      <article className="cv-paper">
        <header className="cv-header">
          <h1>{name}</h1>
          <p>
            {email} {email && number && " | "} {number}
          </p>
        </header>

        <section className="cv-section">
          <h2>Education</h2>
          <div className="cv-row">
            <strong>{schoolName}</strong>
            <span className="cv-date">{date}</span>
          </div>
          <p className="cv-muted">{courseOfStudy}</p>
        </section>

        <section className="cv-section">
          <h2>Practical Experience</h2>
          <div className="cv-row">
            <strong>{companyName}</strong>
            <span className="cv-muted">{position}</span>
          </div>
          <p className="cv-body">{about}</p>
        </section>

        <div className="cv-actions">
          <button type="button" onClick={handleEdit} className="cv-edit">
            Edit
          </button>
          <button type="reset" onClick={handleReload}>
            Reset
          </button>
        </div>
      </article>
    </>
  );
}
export default Renderer;
