import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";
import React from "react";

const Wrapper = styled.div`
  width: 35rem;
  height: 62.2vh;
  margin: 0 auto;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border: 1px solid #878991;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border-bottom: none;
  border-spacing: 0;
  tr {
    th {
      background: #4971b8;
      height: 2.2rem;
      color: #fff;
      font-weight: 400;
    }
    th:nth-child(1) {
    }
    th:last-child {
    }
    td {
      text-align: center;
      padding: 1rem 0rem;
      border-bottom: 1px solid gray;
    }

    td:last-child {
      max-width: 8rem;
    }
  }
`;

const TiltWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tilt = styled.div`
  width: 8rem;
  background: gray;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 1rem;
  font-size: 0.9rem;
  color: #fff;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export default function VoteHistory() {
  const makeCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="votePage">
      <Wrapper>
        <Table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Top 10 Voters</th>
            </tr>
          </thead>
          <tbody>
            {["AI", "Metaverse"].map((val: any, key) => {
              return (
                <tr key={key}>
                  <td>
                    <b>{val}</b>
                  </td>
                  <td>
                    <TiltWrapper>
                      <Tilt
                        onClick={() =>
                          makeCopy("0xE28C224a1b6426b13814A0bff1c15A1C0e463eb1")
                        }
                        title={"0xE28C224a1b6426b13814A0bff1c15A1C0e463eb1"}
                      >
                        {"0xE28C224a1b6426b13814A0bff1c15A1C0e463eb1".slice(
                          0,
                          9
                        ) + "..."}
                      </Tilt>
                      <Tilt
                        onClick={() =>
                          makeCopy("0xE28C224a1b6426b13814A0bff1c15A1C0e463eb1")
                        }
                        title={"0xE28C224a1b6426b13814A0bff1c15A1C0e463eb1"}
                      >
                        {"0xE28C224a1b6426b13814A0bff1c15A1C0e463eb1".slice(
                          0,
                          9
                        ) + "..."}
                      </Tilt>
                      <Tilt
                        onClick={() =>
                          makeCopy("0xE28C224a1b6426b13814A0bff1c15A1C0e463eb1")
                        }
                        title={"0xE28C224a1b6426b13814A0bff1c15A1C0e463eb1"}
                      >
                        {"0xE28C224a1b6426b13814A0bff1c15A1C0e463eb1".slice(
                          0,
                          9
                        ) + "..."}
                      </Tilt>
                    </TiltWrapper>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {/* <div
          className="voteCard"
          style={{
            height: "36vh",
            borderTopRightRadius: "0px",
            borderTopLeftRadius: "0px",
            width: "100%",
            justifyContent: "center",
            boxShadow:
              "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 0px rgb(255, 255, 255), 0.3em 0em 1em rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="voteCard__avatarTxt">
            <div className="voteCard__txt">
              <Typography>{"No Result Announced Yet!"}</Typography>
            </div>
          </div>
          <div className="voteCard__btn"></div>
        </div> */}
      </Wrapper>
    </div>
  );
}
