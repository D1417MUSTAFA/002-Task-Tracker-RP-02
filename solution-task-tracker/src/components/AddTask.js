import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTask({ text, day, isdone: false });
    setText("");
    setDay("");
    // console.log(text,day);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          value={text}
          placeholder="AddTask"
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          name="day"
          type="text"
          value={day}
          placeholder="Add Day & Time"
          onChange={(e) => setDay(e.target.value)}
          required
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
