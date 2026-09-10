import "../styles/Renderer.css";

function Renderer(props) {
  const { data, onEdit, showActions } = props;
  const { general, education, pratical } = data;
  // Generl destructuring
  const { name, email, number } = general;
  // Education destructuring
  const { schoolName, courseOfStudy, date } = education;
  // Pratical destructuring
  const { companyName, position, about, dateFrom, dateUntil } = pratical;

  function handleReload() {
    window.location.reload();
  }
  return (
    <>
      <div className="cv-preview-wrap">
        <article className="cv-paper">
          <header className="cv-header">
            <h1>{name || "Your Name"}</h1>
            <p>
              {email}
              {email && number && " | "} {number}
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
            <p className="cv-muted">
              {dateFrom}
              {dateFrom && dateUntil && " - "}
              {dateUntil}
            </p>
            <p className="cv-body">{about}</p>
          </section>

          {showActions && (
            <div className="cv-actions">
              <button type="button" onClick={onEdit} className="cv-edit">
                Edit
              </button>
              <button type="button" onClick={() => window.print()}>
                Print
              </button>
              <button type="reset" onClick={handleReload}>
                Reset
              </button>
            </div>
          )}
        </article>
      </div>
    </>
  );
}
export default Renderer;
