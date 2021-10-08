import * as S from './styles';

export type HeadingProps = {
  lineLeft?: boolean;
  lineBottom?: boolean;
  color?: 'white' | 'black';
  children: React.ReactNode;
};

export default function Heading({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) {
  return (
    <S.Container color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </S.Container>
  );
}