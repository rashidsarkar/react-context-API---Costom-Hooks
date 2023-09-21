import { useEffect, useRef } from "react";

function RefFrom() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} action="">
        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input className="border-2" type="submit" value="Submit" />
        {/* <button className="btn w-52 mx-auto">Submit</button> */}
      </form>
    </div>
  );
}

export default RefFrom;
