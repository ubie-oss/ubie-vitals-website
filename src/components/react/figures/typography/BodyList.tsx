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
            title="sm"
            sizeKey="body-sm-size"
            lineKey="body-sm-line"
            src="/assets/images/figures/typography/example-text-body-sm.svg"
            alt="Body/smでテキストを表示した場合のサンプル"
            width="352"
            height="96"
          />
        </li>

        <li>
          <ExampleText
            title="sm-narrow"
            sizeKey="body-sm-narrow-size"
            lineKey="body-sm-narrow-line"
            src="/assets/images/figures/typography/example-text-body-sm-narrow.svg"
            alt="Body/sm-narrowでテキストを表示した場合のサンプル"
            width="352"
            height="84"
          />
        </li>

        <li>
          <ExampleText
            title="sm-tight"
            sizeKey="body-sm-tight-size"
            lineKey="body-sm-tight-line"
            src="/assets/images/figures/typography/example-text-body-sm-tight.svg"
            alt="Body/sm-tightでテキストを表示した場合のサンプル"
            width="352"
            height="80"
          />
        </li>
      </Grid>

      <Grid minimum="352" role="list">
        <li>
          <ExampleText
            title="md"
            sizeKey="body-md-size"
            lineKey="body-md-line"
            src="/assets/images/figures/typography/example-text-body-md.svg"
            alt="Body/mdでテキストを表示した場合のサンプル"
            width="352"
            height="135"
          />
        </li>

        <li>
          <ExampleText
            title="md-narrow"
            sizeKey="body-md-narrow-size"
            lineKey="body-md-narrow-line"
            src="/assets/images/figures/typography/example-text-body-md-narrow.svg"
            alt="Body/md-narrowでテキストを表示した場合のサンプル"
            width="352"
            height="120"
          />
        </li>

        <li>
          <ExampleText
            title="md-tight"
            sizeKey="body-md-tight-size"
            lineKey="body-md-tight-line"
            src="/assets/images/figures/typography/example-text-body-md-tight.svg"
            alt="Body/md-tightでテキストを表示した場合のサンプル"
            width="352"
            height="110"
          />
        </li>
      </Grid>

      <Grid role="list" minimum="352px">
        <li>
          <ExampleText
            title="lg"
            sizeKey="body-lg-size"
            lineKey="body-lg-line"
            src="/assets/images/figures/typography/example-text-body-lg.svg"
            alt="Body/lgでテキストを表示した場合のサンプル"
            width="352"
            height="155"
          />
        </li>

        <li>
          <ExampleText
            title="lg-narrow"
            sizeKey="body-lg-narrow-size"
            lineKey="body-lg-narrow-line"
            src="/assets/images/figures/typography/example-text-body-lg-narrow.svg"
            alt="Body/lg-narrowでテキストを表示した場合のサンプル"
            width="352"
            height="135"
          />
        </li>

        <li>
          <ExampleText
            title="lg-tight"
            sizeKey="body-lg-tight-size"
            lineKey="body-lg-tight-line"
            src="/assets/images/figures/typography/example-text-body-lg-tight.svg"
            alt="Body/lg-tightでテキストを表示した場合のサンプル"
            width="352"
            height="125"
          />
        </li>
      </Grid>
    </>
  );
};

export default BodyList;
