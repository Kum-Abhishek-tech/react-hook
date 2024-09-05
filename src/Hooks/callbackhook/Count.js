const Count = ({ text, count }) => {
  console.log(`Rendering ${text} ${count}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
};
export default Count;
