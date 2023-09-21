import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./Grand.css";
import { createContext, useState } from "react";
export const AssetsContext = createContext();
export const MoneyContext = createContext(1000);

function Grandpa() {
  const asset = "Ring";
  const [money, setMoney] = useState(1000);
  return (
    <div className="border-2 border-red-500 w-[1200px] mx-auto rounded-lg">
      <h2 className="m-8 text-center border-2 rounded-xl w-[250px] mx-auto p-10 ">
        Grand PA
      </h2>
      <p>I Have {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetsContext.Provider value={asset}>
          <div className="grandpa flex border-2 border-emerald-300 justify-center items-center">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </div>
        </AssetsContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
}

export default Grandpa;
