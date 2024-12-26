import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.reverse && "row-reverse"};
`;

const Token = styled.div`
  line-height: 20px;
  font-size: 0.875rem;
  line-height: 12.5px;
  font-weight: 500;
  color: #ffffff;
  display: inline-block;
  //   background: #000d17;
`;
const Bridge = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  display: inline-block;
  line-height: 20px;
  background: ${(props) => (props.alert ? "#fbe1e1" : "#e0f2f3")};
  color: ${(props) => (props.alert ? "#f64a4a" : "00686e")};
`;

export default function BridgedToken({ token, bridge, alert, reverse }) {
  return (
    <Item reverse={reverse}>
      {bridge && <Bridge alert={alert}>{bridge}</Bridge>}
      {token && <Token>{token}</Token>}
    </Item>
  );
}
