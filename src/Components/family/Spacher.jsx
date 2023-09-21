import { useContext } from "react";
import { AssetsContext } from "./Grandpa";

function Spacher() {
  const gift = useContext(AssetsContext);
  return (
    <div>
      <h2>Speacher</h2>
      <p>Had {gift}</p>
    </div>
  );
}

export default Spacher;
