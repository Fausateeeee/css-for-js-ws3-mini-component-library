import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const SIZES = {
    small: {
      iconSize: "16px",
      strokeWidth: 1,
      borderBottom: "1px solid black",
      fontSize: "0.875rem",
      paddingLeft: "24px",
      lineHeight: "1rem",
      height: "24px",
    },
    large: {
      iconSize: "24px",
      strokeWidth: 2,
      borderBottom: "2px solid black",
      fontSize: "1.125em",
      paddingLeft: "36px",
      lineHeight: "1.3125rem",
      height: "36px",
    },
  };
  const styles = SIZES[size];
  const IconComponent = () => (
    <Icon size={styles.iconSize} id={icon} strokeWidth={styles.strokeWidth} />
  );

  return (
    <Wrapper style={{}}>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>

      <IconWrapper
        style={{ "--width": styles.iconSize, "--height": styles.iconSize }}
      >
        <IconComponent />
      </IconWrapper>

      <Input
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--borderBottom": styles.borderBottom,
          "--fontSize": styles.fontSize,
          "--paddingLeft": styles.paddingLeft,
          "--lineHeight": styles.lineHeight,
          "--height": styles.height,
        }}
        type="text"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  font-family: "Roboto";
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2px;
  height: var(--height);
  width: var(--width);
  margin: auto;
  pointer-events: none;
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--borderBottom);
  font-size: var(--fontSize);
  font-weight: 700;
  color: ${COLORS.gray700};
  padding-left: var(--paddingLeft);
  line-height: var(--lineHeight);

  &:hover {
    color: ${COLORS.black};
  }
  &:focus {
    outline-offset: 2px;
  }
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
