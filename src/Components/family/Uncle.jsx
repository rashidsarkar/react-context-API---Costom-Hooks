import Cousin from "./Cousin";

function Uncle() {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Rongila"}></Cousin>
        <Cousin name={"Rock"}></Cousin>
      </section>
    </div>
  );
}

export default Uncle;
