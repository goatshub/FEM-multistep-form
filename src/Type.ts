import { Dispatch, SetStateAction } from "react";

export type SetStep = Dispatch<SetStateAction<number>>;
export type InputType = {
  title: string;
  type: string;
  name: string;
  placeholder: string;
};

export type Plan = "Arcade" | "Advanced" | "Pro";
export type RadioType = {
  name: Plan;
  title: string;
  specialOffer: string;
};
export type CheckboxType = {
  title: string;
  info: string;
  name: "onlineAddon" | "storageAddon" | "profileAddon";
};

export type InputInfo = {
  personal: InputType[];
  plan: RadioType[];
  addOns: CheckboxType[];
};
