import {createSlice} from '@reduxjs/toolkit';
import {asyncActions} from './ModalActions';

const initialState = {
  modals: {
    alertMessage: false,
  },
  params: {
    codeConfirmation: {},
    faceId: {},
    alertMessage: {},
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    setState(state, {payload: {key, newState}}) {
      state[key] = newState;
    },
    setModal(state, {payload: {keyModal, visible, params}}) {
      state.modals[keyModal] = visible;
      state.params[keyModal] = params;
    },
  },
});

const modalActions = {...modalSlice.actions, ...asyncActions};
const modalReducer = modalSlice.reducer;

export {modalActions, modalReducer};
