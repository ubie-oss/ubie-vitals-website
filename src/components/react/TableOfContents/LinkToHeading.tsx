import styles from "./LinkToHeading.module.css";
import type { Heading } from "@utils/client";
import type { FC } from "react";

interface Props {
  heading: Heading;
  nest?: number;
}

const LinkToHeading: FC<Props> = ({ heading, nest = 1 }) => (
  <li className={styles.item}>
    <a
      className={styles.link}
      href={`#${heading.id}`}
      style={{
        "--nest": nest.toString(),
      }}
    >
      {heading.label}
    </a>
    {heading.children && (
      <ul className={styles.child}>
        {heading.children.map((child) => (
          <LinkToHeading key={child.id} heading={child} nest={nest + 1} />
        ))}
      </ul>
    )}
  </li>
);

export default LinkToHeading;
