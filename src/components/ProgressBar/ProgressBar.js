/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    borderRadius: 4 + "px",
    height: 8 + "px",
    padding: 0,
  },
  medium: {
    borderRadius: 4 + "px",
    height: 12 + "px",
    padding: 0,
  },
  large: {
    borderRadius: 8 + "px",
    height: 16 + "px",
    padding: 4 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      role="progressbar"
      aria-labelledby="loadinglabel"
      aria-valuenow={value}
      style={{
        "--borderRadius": styles.borderRadius,
        "--padding": styles.padding,
      }}
    >
      <BarWrapper
        style={{
          "--borderRadius": styles.borderRadius,
        }}
      >
        <Bar style={{ "--width": value + "%", "--height": styles.height }} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  height: var(--height);
  width: var(--width);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

export default ProgressBar;
