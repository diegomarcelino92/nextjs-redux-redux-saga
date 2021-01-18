import React from 'react';

import { ListItem, StyledList } from './styles';

type ItemType = {
  title: string;
  content: string;
};

export type ListProps = {
  list: ItemType[];
};

const List = ({ list }: ListProps) => (
  <StyledList>
    {list.map((item) => (
      <ListItem>
        <h2>{item.title}</h2>
        <div>{item.content}</div>
      </ListItem>
    ))}
  </StyledList>
);

export default List;
