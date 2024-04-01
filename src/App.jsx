// import { update, getClicksValue } from "./redux/userSlice";

import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "./redux/constatnts";
import { addTask, deleteTask, setStatusFilter } from "./redux/actions";

// import { useDispatch, useSelector } from "react-redux";
// import Counter from "./Counter";
// import Step from "./Step";
const App = () => {
  // const dispatch = useDispatch();
  // const numOfClicks = useSelector(getClicksValue);

  const filter = useSelector((state) => state.filters.status);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  const handleDelete = (taskId) => dispatch(deleteTask(taskId));

  const handleChange = (value) => dispatch(setStatusFilter(value));

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <>
      <header>
        <h2>Tasks</h2>
        <div>
          <p>Active: {count.active}</p>
          <p>Completed: {count.completed}</p>
        </div>
        <h2>Filter by status</h2>
        <div>
          <button
            selected={filter === statusFilters.all}
            onClick={() => handleChange(statusFilters.all)}
          >
            All
          </button>
          <button
            selected={filter === statusFilters.selected}
            onClick={() => handleChange(statusFilters.active)}
          >
            Active
          </button>
          <button
            selected={filter === statusFilters.completed}
            onClick={() => handleChange(statusFilters.completed)}
          >
            Completed
          </button>
        </div>
      </header>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="text" placeholder="Enter task text..." />
        <button type="submit">Add task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <input type="checkbox" checked={task.completed} />
              <p>{task.text}</p>
              <button onClick={() => handleDelete(task.id)}>close</button>
            </div>
          </li>
        ))}
      </ul>

      {/* <Counter />
      <Step /> */}
      {/* <button type="button" onClick={() => dispatch(update(5))}>
        Num of clicks : {numOfClicks}
      </button> */}
    </>
  );
};

export default App;
