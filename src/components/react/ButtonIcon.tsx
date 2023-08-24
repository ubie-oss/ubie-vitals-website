import { clsx } from "clsx";
import styles from "./ButtonIcon.module.css";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
}

const ButtonIcon: FC<Props> = ({
  children,
  label,
  onClick,
  className = "",
}) => (
  <button
    onClick={onClick}
    aria-label={label}
    className={clsx(styles.button, className)}
    title={label}
  >
    {children}
  </button>
);

export default ButtonIcon;
