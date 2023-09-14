import DesignToken from '@ubie/design-tokens';
import styles from './Grid.module.css';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  minimum?: string;
  space?: string;
  role?: string;
}

const Grid: FC<Props> = ({
  children,
  minimum = '250px',
  space = DesignToken.size['spacing-lg'].value.toString(),
  role,
}) => {
  const cssCariables = {
    '--minimum': minimum,
    '--space': space,
  };
  return (
    <div style={cssCariables} className={styles.grid} role={role}>
      {children}
    </div>
  );
};

export default Grid;
