import Grid from "@components/react/Grid";
import ExampleText from "./ExapmleText";
import type { FC } from "react";

const BodyTable: FC = () => {
  return (
    <>
      <small>
        ※各サンプルの下部のコードは <code>font-size</code> /{" "}
        <code>line-height</code> です
      </small>

      <Grid role="list" minimum="432px" space="40px">
        <li>
          <ExampleText
            title="xs"
            sizeKey="heading-xs-size"
            lineKey="heading-xs-line"
            src="/assets/images/figures/typography/example-heading-xs.svg"
            alt="Heading/xsでテキストを表示した場合のサンプル"
            width="247"
            height="40"
          />
        </li>

        <li>
          <ExampleText
            title="sm"
            sizeKey="heading-sm-size"
            lineKey="heading-sm-line"
            src="/assets/images/figures/typography/example-heading-sm.svg"
            alt="Heading/smでテキストを表示した場合のサンプル"
            width="278"
            height="45"
          />
        </li>

        <li>
          <ExampleText
            title="md"
            sizeKey="heading-md-size"
            lineKey="heading-md-line"
            src="/assets/images/figures/typography/example-heading-md.svg"
            alt="Heading/mdでテキストを表示した場合のサンプル"
            width="309"
            height="48"
          />
        </li>

        <li>
          <ExampleText
            title="lg"
            sizeKey="heading-lg-size"
            lineKey="heading-lg-line"
            src="/assets/images/figures/typography/example-heading-lg.svg"
            alt="Heading/lgでテキストを表示した場合のサンプル"
            width="371"
            height="58"
          />
        </li>

        <li>
          <ExampleText
            title="xl"
            sizeKey="heading-xl-size"
            lineKey="heading-xl-line"
            src="/assets/images/figures/typography/example-heading-xl.svg"
            alt="Heading/xlでテキストを表示した場合のサンプル"
            width="432"
            height="67"
          />
        </li>
      </Grid>
    </>
  );
};

export default BodyTable;
