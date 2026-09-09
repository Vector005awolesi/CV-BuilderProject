export default function PraticalExperience(props) {
  const { data, control } = props;
  const { companyName, position, about } = data;

  function handleInput(e) {
    control((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  }

  console.log(companyName + position + about);

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
      </div>
    </>
  );
}
