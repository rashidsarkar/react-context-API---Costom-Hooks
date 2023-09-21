import Cousin from "./Cousin";

function Aunty() {
  return (
    <div>
      <h2>aunty</h2>
      <section className="flex">
        <Cousin name={"Ahanaf"}></Cousin>
        <Cousin name={"Rashid"}></Cousin>
      </section>
    </div>
  );
}

export default Aunty;
