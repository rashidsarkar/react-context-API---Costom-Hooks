import "./App.css";
import HookFarm from "./Components/HookFarm/HookFarm";
import RefFrom from "./Components/RefFrom/RefFrom";
import ReusableFrom from "./Components/ReusableFrom/ReusableFrom";
import SimpleFrom from "./Components/SimpleFrom/SimpleFrom";
import StateFulFrom from "./Components/StateFulFrom/StateFulFrom";
import Grandpa from "./Components/family/Grandpa";

function App() {
  // const handleSingUpSubmit = (data) => {
  //   console.log("sing Up Data", data);
  // };
  // const handleUpdateProfile = (data) => {
  //   console.log("update Profile Data", data);
  // };
  return (
    <>
      <Grandpa></Grandpa>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StateFulFrom></StateFulFrom> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFarm></HookFarm> */}
      {/* <ReusableFrom
        fromTitle={"Sing Up"}
        handleSubmit={handleSingUpSubmit}
        btnText={"Submit"}
      >
        <h2>sing upo er </h2>
      </ReusableFrom>
      <ReusableFrom
        fromTitle={"Profile UpDate"}
        btnText={"Update"}
        handleSubmit={handleUpdateProfile}
      >
        <h2>update upo er </h2>
      </ReusableFrom> */}
    </>
  );
}

export default App;
