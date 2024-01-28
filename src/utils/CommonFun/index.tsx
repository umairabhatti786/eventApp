import { Dimensions } from "react-native";

export const isInteger = (value: number): boolean => {
    return Number.isInteger(value);
}


export const windowWidth = Dimensions.get("screen").width;
export const windowHeight = Dimensions.get("screen").height;