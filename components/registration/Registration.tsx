import { useState } from "react";
import NotYet from "./NotYet";
import RegisterBase from "./RegisterBase";

const Registration = () => {
  const [timeToRegister] = useState(true);

  return <div>{timeToRegister ? <RegisterBase /> : <NotYet />}</div>;
};

export default Registration;
