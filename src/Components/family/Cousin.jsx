import { useContext } from "react";
import { MoneyContext } from "./Grandpa"; // Assuming you only need MoneyContext
import Spacher from "./Spacher";

function Cousin({ name }) {
  const [money, setMoney] = useContext(MoneyContext);
  console.log(money);
  return (
    <div>
      <p>My money name {name}</p>
      {name === "Rongila" && <Spacher></Spacher>}

      {name === "Rock" && (
        <div>
          <p>{money}</p>
          <button onClick={() => setMoney((m) => m + 1000)} className="btn">
            Add Money
          </button>
        </div>
      )}
    </div>
  );
}

export default Cousin;
