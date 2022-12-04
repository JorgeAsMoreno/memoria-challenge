import { Dispatch, SetStateAction } from "react";

export interface IWinScreen {
  setStateGame: Dispatch<SetStateAction<number>>;
  loseGame: boolean
}
