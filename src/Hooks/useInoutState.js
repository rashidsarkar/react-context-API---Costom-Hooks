import { useState } from "react";

const useInoutState = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // return [value, handleChange];
  return {
    value,
    onChange,
  };
};
export default useInoutState;
