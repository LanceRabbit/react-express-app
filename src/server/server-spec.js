import { addNewTask, updateTask } from './server';

(async function testFunc (){
  await addNewTask({
    id: '1234',
    name: 'test task'
  })

  await updateTask({
    id: '1234',
    name: 'update test task'
  })
})();