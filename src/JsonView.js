import { dummyData } from "./dummyData";

function JsonView() {
  return (
    <div>
      <pre>{JSON.stringify(dummyData, null, 2)}</pre>
    </div>
  );
}

export default JsonView;
