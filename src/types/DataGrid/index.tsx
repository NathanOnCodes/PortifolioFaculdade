import React from 'react';
import styled from 'styled-components';

interface IProps {
  columns: number;
  gap: string;
  children: React.ReactNode;
  style?: Object
}

const GridContainer = styled.div<IProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: ${props => props.gap};
`;

const Grid: React.FC<IProps> = (options: IProps) => {
  const { children, columns, gap, style } = options;
 
  return(
    <GridContainer columns={columns} gap={gap} style={style}>
      {children}
    </GridContainer>
  );
};

export default Grid;