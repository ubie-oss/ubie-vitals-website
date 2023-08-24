import Grid from "@components/react/Grid";
import ExampleText from "./ExapmleText";
import type { FC } from "react";


const NoteList: FC = () => (
  <>
    <small>
      ※各サンプルの下部のコードは <code>font-size</code> /{" "}
      <code>line-height</code> です
    </small>

    <Grid minimum="352px" role="list">
      <li>
        <ExampleText
          title="sm"
          sizeKey="note-sm-size"
          lineKey="note-sm-line"
          src="/assets/images/figures/typography/example-note-sm.svg"
          alt="Note/smでテキストを表示した場合のサンプル"
          width="352"
          height="51"
        />
      </li>

      <li>
        <ExampleText
          title="sm-narrow"
          sizeKey="note-sm-narrow-size"
          lineKey="note-sm-narrow-line"
          src="/assets/images/figures/typography/example-note-sm-narrow.svg"
          alt="Note/sm-narrowでテキストを表示した場合のサンプル"
          width="342"
          height="40"
        />
      </li>

      <li>
        <ExampleText
          title="sm-tight"
          sizeKey="note-sm-tight-size"
          lineKey="note-sm-tight-line"
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
          title="md"
          sizeKey="note-md-size"
          lineKey="note-md-line"
          src="/assets/images/figures/typography/example-note-md.svg"
          alt="Note/mdでテキストを表示した場合のサンプル"
          width="352"
          height="51"
        />
      </li>

      <li>
        <ExampleText
          title="md-narrow"
          sizeKey="note-md-narrow-size"
          lineKey="note-md-narrow-line"
          src="/assets/images/figures/typography/example-note-md-narrow.svg"
          alt="Note/md-narrowでテキストを表示した場合のサンプル"
          width="342"
          height="40"
        />
      </li>

      <li>
        <ExampleText
          title="md-tight"
          sizeKey="note-md-tight-size"
          lineKey="note-md-tight-line"
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
          title="lg"
          sizeKey="note-lg-size"
          lineKey="note-lg-line"
          src="/assets/images/figures/typography/example-note-lg.svg"
          alt="Note/lgでテキストを表示した場合のサンプル"
          width="350"
          height="80"
        />
      </li>

      <li>
        <ExampleText
          title="lg-narrow"
          sizeKey="note-lg-narrow-size"
          lineKey="note-lg-narrow-line"
          src="/assets/images/figures/typography/example-note-lg-narrow.svg"
          alt="Note/lg-narrowでテキストを表示した場合のサンプル"
          width="348"
          height="49"
        />
      </li>

      <li>
        <ExampleText
          title="lg-tight"
          sizeKey="note-lg-tight-size"
          lineKey="note-lg-tight-line"
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
