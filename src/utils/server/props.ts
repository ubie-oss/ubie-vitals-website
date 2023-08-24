import { parser } from "./parser";
import type { PropItemType } from "react-docgen-typescript";

const extractType = (type: PropItemType) => {
  if (type.name === "enum") {
    const values = type.value as { value: string }[];
    return values.map((value) => value.value);
  }

  return type.name;
};

export const extractPropsFromFile = (filePath: string) => {
  const docs = parser.parse(filePath);

  if (docs.length === 0) {
    return [];
  }

  const { props } = docs[0];

  const propsArray: {
    name: string;
    type: string | string[];
    defaultValue: string | number | null;
    required: boolean;
    description: string;
  }[] = Object.entries(props).map(([name, propInfo]) => ({
    name: name,
    type: extractType(propInfo.type),
    defaultValue: propInfo.defaultValue
      ? (propInfo.defaultValue.value as string | number)
      : null,
    required: propInfo.required,
    description: propInfo.description,
  }));

  return propsArray;
};
