function SimpleFrom() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log("from submited");
  };
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          type="email"
          name="email"
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

export default SimpleFrom;
