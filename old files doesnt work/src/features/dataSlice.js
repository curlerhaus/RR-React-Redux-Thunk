import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setData: (state, action) => {
      return { ...state, apiData: action.payload };
    },
  },
});

export const { setData } = imageSlice.actions;

export const fetchData = () => {
  const dataThunk = async (dispatch, getState) => {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/$12720`
    );
    const resData = await response.json();
    console.log("resdata: ", resData);
    dispatch(setData(resData));
  };
  return dataThunk;
};

// export const getImage = () => {
//   return (dispatch) => {
//     return fetch(
//       "https://collectionapi.metmuseum.org/public/collection/v1/objects/$12720"
//     )
//       .then((response) => response.json())
//       .then((json) => dispatch({ type: "FetchData", data: json }))
//       .catch((err) => dispatch({ type: "ERROR", msg: "Unable to fetch data" }));
//   };
// };
