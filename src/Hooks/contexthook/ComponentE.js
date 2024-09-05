import { useContext } from "react";
import { ChannelContext, UserContext } from "./Main";
import ComponentF from "./ComponentF";

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      User is {user} and channel is {channel}
      <ComponentF />
    </div>
  );
};
export default ComponentE;
