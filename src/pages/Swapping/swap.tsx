import styled from "@emotion/styled";
import BridgedToken from "components/BridgedToken";
import ReactSelect from "components/ReactSelect";
import { borderRadius, margin } from "polished";
import React, { useState } from "react";

const Content = styled.div`
  margin-bottom: 2rem;
`;
const Heading = styled.h5`
  font-size: 18px;
  font-family: "SF Pro Display";
  line-height: 1.5rem;
  font-weight: 400;
  color: #061024;
  margin-bottom: 0.5rem;
`;
const Select = styled(ReactSelect)`
  margin-bottom: 2rem;
  font-size: 14px;
  &::placeholder {
    font-size: 14px;
    color: #061024;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Fency = styled(BridgedToken)``;

const GroupButton = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  width: 100%;
  height: 44px;
  border: 1px solid #dddfe0;

  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: #fff;
  display: flex;
  align-self: center;
  input {
    padding: 10px 16px;
    width: 100%;
    height: 42px;
    border: none;
    border-radius: 0.5rem;
    overflow: visible;
    outline: none;
    color: #ffffff;
    background: #000d17;
  }
  input::placeholder {
    color: white;
  }
`;

const Input = styled.input`
  :disabled {
    background: #000d17;
    color: #ffffff;
    cursor: not-allowed;
    width: 100%;
  }
`;

const PrimaryButton = styled.button`
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 400;
  font-family: "SF Pro Display";
  border-radius: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 14px;
  padding-right: 14px;
  display: block;
  width: 100%;
  max-width: 349px; /* Corrected property name */
  height: 45px; /* Corrected property name */
  color: #ffffff; /* Text color */
  background-color: #0c71bc;
  cursor: pointer;
  outline: none;
  border: none;
`;

export default function Swap({
  swapAmount,
  onChange,
  submit,
  isloading,
  account,
  ideaBalance = 0,
}: any) {
  return (
    <div>
      <Content>
        <Heading style={{ color: "white", fontSize: "16px" }}>
          Token ({ideaBalance} IDEA)
        </Heading>
        <Select
          style={{ color: "white" }}
          padding={0}
          width={"100%"}
          center={false}
          onChange={(e: any) => {}}
          placeholder="Ethereum"
          options={[
            {
              label: [
                <Flex key={1}>
                  <Fency
                    reverse={true}
                    bridge={""}
                    token="IDEA Token"
                    alert={true}
                  />
                </Flex>,
              ],
              value: "name",
            },
          ]}
          isOptionDisabled={(option: any) => option.disabled}
          value={{
            label: [
              <Flex key={1}>
                <Fency
                  reverse={true}
                  bridge={""}
                  token="IDEA Token"
                  alert={true}
                />
              </Flex>,
            ],
            value: "name",
          }}
          styles={{
            control: (provided) => ({
              ...provided,
              backgroundColor: "#333", // Background of the selected area
              color: "black", // Color of the text inside the selected area
            }),
            input: (provided) => ({
              ...provided,
              color: "white", // Text color in the input field
            }),
            option: (provided) => ({
              ...provided,
              backgroundColor: "#333", // Dropdown background
              color: "black", // Text color of options
              padding: "10px 15px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#444", // Hover effect for options
              },
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: "#333", // Background color of the dropdown menu
              borderRadius: "8px", // Optional: Add rounded corners to the dropdown
            }),
          }}
        />
      </Content>
      <Content>
        <Heading style={{ color: "white", fontSize: "16px" }}>
          Receiver Wallet Address
        </Heading>
        <GroupButton>
          <InputBox>
            <Input
              value={account || ""}
              type="text"
              placeholder="0xxxxxxxxxxxxxxxxxxxxxxxxxxx"
              disabled={true}
            />
            {/* <InputBoxPaste  >Paste</InputBoxPaste> */}
          </InputBox>
        </GroupButton>
      </Content>
      <Content>
        <Heading style={{ color: "white", fontSize: "16px" }}>
          IDEA Amount
        </Heading>
        <GroupButton>
          <InputBox>
            <Input
              value={swapAmount}
              onChange={onChange}
              type="text"
              pattern="^[0-9]*$"
              placeholder="Please enter amount"
            />
            {/* <InputBoxPaste  >Paste</InputBoxPaste> */}
          </InputBox>
        </GroupButton>
      </Content>

      <PrimaryButton onClick={submit}>
        {isloading
          ? "...Confirming"
          : `Transfer ${swapAmount} Polygon to IDEA `}
      </PrimaryButton>
    </div>
  );
}
