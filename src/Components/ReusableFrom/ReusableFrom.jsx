function ReusableFrom({
  fromTitle,
  btnText = "Submit",
  handleSubmit,
  children,
}) {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const date = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    handleSubmit(date);
  };
  return (
    <div>
      {children}
      <h2>{fromTitle} </h2>
      <form onSubmit={handleLocalSubmit}>
        <input
          type="text"
          // onChange={handleNameChange}
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
        <input className="border-2" type="submit" value={btnText} />
      </form>
    </div>
  );
}

export default ReusableFrom;
