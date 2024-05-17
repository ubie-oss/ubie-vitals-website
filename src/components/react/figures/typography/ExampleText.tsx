import DesignTokens from '@ubie/design-tokens';
import CopyButton from '@components/react/CopyButton';
import { convertToTypographyCSS, convertToTypographyReact } from './scripts';
import type { FC } from 'react';

const { text } = DesignTokens;

type TextType = 'body' | 'heading' | 'button' | 'tag' | 'note';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Leading = 'narrow' | 'tight';

interface Props {
  type: TextType;
  size: Size;
  leading?: Leading;
  src: string;
  alt: string;
  width: string;
  height: string;
}

const ExampleText: FC<Props> = ({ type, size, leading, src, alt, width, height }) => {
  const sizeKey = `${type}-${size}-size` as keyof typeof text;
  const lineKey = leading
    ? (`${type}-${size}-${leading}-line` as keyof typeof text)
    : (`${type}-${size}-line` as keyof typeof text);
  return (
    <div>
      {leading ? (
        <p>
          <b>
            {size}/{leading}
          </b>
        </p>
      ) : (
        <p>
          <b>{size}</b>
        </p>
      )}

      <img src={src} alt={alt} width={width} height={height} />

      <p>
        <code>{text[sizeKey].value}</code>(<code>{text[sizeKey].attributes.note}</code>) /{' '}
        <code>{text[lineKey].value}</code>
      </p>

      <CopyButton text={convertToTypographyCSS(text[sizeKey], text[lineKey])} label="CSS"></CopyButton>
      <CopyButton
        text={convertToTypographyReact({
          type,
          size,
          leading,
        })}
        label="React"
      ></CopyButton>
    </div>
  );
};

export default ExampleText;
