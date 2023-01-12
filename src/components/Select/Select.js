import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const ChevronSize = 20;
const Chevron = () => (
  <Icon size={ChevronSize} strokeWidth="2" id="chevron-down" />
);

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <Wrapper>
      <SelectComponent value={value} onChange={onChange} arrow={Chevron}>
        {children}
      </SelectComponent>

      <View>
        {displayedValue}
        <ChevronWrapper style={{ "--chevronSize": ChevronSize + "px" }}>
          <Chevron />
        </ChevronWrapper>
      </View>
    </Wrapper>
  );
};

const SelectComponent = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 2;
`;

const View = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-family: "Roboto", "sans-serif";
  border-radius: 8px;
  font-size: 1rem;
  line-height: ${16 / 18.75 + "rem"};
  padding: 12px 16px;
  padding-right: 50px;

  ${SelectComponent}:focus + & {
    outline: auto;
  }
`;

const ChevronWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin: auto;
  width: var(--chevronSize);
  height: var(--chevronSize);
  z-index: 1;
`;

const Wrapper = styled.div`
  isolation: isolate;
  position: relative;
  width: fit-content;

  &:hover {
    ${View} {
      color: ${COLORS.black};
    }
  }
`;

export default Select;
