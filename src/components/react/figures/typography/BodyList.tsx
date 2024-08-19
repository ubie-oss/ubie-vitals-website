import Grid from '@components/react/Grid';
import ExampleText from './ExampleText';
import type { FC } from 'react';

const BodyList: FC = () => {
  return (
    <>
      <small>
        ※各サンプルの下部のコードは <code>font-size</code> / <code>line-height</code> です
      </small>

      <Grid minimum="352px" role="list">
        <li>
          <ExampleText
            type="body"
            size="xs"
            src="/assets/images/figures/typography/example-text-body-xs.svg"
            alt="Body/xsでテキストを表示した場合のサンプル"
            width="352"
            height="60"
          />
        </li>
        <li>
          <ExampleText
            type="body"
            size="xs"
            leading="narrow"
            src="/assets/images/figures/typography/example-text-body-xs-narrow.svg"
            alt="Body/xs-narrowでテキストを表示した場合のサンプル"
            width="348"
            height="49"
          />
        </li>
      </Grid>

      <Grid minimum="352px" role="list">
        <li>
          <ExampleText
            type="body"
            size="sm"
            src="/assets/images/figures/typography/example-text-body-sm.svg"
            alt="Body/smでテキストを表示した場合のサンプル"
            width="352"
            height="96"
          />
        </li>
        <li>
          <ExampleText
            type="body"
            size="sm"
            leading="narrow"
            src="/assets/images/figures/typography/example-text-body-sm-narrow.svg"
            alt="Body/sm-narrowでテキストを表示した場合のサンプル"
            width="352"
            height="84"
          />
        </li>
      </Grid>

      <Grid minimum="352" role="list">
        <li>
          <ExampleText
            type="body"
            size="md"
            src="/assets/images/figures/typography/example-text-body-md.svg"
            alt="Body/mdでテキストを表示した場合のサンプル"
            width="352"
            height="135"
          />
        </li>
        <li>
          <ExampleText
            type="body"
            size="md"
            leading="narrow"
            src="/assets/images/figures/typography/example-text-body-md-narrow.svg"
            alt="Body/md-narrowでテキストを表示した場合のサンプル"
            width="352"
            height="120"
          />
        </li>
      </Grid>

      <Grid role="list" minimum="352px">
        <li>
          <ExampleText
            type="body"
            size="lg"
            src="/assets/images/figures/typography/example-text-body-lg.svg"
            alt="Body/lgでテキストを表示した場合のサンプル"
            width="352"
            height="155"
          />
        </li>
        <li>
          <ExampleText
            type="body"
            size="lg"
            leading="narrow"
            src="/assets/images/figures/typography/example-text-body-lg-narrow.svg"
            alt="Body/lg-narrowでテキストを表示した場合のサンプル"
            width="352"
            height="135"
          />
        </li>
      </Grid>
    </>
  );
};

export default BodyList;
