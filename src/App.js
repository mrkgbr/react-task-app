import React, { useState } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       task: { text: "", id: uniqid() },
//       tasks: [],
//     };
//   }

//   handleChange = (e) => {
//     this.setState({
//       task: {
//         text: e.target.value,
//         id: this.state.task.id,
//       },
//     });
//   };

//   onSubmitTask = (e) => {
//     e.preventDefault();
//     this.setState({
//       tasks: this.state.tasks.concat(this.state.task),
//       task: { text: "", id: uniqid() },
//     });
//   };

//   render() {
//     const { task, tasks } = this.state;

//     return (
//       <div>
//         <form onSubmit={this.onSubmitTask}>
//           <label htmlFor="taskInput">Enter task</label>
//           <input
//             onChange={this.handleChange}
//             value={task.text}
//             type="text"
//             id="taskInput"
//           />
//           <button type="submit">Add Task</button>
//         </form>
//         <Overview tasks={tasks} />
//       </div>
//     );
//   }
// }

const App = () => {
  const [task, setTask] = useState({ text: "", id: uniqid(), order: null });
  const [tasks, setTasks] = useState([]);
  const [orderNr, setOrderNr] = useState(1);

  const handleChange = (e) => {
    setTask({
      text: e.target.value,
      id: task.id,
      order: orderNr,
    });
  };

  const onSubmitTask = (e) => {
    e.preventDefault();
    setTasks(tasks.concat(task));
    setTask({ text: "", id: uniqid(), order: null });
    setOrderNr(orderNr + 1);
  };

  const handleRemove = (id) => {
    const newList = tasks.filter((item) => item.id !== id);
    setTasks(newList);
  };

  return (
    <div>
      <form onSubmit={onSubmitTask}>
        <label htmlFor="taskInput">Enter task</label>
        <input
          onChange={handleChange}
          value={task.text}
          type="text"
          id="taskInput"
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <Overview tasks={tasks} onRemove={handleRemove} />
    </div>
  );
};

export default App;
