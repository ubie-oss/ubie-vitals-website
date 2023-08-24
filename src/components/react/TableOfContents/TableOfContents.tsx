import { extractHeadingsFromMain } from "@utils/client";
import { useEffect, useState } from "react";
import LinkToHeading from "./LinkToHeading";
import styles from "./TableOfContents.module.css";
import type { Heading } from "@utils/client";
import type { FC } from "react";

const TableOfContents: FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    setHeadings(extractHeadingsFromMain());
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {headings.map((heading) => (
          <LinkToHeading key={heading.id} heading={heading} />
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
