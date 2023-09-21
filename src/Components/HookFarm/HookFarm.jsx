import useInoutState from "../../Hooks/useInoutState";

const HookFarm = () => {
  // const [name, handleNameChange] = useInoutState("rojoni Hook");
  const emailState = useInoutState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailState.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          // onChange={handleNameChange}
          name="name"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          {...emailState}
          type="email"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />

        <br />
        <input className="border-2" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookFarm;
