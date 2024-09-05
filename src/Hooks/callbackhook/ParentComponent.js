import { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(500000);
  const incrementAge = useCallback(() => {
      setAge(age + 1);
    }, [age]);
    console.log("🚀 ~ incrementAge ~ incrementAge:", incrementAge)
    const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};
export default ParentComponent;
