import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from "../VisuallyHidden";

const Select = ({ label, value, onChange, children, ...delegated }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper {...delegated} >
      <VisuallyHidden>{label}</VisuallyHidden>
      <NativeSelect value={value} onChange={onChange}>{children}</NativeSelect>
      <Presentation>{displayedValue}
        <IconWrapper style={{ '--size': 24 + "px" }}>
          <Icon
            id="chevron-down"
            size={24}
            strokeWidth={1}
          />
        </IconWrapper>
      </Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  max-width: fit-content;  
`;

const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
  appearance: none;
`;

const Presentation = styled.div`
  font-size: 1rem;
  color: ${COLORS.gray700};
  padding: 12px 40px 12px 16px;
  font-family: "Roboto", sans-serif;
  line-height: ${19 / 16};
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};

  ${NativeSelect}:hover + & {
    color: ${COLORS.black}
  }
  
  ${NativeSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  right: 10px;
  top: 10px;
  margin: auto;
`

export default Select;
