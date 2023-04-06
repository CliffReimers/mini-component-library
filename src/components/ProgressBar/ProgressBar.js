/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    height: 16,
    radius: 8,
    padding: 4
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0
  },
  small: {
    height: 8,
    radius: 4,
    padding: 0
  }
}

const ProgressBar = ({ value, size, label = "progress" }) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error("Invalid size parameter: " + size)
  }
  const rightBorderRadius = value > 99.6;
  return <Wrapper
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px'
      }}
      role="progressbar"
      aria-valuemax={100}
      aria-valuenow={value}
      aria-label={label}
  >
    <VisuallyHidden>{value}</VisuallyHidden>
    <BarWrapper>
      <Bar style={{
        '--height': styles.height + 'px',
        '--width': value + '%'
      }} />
    </BarWrapper>
  </Wrapper>;
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  width: var(--width);
  height: var(--height);
`;

export default ProgressBar;
