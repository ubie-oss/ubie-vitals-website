import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const TBody: FC<Props> = ({ children }) => <tbody>{children}</tbody>;

export default TBody;
