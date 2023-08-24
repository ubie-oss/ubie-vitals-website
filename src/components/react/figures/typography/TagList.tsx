import Grid from "@components/react/Grid";
import ExampleText from "./ExapmleText";
import type { FC } from "react";

const TagList: FC = () => (
  <>
    <small>
      ※各サンプルの下部のコードは <code>font-size</code> /{" "}
      <code>line-height</code> です
    </small>

    <Grid minimum="352px" role="list">
      <li>
        <ExampleText
          title="sm"
          sizeKey="tag-sm-size"
          lineKey="tag-sm-line"
          src="/assets/images/figures/typography/example-tag-sm.svg"
          alt="tag/smでテキストを表示した場合のサンプル"
          width="200"
          height="14"
        />
      </li>

      <li>
        <ExampleText
          title="md"
          sizeKey="tag-md-size"
          lineKey="tag-md-line"
          src="/assets/images/figures/typography/example-tag-md.svg"
          alt="tag/mdでテキストを表示した場合のサンプル"
          width="200"
          height="17"
        />
      </li>

      <li>
        <ExampleText
          title="lg"
          sizeKey="tag-lg-size"
          lineKey="tag-lg-line"
          src="/assets/images/figures/typography/example-tag-lg.svg"
          alt="tag/lgでテキストを表示した場合のサンプル"
          width="200"
          height="18"
        />
      </li>
    </Grid>
  </>
);

export default TagList;
