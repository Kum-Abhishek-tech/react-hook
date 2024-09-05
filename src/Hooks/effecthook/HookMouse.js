import { useEffect, useState } from "react";

const HookMouse = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("UseEffect Clled");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Component UnMounting Code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      X : {X} {' '}
      Y : {Y}
    </div>
  );
};
export default HookMouse;
