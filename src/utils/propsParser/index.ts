import * as docgen from "react-docgen-typescript";
import type { PropItem } from "react-docgen-typescript";

const IGNORED_PROPS = [
  "DOMAttributes",
  "AriaAttributes",
  "HTMLAttributes",
  "RefAttributes",
];

const hasIgnoredProps = (
  declarations: Exclude<PropItem["declarations"], undefined>
): boolean => {
  return declarations.some((declaration) => {
    return IGNORED_PROPS.includes(declaration.name);
  });
};

const options = {
  savePropValueAsString: false,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: false,
  propFilter: (prop: PropItem) => {
    if (prop.required) {
      return true;
    }

    if (prop.description === "" || prop.declarations === undefined) {
      return false;
    }

    if (hasIgnoredProps(prop.declarations)) {
      return false;
    }

    console.log(prop);

    return true;
  },
};

export const propsParser = docgen.withCompilerOptions(
  {
    esModuleInterop: true,
  },
  options
);
