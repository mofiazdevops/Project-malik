import React from "react";
import centeric from "../../assets/svgs/centeric.svg";
import ecosystem from "../../assets/svgs/ecosystem.svg";
import scale from "../../assets/svgs/scale.svg";
import security from "../../assets/svgs/security.svg";
const Built = () => {
  const data = [
    {
      svg: require("../../assets/svgs/Centric.svg"),
      heading: " Scalability & Decentralization",
      para: "Process thousands of TPS with minimal latency while ensuring fairness with fixed maximum stake.",
    },
    {
      svg: require("../../assets/svgs/eceosystem.svg"),
      heading: "Developer-Centric Tools",
      para: "Custom CLI and multi-language smart contract support for effortless dApp creation.",
    },
    {
      svg: require("../../assets/svgs/scale.svg"),
      heading: "Advanced Security",
      para: "Cutting-edge cryptography and real-time monitoring to safeguard assets.",
    },
    {
      svg: require("../../assets/svgs/security.svg"),
      heading: "Diverse & Future-Ready Ecosystem",
      para: "From DeFi and gaming to NFTs, IDEA Wallet, and metaverse integration.",
    },
  ];
  return (
    <div>
      <div>
        <h1>Built For You</h1>
        <p>
          Experience blockchain innovation like never before with IDEA 3.0
          Network. It is a platform built for performance, security, & limitless
          possibilities. Here are some reasons that tell you why we are unique
          from others:
        </p>
      </div>
      <div>
        {data.map((item, index) => (
          <div key={index} className="">
            <img src={item.svg} alt="" />
            <h2>{item.heading}</h2>
            <p>{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Built;
