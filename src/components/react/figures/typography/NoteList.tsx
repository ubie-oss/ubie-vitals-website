import Grid from '@components/react/Grid';
import ExampleText from './ExampleText';
import type { FC } from 'react';

const NoteList: FC = () => (
  <>
    <small>
      ※各サンプルの下部のコードは <code>font-size</code> / <code>line-height</code> です
    </small>

    <Grid minimum="352px" role="list">
      <li>
        <ExampleText
          type="note"
          size="sm"
          src="/assets/images/figures/typography/example-note-sm.svg"
          alt="Note/smでテキストを表示した場合のサンプル"
          width="352"
          height="51"
        />
      </li>

      <li>
        <ExampleText
          type="note"
          size="sm"
          leading="narrow"
          src="/assets/images/figures/typography/example-note-sm-narrow.svg"
          alt="Note/sm-narrowでテキストを表示した場合のサンプル"
          width="342"
          height="40"
        />
      </li>

      <li>
        <ExampleText
          type="note"
          size="sm"
          leading="tight"
          src="/assets/images/figures/typography/example-note-sm-tight.svg"
          alt="Note/sm-tightでテキストを表示した場合のサンプル"
          width="342"
          height="38"
        />
      </li>
    </Grid>

    <Grid minimum="352px" role="list">
      <li>
        <ExampleText
          type="note"
          size="md"
          src="/assets/images/figures/typography/example-note-md.svg"
          alt="Note/mdでテキストを表示した場合のサンプル"
          width="352"
          height="51"
        />
      </li>

      <li>
        <ExampleText
          type="note"
          size="md"
          leading="narrow"
          src="/assets/images/figures/typography/example-note-md-narrow.svg"
          alt="Note/md-narrowでテキストを表示した場合のサンプル"
          width="342"
          height="40"
        />
      </li>

      <li>
        <ExampleText
          type="note"
          size="md"
          leading="tight"
          src="/assets/images/figures/typography/example-note-md-tight.svg"
          alt="Note/sm-tightでテキストを表示した場合のサンプル"
          width="342"
          height="38"
        />
      </li>
    </Grid>

    <Grid minimum="352px" role="list">
      <li>
        <ExampleText
          type="note"
          size="lg"
          src="/assets/images/figures/typography/example-note-lg.svg"
          alt="Note/lgでテキストを表示した場合のサンプル"
          width="350"
          height="80"
        />
      </li>

      <li>
        <ExampleText
          type="note"
          size="lg"
          leading="narrow"
          src="/assets/images/figures/typography/example-note-lg-narrow.svg"
          alt="Note/lg-narrowでテキストを表示した場合のサンプル"
          width="348"
          height="49"
        />
      </li>

      <li>
        <ExampleText
          type="note"
          size="lg"
          leading="tight"
          src="/assets/images/figures/typography/example-note-lg-tight.svg"
          alt="Note/sm-tightでテキストを表示した場合のサンプル"
          width="348"
          height="47"
        />
      </li>
    </Grid>
  </>
);

export default NoteList;
