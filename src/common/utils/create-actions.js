import {createAction} from '@reduxjs/toolkit';

export default obj => {
  let key = Object.keys(obj)[0];
  let actions = {};
  obj[key].map(i => {
    let name = `${key}/${i}`;
    actions[i] = createAction(name);
  });
  return actions;
};
