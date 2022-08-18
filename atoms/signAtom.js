import { atom } from "recoil";

export const signupState = atom({
  key: "signupState",
  default: true,
});

export const authState = atom({
  key: "authState",
  default: false,
});
