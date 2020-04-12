import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({tasks, name}) => (
  <div>
    <h2>{name}</h2>
    {tasks.map(task => (
      <div key={task.id}>
        {task.name}
      </div>
    ))}
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

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);