interface Props {
  children?: React.ReactNode;
}

export const Template = ({ children }: Props) => {
  return <div>{children}</div>;
};
