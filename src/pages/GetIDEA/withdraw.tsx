import styled from "@emotion/styled";
import BridgedToken from "components/BridgedToken";
import ReactSelect from "components/ReactSelect";

const Content = styled.div`
  margin-bottom: 2rem;
`;
const Heading = styled.h5`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 800;
  color: #061024;
  margin-bottom: 0.5rem;
`;
const Select = styled(ReactSelect)`
  margin-bottom: 2rem;
  font-size: 1.4rem;
  &::placeholder {
    font-size: 1.4rem;
    color: #6d6d6d;
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
  }
`;

const Input = styled.input`
  :disabled {
    background: #eae7e7;
    cursor: not-allowed;
    width: 100%;
  }
`;

const PrimaryButton = styled.button`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;
  padding-right: 14px;
  display: block;
  width: 100%;
  color: #fff;
  background-color: #0c71bc;
  cursor: pointer;
  outline: none;
  border: none;

  &:disabled {
    background-color: #91bddd;
    cursor: not-allowed;
  }
`;

export default function Withdraw({
  swapAmount,
  onChange,
  transactionCall,
  submit,
  isloading,
  account,
  onWithDraw,
}: any) {
  return (
    <div>
      <Content>
        <Heading>Select Token</Heading>
        <Select
          padding={0}
          width={"100%"}
          center={false}
          onChange={() => {}}
          placeholder="IDEA"
          options={[
            {
              label: [
                <Flex key={1}>
                  <Fency
                    reverse={true}
                    bridge={"PoS"}
                    token="IDEA"
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
                  bridge={"PoS"}
                  token="IDEA"
                  alert={true}
                />
              </Flex>,
            ],
            value: "name",
          }}
        />
      </Content>
      <Content>
        <Heading>Wallet Address</Heading>
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
        <Heading>Amount</Heading>
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

      <PrimaryButton
        disabled={!swapAmount || swapAmount === 0}
        onClick={onWithDraw}
      >
        {isloading ? "...loading" : `Withdraw ${swapAmount} IDEA`}
      </PrimaryButton>
    </div>
  );
}
