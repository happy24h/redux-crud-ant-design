import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

export const listUsers = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:8080/api/v1/users`)
      .then((res) => {
        console.log("data axios:", res.data);
        dispatch(getUsers(res.data.data));
      })
      .catch((error) => console.log(error));
  };
};

const add_user = () => ({
  type: types.ADD_USER,
});

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:8080/api/v1/create-user`, user)
      .then((res) => {
        console.log("res add user", res);
        dispatch(add_user());
        dispatch(listUsers());
      })
      .catch((error) => console.log(error));
  };
};

const delete_user = () => ({
  type: types.DELETE_USER,
});

export const userDelete = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:8080/api/v1/delete-user/${id}`)
      .then((res) => {
        dispatch(delete_user());
        dispatch(listUsers());
      })
      .catch((error) => console.log(error));
  };
};

const edit_user = () => ({
  type: types.EDIT_USER,
});

export const editUser = (user) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:8080/api/v1/update-user`, user)
      .then((res) => {
        dispatch(edit_user());
        dispatch(listUsers());
      })
      .catch((error) => console.log(error));
  };
};
