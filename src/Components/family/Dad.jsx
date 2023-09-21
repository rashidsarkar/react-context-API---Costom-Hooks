import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

function Dad() {
  return (
    <div>
      <h2>Dad</h2>
      <div className="flex">
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
  );
}

export default Dad;
