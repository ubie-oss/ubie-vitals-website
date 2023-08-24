import { LinkCard } from "@ubie-inc/ofro-elements";
import type { FC } from "react";

const Default: FC = () => {
  return (
    <>
      <LinkCard
        title="タイトル"
        href="/"
        description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"
      />
      <div style={{ marginTop: "1rem" }}>
        <LinkCard
          title="タイトル"
          href="/"
          description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"
        />
      </div>
    </>
  );
};

export default Default;
