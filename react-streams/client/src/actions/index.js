import types from "./types";
import streams from "../apis/streams";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: types.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: types.SIGN_OUT,
  };
};

export const createStream = (formProps) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await streams.post("/streams", { ...formProps, userId });
  dispatch({ type: types.CREATE_STREAM, payload: res.data });
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const res = await streams.get("/streams");
  dispatch({ type: types.FETCH_STREAMS, payload: res.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const res = await streams.get(`/streams/${id}`);
  dispatch({ type: types.FETCH_STREAM, payload: res.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: types.DELETE_STREAM, payload: id });
  history.push("/");
};

export const editStream = (id, formProps) => async (dispatch) => {
  const res = await streams.patch(`/streams/${id}`, formProps);
  dispatch({ type: types.EDIT_STREAM, payload: res.data });
  history.push("/");
};
