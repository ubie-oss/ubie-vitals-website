import Grid from '@components/react/Grid';
import ExampleText from './ExampleText';
import type { FC } from 'react';

const ButtonList: FC = () => (
  <>
    <small>
      ※各サンプルの下部のコードは <code>font-size</code> / <code>line-height</code> です
    </small>

    <Grid minimum="352px" role="list">
      <li>
        <ExampleText
          type="button"
          size="sm"
          src="/assets/images/figures/typography/example-button-sm.svg"
          alt="button/smでテキストを表示した場合のサンプル"
          width="200"
          height="18"
        />
      </li>
      <li>
        <ExampleText
          type="button"
          size="md"
          src="/assets/images/figures/typography/example-button-md.svg"
          alt="button/mdでテキストを表示した場合のサンプル"
          width="158"
          height="14"
        />
      </li>
      <li>
        <ExampleText
          type="button"
          size="lg"
          src="/assets/images/figures/typography/example-button-lg.svg"
          alt="button/lgでテキストを表示した場合のサンプル"
          width="180"
          height="16"
        />
      </li>
    </Grid>
  </>
);

export default ButtonList;
