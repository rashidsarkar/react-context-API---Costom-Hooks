import { useState } from "react";

function StateFulFrom() {
  const [name, setName] = useState("Rongila");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [erroe, setErroe] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (erroe.length < 6) {
      setErroe("password error ");
    } else {
      setErroe("");
      console.log(email);
      console.log(password);
      console.log(name);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center ">
        <form onSubmit={handleSubmit} action="">
          <input
            onChange={handleNameChange}
            value={name}
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <input
            onChange={handleEmailChange}
            type="email"
            name="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            onChange={handlePassChange}
            required
            type="password"
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <input className="border-2" type="submit" value="Submit" />
          {/* <button className="btn w-52 mx-auto">Submit</button> */}
        </form>
        {erroe && <p>{erroe}</p>}
      </div>
    </>
  );
}

export default StateFulFrom;
