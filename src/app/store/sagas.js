import { take, put, select } from 'redux-saga/effects';
import { v4 as uuidv4 }  from 'uuid';
import axios from 'axios';

import * as mutations from './mutations';

const url = "http://localhost:8888"

export function* taskCreationSaga(){
  while (true){
      const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
      console.log("Got the id...", groupID)
      const ownerID = `U1`;
      const taskID = uuidv4();
      yield put(mutations.createTask(taskID, groupID, ownerID));
      const { res } = yield axios.post(url + `/task/new`, {
        task: {
          id: taskID,
          group: groupID,
          owner: ownerID,
          isComplete: false,
          name: "New task via saga.js"
        }
      });

      console.info("Got response", res);
  }
}

export function* userAuthenticateSage(){
  while(true) {
    const {username, password} = yield take(mutations.REQUEST_AUTHENTICATE_USER)
    try {
      const { data } = axios.post(url + `/authenticate`, {username, passowrd});
      if(!data) {
        throw new Error();
      }
    } catch (error) {
      console.log("can't authenticate")
      yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
    }
  }
}