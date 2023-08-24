import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Thead: FC<Props> = ({ children }) => <thead>{children}</thead>;

export default Thead;
