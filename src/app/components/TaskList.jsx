import React from 'react';
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations'
import { Link } from 'react-router-dom'

export const TaskList = ({tasks, name, id, createNewTask}) => (
  <div>
    <h2>{name}</h2>
    {tasks.map(task => (
      <Link to={`/task/${task.id}`} key={task.id}>
        <div>
          {task.name}
        </div>
      </Link>
    ))}
    <button onClick={() => createNewTask(id)}> ADD TASK</button>
  </div>
)

export const mapStateToProps = (state, ownProps) => {
  let groupId = ownProps.id;
  return {
    name: ownProps.name,
    id: groupId,
    tasks: state.tasks.filter(task => task.group === groupId)
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      console.log('create new task...', id);
      dispatch(requestTaskCreation(id));
    }
  }
}

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);