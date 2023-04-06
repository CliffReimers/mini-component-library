import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
//import {Wrapper} from "@storybook/addon-actions/dist/ts3.9/components/ActionLogger";

const SIZES = {
  small: {
    borderThickness: 1,
    fontSize: 14/16,
    iconSize: 16,
    height: 24
  },
  large: {
    borderThickness: 2,
    fontSize: 18/16,
    iconSize: 24,
    height: 36
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error("Invalid size prop: " + size)
  }

  return <Wrapper>
    <IconWrapper style={{'--size': styles.iconSize + "px"}}>
      <Icon id={icon} size={styles.iconSize} />
    </IconWrapper>
    <NativeInput
      type="text"
      {...delegated}
      style={{
        '--width': width + "px",
        '--borderThickness': styles.borderThickness + "px",
        '--fontSize': styles.fontSize + "rem",
        '--lineHeight': styles.lineHeight,
        '--height': styles.height + "px"
      }}/>
    <VisuallyHidden>{label}</VisuallyHidden>
  </Wrapper>;
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
`;

const NativeInput = styled.input`
  border: none;
  width: var(--width);
  height: var(--height);
  color: inherit;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  font-size: var(--fontSize);
  font-weight: 700;
  padding: 4px 0 0 var(--height);
  outline-offset: 3px;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
