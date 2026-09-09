
function GeneralInfo(props) {
  // Parse in objects state and destructure from App data and control for general input
   const {data , control} = props
  // Destructure data further more for testing 
  const {name , email , number } = data
   console.log(email, name, number)
   
   function handleInput(e){
     control(p => ({...p , [e.target.name]: e.target.value}))
   }


  return (
    <>
      <div id="general-info">
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={handleInput}
          name="email"
          id="email"
          value={email}
        />
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleInput}
          name="name"
          id="name"
          value={name}
        />
        <input
          type="number"
          placeholder="Enter your Mobile number"
          onChange={handleInput}
          name="number"
          id="number"
          value={number}
        />
      </div>
    </>
  );
}
export default GeneralInfo;
