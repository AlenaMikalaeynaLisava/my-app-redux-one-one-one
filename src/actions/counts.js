import {ADD, MINUS, MULTIPLY, DIVISION} from "../constants/counts"

export const addNumber = (number) => ({
  type: ADD,
  payload: number,
});

export const minusNumber = (number) => ({
  type: MINUS,
  payload: number,
});

export const multiplyNumber = (number) => ({
    type: MULTIPLY,
    payload: number,
});

export const devisionNumber = (number) => ({
    type: DIVISION,
    payload: number,
});
  

