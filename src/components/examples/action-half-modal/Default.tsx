import { ActionHalfModal } from "@ubie-inc/ofro-elements";
import { useState } from "react";
import type { FC } from "react";

const Default: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ActionHalfModal
        header="見出し"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        コンテンツ
      </ActionHalfModal>

      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </button>
    </>
  );
};

export default Default;
