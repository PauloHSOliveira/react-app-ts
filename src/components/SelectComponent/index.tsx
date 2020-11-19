import React from 'react';
import { BiCoinStack } from 'react-icons/bi';
import { Container, SelectContainer, StyledList, StyledListItem } from './styles';

interface SelectComponentProps {
  options: string[];
  value: string;
  onChange: any;
}

function SelectComponent(props: SelectComponentProps): React.ReactElement {
  const [openList, setOpenList] = React.useState(false);

  const { value, onChange, options } = props;

  const handleOpen = () => {
    setOpenList(!openList);
  };

  const handleChange = (e: string): void => {
    onChange(e);
    setOpenList(false);
  };

  return (
    <Container>
      <SelectContainer onClick={handleOpen}>
        <BiCoinStack />
        {value}
      </SelectContainer>
      {openList && (
        <StyledList>
          {options.map((item) => (
            <StyledListItem key={item} onClick={() => handleChange(item)}>
              {item}
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </Container>
  );
}

export default SelectComponent;
