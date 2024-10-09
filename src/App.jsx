import { useRef, useState } from "react";

export default function App() {
  const [taskArr, setTask] = useState([]);
  let inputVar = useRef();
  function addTask() {
    let tempArr = [...taskArr];
    tempArr.push(inputVar.current.value);
    setTask(tempArr);
  }
  function deleteTask(index) {
    let tempArr = [...taskArr];
    tempArr.splice(index, 1);
    setTask(tempArr);
  }
  return (
    <div className="container">
      <div className="d-flex col-12 p-2">
        <input className="col-10  " type="text" ref={inputVar} />
        <button
          className="btn btn-primary col-2"
          onClick={() => {
            addTask();
          }}
        >
          Add Task
        </button>
      </div>
      <ul className="d-flex col-12 flex-column gap-1">
        {taskArr.map((ele, index) => {
          return (
            <li className="d-flex justify-content-between" key={index}>
              <p>{ele}</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteTask(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
