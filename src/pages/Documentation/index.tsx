import React from "react";
import Stepper from "../../layouts/MainLayout/components/Stepper";

const Documentation = () => {
  return (
    <div className="flex items-center justify-center sm:justify-between">
      <div className="w-[10%]">
        <Stepper />
      </div>
      <div className="text-[#ffffff] w-[90%] sm:w-[70%] font-sans p-4">
        <div id="Introduction">
          <div>
            <h2 className=" text-[18px] sm:text-[26px] md:text-[36px] lg:text-[48px] font-bold">
              Introduction
            </h2>
          </div>
          <p className=" text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-sans font-normal my-4">
            Welcome to the IDEA 3.0 documentation! IDEA 3.0 is a next-generation
            blockchain network designed to address the challenges of
            scalability, decentralization, and high transaction costs. By
            integrating an optimized{" "}
            <span className="font-bold">
              Proof of Stake and Proof of Stake Fixed Protocol (PoSfp)
            </span>
            mechanism with cross-chain interoperability, IDEA 3.0 provides a
            seamless and efficient environment for decentralized applications
            (dApps), financial transactions, and enterprise blockchain
            solutions.
          </p>
        </div>
        <div id="What-is-IDEA-3.0">
          <div>
            <h2 className=" text-[18px] sm:text-[26px] md:text-[36px] lg:text-[48px] font-bold">
              What is IDEA 3.0?
            </h2>
          </div>
          <p className=" text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal my-4">
            IDEA 3.0 is an advanced blockchain protocol built for{" "}
            <span className="font-bold">
              speed, security, and decentralization
            </span>
            . Unlike traditional blockchain networks that suffer from congestion
            and high fees, IDEA 3.0 introduces a fixed{" "}
            <span className="font-bold">maximum stake</span> system to ensure
            fair participation and prevent validator dominance. With{" "}
            <span className="font-bold">an epoch-based consensus model</span>,
            the network achieves high throughput while maintaining
            decentralization and security.
          </p>
        </div>
        <div id="Key-Components-of-IDEA-3.0">
          <h2 className=" text-[18px] sm:text-[26px] md:text-[36px] lg:text-[48px] font-bold">
            Key Components of IDEA 3.0:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-sans font-normal my-4">
            <li>
              <strong>Hybrid PoS Consensus:</strong> IDEA 3.0 utilizes a unique
              Proof of Stake (PoS) model with a fixed maximum stake of 50 tokens
              per validator to prevent centralization and ensure network
              stability.
            </li>
            <li>
              <strong>High Transaction Speed:</strong> Capable of processing
              100,000 transactions per second (TPS), making it ideal for
              high-demand applications like DeFi, gaming, and supply chain
              management.
            </li>
            <li>
              <strong>Smart Contract Support:</strong> Supports Solidity and
              Vyper for dApp development, allowing developers to build a wide
              range of blockchain applications.
            </li>
            <li>
              <strong>Cross-Chain Compatibility:</strong> Enables seamless asset
              transfers between Ethereum, Binance Smart Chain, Solana, and
              Polygon, bridging liquidity and interoperability.
            </li>
            <li>
              <strong>Decentralized Governance:</strong> Uses on-chain voting to
              allow community participation in network upgrades and
              decision-making.
            </li>
            <li>
              <strong>Security & Stability:</strong> Implements multi-layered
              cryptographic protections, real-time network monitoring, and a
              slashing mechanism to penalize malicious actors.
            </li>
          </ul>
        </div>
        <div className="" id="Key-Features">
          <h2 className=" text-[18px] sm:text-[26px] md:text-[36px] lg:text-[48px] font-bold">
            Key Features
          </h2>
          <ul className="space-y-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-sans font-normal my-4">
            <li id="Fixed-Maximum-Stake-for-Decentralization">
              <span className="text-[#ffffff] font-semibold">
                1. Fixed Maximum Stake for Decentralization
              </span>
              <p className=" text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
                IDEA 3.0 enforces a 50-token stake cap per validator, ensuring
                that no single entity can dominate the network. This approach
                enhances fairness and promotes true decentralization.
              </p>
            </li>
            <li id="High-Speed-Transactions-Low-Fees">
              <span className="text-[#ffffff] font-semibold">
                2. High-Speed Transactions & Low Fees
              </span>
              <p className=" text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
                The network architecture supports 100,000 TPS, significantly
                outperforming existing blockchains like Ethereum and Binance
                Smart Chain. Optimized transaction validation mechanisms reduce
                congestion and keep fees low.
              </p>
            </li>
            <li id="Epoch-Based-Validator-Selection">
              <span className="text-[#ffffff] font-semibold">
                3. Epoch-Based Validator Selection
              </span>
              <p className=" text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
                Validators rotate every 50 epochs, preventing long-term
                validator monopolies and maintaining network security. This
                mechanism also boosts network efficiency and speeds up consensus
                finality.
              </p>
            </li>
            <li id="Smart-Contract-Flexibility">
              <span className="text-[#ffffff] font-semibold">
                4. Smart Contract Flexibility
              </span>
              <p className=" text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
                IDEA 3.0 supports Solidity and Vyper, making it easy for
                Ethereum developers to transition and deploy dApps without
                additional learning curves.
              </p>
            </li>
            <li id="Cross-Chain-Interoperability">
              <span className="text-[#ffffff] font-semibold">
                5. Cross-Chain Interoperability
              </span>
              <p className=" text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
                The network includes native bridging capabilities, allowing
                users to seamlessly move assets between IDEA 3.0 and other major
                blockchains, fostering liquidity and interoperability across
                ecosystems.
              </p>
            </li>
            <li id="Decentralized-Governance">
              <span className="text-[#ffffff] font-semibold">
                6. Decentralized Governance
              </span>
              <p className=" text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
                IDEA 3.0 token holders can participate in governance by
                proposing and voting on protocol upgrades, ensuring that network
                evolution aligns with community interests.
              </p>
            </li>
            <li id="Security-Fraud-Prevention">
              <span className="text-[#ffffff] font-semibold">
                7. Security & Fraud Prevention
              </span>
              <ul className="list-disc ml-6">
                <li>
                  Automated Network Monitoring to detect suspicious activity in
                  real-time.
                </li>
                <li>
                  Slashing Mechanism to penalize validators engaged in malicious
                  behavior.
                </li>
                <li>
                  Strong Cryptographic Protections for transaction security.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="Why-IDEA-3.0">
          <h2 className=" text-[18px] sm:text-[26px] md:text-[36px] lg:text-[48px] font-bold text-[#ffffff]">
            Why IDEA 3.0?
          </h2>
          <p className="mt-2 text-[12px] sm:text-[14px] md:text-[16px]">
            IDEA 3.0 addresses key limitations faced by current blockchain
            networks:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-sans font-normal my-4">
            <li>
              <span className="text-[#ffffff] font-semibold">Ethereum</span>{" "}
              struggles with high gas fees and network congestion.
            </li>
            <li>
              <span className="text-[#ffffff] font-semibold">
                Binance Smart Chain (BSC)
              </span>{" "}
              has fast transactions but is highly centralized.
            </li>
            <li>
              <span className="text-[#ffffff] font-semibold">Solana</span>{" "}
              offers high TPS but suffers from frequent network outages.
            </li>
            <li>
              <span className="text-[#ffffff] font-semibold">Cardano</span>{" "}
              provides decentralization but has slow transaction speeds.
            </li>
          </ul>
        </div>
        <div className=" " id="How-IDEA-3.0-Stands-Out">
          <h2 className=" text-[18px] sm:text-[26px] md:text-[36px] lg:text-[48px] font-bold mb-4 text-yellow-600">
            How <span className="text-[#ffffff]">IDEA 3.0</span> Stands Out
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg">
              <thead>
                <tr className="bg-[#0F2434]  text-white  text-[12px] sm:text-[14px] md:text-[16px] font-sans font-normal">
                  <th className=" p-2">Feature</th>
                  <th className=" p-2">Ethereum</th>
                  <th className=" p-2">Binance Smart Chain</th>
                  <th className=" p-2">Solana</th>
                  <th className=" p-2">Cardano</th>
                  <th className=" p-2">IDEA 3.0</th>
                </tr>
              </thead>
              <tbody className="bg-[#071120] text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
                <tr>
                  <td className=" p-2">TPS</td>
                  <td className=" p-2">15-30</td>
                  <td className=" p-2">60-100k</td>
                  <td className=" p-2">65k</td>
                  <td className=" p-2">250k</td>
                  <td className=" p-2 font-semibold text-[#0e83DB]">100k</td>
                </tr>
                <tr>
                  <td className=" p-2">Consensus</td>
                  <td className=" p-2">PoS</td>
                  <td className=" p-2">PoSA</td>
                  <td className=" p-2">PoH + PoS</td>
                  <td className=" p-2">Ouroboros PoS</td>
                  <td className=" p-2 font-semibold text-[#0e83DB]">
                    PoS + PoSfp with Fixed Staking
                  </td>
                </tr>
                <tr>
                  <td className=" p-2">Governance</td>
                  <td className=" p-2">Limited</td>
                  <td className=" p-2 text-red-600 font-semibold">
                    Centralized
                  </td>
                  <td className=" p-2">Limited</td>
                  <td className=" p-2">Decentralized</td>
                  <td className=" p-2 font-semibold text-[#0e83DB]">
                    Full On-Chain Voting
                  </td>
                </tr>
                <tr>
                  <td className=" p-2">Fees</td>
                  <td className=" p-2 text-red-600 font-semibold">High</td>
                  <td className=" p-2">Low</td>
                  <td className=" p-2">Very Low</td>
                  <td className=" p-2">Low</td>
                  <td className=" p-2 font-semibold text-[#0e83DB]">
                    Ultra-Low
                  </td>
                </tr>
                <tr>
                  <td className=" p-2">Cross-Chain</td>
                  <td className=" p-2">Limited</td>
                  <td className=" p-2 text-red-600 font-semibold">
                    Binance Only
                  </td>
                  <td className=" p-2">Limited</td>
                  <td className=" p-2">Emerging</td>
                  <td className=" p-2 font-semibold text-[#0e83DB]">
                    Seamless Bridging
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[#ffffff]">
            <span className="font-semibold text-yellow-600">IDEA 3.0</span>{" "}
            combines
            <span className="font-bold"> high-speed transactions</span>,
            <span className="font-bold"> decentralization</span>,
            <span className="font-bold"> low fees</span>, and
            <span className="font-bold"> robust security</span>, making it the
            ideal blockchain for the future.
          </p>
        </div>
        <div className="" id="Roadmap">
          <h2 className=" text-[18px] sm:text-[26px] md:text-[36px] lg:text-[48px] font-bold mb-4 text-[#ffffff] mt-4">
            Roadmap
          </h2>

          <div className="space-y-8 border-l-4 border-blue-600 pl-6">
            {/* Q1 2025 – Testnet Launch */}
            <div>
              <h3 className="text-xl font-semibold text-[#0e83DB] ">
                Q1 2025 – Testnet Launch (Current Phase)
              </h3>
              <ul className="list-disc pl-5 text-[#ffffff] text-[12px] sm:text-[14px] md:text-[16px] font-sans">
                <li>Deployment of the IDEA 3.0 Testnet.</li>
                <li>
                  Testing staking, smart contracts, and governance mechanisms.
                </li>
                <li>Validator onboarding and node testing.</li>
                <li>Initial dApp and developer tool integration.</li>
              </ul>
            </div>

            {/* Q2 2025 – Mainnet Launch */}
            <div>
              <h3 className="text-xl font-semibold text-[#0e83DB]">
                Q2 2025 – Mainnet Launch
              </h3>
              <ul className="list-disc pl-5 text-[#ffffff]  text-[12px] sm:text-[14px] md:text-[16px] font-sans">
                <li>Official launch of IDEA 3.0 Mainnet.</li>
                <li>
                  IDEA Wallet for staking & transactions, DEX, and NFT
                  Marketplace.
                </li>
                <li>Full-scale governance model implementation.</li>
                <li>Expansion of developer ecosystem and grant programs.</li>
              </ul>
            </div>

            {/* Q3-Q4 2025 – Scaling & Ecosystem Growth */}
            <div>
              <h3 className="text-xl font-semibold text-[#0e83DB]">
                Q3-Q4 2025 – Scaling & Ecosystem Growth
              </h3>
              <ul className="list-disc pl-5 text-[#ffffff]  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-sans font-normal">
                <li>Implementation of Layer-2 scaling solutions.</li>
                <li>
                  Deployment of cross-chain bridges to other major blockchains.
                </li>
                <li>Enhanced security audits and protocol optimizations.</li>
                <li>
                  Integration with leading DeFi and enterprise platforms like
                  Binance, Ethereum, and Solana into sidechains of the IDEA
                  Network.
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-[#ffffff]">
            With the{" "}
            <span className="font-semibold text-yellow-600">
              Testnet live now
            </span>{" "}
            and the Mainnet launch set for{" "}
            <span className="font-semibold text-yellow-600">Q2 2025</span>, IDEA
            3.0 is on track to become a leading blockchain platform for
            scalable, decentralized applications. Stay tuned for more updates!
          </p>
        </div>
        <div className="" id="Getting-Started-with-IDEA-3.0">
          <h2 className=" text-[18px] sm:text-[26px] md:text-[36px] lg:text-[48px] font-bold my-4 text-[#ffffff]">
            Getting Started with IDEA 3.0
          </h2>
          <p className="text-[ffffff] mb-6  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            IDEA 3.0 provides a seamless experience for users and developers
            interacting with a high-performance, decentralized blockchain
            network.
          </p>

          {/* Section 1: Setting Up a Wallet */}
          <div className="mb-6">
            <h3
              className="text-xl font-semibold text-[#0e83DB]"
              id="Setting-Up-a-Wallet"
            >
              1. Setting Up a Wallet
            </h3>
            <p className="text-[ffffff]  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
              To interact with IDEA 3.0, use a compatible wallet.
            </p>

            <h4
              className="font-semibold text-[#0e83DB] my-3"
              id="Supported-Wallets"
            >
              Supported Wallets
            </h4>
            <ul className="list-disc pl-5 text-[ffffff]">
              <li>MetaMask (Browser & Mobile)</li>
              <li>Trust Wallet</li>
              <li>Coinbase Wallet</li>
              <li>IDEA Wallet (Coming Soon)</li>
            </ul>

            <h4
              className="font-semibold text-[#0e83DB] my-3"
              id="Adding-IDEA-3.0-to-MetaMask"
            >
              Adding IDEA 3.0 to MetaMask
            </h4>
            <ol className="list-decimal pl-5 text-[ffffff]">
              <li>Install MetaMask from its official site.</li>
              <li>Create or import a wallet using a seed phrase.</li>
              <li>
                Go to <strong>Settings &gt; Networks &gt; Add a Network</strong>
                .
              </li>
              <li>Enter the following details:</li>
            </ol>

            <div className="bg-gray-800 text-white p-3 rounded-lg my-3">
              <p>
                <strong>Network Name:</strong> IDEA 3.0
              </p>
              <p>
                <strong>RPC URL:</strong> https://node1.ideascan.io/
              </p>
              <p>
                <strong>Chain ID:</strong> 2960
              </p>
              <p>
                <strong>Currency Symbol:</strong> IDEA
              </p>
              <p>
                <strong>Block Explorer URL:</strong> https://www.ideascan.io/
              </p>
            </div>
          </div>

          {/* Section 2: How to Use IDEA 3.0 */}
          <div className="mb-6">
            <h3
              className="text-xl font-semibold text-[#0e83DB]"
              id="How-to-Use-IDEA-3.0"
            >
              2. How to Use IDEA 3.0
            </h3>
            <h4
              className="font-semibold text-[#0e83DB] my-3"
              id="Sending-Transactions"
            >
              Sending Transactions
            </h4>
            <ol className="list-decimal pl-5 text-[ffffff]">
              <li>Open your wallet and select the IDEA 3.0 Network.</li>
              <li>
                Click <strong>"Send"</strong> and enter the recipient's wallet
                address.
              </li>
              <li>Input the amount of IDEA tokens to send.</li>
              <li>Adjust gas fees (low on IDEA 3.0).</li>
              <li>Click Confirm to process the transaction.</li>
            </ol>

            <h4
              className="font-semibold text-[#0e83DB] my-3"
              id="Creating-Tokens-Without-Coding"
            >
              Creating Tokens Without Coding
            </h4>
            <ol className="list-decimal pl-5 text-[ffffff]">
              <li>
                Visit <strong>IDEAScan Explorer</strong>.
              </li>
              <li>
                Navigate to <strong>"Create Token"</strong>.
              </li>
              <li>Fill out details (Name, Symbol, Supply, Decimals).</li>
              <li>
                Click <strong>Submit</strong> to generate your token instantly.
              </li>
            </ol>
          </div>

          {/* Section 3: Network Details */}
          <div className="mb-6">
            <h3
              className="text-xl font-semibold text-[#0e83DB]"
              id="Network-Details"
            >
              3. Network Details
            </h3>
            <p className="text-[ffffff]  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
              Developers and users can interact with IDEA 3.0 using the
              following:
            </p>
            <ul className="list-disc pl-5 text-[ffffff]">
              <li>
                <strong>Explorer:</strong> IDEAScan
              </li>
              <li>
                <strong>RPC Endpoint:</strong> https://node1.ideascan.io/
              </li>
              <li>
                <strong>Chain ID:</strong> 2960
              </li>
              <li>
                <strong>Version:</strong> v1.3.3
              </li>
            </ul>
          </div>

          {/* Section 4: Quickstart Guide */}
          <div>
            <h3
              className="text-xl font-semibold text-[#0e83DB]"
              id="Quickstart-Guide"
            >
              4. Quickstart Guide
            </h3>
            <h4 className="font-semibold text-[#0e83DB] my-3">
              Deploying a Smart Contract
            </h4>

            <ol className="list-decimal pl-5 text-[ffffff]">
              <li>Install Node.js and Hardhat:</li>
            </ol>
            <div className="bg-gray-800 text-white p-3 rounded-lg mt-3">
              <p>npm install -g hardhat</p>
            </div>

            <ol className="list-decimal pl-5 text-[ffffff] mt-3">
              <li>Initialize a new project:</li>
            </ol>
            <div className="bg-gray-800 text-white p-3 rounded-lg mt-3">
              <p>mkdir idea-project && cd idea-project</p>
              <br />
              <p>npx hardhat</p>
            </div>

            <h4 className="font-semibold text-[#0e83DB] mt-3">
              Configure Hardhat for IDEA 3.0
            </h4>
            <div className="bg-gray-800 text-white p-3 rounded-lg mt-3">
              <p>
                module.exports = &#123;
                <br />
                &nbsp;&nbsp;networks: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;idea: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url:
                "https://node1.ideascan.io/",
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chainId: 2960,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accounts:
                ["YOUR_PRIVATE_KEY"]
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
              </p>
            </div>

            <h4
              className="font-semibold text-[#0e83DB] mt-3"
              id="Deploying-a-Smart-Contract"
            >
              Deploying a Smart Contract
            </h4>
            <div className="bg-gray-800 text-white p-3 rounded-lg mt-3">
              <p>
                // SPDX-License-Identifier: MIT <br />
                pragma solidity ^0.8.0;
                <br />
                <br />
                contract MyToken &#123;
                <br />
                &nbsp;&nbsp;string public name = "MyToken";
                <br />
                &nbsp;&nbsp;string public symbol = "MTK";
                <br />
                &nbsp;&nbsp;uint256 public totalSupply = 1000000;
                <br />
                &nbsp;&nbsp;mapping(address =&gt; uint256) public balanceOf;
                <br />
                <br />
                &nbsp;&nbsp;constructor() &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;balanceOf[msg.sender] = totalSupply;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
              </p>
            </div>

            <h4 className="font-semibold text-[#0e83DB] mt-3">
              Compile and Deploy
            </h4>
            <div className="bg-gray-800 text-white p-3 rounded-lg mt-3">
              <p>
                npx hardhat compile
                <br />
                npx hardhat run --network idea scripts/deploy.js
              </p>
            </div>

            <p className="mt-6 text-[ffffff]">
              Your smart contract is now deployed on <strong>IDEA 3.0</strong>!
              🚀
            </p>
          </div>
        </div>
        <div className="" id="Developers-Guide-for-IDEA-3.0">
          <h2 className=" text-[18px] sm:text-[26px] md:text-[36px] lg:text-[44px] font-bold my-3">
            Developers Guide for IDEA 3.0
          </h2>
          <p className="mb-4  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            The IDEA 3.0 blockchain provides a developer-friendly environment
            with support for smart contracts, staking, governance, and node
            operation.
          </p>

          <h2
            className="text-xl font-semibold mt-6"
            id="Smart-Contracts-on-IDEA-3.0"
          >
            1. Smart Contracts on IDEA 3.0
          </h2>
          <p
            className="mt-2 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal"
            id="Writing-Deploying-Smart-Contracts"
          >
            Writing & Deploying Smart Contracts
          </p>
          <ul className="list-disc list-inside ml-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>Node.js installed</li>
            <li>Hardhat or Truffle</li>
            <li>MetaMask wallet connected to IDEA 3.0</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-[#0e83DB]">
            Setting Up the Development Environment
          </h3>
          <pre className="bg-gray-800 text-white p-3 rounded-md mt-2">
            npm install -g hardhat
          </pre>
          <pre className="bg-gray-800 text-white p-3 rounded-md mt-2">
            mkdir idea-project &amp;&amp; cd idea-project npx hardhat
          </pre>

          <h3 className="text-lg font-semibold mt-4 text-[#0e83DB]">
            3. Configure IDEA 3.0 Network Edit hardhat.config.js:
          </h3>
          <pre className="bg-gray-800 text-white p-3 rounded-md mt-2 overflow-auto">
            {`js
CopyEdit
module.exports = {
    networks: {
        idea: {
            url: "https://node1.ideascan.io/",
            chainId: 2960,
            accounts: ["YOUR_PRIVATE_KEY"]
        }
    }
};

        `}
          </pre>
          <h3 className="text-lg font-semibold mt-4 text-[#0e83DB]">
            Deploying a Simple Smart Contract
          </h3>
          <h4 className="font-regular my-3">
            Create a Solidity contract (contracts/MyToken.sol):
          </h4>
          <pre className="bg-gray-800 text-white p-3 rounded-md mt-2 overflow-auto">
            {`// SPDX-License-Identifier: MIT
        pragma solidity ^0.8.0;

        contract MyToken {
          string public name = "MyToken";
          string public symbol = "MTK";
          uint256 public totalSupply = 1000000;
          mapping(address => uint256) public balanceOf;

          constructor() {
            balanceOf[msg.sender] = totalSupply;
          }
        }`}
          </pre>
          <h4 className="font-regular my-3">Compile and deploy:</h4>
          <pre className="bg-gray-800 text-white p-3 rounded-md mt-2 overflow-auto">
            {`arduino
CopyEdit
npx hardhat compile
npx hardhat run --network idea scripts/deploy.js
`}
          </pre>
          <p className="font-normal my-3 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins">
            Your smart contract is now deployed on IDEA 3.0!
          </p>

          <h2 className="text-xl font-semibold mt-6" id="Supported-Languages">
            2. Supported Languages
          </h2>
          <p className="mt-2">IDEA 3.0 supports:</p>
          <ul className="list-disc list-inside ml-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-sans font-normal">
            <li>
              <span className="font-bold">Solidity</span> (Ethereum’s primary
              smart contract language)
            </li>
            <li>
              <span className="font-bold">Vyper</span> (A simpler, more secure
              alternative to Solidity)
            </li>
          </ul>

          <p className=" mt-2 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Both languages work <span className="font-bold">natively</span> on
            IDEA 3.0 since it is{" "}
            <span className="font-bold">EVM-compatible</span>.
          </p>

          <h2
            className="text-xl font-semibold mt-6"
            id="Gas-Fees-Optimizations"
          >
            3. Gas Fees & Optimizations
          </h2>
          <h3 className="text-xl font-semibold mt-6" id="Gas-Fees">
            3. Gas Fees
          </h3>
          <p className="mt-2 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            IDEA 3.0 features low transaction fees compared to Ethereum.
            Estimated costs:
          </p>
          <ul className="list-disc list-inside ml-4  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>Simple transactions: Less than $0.001</li>
            <li>Smart contract interactions: $0.002 - $0.01</li>
            <li>Token deployments: Varies based on contract complexity</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6" id="Optimizations">
            4. Optimizations
          </h3>
          <p className="mt-2 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            To <span className="font-bold">reduce gas costs</span>, follow these
            best practices:
          </p>
          <ul className="list-disc list-inside ml-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>
              <span className="font-bold">Use efficient data types</span>{" "}
              (uint256 instead of uint).
            </li>
            <li>
              {" "}
              <span className="font-bold">Minimize storage writes</span> (store
              variables in memory).
            </li>
            <li>
              <span className="font-bold">Use proxy contracts</span> to upgrade
              contracts without high deployment costs.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6" id="Running-a-Node">
            4. Running a Node on IDEA 3.0
          </h2>
          <p className="mt-3 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            To participate in the network, developers can run three types of
            nodes: Full Nodes, Validator Nodes, and Light Nodes.
          </p>
          <h3 className="text-lg font-semibold mt-4" id="Full-Node-Setup">
            Full Node Setup
          </h3>
          <p className="font-normal mt-2 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins">
            To participate in the network, developers can run three types of
            nodes: Full Nodes, Validator Nodes, and Light Nodes.
          </p>
          <h5 className="font-medium my-3">1. Install Dependencies: </h5>
          <pre className="bg-gray-800 text-white p-3 rounded-md mt-2">
            sql
            <br />
            CopyEdit <br />
            sudo apt update &amp;&amp; sudo apt install -y git curl
          </pre>

          <h5 className="font-medium my-3">
            2. Download and Install IDEA 3.0 Client:{" "}
          </h5>
          <pre className="bg-gray-800 text-white p-3 rounded-md mt-2">
            bash
            <br />
            CopyEdit
            <br />
            git clone https://github.com/idea-blockchain/idea-node.git
            <br />
            cd idea-node
            <br />
            ./install.sh
          </pre>
          <h5 className="font-medium my-3">
            <h5 className="font-medium my-3">3. Sync with the Network:</h5>
          </h5>
          <pre className="bg-gray-800 text-white p-3 rounded-md mt-2">
            bash
            <br />
            CopyEdit <br />
            ./idea-node --sync
          </pre>

          <h3 className="text-lg font-semibold mt-4" id="Validator-Node-Setup">
            Validator Node Setup
          </h3>
          <p className=" text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Validator nodes propose and validate blocks. To become a validator:
          </p>
          <ul className="list-disc list-inside ml-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>
              <span className="font-bold">1. Stake IDEA Tokens </span> (at least
              50 IDEA).
            </li>
            <li>
              {" "}
              <span className="font-bold">2. Run a Full Node </span> (see above
              setup).
            </li>
            <li>
              <span className="font-bold">3. Register as a Validator: </span>
            </li>
          </ul>
          <pre className="bg-gray-800 text-white p-3 rounded-md mt-2">
            css
            <br />
            CopyEdit <br />
            ./idea-node --register-validator --stake 50
          </pre>
          <h5 className="text-lg font-normal mt-4">4. Start Validating: </h5>
          <pre className="bg-gray-800 text-white p-3 rounded-md mt-2">
            bash <br />
            CopyEdit <br />
            ./idea-node --start-validator
          </pre>

          <h3 className="text-lg font-semibold mt-4">Light Node Setup</h3>
          <p className=" text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Light nodes store only essential blockchain data to reduce resource
            usage.
          </p>
          <h5 className="text-lg font-normal mt-4">
            1. Install the Light Node Client:{" "}
          </h5>
          <pre className="bg-gray-800 text-white p-3 rounded-md mt-2">
            bash <br />
            CopyEdit <br />
            ./idea-node --install-light
          </pre>
          <h5 className="text-lg font-normal mt-4">
            2. Connect to a Full Node:
          </h5>
          <pre className="bg-gray-800 text-white p-3 rounded-md mt-2">
            arduino <br />
            CopyEdit <br />
            ./idea-node --connect-full-node "https://node1.ideascan.io/"
          </pre>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4" id="Staking-Governance">
            5. Staking & Governance
          </h2>

          <h3 className="text-xl font-semibold mb-2" id="Staking-Mechanism">
            Staking Mechanism
          </h3>
          <p className="mb-4  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            The Proof-of-Stake (PoS) system on IDEA 3.0 allows users to stake
            their tokens and earn rewards while securing the network.
          </p>

          <h3 className="text-xl font-semibold mb-2">How Staking Works</h3>
          <ul className="list-disc list-inside mb-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>Minimum Stake: 50 IDEA tokens</li>
            <li>Epoch System: Validators rotate every 50 epochs</li>
            <li>
              Rewards:
              <ul className="list-disc list-inside ml-6 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
                <li>Block rewards for validators</li>
                <li>Transaction fees distributed among validators</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">How to Stake</h3>
          <ol className="list-decimal list-inside mb-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>
              Connect your wallet to IDEAScan:{" "}
              <a href="#" className="text-blue-600 underline">
                IDEAScan
              </a>
            </li>
            <li>Select a Validator</li>
            <li>Click "Delegate"</li>
            <li>Enter the number of IDEA tokens</li>
            <li>Confirm the transaction</li>
          </ol>

          <h3
            className="text-xl font-semibold mb-2"
            id="Validator-Selection-Rewards"
          >
            Validator Selection & Rewards
          </h3>
          <p className="mb-4  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Validators are selected based on their stake (minimum 50 IDEA).
          </p>
          <p className="mb-2">Rewards are distributed as follows:</p>
          <ul className="list-disc list-inside mb-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>50% to validators</li>
            <li>30% to delegators</li>
            <li>20% to the network treasury</li>
          </ul>

          <h3
            className="text-xl font-semibold mb-2"
            id="Governance-Participation"
          >
            Governance Participation
          </h3>
          <p className="mb-4  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            IDEA 3.0 follows a decentralized governance model, where token
            holders can vote on proposals.
          </p>

          <h3 className="text-xl font-semibold mb-2">How to Vote</h3>
          <ol className="list-decimal list-inside mb-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>Visit the governance portal on IDEAScan.</li>
            <li>Browse active proposals.</li>
            <li>Cast your vote based on your staked IDEA tokens.</li>
          </ol>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold mb-4" id="Security-Best-Practices">
            6. Security & Best Practices
          </h2>
          <p className="mb-2  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Developers and node operators must follow best security practices to
            protect their assets and infrastructure.
          </p>

          <h3
            className="text-xl font-semibold mt-4 mb-2"
            id="Security-Measures"
          >
            Security Measures
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>
              <strong>Use Multi-Signature Wallets:</strong> Secure high-value
              accounts.
            </li>
            <li>
              <strong>Regularly Update Software:</strong> Stay updated with the
              latest IDEA 3.0 releases.
            </li>
            <li>
              <strong>Enable Two-Factor Authentication (2FA):</strong> Secure
              exchange and wallet accounts.
            </li>
          </ul>

          <h3
            className="text-xl font-semibold mt-4 mb-2"
            id="Common-Attacks-Mitigation"
          >
            Common Attacks & Mitigation
          </h3>
          <table className="w-full border-collapse mt-2">
            <thead>
              <tr className="bg-[#0F2434]">
                <th className=" p-2">Attack Type</th>
                <th className=" p-2">Risk Level</th>
                <th className=" p-2">Prevention</th>
              </tr>
            </thead>
            <tbody className="bg-[#071120]  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
              <tr>
                <td className=" p-2">Reentrancy</td>
                <td className=" p-2">High</td>
                <td className=" p-2">
                  Use checks-effects-interactions pattern
                </td>
              </tr>
              <tr>
                <td className=" p-2">Phishing</td>
                <td className=" p-2">Medium</td>
                <td className=" p-2">
                  Verify contract addresses before interacting
                </td>
              </tr>
              <tr>
                <td className=" p-2">Sybil Attacks</td>
                <td className=" p-2">Low</td>
                <td className=" p-2">Limited validator stake per entity</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            Ecosystem & Tools in IDEA 3.0
          </h2>
          <p className="mb-2  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            IDEA 3.0 is more than just a blockchain—it’s an entire ecosystem
            designed for seamless interaction with wallets, decentralized
            exchanges, NFTs, and metaverse assets. This section covers how to
            use the IDEA Wallet, IDEA DEX, NFT Marketplace, and Metaverse
            integrations.
          </p>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-4 mt-2" id="IDEA-Wallet-Guide">
            1. IDEA Wallet Guide
          </h1>
          <p className="mb-4  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            The IDEA Wallet is the official wallet for the IDEA 3.0 network,
            designed to store, send, and stake IDEA tokens and other assets
            securely.
          </p>

          <h2
            className="text-xl font-semibold mb-2"
            id="Features-of-the-IDEA-Wallet"
          >
            Features of the IDEA Wallet
          </h2>
          <ul className="list-disc pl-6 mb-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>Multi-Asset Support: Store IDEA tokens and custom tokens.</li>
            <li>
              Staking & Governance: Stake tokens and participate in voting.
            </li>
            <li>Multi-Send Feature: Send IDEA tokens to multiple addresses.</li>
            <li>
              Secure & Decentralized: Non-custodial wallet with full user
              control.
            </li>
            <li>
              DApp Integration: Seamless connectivity with decentralized
              applications.
            </li>
          </ul>

          <h2
            className="text-xl font-semibold mb-2"
            id="How-to-Set-Up-the-IDEA-Wallet"
          >
            How to Set Up the IDEA Wallet
          </h2>
          <ol className="list-decimal pl-6 mb-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>
              <strong>Download & Install</strong>
              <ul className="list-disc pl-6">
                <li>
                  Available for web, mobile (iOS/Android), and browser
                  extensions.
                </li>
                <li>Download from the official IDEA Network website.</li>
              </ul>
            </li>
            <li>
              <strong>Create a New Wallet</strong>
              <ul className="list-disc pl-6">
                <li>Open the app and select "Create New Wallet".</li>
                <li>
                  Securely save your 12-word seed phrase (cannot be recovered if
                  lost).
                </li>
              </ul>
            </li>
            <li>
              <strong>Import an Existing Wallet</strong>
              <ul className="list-disc pl-6">
                <li>Choose "Import Wallet" and enter your seed phrase.</li>
              </ul>
            </li>
            <li>
              <strong>Connect to IDEA 3.0 Network</strong>
              <ul className="list-disc pl-6">
                <li>Go to Settings &gt; Networks &gt; Add Network.</li>
                <li>Enter the details:</li>
                <pre className="bg-gray-800 p-3 rounded">
                  {`Network Name: IDEA 3.0
RPC URL: https://node1.ideascan.io/
Chain ID: 2960
Currency Symbol: IDEA
Block Explorer URL: https://www.ideascan.io/`}
                </pre>
                <li>Click Save.</li>
              </ul>
            </li>
          </ol>
          <p className=" text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Now, you're ready to send, receive, and stake IDEA tokens.
          </p>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-4 mt-2" id="Using-the-IDEA-DEX">
            2. Using the IDEA DEX
          </h1>
          <p className="mb-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            The IDEA DEX (Decentralized Exchange) allows users to swap tokens,
            provide liquidity, and trade assets on the IDEA blockchain without
            intermediaries.
          </p>

          <h2 className="text-xl font-semibold mt-4">Key Features</h2>
          <ul className="list-disc list-inside ml-4 mb-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>
              Permissionless Trading: Users can swap tokens without relying on
              centralized exchanges.
            </li>
            <li>
              Liquidity Pools: Earn rewards by providing liquidity to trading
              pairs.
            </li>
            <li>
              Low Transaction Fees: Near-zero trading costs compared to
              centralized exchanges.
            </li>
            <li>
              Secure & Transparent: All trades are recorded on-chain, ensuring
              full transparency.
            </li>
          </ul>

          <h2
            className="text-xl font-semibold mt-4"
            id="How-to-Trade-on-IDEA-DEX"
          >
            How to Trade on IDEA DEX
          </h2>
          <ol className="list-decimal list-inside ml-4 mb-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>Visit the IDEA DEX on the official website.</li>
            <li>
              Connect Your Wallet (MetaMask, IDEA Wallet, or Trust Wallet).
            </li>
            <li>
              Select Tokens to Swap:
              <ul className="list-disc list-inside ml-4">
                <li>Choose the token you want to swap.</li>
                <li>Select the token you want to receive.</li>
              </ul>
            </li>
            <li>
              Set Slippage & Confirm Transaction:
              <ul className="list-disc list-inside ml-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
                <li>Adjust slippage tolerance (for volatile markets).</li>
                <li>Click Swap and confirm the transaction in your wallet.</li>
              </ul>
            </li>
            <li>
              View Transaction on IDEAScan:
              <ul className="list-disc list-inside ml-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
                <li>
                  After confirmation, you can track your trade on IDEAScan.
                </li>
              </ul>
            </li>
          </ol>

          <h2
            className="text-xl font-semibold mt-4"
            id="Providing-Liquidity-on-IDEA-DEX"
          >
            Providing Liquidity on IDEA DEX
          </h2>
          <ol className="list-decimal list-inside ml-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>Go to the Liquidity Section of the DEX.</li>
            <li>Select a Trading Pair and add tokens.</li>
            <li>Deposit Funds to earn a share of trading fees.</li>
            <li>Monitor and Remove Liquidity Anytime.</li>
          </ol>
        </div>
        <div className="mt-3">
          <h1
            className="text-2xl font-bold text-[#ffffff] mb-4"
            id="NFT-Marketplace-Development"
          >
            3. NFT Marketplace Development
          </h1>
          <p className="text-[#ffffff] mb-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            The IDEA NFT Marketplace enables users to mint, buy, sell, and trade
            NFTs directly on the IDEA 3.0 blockchain.
          </p>
          <h2 className="text-xl font-semibold text-[#ffffff]">Key Features</h2>
          <ul className="list-disc list-inside text-[#ffffff] mb-4 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>
              No-Code NFT Creation: Easily mint NFTs without writing smart
              contracts.
            </li>
            <li>Low Gas Fees: Mint and trade NFTs at minimal costs.</li>
            <li>
              Full Ownership & Royalties: Artists can earn royalties on
              secondary sales.
            </li>
            <li>
              Decentralized Storage: NFTs are stored on IPFS for security.
            </li>
          </ul>
          <h2
            className="text-xl font-semibold text-[#ffffff]"
            id="How-to-Mint-an-NFT-on-IDEA-3.0"
          >
            How to Mint an NFT on IDEA 3.0
          </h2>
          <ol className="list-decimal list-inside text-[#ffffff] mb-4  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>Go to the IDEA NFT Marketplace.</li>
            <li>Connect Your Wallet (IDEA Wallet or MetaMask).</li>
            <li>
              Upload Your Digital Asset (Image, Video, Audio, or 3D Model).
            </li>
            <li>Fill in NFT Details:</li>
            <ul className="list-disc list-inside ml-6 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
              <li>Name</li>
              <li>Description</li>
              <li>Supply (1/1 or multiple editions)</li>
              <li>Royalties percentage (optional)</li>
            </ul>
            <li>Click "Mint NFT" and confirm the transaction.</li>
            <li>NFT is Now Listed on the Marketplace.</li>
          </ol>
          <h2 className="text-xl font-semibold text-[#ffffff]">
            Buying & Selling NFTs
          </h2>
          <p className="text-[#ffffff]  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <strong>To Buy:</strong> Browse collections, select an NFT, and
            purchase using IDEA tokens.
          </p>
          <p className="text-[#ffffff]  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <strong>To Sell:</strong> Set a price, list your NFT, and receive
            payments in IDEA tokens.
          </p>
        </div>
        <div className="mt-3">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            id="Metaverse-Virtual-Assets"
          >
            4. Metaverse & Virtual Assets
          </h2>
          <p className="text-lg text-[#ffffff] mb-6  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            The IDEA Metaverse aims to integrate virtual assets, digital land,
            and interactive experiences on the blockchain.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Metaverse Features</h2>
          <ul className="list-disc list-inside space-y-2 text-[#ffffff] text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>
              <span className="text-white font-semibold">
                Virtual Meeting Rooms:
              </span>{" "}
              Businesses and communities can host blockchain-powered virtual
              meetings.
            </li>
            <li>
              <span className="text-white font-semibold">
                Digital Land Ownership:
              </span>{" "}
              Users can buy, sell, and develop virtual land as NFTs.
            </li>
            <li>
              <span className="text-white font-semibold">
                Avatar Customization:
              </span>{" "}
              Create and trade custom avatars and digital wearables.
            </li>
            <li>
              <span className="text-white font-semibold">
                In-Game Economies:
              </span>{" "}
              Games built on IDEA 3.0 can use NFTs and tokens for in-game
              assets.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            How to Get Started in the IDEA Metaverse
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-[#ffffff] text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>
              Visit the{" "}
              <span className="text-blue-400">IDEA Metaverse Portal</span>.
            </li>
            <li>Connect Your Wallet.</li>
            <li>Create an Avatar or Buy Digital Land.</li>
            <li>Explore Virtual Spaces for meetings, gaming, or business.</li>
            <li>Trade Virtual Assets within the metaverse.</li>
          </ol>
        </div>
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            API & SDK Documentation for IDEA 3.0
          </h2>
          <p className="text-lg text-[#ffffff] mb-6">
            The IDEA 3.0 API & SDK provides developers with powerful tools to
            interact with the blockchain, automate transactions, query
            blockchain data, and integrate Web3 applications. This section
            covers:
          </p>

          <ul className="list-disc list-inside space-y-2 text-[#ffffff]">
            <li>
              <span className="text-white font-semibold">
                IDEA 3.0 API Reference:
              </span>{" "}
              REST & WebSocket APIs for querying blockchain data and executing
              transactions.
            </li>
            <li>
              <span className="text-white font-semibold">
                CLI Commands & Usage:
              </span>{" "}
              Command-line interface for interacting with the network.
            </li>
            <li>
              <span className="text-white font-semibold">
                Web3 Integration:
              </span>{" "}
              How to connect IDEA 3.0 to dApps using Web3.js, ethers.js, and
              smart contracts.
            </li>
          </ul>

          <h2
            className="text-2xl font-semibold mt-6 mb-4"
            id="IDEA-3.0-API-Reference"
          >
            1. IDEA 3.0 API Reference
          </h2>
          <p className="text-[#ffffff] mb-4">
            Developers can use REST APIs and WebSocket APIs to fetch blockchain
            data, check transactions, interact with smart contracts, and manage
            wallets.
          </p>

          <h3 className="text-xl font-semibold mb-2">Base API Endpoint</h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm">
            https://api.ideascan.io/
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            API Authentication
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[#ffffff]">
            <li>Public API endpoints do not require authentication.</li>
            <li>
              Private API calls require an API key (optional for advanced
              features).
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Common API Endpoints
          </h3>
          <h4 className="text-lg font-semibold mt-4" id="Get-Block-Information">
            1. Get Block Information
          </h4>
          <p className="text-[#ffffff]  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Retrieve details of a block by block number or hash.
          </p>

          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            GET /block/{`{block_number}`}
          </div>

          <h4 className="text-lg font-semibold mt-6">Example Response</h4>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            <pre>
              {`{
  "block_number": 105645,
  "hash": "0xa4fcb2...",
  "timestamp": 1710123456,
  "transactions": 198,
  "miner": "0xabc123...",
  "gas_used": 1200000
}`}
            </pre>
          </div>
          <h4
            className="text-lg font-semibold mt-4"
            id="Get-Transaction-Details"
          >
            2. Get Transaction Details
          </h4>
          <p className="text-[#ffffff]  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Retrieve transaction details by transaction hash.
          </p>

          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            pgsql <br />
            CopyEdit <br />
            GET /transaction/{`{tx_hash}`}
          </div>

          <h4 className="text-lg font-semibold mt-6">Example Response</h4>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            <pre>
              {`{
    "hash": "0x12acb34...",
  "from": "0xabc123...",
  "to": "0xdef456...",
  "value": "1000 IDEA",
  "gas_used": 21000,
  "status": "Success"

}`}
            </pre>
          </div>

          <h4 className="text-lg font-semibold mt-4" id="Get-Account-Balance">
            3. Get Account Balance
          </h4>
          <p className="text-[#ffffff]  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Fetch the balance of an address.
          </p>

          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            pgsql <br />
            CopyEdit <br />
            GET /transaction/{`{wallet_address}`}
          </div>

          <h4 className="text-lg font-semibold mt-6">Example Response</h4>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            <pre>
              {`
json
CopyEdit
{
  "address": "0xabc123...",
  "balance": "5000 IDEA"
}

`}
            </pre>
          </div>

          <h4 className="text-lg font-semibold mt-4" id="Send-a-Transaction">
            4. Send a Transaction
          </h4>
          <p className="text-[#ffffff]  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Broadcast a transaction on the network.
          </p>

          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            pgsql <br />
            CopyEdit <br />
            POST /sendTransaction
          </div>

          <h4 className="text-lg font-semibold mt-6">Request Body</h4>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            <pre>
              {`
{
  "from": "0xabc123...",
  "to": "0xdef456...",
  "amount": "100 IDEA",
  "gas_limit": 21000,
  "private_key": "YOUR_PRIVATE_KEY"
}
`}
            </pre>
          </div>
          <h4 className="text-lg font-semibold mt-6">Response</h4>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            <pre>
              {`{
  "tx_hash": "0xa8cbf3..."
}
`}
            </pre>
          </div>

          <h4
            className="text-lg font-semibold mt-4"
            id="Subscribe-to-Real-Time-Events"
          >
            5. Subscribe to Real-Time Events (WebSockets)
          </h4>
          <p className="text-[#ffffff]  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Subscribe-to-Real-Time-Events
          </p>

          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            pgsql <br />
            CopyEdit <br />
            wss://api.ideascan.io/ws
          </div>

          <h4 className="text-lg font-semibold mt-6">
            Example Usage (JavaScript)
          </h4>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            <pre>
              {`
js
CopyEdit
const ws = new WebSocket('wss://api.ideascan.io/ws');
ws.onmessage = (event) => {
    console.log("New Transaction:", event.data);
};
`}
            </pre>
          </div>
        </div>
        <div className="mt-4">
          <h2
            className="text-3xl md:text-4xl font-bold  mb-6"
            id="CLI-Commands-Usage"
          >
            CLI Commands & Usage
          </h2>
          <p className="text-lg text-[#ffffff] mb-6  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            The IDEA 3.0 Command Line Interface (CLI) allows developers to
            interact with the blockchain directly from their terminal.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Installing the IDEA CLI
          </h2>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm">
            npm install -g idea-cli
          </div>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Available CLI Commands
          </h2>

          <h3 className="text-xl font-semibold mt-4" id="Check-Network-Status">
            1. Check Network Status
          </h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            idea status
          </div>
          <h4 className="text-lg font-semibold mt-4">Example Output</h4>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            <pre>
              {`Network: IDEA 3.0
Block Height: 106789
Connected Peers: 25
Gas Price: 0.00001 IDEA`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold mt-6" id="Check-Wallet-Balance">
            2. Check Wallet Balance
          </h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            idea balance --address 0xabc123...
          </div>
          <h4 className="text-lg font-semibold mt-4">Output</h4>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            <pre>
              {`Address: 0xabc123...
Balance: 5000 IDEA`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold mt-6" id="Send-a-Transaction">
            3. Send a Transaction
          </h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            idea send --from 0xabc123... --to 0xdef456... --amount 100
          </div>
          <h4 className="text-lg font-semibold mt-4">
            After confirmation, you’ll get:
          </h4>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            <pre>{`Transaction submitted: 0xa8cbf3...`}</pre>
          </div>

          <h3
            className="text-xl font-semibold mt-6"
            id="Deploy-a-Smart-Contract"
          >
            4. Deploy a Smart Contract
          </h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            idea deploy --contract myContract.sol
          </div>

          <h3
            className="text-xl font-semibold mt-6"
            id="View-Recent-Transactions"
          >
            5. View Recent Transactions
          </h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            idea transactions --address 0xabc123...
          </div>
          <h4 className="text-lg font-semibold mt-4">Output</h4>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            <pre>
              {`Latest Transactions:
- 0xa8cbf3... | Sent 100 IDEA to 0xdef456...
- 0x76baf2... | Received 200 IDEA from 0x987654...`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold mt-6" id="Run-a-Node ">
            6. Run a Node
          </h3>
          <h4 className="text-lg font-semibold mt-4">Start a Full Node:</h4>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            idea start-node --sync
          </div>

          <h4 className="text-lg font-semibold mt-4">Run a Validator Node:</h4>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm mt-2">
            idea start-validator --stake 50
          </div>
        </div>
        <div className="mt-3">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            id="Web3-Integration"
          >
            Web3 Integration
          </h2>
          <p className="text-[#ffffff] mb-6  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Developers can integrate IDEA 3.0 into dApps using Web3.js or
            ethers.js.
          </p>

          <h2
            className="text-2xl font-semibold mb-4"
            id="Connecting-to-IDEA-3.0-RPC"
          >
            Connecting Web3.js to IDEA 3.0
          </h2>

          <h3 className="text-xl font-semibold mt-4" id="">
            Install Web3.js
          </h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm">
            npm install web3
          </div>

          <h3
            className="text-xl font-semibold mt-6"
            id="Connecting-to-IDEA-3.0-RPC"
          >
            Connecting to IDEA 3.0 RPC
          </h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm">
            <pre>
              {`const Web3 = require('web3');
const web3 = new Web3('https://node1.ideascan.io/');
console.log("Connected to IDEA 3.0:", web3.isConnected());`}
            </pre>
          </div>

          <h3
            className="text-xl font-semibold mt-6"
            id="Getting-Account-Balance"
          >
            Getting Account Balance
          </h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm">
            <pre>
              {`async function getBalance(address) {
    let balance = await web3.eth.getBalance(address);
    console.log("Balance:", web3.utils.fromWei(balance, 'ether'), "IDEA");
}
getBalance("0xabc123...");`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold mt-6" id="Sending-a-Transaction">
            Sending a Transaction
          </h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm">
            <pre>
              {`async function sendTransaction(from, to, amount, privateKey) {
    const tx = {
        from: from,
        to: to,
        value: web3.utils.toWei(amount, 'ether'),
        gas: 21000
    };
    
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        .on('receipt', console.log);
}
sendTransaction("0xabc123...", "0xdef456...", "10", "YOUR_PRIVATE_KEY");`}
            </pre>
          </div>

          <h3
            className="text-xl font-semibold mt-6"
            id="Interacting-with-Smart-Contracts"
          >
            Interacting with Smart Contracts
          </h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm">
            <pre>
              {`const contractABI = [...]; // Smart contract ABI
const contractAddress = "0xcontract123...";
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function callContractFunction() {
    const result = await contract.methods.myFunction().call();
    console.log("Result:", result);
}
callContractFunction();`}
            </pre>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4" id="API & SDK">
            API & SDK
          </h2>
          <ul className="list-disc pl-6 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li className="mb-2">IDEA 3.0 API Reference</li>
            <li className="mb-2">CLI Commands & Usage</li>
            <li>Web3 Integration</li>
          </ul>
        </div>
        <div className="mt-3">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            id="Cross-Chain-Interoperability-idea"
          >
            Cross-Chain Interoperability in IDEA 3.0
          </h2>
          <p className="text-lg text-[#ffffff] mb-6  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            The IDEA 3.0 blockchain is designed with cross-chain
            interoperability, allowing seamless asset transfers and smart
            contract interactions between multiple blockchains, including
            Ethereum, Binance Smart Chain (BSC), and Solana.
          </p>

          <h2 className="text-2xl font-semibold mb-4" id="Bridging-Assets">
            1. Bridging Assets from Other Blockchains
          </h2>
          <h3
            className="text-xl font-semibold mt-4"
            id="How-Cross-Chain-Bridging-Works"
          >
            How Cross-Chain Bridging Works
          </h3>
          <p className="text-[#ffffff]  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Bridging allows users to transfer tokens, NFTs, and data between
            IDEA 3.0 and other blockchain networks.
          </p>

          <h3 className="text-xl font-semibold mt-4" id="Supported-Chains">
            Supported Chains for Bridging
          </h3>
          <ul className="list-disc pl-6 text-lg text-[#ffffff] text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>Ethereum (ERC-20)</li>
            <li>Binance Smart Chain (BEP-20)</li>
            <li>Solana (SPL Tokens)</li>
            <li>Polygon (MATIC)</li>
            <li>Other EVM-Compatible Chains</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6" id="Steps-to-Bridge">
            Steps to Bridge Assets to IDEA 3.0
          </h3>
          <ol className="list-decimal pl-6 text-lg text-[#ffffff] text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>Visit the Official IDEA Bridge Portal (Coming Soon)</li>
            <li>Select Source & Destination Chains</li>
            <li>Select the Token to Bridge</li>
            <li>Deposit the Tokens</li>
            <li>Receive Wrapped Tokens on IDEA 3.0</li>
            <li>Use the Bridged Assets</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6" id="Bridging-Back">
            Bridging Back to Other Chains
          </h3>
          <ol className="list-decimal pl-6 text-lg text-[#ffffff] text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>Select IDEA 3.0 → Destination Chain.</li>
            <li>Burn the Wrapped Tokens on IDEA 3.0.</li>
            <li>Release the Original Tokens on the Source Chain.</li>
          </ol>

          <h2
            className="text-2xl font-semibold mt-10 mb-4"
            id="Connecting-to-Other-Chains"
          >
            2. Connecting to Ethereum, BSC, Solana, and More
          </h2>
          <h3
            className="text-xl font-semibold mt-4"
            id="Connecting-to-Ethereum"
          >
            Connecting IDEA 3.0 to Ethereum (ERC-20)
          </h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm">
            <pre>
              {`const Web3 = require('web3');
const ethWeb3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_KEY');

async function getEthBalance(address) {
    let balance = await ethWeb3.eth.getBalance(address);
    console.log("ETH Balance:", Web3.utils.fromWei(balance, 'ether'));
}
getEthBalance("0xabc123...");`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold mt-6">Adding BSC to MetaMask</h3>
          <div className="bg-gray-800 text-[#ffffff] p-4 rounded-lg font-mono text-sm">
            <pre>
              {`Network Name: Binance Smart Chain
RPC URL: https://bsc-dataseed.binance.org/
Chain ID: 56
Currency Symbol: BNB`}
            </pre>
          </div>

          <h2
            className="text-2xl font-semibold mt-10 mb-4"
            id="Future-of-Cross-Chain"
          >
            3. Future of Cross-Chain in IDEA 3.0
          </h2>
          <ul className="list-disc pl-6 text-lg text-[#ffffff] text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            <li>Integrating Cosmos IBC (Inter-Blockchain Communication)</li>
            <li>Supporting Layer-2 Scaling Bridges</li>
            <li>Launching a Fully Decentralized Bridge</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
