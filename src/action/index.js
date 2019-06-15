// import axios from "axios";

//const url = 'http://localhost:8080/api/getlist';

const addMovieToList = index => {
  return {
    type: "ADD_MOVIE",
    index
  };
};

export const addMovie = index => {
  return dispatch => {
    dispatch(addMovieToList(index));
  };
};

const deleteData = id => {
  return {
    type: "DELETE_MOVIE",
    id
  };
};
export const deleteMovie = id => {
  return dispatch => {
    dispatch(deleteData(id));
  };
};

const addFromD = index => {
  return {
    type: "ADD_FROM_DELETED",
    index
  };
};

export const addFromDelete = index => {
  return dispatch => {
    dispatch(addFromD(index));
  };
};
