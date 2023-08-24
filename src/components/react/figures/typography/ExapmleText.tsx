import CopyButton from "@components/react/CopyButton";
import DesignTokens from "@ubie/design-tokens";
import { convertToTypographyCSS } from "./scripts";
import type { FC } from "react";

const { text } = DesignTokens;

interface Props {
  title: string;
  sizeKey: keyof typeof text;
  lineKey: keyof typeof text;
  src: string;
  alt: string;
  width: string;
  height: string;
}

const ExampleText: FC<Props> = ({
  title,
  sizeKey,
  lineKey,
  src,
  alt,
  width,
  height,
}) => {
  return (
    <div>
      <p>
        <b>{title}</b>
      </p>

      <img src={src} alt={alt} width={width} height={height} />

      <p>
        <code>{text[sizeKey].value}</code> / <code>{text[lineKey].value}</code>
      </p>

      <CopyButton
        text={convertToTypographyCSS(text[sizeKey], text[lineKey])}
      ></CopyButton>
    </div>
  );
};

export default ExampleText;
