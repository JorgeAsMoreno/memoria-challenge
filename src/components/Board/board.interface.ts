import { Dispatch, SetStateAction } from "react";

export interface IBoardCards {
  id: number,
  frontFace: string,
  name: string,
}

export interface IBoard {
  setStateGame: Dispatch<SetStateAction<number>>;
  level: number
  levelNumber: number[]
}