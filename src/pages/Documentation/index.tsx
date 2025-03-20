import React, { useState } from "react";
import Stepper from "../../layouts/MainLayout/components/Stepper";
import {
  Card,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "25px",
  },
  step: {
    // height: "100vh",
  },
  card: {
    backgroundColor: "#151515", // Dark background
    color: "#ffffff", // White text
    marginBottom: theme.spacing(2),
    borderRadius: "8px",
    position: "relative",
    overflow: "hidden",
    border: "1px solid #2B2B2B",
  },
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: 600,
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)", // Example gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  cardSubtitle: {
    fontSize: "0.9rem",
    color: "#b3b3b3", // Slightly lighter text for subtitle
    marginTop: "4px",
  },
  divider: {
    backgroundColor: "#363636",
    margin: "0.5rem 0",
  },
  iconButton: {
    // Position arrow on the right side
    position: "absolute",
    top: "0.5rem",
    right: "1rem",
    color: "#ffffff",
    transition: "transform 0.3s",
  },
  // Optional rotate effect when expanded
  rotate: {
    transform: "rotate(180deg)",
  },
  leftcontainer: {
    color: "#ffffff",
    width: "80%",
    fontFamily: "sans-serif",
    padding: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18, // Default for small screens
    [theme.breakpoints.up("sm")]: {
      fontSize: 26,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 36,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 48,
    },
  },
  headingColor: {
    color: theme.palette.warning.main,
  },
  tablebg: {
    backgroundColor: "#0F2434",
  },
  tablerow: {
    backgroundColor: "#071120",
  },
  text: {
    fontSize: 12, // Default size
    lineHeight: "30px",
    fontFamily: "SF Pro Display",
    fontWeight: "normal",
    marginTop: theme.spacing(1), // Equivalent to Tailwind's my-4
    marginBottom: theme.spacing(1),

    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  list: {
    listStyleType: "disc", // Equivalent to list-disc
    paddingLeft: "1em", // Ensures bullets are inside
    fontSize: 12, // Default font size
    lineHeight: "30px",
    fontFamily: "Sf Pro Display",
    fontWeight: "normal",
    marginTop: theme.spacing(1), // Equivalent to my-4
    marginBottom: theme.spacing(1),
    "& li": {
      marginBottom: theme.spacing(0.5), // Equivalent to space-y-2
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  textContainer: {
    fontSize: 12, // Default font size
    lineHeight: "30px",
    fontFamily: "SF Pro Display",
    fontWeight: "normal",
    marginTop: theme.spacing(1), // Equivalent to my-4
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2), // Equivalent to space-y-4

    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  textStyle: {
    color: "#ffffff", // Equivalent to text-[#ffffff]
    fontWeight: 600, // Equivalent to font-semibold
  },
  tabletextStyle: {
    padding: "8px", // p-2
    fontWeight: 600, // font-semibold
    color: "#0e83DB", // text-[#0e83DB]
  },
  customText: {
    fontSize: "1.25rem", // Equivalent to text-xl (20px)
    fontWeight: 600, // Equivalent to font-semibold
    color: "#0e83DB", // Equivalent to text-[#0e83DB]
  },
  listStyle: {
    listStyleType: "disc", // Equivalent to list-disc
    paddingLeft: "20px", // Equivalent to pl-5 (5 * 4px = 20px)
    color: "#ffffff", // Equivalent to text-[#ffffff]
  },
  customBox: {
    backgroundColor: "#1f2937", // Equivalent to bg-gray-800
    color: "#ffffff", // Equivalent to text-white
    padding: "14px", // Equivalent to p-3 (3 * 4px = 12px)
    borderRadius: "8px", // Equivalent to rounded-lg
    margin: "12px 0px", // Equivalent to my-3
  },
  customList: {
    listStyleType: "decimal", // Equivalent to list-decimal
    paddingLeft: "20px", // Equivalent to pl-5 (5 * 4px = 20px)
    color: "#ffffff", // Equivalent to text-[#ffffff]
  },
  customHeading: {
    fontSize: "18px", // Equivalent to text-lg (1.125rem ≈ 18px)
    fontWeight: 600, // Equivalent to font-semibold
    marginTop: "16px", // Equivalent to mt-4 (4 * 4px = 16px)
    color: "#0e83DB", // Equivalent to text-[#0e83DB]
  },
  heading2: {
    fontSize: "20px", // Equivalent to text-xl (~20px)
    fontWeight: 600, // Equivalent to font-semibold
    marginBottom: "8px", // Equivalent to mb-2 (2 * 4px = 8px)
  },
  heading3: {
    fontSize: "18px", // Equivalent to text-lg (~18px)
    fontWeight: 600, // Equivalent to font-semibold
    marginTop: "16px", // Equivalent to mt-4 (4 * 4px = 16px)
  },
  heading4: {
    fontSize: "20px", // Equivalent to text-xl (~20px)
    fontWeight: 600, // Equivalent to font-semibold
    marginTop: "24px", // Equivalent to mt-6 (6 * 4px = 24px)
  },
  textrou: {
    backgroundColor: "#1F2937", // Equivalent to bg-gray-800
    color: "#ffffff", // Equivalent to text-[#ffffff]
    padding: "16px", // Equivalent to p-4 (4 * 4px = 16px)
    borderRadius: "8px", // Equivalent to rounded-lg (~8px)
    fontFamily: "monospace", // Equivalent to font-mono
    fontSize: "14px", // Equivalent to text-sm (~14px)
    marginTop: "8px", // Equivalent to mt-2 (2 * 4px = 8px)
  },
  cardContent: {
    fontSize: "32px",
    fontWeight: 600,
    fontFamily: "SF Pro Display",
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)", // Example gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginTop: theme.spacing(1),
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
}));

const Documentation = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:768px)");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  const sections = [
    {
      id: "Introduction",
      title: "Introduction",
      content: (
        <div id="Introduction">
          <div>
            <h2 className={clsx(classes.heading)}>Introduction</h2>
          </div>
          <p className={clsx(classes.text)}>
            Welcome to the IDEA 3.0 documentation! IDEA 3.0 is a next-generation
            blockchain network designed to address the challenges of
            scalability, decentralization, and high transaction costs. By
            integrating an optimized{" "}
            <span className="font-bold">
              Proof of Stake and Proof of Stake Fixed Protocol (PoSfp)
            </span>{" "}
            mechanism with cross-chain interoperability, IDEA 3.0 provides a
            seamless and efficient environment for decentralized applications
            (dApps), financial transactions, and enterprise blockchain
            solutions.
          </p>
        </div>
      ),
    },
    {
      id: "What-is-IDEA-3.0",
      title: "What is IDEA 3.0?",
      content: (
        <div id="What-is-IDEA-3.0">
          <div>
            <h2 className={clsx(classes.heading)}>What is IDEA 3.0?</h2>
          </div>
          <p className={clsx(classes.text)}>
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
      ),
    },
    {
      id: "Key-Components-of-IDEA-3.0",
      title: "Key Components of IDEA 3.0:",
      content: (
        <div id="Key-Components-of-IDEA-3.0">
          <h2 className={clsx(classes.heading)}>Key Components of IDEA 3.0:</h2>
          <ul className={clsx(classes.list)}>
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
      ),
    },
    {
      id: "Key-Features",
      title: "Key Features",
      content: (
        <div id="Key-Features">
          <h2 className={clsx(classes.heading)}>Key Features</h2>
          <ul className={clsx(classes.textContainer)}>
            <li id="Fixed-Maximum-Stake-for-Decentralization">
              <span className={clsx(classes.textStyle)}>
                1. Fixed Maximum Stake for Decentralization
              </span>
              <p className={clsx(classes.text)}>
                IDEA 3.0 enforces a 50-token stake cap per validator, ensuring
                that no single entity can dominate the network. This approach
                enhances fairness and promotes true decentralization.
              </p>
            </li>
            <li id="High-Speed-Transactions-Low-Fees">
              <span className={clsx(classes.textStyle)}>
                2. High-Speed Transactions & Low Fees
              </span>
              <p className={clsx(classes.text)}>
                The network architecture supports 100,000 TPS, significantly
                outperforming existing blockchains like Ethereum and Binance
                Smart Chain. Optimized transaction validation mechanisms reduce
                congestion and keep fees low.
              </p>
            </li>
            <li id="Epoch-Based-Validator-Selection">
              <span className={clsx(classes.textStyle)}>
                3. Epoch-Based Validator Selection
              </span>
              <p className={clsx(classes.text)}>
                Validators rotate every 50 epochs, preventing long-term
                validator monopolies and maintaining network security. This
                mechanism also boosts network efficiency and speeds up consensus
                finality.
              </p>
            </li>
            <li id="Smart-Contract-Flexibility">
              <span className={clsx(classes.textStyle)}>
                4. Smart Contract Flexibility
              </span>
              <p className={clsx(classes.text)}>
                IDEA 3.0 supports Solidity and Vyper, making it easy for
                Ethereum developers to transition and deploy dApps without
                additional learning curves.
              </p>
            </li>
            <li id="Cross-Chain-Interoperability">
              <span className={clsx(classes.textStyle)}>
                5. Cross-Chain Interoperability
              </span>
              <p className={clsx(classes.text)}>
                The network includes native bridging capabilities, allowing
                users to seamlessly move assets between IDEA 3.0 and other major
                blockchains, fostering liquidity and interoperability across
                ecosystems.
              </p>
            </li>
            <li id="Decentralized-Governance">
              <span className={clsx(classes.textStyle)}>
                6. Decentralized Governance
              </span>
              <p className={clsx(classes.text)}>
                IDEA 3.0 token holders can participate in governance by
                proposing and voting on protocol upgrades, ensuring that network
                evolution aligns with community interests.
              </p>
            </li>
            <li id="Security-Fraud-Prevention">
              <span className={clsx(classes.textStyle)}>
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
      ),
    },
    {
      id: "Why-IDEA-3.0",
      title: "Why IDEA 3.0?",
      content: (
        <div id="Why-IDEA-3.0">
          <h2 className={clsx(classes.heading)}>Why IDEA 3.0?</h2>
          <p className="mt-2 text-[12px] sm:text-[14px] md:text-[16px]">
            IDEA 3.0 addresses key limitations faced by current blockchain
            networks:
          </p>
          <ul className={clsx(classes.list)}>
            <li>
              <span className={clsx(classes.textStyle)}>Ethereum</span>{" "}
              struggles with high gas fees and network congestion.
            </li>
            <li>
              <span className={clsx(classes.textStyle)}>
                Binance Smart Chain (BSC)
              </span>{" "}
              has fast transactions but is highly centralized.
            </li>
            <li>
              <span className={clsx(classes.textStyle)}>Solana</span> offers
              high TPS but suffers from frequent network outages.
            </li>
            <li>
              <span className={clsx(classes.textStyle)}>Cardano</span> provides
              decentralization but has slow transaction speeds.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "How-IDEA-3.0-Stands-Out",
      title: "How IDEA 3.0 Stands Out",
      content: (
        <div id="How-IDEA-3.0-Stands-Out">
          <h2 className={clsx(classes.heading, classes.headingColor)}>
            How <span className="text-[#ffffff]">IDEA 3.0</span> Stands Out
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg">
              <thead>
                <tr className={clsx(classes.tablebg, classes.text)}>
                  <th className=" p-2">Feature</th>
                  <th className=" p-2">Ethereum</th>
                  <th className=" p-2">Binance Smart Chain</th>
                  <th className=" p-2">Solana</th>
                  <th className=" p-2">Cardano</th>
                  <th className=" p-2">IDEA 3.0</th>
                </tr>
              </thead>
              <tbody className={clsx(classes.text, classes.tablerow)}>
                <tr>
                  <td className=" p-2">TPS</td>
                  <td className=" p-2">15-30</td>
                  <td className=" p-2">60-100k</td>
                  <td className=" p-2">65k</td>
                  <td className=" p-2">250k</td>
                  <td className={clsx(classes.tabletextStyle)}>100k</td>
                </tr>
                <tr>
                  <td className=" p-2">Consensus</td>
                  <td className=" p-2">PoS</td>
                  <td className=" p-2">PoSA</td>
                  <td className=" p-2">PoH + PoS</td>
                  <td className=" p-2">Ouroboros PoS</td>
                  <td className={clsx(classes.tabletextStyle)}>
                    PoS + PoSfp with Fixed Staking
                  </td>
                </tr>
                <tr>
                  <td className=" p-2">Governance</td>
                  <td className=" p-2">Limited</td>
                  <td className=" p-2">Centralized</td>
                  <td className=" p-2">Limited</td>
                  <td className=" p-2">Decentralized</td>
                  <td className={clsx(classes.tabletextStyle)}>
                    Full On-Chain Voting
                  </td>
                </tr>
                <tr>
                  <td className=" p-2">Fees</td>
                  <td className=" p-2">High</td>
                  <td className=" p-2">Low</td>
                  <td className=" p-2">Very Low</td>
                  <td className=" p-2">Low</td>
                  <td className={clsx(classes.tabletextStyle)}>Ultra-Low</td>
                </tr>
                <tr>
                  <td className=" p-2">Cross-Chain</td>
                  <td className=" p-2">Limited</td>
                  <td className=" p-2">Binance Only</td>
                  <td className=" p-2">Limited</td>
                  <td className=" p-2">Emerging</td>
                  <td className={clsx(classes.tabletextStyle)}>
                    Seamless Bridging
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[#ffffff]">
            <span
              className={clsx(classes.headingColor)}
              style={{ fontWeight: "bold" }}
            >
              IDEA 3.0
            </span>{" "}
            combines
            <span className="font-bold"> high-speed transactions</span>,
            <span className="font-bold"> decentralization</span>,
            <span className="font-bold"> low fees</span>, and
            <span className="font-bold"> robust security</span>, making it the
            ideal blockchain for the future.
          </p>
        </div>
      ),
    },
    // You can add additional sections (e.g. "Roadmap", "Getting Started with IDEA 3.0") similarly.
    {
      id: "Roadmap",
      title: "Roadmap",
      content: (
        <div id="Roadmap">
          <h2
            className={classes.heading}
            style={{ marginTop: "4px", marginBottom: "8px" }}
          >
            Roadmap
          </h2>

          <div
            style={{
              marginBottom: "2rem",
              borderLeft: "4px solid #2563EB",
              paddingLeft: "1.5rem",
            }}
          >
            {/* Q1 2025 – Testnet Launch */}
            <div>
              <h3 className={classes.customText}>
                Q1 2025 – Testnet Launch (Current Phase)
              </h3>
              <ul className={classes.list}>
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
              <h3 className={classes.customText}>Q2 2025 – Mainnet Launch</h3>
              <ul className={classes.list}>
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
              <h3 className={classes.customText}>
                Q3-Q4 2025 – Scaling & Ecosystem Growth
              </h3>
              <ul className={classes.list}>
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

          <p style={{ marginTop: 6, color: "#ffffff" }}>
            With the{" "}
            <span className={classes.headingColor} style={{ fontWeight: 600 }}>
              Testnet live now
            </span>{" "}
            and the Mainnet launch set for{" "}
            <span className={classes.headingColor} style={{ fontWeight: 600 }}>
              Q2 2025
            </span>
            , IDEA 3.0 is on track to become a leading blockchain platform for
            scalable, decentralized applications. Stay tuned for more updates!
          </p>
        </div>
      ),
    },
    {
      id: "Getting-Started-with-IDEA-3.0",
      title: "Getting Started with IDEA 3.0",
      content: (
        <div id="Getting-Started-with-IDEA-3.0">
          <h2 className={classes.heading}>Getting Started with IDEA 3.0</h2>
          <p className={classes.text}>
            IDEA 3.0 provides a seamless experience for users and developers
            interacting with a high-performance, decentralized blockchain
            network.
          </p>

          {/* Section 1: Setting Up a Wallet */}
          <div className="mb-6">
            <h3 className={classes.customText} id="Setting-Up-a-Wallet">
              1. Setting Up a Wallet
            </h3>
            <p className={classes.text}>
              To interact with IDEA 3.0, use a compatible wallet.
            </p>

            <h4 className={classes.customText} id="Supported-Wallets">
              Supported Wallets
            </h4>
            <ul className={classes.listStyle}>
              <li>MetaMask (Browser & Mobile)</li>
              <li>Trust Wallet</li>
              <li>Coinbase Wallet</li>
              <li>IDEA Wallet (Coming Soon)</li>
            </ul>

            <h4 className={classes.customText} id="Adding-IDEA-3.0-to-MetaMask">
              Adding IDEA 3.0 to MetaMask
            </h4>
            <ol className="list-decimal text-[ffffff]">
              <li>Install MetaMask from its official site.</li>
              <li>Create or import a wallet using a seed phrase.</li>
              <li>
                Go to <strong>Settings &gt; Networks &gt; Add a Network</strong>
                .
              </li>
              <li>Enter the following details:</li>
            </ol>

            <div className={classes.customBox}>
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
          <div className="mt-4 mb-6">
            <h3 className={classes.customText} id="How-to-Use-IDEA-3.0">
              2. How to Use IDEA 3.0
            </h3>
            <h4 className={classes.customText} id="Sending-Transactions">
              Sending Transactions
            </h4>
            <ol className={classes.customList}>
              <li>Open your wallet and select the IDEA 3.0 Network.</li>
              <li>
                {` Click <strong>"Send"</strong> and enter the recipient's wallet address.`}
              </li>
              <li>Input the amount of IDEA tokens to send.</li>
              <li>Adjust gas fees (low on IDEA 3.0).</li>
              <li>Click Confirm to process the transaction.</li>
            </ol>

            <h4
              className={classes.customText}
              id="Creating-Tokens-Without-Coding"
            >
              Creating Tokens Without Coding
            </h4>
            <ol className={classes.customList}>
              <li>
                Visit <strong>IDEAScan Explorer</strong>.
              </li>
              <li>{` Navigate to <strong>"Create Token"</strong>.`}</li>
              <li>Fill out details (Name, Symbol, Supply, Decimals).</li>
              <li>
                Click <strong>Submit</strong> to generate your token instantly.
              </li>
            </ol>
          </div>

          {/* Section 3: Network Details */}
          <div className="mb-6">
            <h3 className={classes.customText} id="Network-Details">
              3. Network Details
            </h3>
            <p className={classes.text}>
              Developers and users can interact with IDEA 3.0 using the
              following:
            </p>
            <ul className={classes.listStyle}>
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
            <h3 className={classes.customText} id="Quickstart-Guide">
              4. Quickstart Guide
            </h3>
            <h4 className={classes.customText}>Deploying a Smart Contract</h4>

            <ol className={classes.customList}>
              <li>Install Node.js and Hardhat:</li>
            </ol>
            <div className={classes.customBox}>
              <p>npm install -g hardhat</p>
            </div>

            <ol
              className={classes.customList}
              style={{ marginTop: "8px", marginBottom: "8px" }}
            >
              <li>Initialize a new project:</li>
            </ol>
            <div className={classes.customBox}>
              <p>mkdir idea-project && cd idea-project</p>
              <br />
              <p>npx hardhat</p>
            </div>

            <h4
              className=" mt-3 mb-3"
              style={{ color: "#0e83DB", fontWeight: 600, fontSize: "16px" }}
            >
              Configure Hardhat for IDEA 3.0
            </h4>
            <div className={classes.customBox}>
              <p>
                module.exports = &#123;
                <br />
                &nbsp;&nbsp;networks: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;idea: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url:
                &quot;https://node1.ideascan.io/&quot;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chainId: 2960,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accounts:
                [&quot;YOUR_PRIVATE_KEY&quot;]
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
              </p>
            </div>

            <h4
              className=" mt-3 mb-3"
              style={{ color: "#0e83DB", fontWeight: 600, fontSize: "16px" }}
              id="Deploying-a-Smart-Contract"
            >
              Deploying a Smart Contract
            </h4>
            <div className={classes.customBox}>
              <p>
                SPDX-License-Identifier: MIT <br />
                pragma solidity ^0.8.0;
                <br />
                <br />
                contract MyToken &#123;
                <br />
                &nbsp;&nbsp;string public name = &quot;MyToken&quot;
                <br />
                &nbsp;&nbsp;string public symbol = &quot;MTK&quot;
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

            <h4
              className=" mt-3 mb-3"
              style={{ color: "#0e83DB", fontWeight: 600, fontSize: "16px" }}
            >
              Compile and Deploy
            </h4>
            <div className={classes.customBox}>
              <p>
                npx hardhat compile
                <br />
                npx hardhat run --network idea scripts/deploy.js
              </p>
            </div>

            <p className="mt-3 text-[ffffff]">
              Your smart contract is now deployed on <strong>IDEA 3.0</strong>!
              🚀
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "Developers-Guide-for-IDEA-3.0",
      title: "Developers Guide for IDEA 3.0",
      content: (
        <div className="" id="Developers-Guide-for-IDEA-3.0">
          <h2 className=" text-[18px] sm:text-[26px] md:text-[36px] lg:text-[44px] font-bold my-3">
            Developers Guide for IDEA 3.0
          </h2>
          <p className={classes.text}>
            The IDEA 3.0 blockchain provides a developer-friendly environment
            with support for smart contracts, staking, governance, and node
            operation.
          </p>
          <h2 className={classes.heading} id="Smart-Contracts-on-IDEA-3.0">
            1. Smart Contracts on IDEA 3.0
          </h2>
          <p className={classes.text} id="Writing-Deploying-Smart-Contracts">
            Writing & Deploying Smart Contracts
          </p>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>Node.js installed</li>
            <li>Hardhat or Truffle</li>
            <li>MetaMask wallet connected to IDEA 3.0</li>
          </ul>

          <h3 className={classes.customHeading}>
            Setting Up the Development Environment
          </h3>
          <pre className={classes.customBox}>npm install -g hardhat</pre>
          <pre className={classes.customBox} style={{ marginTop: "8px" }}>
            mkdir idea-project &amp;&amp; cd idea-project npx hardhat
          </pre>

          <h3 className={classes.customHeading}>
            3. Configure IDEA 3.0 Network Edit hardhat.config.js:
          </h3>
          <pre className={classes.customBox}>
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
};`}
          </pre>
          <h3 className={classes.customHeading}>
            Deploying a Simple Smart Contract
          </h3>
          <h4 className="font-regular my-3">
            Create a Solidity contract (contracts/MyToken.sol):
          </h4>
          <pre className={classes.customBox}>
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
          <pre className={classes.customBox}>
            {`arduino
CopyEdit
npx hardhat compile
npx hardhat run --network idea scripts/deploy.js
`}
          </pre>
          <p className={classes.text}>
            Your smart contract is now deployed on IDEA 3.0!
          </p>

          <h2 className={classes.heading4} id="Supported-Languages">
            2. Supported Languages
          </h2>
          <p className="mt-2">IDEA 3.0 supports:</p>
          <ul className={clsx(classes.listStyle, classes.text)}>
            <li>
              <span style={{ fontWeight: 700 }}>Solidity</span> (Ethereum’s
              primary smart contract language)
            </li>
            <li>
              <span style={{ fontWeight: 700 }}>Vyper</span> (A simpler, more
              secure alternative to Solidity)
            </li>
          </ul>

          <p className={classes.text}>
            Both languages work{" "}
            <span style={{ fontWeight: 700 }}>natively</span> on IDEA 3.0 since
            it is <span style={{ fontWeight: 700 }}>EVM-compatible</span>.
          </p>

          <h2
            className="text-xl font-semibold mt-3"
            id="Gas-Fees-Optimizations"
          >
            3. Gas Fees & Optimizations
          </h2>
          <h3 className="text-xl font-semibold mt-3" id="Gas-Fees">
            3. Gas Fees
          </h3>
          <p className={classes.text}>
            IDEA 3.0 features low transaction fees compared to Ethereum.
            Estimated costs:
          </p>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>Simple transactions: Less than $0.001</li>
            <li>Smart contract interactions: $0.002 - $0.01</li>
            <li>Token deployments: Varies based on contract complexity</li>
          </ul>
          <h3 className="text-xl font-semibold mt-3" id="Optimizations">
            4. Optimizations
          </h3>
          <p className={classes.text}>
            To <span className="font-bold">reduce gas costs</span>, follow these
            best practices:
          </p>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>
              <span className="font-bold">Use efficient data types</span>{" "}
              (uint256 instead of uint).
            </li>
            <li>
              <span style={{ fontWeight: 700 }}>Minimize storage writes</span>{" "}
              (store variables in memory).
            </li>
            <li>
              <span style={{ fontWeight: 700 }}>Use proxy contracts</span> to
              upgrade contracts without high deployment costs.
            </li>
          </ul>

          <h2 className={classes.heading4} id="Running-a-Node">
            4. Running a Node on IDEA 3.0
          </h2>
          <p className={classes.text}>
            To participate in the network, developers can run three types of
            nodes: Full Nodes, Validator Nodes, and Light Nodes.
          </p>
          <h3 className={classes.heading3} id="Full-Node-Setup">
            Full Node Setup
          </h3>
          <p className={classes.text}>
            To participate in the network, developers can run three types of
            nodes: Full Nodes, Validator Nodes, and Light Nodes.
          </p>
          <h5 className="font-medium my-3">1. Install Dependencies: </h5>
          <pre className={classes.customBox}>
            sql
            <br />
            CopyEdit <br />
            sudo apt update &amp;&amp; sudo apt install -y git curl
          </pre>

          <h5 className="font-medium my-3">
            2. Download and Install IDEA 3.0 Client:
          </h5>
          <pre className={classes.customBox}>
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
          <h5 className="font-medium my-3">3. Sync with the Network:</h5>
          <pre className={classes.customBox}>
            bash
            <br />
            CopyEdit <br />
            ./idea-node --sync
          </pre>

          <h3 className={classes.heading3} id="Validator-Node-Setup">
            Validator Node Setup
          </h3>
          <p className={classes.text}>
            Validator nodes propose and validate blocks. To become a validator:
          </p>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>
              <span className="font-bold">1. Stake IDEA Tokens </span> (at least
              50 IDEA).
            </li>
            <li>
              <span className="font-bold">2. Run a Full Node </span> (see above
              setup).
            </li>
            <li>
              <span className="font-bold">3. Register as a Validator: </span>
            </li>
          </ul>
          <pre className={classes.customBox}>
            css
            <br />
            CopyEdit <br />
            ./idea-node --register-validator --stake 50
          </pre>
          <h5 className="text-lg font-normal mt-4">4. Start Validating: </h5>
          <pre className={classes.customBox}>
            bash <br />
            CopyEdit <br />
            ./idea-node --start-validator
          </pre>

          <h3 className={classes.heading3}>Light Node Setup</h3>
          <p className={classes.text}>
            Light nodes store only essential blockchain data to reduce resource
            usage.
          </p>
          <h5 className="text-lg font-normal mt-4">
            1. Install the Light Node Client:
          </h5>
          <pre className={classes.customBox}>
            bash <br />
            CopyEdit <br />
            ./idea-node --install-light
          </pre>
          <h5 className="text-lg font-normal mt-4">
            2. Connect to a Full Node:
          </h5>
          <pre className={classes.customBox}>
            arduino <br />
            CopyEdit <br />
            {` ./idea-node --connect-full-node "https://node1.ideascan.io/"`}
          </pre>
        </div>
      ),
    },

    // 2) Staking & Governance
    {
      id: "Staking-Governance",
      title: "Staking & Governance",
      content: (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4" id="Staking-Governance">
            5. Staking & Governance
          </h2>
          <h3 className={classes.heading2} id="Staking-Mechanism">
            Staking Mechanism
          </h3>
          <p className={classes.text}>
            The Proof-of-Stake (PoS) system on IDEA 3.0 allows users to stake
            their tokens and earn rewards while securing the network.
          </p>
          <h3 className={classes.heading2}>How Staking Works</h3>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>Minimum Stake: 50 IDEA tokens</li>
            <li>Epoch System: Validators rotate every 50 epochs</li>
            <li>
              Rewards:
              <ul className={clsx(classes.text, classes.listStyle)}>
                <li>Block rewards for validators</li>
                <li>Transaction fees distributed among validators</li>
              </ul>
            </li>
          </ul>
          <h3 className={classes.heading2}>How to Stake</h3>
          <ol className={clsx(classes.text, classes.listStyle)}>
            <li>
              Connect your wallet to IDEAScan:{" "}
              <a
                href="https://www.ideascan.io/"
                className="text-blue-600 underline"
              >
                IDEAScan
              </a>
            </li>
            <li>Select a Validator</li>
            <li>{`Click "Delegate"`}</li>
            <li>Enter the number of IDEA tokens</li>
            <li>Confirm the transaction</li>
          </ol>
          <h3 className={classes.heading2} id="Validator-Selection-Rewards">
            Validator Selection & Rewards
          </h3>
          <p className={classes.text}>
            Validators are selected based on their stake (minimum 50 IDEA).
          </p>
          <p className="mb-2">Rewards are distributed as follows:</p>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>50% to validators</li>
            <li>30% to delegators</li>
            <li>20% to the network treasury</li>
          </ul>
          <h3 className={classes.heading2} id="Governance-Participation">
            Governance Participation
          </h3>
          <p className={classes.text}>
            IDEA 3.0 follows a decentralized governance model, where token
            holders can vote on proposals.
          </p>
          <h3 className={classes.heading2}>How to Vote</h3>
          <ol className={clsx(classes.text, classes.listStyle)}>
            <li>Visit the governance portal on IDEAScan.</li>
            <li>Browse active proposals.</li>
            <li>Cast your vote based on your staked IDEA tokens.</li>
          </ol>
        </div>
      ),
    },

    // 3) Security & Best Practices (+ Ecosystem & Tools)
    {
      id: "Security-Best-Practices",
      title: "Security & Best Practices",
      content: (
        <div className="">
          <h2 className="text-2xl font-bold mb-2" id="Security-Best-Practices">
            6. Security & Best Practices
          </h2>
          <p className={classes.text}>
            Developers and node operators must follow best security practices to
            protect their assets and infrastructure.
          </p>

          <h3
            className="text-xl font-semibold mt-4 mb-2"
            id="Security-Measures"
          >
            Security Measures
          </h3>
          <ul className={clsx(classes.text, classes.listStyle)}>
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
              <tr style={{ backgroundColor: "#0F2434" }}>
                <th className=" p-2">Attack Type</th>
                <th className=" p-2">Risk Level</th>
                <th className=" p-2">Prevention</th>
              </tr>
            </thead>
            <tbody
              className={classes.text}
              style={{ backgroundColor: "#071120" }}
            >
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

          <h2 className="text-2xl font-bold mt-4 mb-4">
            Ecosystem &amp; Tools in IDEA 3.0
          </h2>
          <p className="mb-2  text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            IDEA 3.0 is more than just a blockchain—it’s an entire ecosystem
            designed for seamless interaction with wallets, decentralized
            exchanges, NFTs, and metaverse assets. This section covers how to
            use the IDEA Wallet, IDEA DEX, NFT Marketplace, and Metaverse
            integrations.
          </p>
        </div>
      ),
    },
    {
      id: "IDEA-Wallet-Guide",
      title: "1. IDEA Wallet Guide",
      content: (
        <div id="IDEA-Wallet-Guide">
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
              marginTop: "8px",
            }}
          >
            1. IDEA Wallet Guide
          </h1>
          <p className={classes.text}>
            The IDEA Wallet is the official wallet for the IDEA 3.0 network,
            designed to store, send, and stake IDEA tokens and other assets
            securely.
          </p>
          <h2 className={classes.heading2} id="Features-of-the-IDEA-Wallet">
            Features of the IDEA Wallet
          </h2>
          <ul className={clsx(classes.text, classes.listStyle)}>
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
          <h2 className={classes.heading2} id="How-to-Set-Up-the-IDEA-Wallet">
            How to Set Up the IDEA Wallet
          </h2>
          <ol className={clsx(classes.text, classes.listStyle)}>
            <li>
              <strong>Download & Install</strong>
              <ul className={classes.listStyle}>
                <li>
                  Available for web, mobile (iOS/Android), and browser
                  extensions.
                </li>
                <li>Download from the official IDEA Network website.</li>
              </ul>
            </li>
            <li>
              <strong>Create a New Wallet</strong>
              <ul className={classes.listStyle}>
                <li>Open the app and select &quot;Create New Wallet&quot;.</li>
                <li>
                  Securely save your 12-word seed phrase (cannot be recovered if
                  lost).
                </li>
              </ul>
            </li>
            <li>
              <strong>Import an Existing Wallet</strong>
              <ul className={classes.listStyle}>
                <li>
                  Choose &quot;Import Wallet&quot; and enter your seed phrase.
                </li>
              </ul>
            </li>
            <li>
              <strong>Connect to IDEA 3.0 Network</strong>
              <ul className={classes.listStyle}>
                <li>Go to Settings &gt; Networks &gt; Add Network.</li>
                <li>Enter the details:</li>
                <pre className={classes.customBox}>
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
          <p className={classes.text}>
            Now, you&apos;re ready to send, receive, and stake IDEA tokens.
          </p>
        </div>
      ),
    },
    {
      id: "Using-the-IDEA-DEX",
      title: "2. Using the IDEA DEX",
      content: (
        <div id="Using-the-IDEA-DEX">
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
              marginTop: "8px",
            }}
          >
            2. Using the IDEA DEX
          </h1>
          <p className={classes.text}>
            The IDEA DEX (Decentralized Exchange) allows users to swap tokens,
            provide liquidity, and trade assets on the IDEA blockchain without
            intermediaries.
          </p>
          <h2 className={classes.heading2}>Key Features</h2>
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
          <h2 className={classes.heading2} id="How-to-Trade-on-IDEA-DEX">
            How to Trade on IDEA DEX
          </h2>
          <ol className={clsx(classes.text, classes.listStyle)}>
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
              <ul className={clsx(classes.text, classes.listStyle)}>
                <li>Adjust slippage tolerance (for volatile markets).</li>
                <li>Click Swap and confirm the transaction in your wallet.</li>
              </ul>
            </li>
            <li>
              View Transaction on IDEAScan:
              <ul className={clsx(classes.text, classes.listStyle)}>
                <li>
                  After confirmation, you can track your trade on IDEAScan.
                </li>
              </ul>
            </li>
          </ol>
          <h2 className={classes.heading2} id="Providing-Liquidity-on-IDEA-DEX">
            Providing Liquidity on IDEA DEX
          </h2>
          <ol className={clsx(classes.text, classes.listStyle)}>
            <li>Go to the Liquidity Section of the DEX.</li>
            <li>Select a Trading Pair and add tokens.</li>
            <li>Deposit Funds to earn a share of trading fees.</li>
            <li>Monitor and Remove Liquidity Anytime.</li>
          </ol>
        </div>
      ),
    },
    {
      id: "NFT-Marketplace-Development",
      title: "3. NFT Marketplace Development",
      content: (
        <div id="NFT-Marketplace-Development">
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
              marginTop: "8px",
            }}
          >
            3. NFT Marketplace Development
          </h1>
          <p className={classes.text}>
            The IDEA NFT Marketplace enables users to mint, buy, sell, and trade
            NFTs directly on the IDEA 3.0 blockchain.
          </p>
          <h2 className={classes.heading2}>Key Features</h2>
          <ul className={clsx(classes.text, classes.listStyle)}>
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
          <h2 className={classes.heading2} id="How-to-Mint-an-NFT-on-IDEA-3.0">
            How to Mint an NFT on IDEA 3.0
          </h2>
          <ol className={clsx(classes.text, classes.listStyle)}>
            <li>Go to the IDEA NFT Marketplace.</li>
            <li>Connect Your Wallet (IDEA Wallet or MetaMask).</li>
            <li>
              Upload Your Digital Asset (Image, Video, Audio, or 3D Model).
            </li>
            <li>
              Fill in NFT Details:
              <ul className={clsx(classes.text, classes.listStyle)}>
                <li>Name</li>
                <li>Description</li>
                <li>Supply (1/1 or multiple editions)</li>
                <li>Royalties percentage (optional)</li>
              </ul>
            </li>
            <li>{`Click "Mint NFT" and confirm the transaction.`}</li>
            <li>NFT is Now Listed on the Marketplace.</li>
          </ol>
          <h2 className={classes.heading2}>Buying & Selling NFTs</h2>
          <p className={classes.text}>
            <strong>To Buy:</strong> Browse collections, select an NFT, and
            purchase using IDEA tokens.
          </p>
          <p className={classes.text}>
            <strong>To Sell:</strong> Set a price, list your NFT, and receive
            payments in IDEA tokens.
          </p>
        </div>
      ),
    },
    {
      id: "Metaverse-Virtual-Assets",
      title: "4. Metaverse & Virtual Assets",
      content: (
        <div id="Metaverse-Virtual-Assets">
          <h2 className={classes.heading2} id="Metaverse-Virtual-Assets">
            4. Metaverse & Virtual Assets
          </h2>
          <p className={classes.text}>
            The IDEA Metaverse aims to integrate virtual assets, digital land,
            and interactive experiences on the blockchain.
          </p>
          <h2 className={classes.heading2}>Metaverse Features</h2>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                Virtual Meeting Rooms:
              </span>{" "}
              Businesses and communities can host blockchain-powered virtual
              meetings.
            </li>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                Digital Land Ownership:
              </span>{" "}
              Users can buy, sell, and develop virtual land as NFTs.
            </li>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                Avatar Customization:
              </span>{" "}
              Create and trade custom avatars and digital wearables.
            </li>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                In-Game Economies:
              </span>{" "}
              Games built on IDEA 3.0 can use NFTs and tokens for in-game
              assets.
            </li>
          </ul>
          <h2 className={classes.heading2}>
            How to Get Started in the IDEA Metaverse
          </h2>
          <ol className={clsx(classes.text, classes.listStyle)}>
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
      ),
    },
    {
      id: "API-SDK-Documentation",
      title: "API & SDK Documentation for IDEA 3.0",
      content: (
        <div id="API-SDK-Documentation">
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            API & SDK Documentation for IDEA 3.0
          </h2>
          <p className={classes.text}>
            The IDEA 3.0 API & SDK provides developers with powerful tools to
            interact with the blockchain, automate transactions, query
            blockchain data, and integrate Web3 applications. This section
            covers:
          </p>
          <ul className={classes.list}>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                IDEA 3.0 API Reference:
              </span>{" "}
              REST & WebSocket APIs for querying blockchain data and executing
              transactions.
            </li>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                CLI Commands & Usage:
              </span>{" "}
              Command-line interface for interacting with the network.
            </li>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                Web3 Integration:
              </span>{" "}
              How to connect IDEA 3.0 to dApps using Web3.js, ethers.js, and
              smart contracts.
            </li>
          </ul>
          <h2 className={classes.heading2} id="IDEA-3.0-API-Reference">
            1. IDEA 3.0 API Reference
          </h2>
          <p className="text-[#ffffff] mb-4">
            Developers can use REST APIs and WebSocket APIs to fetch blockchain
            data, check transactions, interact with smart contracts, and manage
            wallets.
          </p>
          <h3 className={classes.heading2}>Base API Endpoint</h3>
          <div className={classes.textrou}>https://api.ideascan.io/</div>
          <h3 className={classes.heading2} style={{ marginTop: "8px" }}>
            API Authentication
          </h3>
          <ul className={classes.list}>
            <li>Public API endpoints do not require authentication.</li>
            <li>
              Private API calls require an API key (optional for advanced
              features).
            </li>
          </ul>
          <h3 className={classes.heading2}>Common API Endpoints</h3>
          <h4 className={classes.heading3} id="Get-Block-Information">
            1. Get Block Information
          </h4>
          <p className={classes.text}>
            Retrieve details of a block by block number or hash.
          </p>
          <div className={classes.textrou}>GET /block/{`{block_number}`}</div>
          <h4 className={classes.heading2} style={{ marginTop: "8px" }}>
            Example Response
          </h4>
          <div className={classes.textrou}>
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
          <h4 className={classes.heading3} id="Get-Transaction-Details">
            2. Get Transaction Details
          </h4>
          <p className={classes.text}>
            Retrieve transaction details by transaction hash.
          </p>
          <div className={classes.textrou}>GET /transaction/{`{tx_hash}`}</div>
          <h4 className={classes.heading2} style={{ marginTop: "8px" }}>
            Example Response
          </h4>
          <div className={classes.textrou}>
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
          <h4 className={classes.heading3} id="Get-Account-Balance">
            3. Get Account Balance
          </h4>
          <p className={classes.text}>Fetch the balance of an address.</p>
          <div className={classes.textrou}>
            GET /transaction/{`{wallet_address}`}
          </div>
          <h4 className={classes.heading2} style={{ marginTop: "8px" }}>
            Example Response
          </h4>
          <div className={classes.textrou}>
            <pre>
              {`{
  "address": "0xabc123...",
  "balance": "5000 IDEA"
}`}
            </pre>
          </div>
          <h4 className={classes.heading3} id="Send-a-Transaction">
            4. Send a Transaction
          </h4>
          <p className={classes.text}>
            Broadcast a transaction on the network.
          </p>
          <div className={classes.textrou}>POST /sendTransaction</div>
          <h4 className={classes.heading2}>Request Body</h4>
          <div className={classes.textrou}>
            <pre>
              {`{
  "from": "0xabc123...",
  "to": "0xdef456...",
  "amount": "100 IDEA",
  "gas_limit": 21000,
  "private_key": "YOUR_PRIVATE_KEY"
}`}
            </pre>
          </div>
          <h4 className={classes.heading2} style={{ marginTop: "8px" }}>
            Response
          </h4>
          <div className={classes.textrou}>
            <pre>
              {`{
  "tx_hash": "0xa8cbf3..."
}`}
            </pre>
          </div>
          <h4 className={classes.heading3} id="Subscribe-to-Real-Time-Events">
            5. Subscribe to Real-Time Events (WebSockets)
          </h4>
          <p className={classes.text}>
            Subscribe to real-time events via WebSockets.
          </p>
          <div className={classes.textrou}>wss://api.ideascan.io/ws</div>
          <h4 className={classes.heading2} style={{ marginTop: "8px" }}>
            Example Usage (JavaScript)
          </h4>
          <div className={classes.textrou}>
            <pre>
              {`const ws = new WebSocket('wss://api.ideascan.io/ws');
ws.onmessage = (event) => {
    console.log("New Transaction:", event.data);
};`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "CLI-Commands-Usage",
      title: "CLI Commands & Usage",
      content: (
        <div id="CLI-Commands-Usage">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            CLI Commands & Usage
          </h2>
          <p className={classes.text}>
            The IDEA 3.0 Command Line Interface (CLI) allows developers to
            interact with the blockchain directly from their terminal.
          </p>
          <h2 className={classes.heading2}>Installing the IDEA CLI</h2>
          <div className={classes.textrou}>npm install -g idea-cli</div>
          <h2 className={classes.heading2} style={{ marginTop: "8px" }}>
            Available CLI Commands
          </h2>
          <h3 className={classes.heading2} id="Check-Network-Status">
            1. Check Network Status
          </h3>
          <div className={classes.textrou}>idea status</div>
          <h4 className={classes.heading3}>Example Output</h4>
          <div className={classes.textrou}>
            <pre>
              {`Network: IDEA 3.0
Block Height: 106789
Connected Peers: 25
Gas Price: 0.00001 IDEA`}
            </pre>
          </div>
          <h3 className={classes.heading4} id="Check-Wallet-Balance">
            2. Check Wallet Balance
          </h3>
          <div className={classes.textrou}>
            idea balance --address 0xabc123...
          </div>
          <h4 className={classes.heading3}>Output</h4>
          <div className={classes.textrou}>
            <pre>
              {`Address: 0xabc123...
Balance: 5000 IDEA`}
            </pre>
          </div>
          <h3 className={classes.heading4} id="Send-a-Transaction">
            3. Send a Transaction
          </h3>
          <div className={classes.textrou}>
            idea send --from 0xabc123... --to 0xdef456... --amount 100
          </div>
          <h4 className={classes.heading3}>After confirmation, you’ll get:</h4>
          <div className={classes.textrou}>
            <pre>{`Transaction submitted: 0xa8cbf3...`}</pre>
          </div>
          <h3 className={classes.heading4} id="Deploy-a-Smart-Contract">
            4. Deploy a Smart Contract
          </h3>
          <div className={classes.textrou}>
            idea deploy --contract myContract.sol
          </div>
          <h3 className={classes.heading4} id="View-Recent-Transactions">
            5. View Recent Transactions
          </h3>
          <div className={classes.textrou}>
            idea transactions --address 0xabc123...
          </div>
          <h4 className={classes.heading3}>Output</h4>
          <div className={classes.textrou}>
            <pre>
              {`Latest Transactions:
- 0xa8cbf3... | Sent 100 IDEA to 0xdef456...
- 0x76baf2... | Received 200 IDEA from 0x987654...`}
            </pre>
          </div>
          <h3 className={classes.heading4} id="Run-a-Node">
            6. Run a Node
          </h3>
          <h4 className={classes.heading3}>Start a Full Node:</h4>
          <div className={classes.textrou}>idea start-node --sync</div>
          <h4 className={classes.heading3}>Run a Validator Node:</h4>
          <div className={classes.textrou}>idea start-validator --stake 50</div>
        </div>
      ),
    },
    {
      id: "Web3-Integration",
      title: "Web3 Integration",
      content: (
        <div id="Web3-Integration">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Web3 Integration
          </h2>
          <p className="text-[#ffffff] mb-6 text-[12px] sm:text-[14px] md:text-[16px] leading-[30px] font-poppins font-normal">
            Developers can integrate IDEA 3.0 into dApps using Web3.js or
            ethers.js.
          </p>
          <h2 className={classes.heading2} id="Connecting-to-IDEA-3.0-RPC">
            Connecting Web3.js to IDEA 3.0
          </h2>
          <h3 className={classes.heading2} id="">
            Install Web3.js
          </h3>
          <div className={classes.textrou}>npm install web3</div>
          <h3 className={classes.heading4} id="Connecting-to-IDEA-3.0-RPC">
            Connecting to IDEA 3.0 RPC
          </h3>
          <div className={classes.textrou}>
            <pre>
              {`const Web3 = require('web3');
const web3 = new Web3('https://node1.ideascan.io/');
console.log("Connected to IDEA 3.0:", web3.isConnected());`}
            </pre>
          </div>
          <h3 className={classes.heading4} id="Getting-Account-Balance">
            Getting Account Balance
          </h3>
          <div className={classes.textrou}>
            <pre>
              {`async function getBalance(address) {
    let balance = await web3.eth.getBalance(address);
    console.log("Balance:", web3.utils.fromWei(balance, 'ether'), "IDEA");
}
getBalance("0xabc123...");`}
            </pre>
          </div>
          <h3 className={classes.heading4} id="Sending-a-Transaction">
            Sending a Transaction
          </h3>
          <div className={classes.textrou}>
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
            className={classes.heading4}
            id="Interacting-with-Smart-Contracts"
          >
            Interacting with Smart Contracts
          </h3>
          <div className={classes.textrou}>
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
          <h2 className={classes.heading2} id="API-&-SDK">
            API &amp; SDK
          </h2>
          <ul className={clsx(classes.listStyle, classes.text)}>
            <li className="mb-2">IDEA 3.0 API Reference</li>
            <li className="mb-2">CLI Commands & Usage</li>
            <li>Web3 Integration</li>
          </ul>
        </div>
      ),
    },
    {
      id: "Cross-Chain-Interoperability",
      title: "Cross-Chain Interoperability in IDEA 3.0",
      content: (
        <div id="Cross-Chain-Interoperability-idea">
          <h2
            className={classes.heading2}
            id="Cross-Chain-Interoperability-idea"
          >
            Cross-Chain Interoperability in IDEA 3.0
          </h2>
          <p className={classes.text}>
            The IDEA 3.0 blockchain is designed with cross-chain
            interoperability, allowing seamless asset transfers and smart
            contract interactions between multiple blockchains, including
            Ethereum, Binance Smart Chain (BSC), and Solana.
          </p>
          <h2 className={classes.heading2} id="Bridging-Assets">
            1. Bridging Assets from Other Blockchains
          </h2>
          <h3 className={classes.heading2} id="How-Cross-Chain-Bridging-Works">
            How Cross-Chain Bridging Works
          </h3>
          <p className={classes.text}>
            Bridging allows users to transfer tokens, NFTs, and data between
            IDEA 3.0 and other blockchain networks.
          </p>
          <h3 className={classes.heading2} id="Supported-Chains">
            Supported Chains for Bridging
          </h3>
          <ul className={clsx(classes.listStyle, classes.text)}>
            <li>Ethereum (ERC-20)</li>
            <li>Binance Smart Chain (BEP-20)</li>
            <li>Solana (SPL Tokens)</li>
            <li>Polygon (MATIC)</li>
            <li>Other EVM-Compatible Chains</li>
          </ul>
          <h3 className={classes.heading4} id="Steps-to-Bridge">
            Steps to Bridge Assets to IDEA 3.0
          </h3>
          <ol className={clsx(classes.listStyle, classes.text)}>
            <li>Visit the Official IDEA Bridge Portal (Coming Soon)</li>
            <li>Select Source &amp; Destination Chains</li>
            <li>Select the Token to Bridge</li>
            <li>Deposit the Tokens</li>
            <li>Receive Wrapped Tokens on IDEA 3.0</li>
            <li>Use the Bridged Assets</li>
          </ol>
          <h3 className={classes.heading4} id="Bridging-Back">
            Bridging Back to Other Chains
          </h3>
          <ol className={clsx(classes.listStyle, classes.text)}>
            <li>Select IDEA 3.0 → Destination Chain.</li>
            <li>Burn the Wrapped Tokens on IDEA 3.0.</li>
            <li>Release the Original Tokens on the Source Chain.</li>
          </ol>
          <h2 className={classes.heading2} id="Connecting-to-Other-Chains">
            2. Connecting to Ethereum, BSC, Solana, and More
          </h2>
          <h3 className={classes.heading2} id="Connecting-to-Ethereum">
            Connecting IDEA 3.0 to Ethereum (ERC-20)
          </h3>
          <div className={classes.textrou}>
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
          <h3 className={classes.heading4}>Adding BSC to MetaMask</h3>
          <div className={classes.textrou}>
            <pre>
              {`Network Name: Binance Smart Chain
RPC URL: https://bsc-dataseed.binance.org/
Chain ID: 56
Currency Symbol: BNB`}
            </pre>
          </div>
          <h2
            className={classes.heading2}
            style={{ marginTop: "8px" }}
            id="Future-of-Cross-Chain"
          >
            3. Future of Cross-Chain in IDEA 3.0
          </h2>
          <ul className={clsx(classes.listStyle, classes.text)}>
            <li>Integrating Cosmos IBC (Inter-Blockchain Communication)</li>
            <li>Supporting Layer-2 Scaling Bridges</li>
            <li>Launching a Fully Decentralized Bridge</li>
          </ul>
        </div>
      ),
    },
  ];

  // ----- MOBILE VIEW: Render each section as a card that shows only the title and a divider.
  if (isMobile) {
    return (
      <div
        style={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "6rem",
          paddingBottom: "1rem",
        }}
      >
        <Typography variant="body1" className={classes.cardContent}>
          Welcome to IDEA Docs
        </Typography>
        {sections.map((section) => (
          <Card
            key={section.id}
            className={classes.card}
            onClick={() => toggleSection(section.id)}
          >
            <CardContent>
              <Typography variant="h6" className={classes.cardTitle}>
                {section.title}
              </Typography>
              {/* <Divider className={classes.divider} /> */}
              {/* Arrow icon (rotate when expanded) */}
              <IconButton
                className={clsx(classes.iconButton, {
                  [classes.rotate]: activeSection === section.id,
                })}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click from toggling again
                  toggleSection(section.id);
                }}
              >
                <ExpandMoreIcon />
              </IconButton>
              <Collapse
                in={activeSection === section.id}
                timeout="auto"
                unmountOnExit
                style={{ marginTop: "4%" }}
              >
                {section.content}
              </Collapse>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.step}>
        <Stepper />
      </div>
      <div className={classes.leftcontainer}>
        <div id="Introduction">
          <div>
            <h2 className={classes.heading}>Introduction</h2>
          </div>
          <p className={classes.text}>
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
            <h2 className={classes.heading}>What is IDEA 3.0?</h2>
          </div>
          <p className={classes.text}>
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
          <h2 className={classes.heading}>Key Components of IDEA 3.0:</h2>
          <ul className={classes.list}>
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
          <h2 className={classes.heading}>Key Features</h2>
          <ul className={classes.textContainer}>
            <li id="Fixed-Maximum-Stake-for-Decentralization">
              <span className={classes.textStyle}>
                1. Fixed Maximum Stake for Decentralization
              </span>
              <p className={classes.text}>
                IDEA 3.0 enforces a 50-token stake cap per validator, ensuring
                that no single entity can dominate the network. This approach
                enhances fairness and promotes true decentralization.
              </p>
            </li>
            <li id="High-Speed-Transactions-Low-Fees">
              <span className={classes.textStyle}>
                2. High-Speed Transactions & Low Fees
              </span>
              <p className={classes.text}>
                The network architecture supports 100,000 TPS, significantly
                outperforming existing blockchains like Ethereum and Binance
                Smart Chain. Optimized transaction validation mechanisms reduce
                congestion and keep fees low.
              </p>
            </li>
            <li id="Epoch-Based-Validator-Selection">
              <span className={classes.textStyle}>
                3. Epoch-Based Validator Selection
              </span>
              <p className={classes.text}>
                Validators rotate every 50 epochs, preventing long-term
                validator monopolies and maintaining network security. This
                mechanism also boosts network efficiency and speeds up consensus
                finality.
              </p>
            </li>
            <li id="Smart-Contract-Flexibility">
              <span className={classes.textStyle}>
                4. Smart Contract Flexibility
              </span>
              <p className={classes.text}>
                IDEA 3.0 supports Solidity and Vyper, making it easy for
                Ethereum developers to transition and deploy dApps without
                additional learning curves.
              </p>
            </li>
            <li id="Cross-Chain-Interoperability">
              <span className={classes.textStyle}>
                5. Cross-Chain Interoperability
              </span>
              <p className={classes.text}>
                The network includes native bridging capabilities, allowing
                users to seamlessly move assets between IDEA 3.0 and other major
                blockchains, fostering liquidity and interoperability across
                ecosystems.
              </p>
            </li>
            <li id="Decentralized-Governance">
              <span className={classes.textStyle}>
                6. Decentralized Governance
              </span>
              <p className={classes.text}>
                IDEA 3.0 token holders can participate in governance by
                proposing and voting on protocol upgrades, ensuring that network
                evolution aligns with community interests.
              </p>
            </li>
            <li id="Security-Fraud-Prevention">
              <span className={classes.textStyle}>
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
          <h2 className={classes.heading}>Why IDEA 3.0?</h2>
          <p className="mt-2 text-[12px] sm:text-[14px] md:text-[16px]">
            IDEA 3.0 addresses key limitations faced by current blockchain
            networks:
          </p>
          <ul className={classes.list}>
            <li>
              <span className={classes.textStyle}>Ethereum</span> struggles with
              high gas fees and network congestion.
            </li>
            <li>
              <span className={classes.textStyle}>
                Binance Smart Chain (BSC)
              </span>{" "}
              has fast transactions but is highly centralized.
            </li>
            <li>
              <span className={classes.textStyle}>Solana</span> offers high TPS
              but suffers from frequent network outages.
            </li>
            <li>
              <span className={classes.textStyle}>Cardano</span> provides
              decentralization but has slow transaction speeds.
            </li>
          </ul>
        </div>
        <div className=" " id="How-IDEA-3.0-Stands-Out">
          <h2 className={clsx(classes.heading, classes.headingColor)}>
            How <span className="text-[#ffffff]">IDEA 3.0</span> Stands Out
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg">
              <thead>
                <tr className={clsx(classes.tablebg, classes.text)}>
                  <th className=" p-2">Feature</th>
                  <th className=" p-2">Ethereum</th>
                  <th className=" p-2">Binance Smart Chain</th>
                  <th className=" p-2">Solana</th>
                  <th className=" p-2">Cardano</th>
                  <th className=" p-2">IDEA 3.0</th>
                </tr>
              </thead>
              <tbody className={clsx(classes.text, classes.tablerow)}>
                <tr>
                  <td className=" p-2">TPS</td>
                  <td className=" p-2">15-30</td>
                  <td className=" p-2">60-100k</td>
                  <td className=" p-2">65k</td>
                  <td className=" p-2">250k</td>
                  <td className={classes.tabletextStyle}>100k</td>
                </tr>
                <tr>
                  <td className=" p-2">Consensus</td>
                  <td className=" p-2">PoS</td>
                  <td className=" p-2">PoSA</td>
                  <td className=" p-2">PoH + PoS</td>
                  <td className=" p-2">Ouroboros PoS</td>
                  <td className={classes.tabletextStyle}>
                    PoS + PoSfp with Fixed Staking
                  </td>
                </tr>
                <tr>
                  <td className=" p-2">Governance</td>
                  <td className=" p-2">Limited</td>
                  <td
                    style={{
                      padding: "2px",
                      color: "#dc2626",
                      fontWeight: 600,
                    }}
                  >
                    Centralized
                  </td>
                  <td className=" p-2">Limited</td>
                  <td className=" p-2">Decentralized</td>
                  <td className={classes.tabletextStyle}>
                    Full On-Chain Voting
                  </td>
                </tr>
                <tr>
                  <td className=" p-2">Fees</td>
                  <td
                    style={{
                      padding: "2px",
                      color: "#dc2626",
                      fontWeight: 600,
                    }}
                  >
                    High
                  </td>
                  <td className=" p-2">Low</td>
                  <td className=" p-2">Very Low</td>
                  <td className=" p-2">Low</td>
                  <td className={classes.tabletextStyle}>Ultra-Low</td>
                </tr>
                <tr>
                  <td className=" p-2">Cross-Chain</td>
                  <td className=" p-2">Limited</td>
                  <td
                    style={{
                      padding: "2px",
                      color: "#dc2626",
                      fontWeight: 600,
                    }}
                  >
                    Binance Only
                  </td>
                  <td className=" p-2">Limited</td>
                  <td className=" p-2">Emerging</td>
                  <td className={classes.tabletextStyle}>Seamless Bridging</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[#ffffff]">
            <span
              className={clsx(classes.headingColor)}
              style={{ fontWeight: "bold" }}
            >
              IDEA 3.0
            </span>{" "}
            combines
            <span className="font-bold"> high-speed transactions</span>,
            <span className="font-bold"> decentralization</span>,
            <span className="font-bold"> low fees</span>, and
            <span className="font-bold"> robust security</span>, making it the
            ideal blockchain for the future.
          </p>
        </div>
        <div className="" id="Roadmap">
          <h2
            className={classes.heading}
            style={{ marginTop: "4px", marginBottom: "8px" }}
          >
            Roadmap
          </h2>

          <div
            style={{
              marginBottom: "2rem", // Equivalent to Tailwind's space-y-8
              borderLeft: "4px solid #2563EB", // Equivalent to border-l-4 border-blue-600
              paddingLeft: "1.5rem",
            }}
          >
            {/* Q1 2025 – Testnet Launch */}
            <div>
              <h3 className={classes.customText}>
                Q1 2025 – Testnet Launch (Current Phase)
              </h3>
              <ul className={classes.list}>
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
              <h3 className={classes.customText}>Q2 2025 – Mainnet Launch</h3>
              <ul className={classes.list}>
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
              <h3 className={classes.customText}>
                Q3-Q4 2025 – Scaling & Ecosystem Growth
              </h3>
              <ul className={classes.list}>
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

          <p style={{ marginTop: 6, color: "#ffffff" }}>
            With the{" "}
            <span className={classes.headingColor} style={{ fontWeight: 600 }}>
              Testnet live now
            </span>{" "}
            and the Mainnet launch set for{" "}
            <span className={classes.headingColor} style={{ fontWeight: 600 }}>
              Q2 2025
            </span>
            , IDEA 3.0 is on track to become a leading blockchain platform for
            scalable, decentralized applications. Stay tuned for more updates!
          </p>
        </div>
        <div className="" id="Getting-Started-with-IDEA-3.0">
          <h2 className={classes.heading}>Getting Started with IDEA 3.0</h2>
          <p className={classes.text}>
            IDEA 3.0 provides a seamless experience for users and developers
            interacting with a high-performance, decentralized blockchain
            network.
          </p>

          {/* Section 1: Setting Up a Wallet */}
          <div className="mb-6">
            <h3 className={classes.customText} id="Setting-Up-a-Wallet">
              1. Setting Up a Wallet
            </h3>
            <p className={classes.text}>
              To interact with IDEA 3.0, use a compatible wallet.
            </p>

            <h4 className={classes.customText} id="Supported-Wallets">
              Supported Wallets
            </h4>
            <ul className={classes.listStyle}>
              <li>MetaMask (Browser & Mobile)</li>
              <li>Trust Wallet</li>
              <li>Coinbase Wallet</li>
              <li>IDEA Wallet (Coming Soon)</li>
            </ul>

            <h4 className={classes.customText} id="Adding-IDEA-3.0-to-MetaMask">
              Adding IDEA 3.0 to MetaMask
            </h4>
            <ol className="list-decimal text-[ffffff]">
              <li>Install MetaMask from its official site.</li>
              <li>Create or import a wallet using a seed phrase.</li>
              <li>
                Go to <strong>Settings &gt; Networks &gt; Add a Network</strong>
                .
              </li>
              <li>Enter the following details:</li>
            </ol>

            <div className={classes.customBox}>
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
          <div className="mt-4 mb-6">
            <h3 className={classes.customText} id="How-to-Use-IDEA-3.0">
              2. How to Use IDEA 3.0
            </h3>
            <h4 className={classes.customText} id="Sending-Transactions">
              Sending Transactions
            </h4>
            <ol className={classes.customList}>
              <li>Open your wallet and select the IDEA 3.0 Network.</li>
              <li>
                {` Click <strong>"Send"</strong> and enter the recipient's wallet
                address.`}
              </li>
              <li>Input the amount of IDEA tokens to send.</li>
              <li>Adjust gas fees (low on IDEA 3.0).</li>
              <li>Click Confirm to process the transaction.</li>
            </ol>

            <h4
              className={classes.customText}
              id="Creating-Tokens-Without-Coding"
            >
              Creating Tokens Without Coding
            </h4>
            <ol className={classes.customList}>
              <li>
                Visit <strong>IDEAScan Explorer</strong>.
              </li>
              <li>{` Navigate to <strong>"Create Token"</strong>.`}</li>
              <li>Fill out details (Name, Symbol, Supply, Decimals).</li>
              <li>
                Click <strong>Submit</strong> to generate your token instantly.
              </li>
            </ol>
          </div>

          {/* Section 3: Network Details */}
          <div className="mb-6">
            <h3 className={classes.customText} id="Network-Details">
              3. Network Details
            </h3>
            <p className={classes.text}>
              Developers and users can interact with IDEA 3.0 using the
              following:
            </p>
            <ul className={classes.listStyle}>
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
            <h3 className={classes.customText} id="Quickstart-Guide">
              4. Quickstart Guide
            </h3>
            <h4 className={classes.customText}>Deploying a Smart Contract</h4>

            <ol className={classes.customList}>
              <li>Install Node.js and Hardhat:</li>
            </ol>
            <div className={classes.customBox}>
              <p>npm install -g hardhat</p>
            </div>

            <ol
              className={classes.customList}
              style={{ marginTop: "8px", marginBottom: "8px" }}
            >
              <li>Initialize a new project:</li>
            </ol>
            <div className={classes.customBox}>
              <p>mkdir idea-project && cd idea-project</p>
              <br />
              <p>npx hardhat</p>
            </div>

            <h4
              className=" mt-3 mb-3"
              style={{ color: "#0e83DB", fontWeight: 600, fontSize: "16px" }}
            >
              Configure Hardhat for IDEA 3.0
            </h4>
            <div className={classes.customBox}>
              <p>
                module.exports = &#123;
                <br />
                &nbsp;&nbsp;networks: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;idea: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url:
                &quot;https://node1.ideascan.io/&quot;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chainId: 2960,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accounts:
                [&quot;YOUR_PRIVATE_KEY&quot;]
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
              </p>
            </div>

            <h4
              className=" mt-3 mb-3"
              style={{ color: "#0e83DB", fontWeight: 600, fontSize: "16px" }}
              id="Deploying-a-Smart-Contract"
            >
              Deploying a Smart Contract
            </h4>
            <div className={classes.customBox}>
              <p>
                SPDX-License-Identifier: MIT <br />
                pragma solidity ^0.8.0;
                <br />
                <br />
                contract MyToken &#123;
                <br />
                &nbsp;&nbsp;string public name = &quot;MyToken&quot;
                <br />
                &nbsp;&nbsp;string public symbol = &quot;MTK&quot;
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

            <h4
              className=" mt-3 mb-3"
              style={{ color: "#0e83DB", fontWeight: 600, fontSize: "16px" }}
            >
              Compile and Deploy
            </h4>
            <div className={classes.customBox}>
              <p>
                npx hardhat compile
                <br />
                npx hardhat run --network idea scripts/deploy.js
              </p>
            </div>

            <p className="mt-3 text-[ffffff]">
              Your smart contract is now deployed on <strong>IDEA 3.0</strong>!
              🚀
            </p>
          </div>
        </div>
        <div className="" id="Developers-Guide-for-IDEA-3.0">
          <h2 className=" text-[18px] sm:text-[26px] md:text-[36px] lg:text-[44px] font-bold my-3">
            Developers Guide for IDEA 3.0
          </h2>
          <p className={classes.text}>
            The IDEA 3.0 blockchain provides a developer-friendly environment
            with support for smart contracts, staking, governance, and node
            operation.
          </p>

          <h2 className={classes.heading} id="Smart-Contracts-on-IDEA-3.0">
            1. Smart Contracts on IDEA 3.0
          </h2>
          <p className={classes.text} id="Writing-Deploying-Smart-Contracts">
            Writing & Deploying Smart Contracts
          </p>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>Node.js installed</li>
            <li>Hardhat or Truffle</li>
            <li>MetaMask wallet connected to IDEA 3.0</li>
          </ul>

          <h3 className={classes.customHeading}>
            Setting Up the Development Environment
          </h3>
          <pre className={classes.customBox}>npm install -g hardhat</pre>
          <pre className={classes.customBox} style={{ marginTop: "8px" }}>
            mkdir idea-project {`&amp;&amp;`} cd idea-project npx hardhat
          </pre>

          <h3 className={classes.customHeading}>
            3. Configure IDEA 3.0 Network Edit hardhat.config.js:
          </h3>
          <pre className={classes.customBox}>
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
          <h3 className={classes.customHeading}>
            Deploying a Simple Smart Contract
          </h3>
          <h4 className="font-regular my-3">
            Create a Solidity contract (contracts/MyToken.sol):
          </h4>
          <pre className={classes.customBox}>
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
          <pre className={classes.customBox}>
            {`arduino
CopyEdit
npx hardhat compile
npx hardhat run --network idea scripts/deploy.js
`}
          </pre>
          <p className={classes.text}>
            Your smart contract is now deployed on IDEA 3.0!
          </p>

          <h2 className={classes.heading4} id="Supported-Languages">
            2. Supported Languages
          </h2>
          <p className="mt-2">IDEA 3.0 supports:</p>
          <ul className={clsx(classes.listStyle, classes.text)}>
            <li>
              <span style={{ fontWeight: 700 }}>Solidity</span> (Ethereum’s
              primary smart contract language)
            </li>
            <li>
              <span style={{ fontWeight: 700 }}>Vyper</span> (A simpler, more
              secure alternative to Solidity)
            </li>
          </ul>

          <p className={classes.text}>
            Both languages work{" "}
            <span style={{ fontWeight: 700 }}>natively</span> on IDEA 3.0 since
            it is <span style={{ fontWeight: 700 }}>EVM-compatible</span>.
          </p>

          <h2
            className="text-xl font-semibold mt-3"
            id="Gas-Fees-Optimizations"
          >
            3. Gas Fees & Optimizations
          </h2>
          <h3 className="text-xl font-semibold mt-3" id="Gas-Fees">
            3. Gas Fees
          </h3>
          <p className={classes.text}>
            IDEA 3.0 features low transaction fees compared to Ethereum.
            Estimated costs:
          </p>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>Simple transactions: Less than $0.001</li>
            <li>Smart contract interactions: $0.002 - $0.01</li>
            <li>Token deployments: Varies based on contract complexity</li>
          </ul>
          <h3 className="text-xl font-semibold mt-3" id="Optimizations">
            4. Optimizations
          </h3>
          <p className={classes.text}>
            To <span className="font-bold">reduce gas costs</span>, follow these
            best practices:
          </p>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>
              <span className="font-bold">Use efficient data types</span>{" "}
              (uint256 instead of uint).
            </li>
            <li>
              {" "}
              <span style={{ fontWeight: 700 }}>
                Minimize storage writes
              </span>{" "}
              (store variables in memory).
            </li>
            <li>
              <span style={{ fontWeight: 700 }}>Use proxy contracts</span> to
              upgrade contracts without high deployment costs.
            </li>
          </ul>

          <h2 className={classes.heading4} id="Running-a-Node">
            4. Running a Node on IDEA 3.0
          </h2>
          <p className={classes.text}>
            To participate in the network, developers can run three types of
            nodes: Full Nodes, Validator Nodes, and Light Nodes.
          </p>
          <h3 className={classes.heading3} id="Full-Node-Setup">
            Full Node Setup
          </h3>
          <p className={classes.text}>
            To participate in the network, developers can run three types of
            nodes: Full Nodes, Validator Nodes, and Light Nodes.
          </p>
          <h5 className="font-medium my-3">1. Install Dependencies: </h5>
          <pre className={classes.customBox}>
            sql
            <br />
            CopyEdit <br />
            sudo apt update {`&amp;&amp;`} sudo apt install -y git curl
          </pre>

          <h5 className="font-medium my-3">
            2. Download and Install IDEA 3.0 Client:{" "}
          </h5>
          <pre className={classes.customBox}>
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
          <pre className={classes.customBox}>
            bash
            <br />
            CopyEdit <br />
            ./idea-node --sync
          </pre>

          <h3 className={classes.heading3} id="Validator-Node-Setup">
            Validator Node Setup
          </h3>
          <p className={classes.text}>
            Validator nodes propose and validate blocks. To become a validator:
          </p>
          <ul className={clsx(classes.text, classes.listStyle)}>
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
          <pre className={classes.customBox}>
            css
            <br />
            CopyEdit <br />
            ./idea-node --register-validator --stake 50
          </pre>
          <h5 className="text-lg font-normal mt-4">4. Start Validating: </h5>
          <pre className={classes.customBox}>
            bash <br />
            CopyEdit <br />
            ./idea-node --start-validator
          </pre>

          <h3 className={classes.heading3}>Light Node Setup</h3>
          <p className={classes.text}>
            Light nodes store only essential blockchain data to reduce resource
            usage.
          </p>
          <h5 className="text-lg font-normal mt-4">
            1. Install the Light Node Client:{" "}
          </h5>
          <pre className={classes.customBox}>
            bash <br />
            CopyEdit <br />
            ./idea-node --install-light
          </pre>
          <h5 className="text-lg font-normal mt-4">
            2. Connect to a Full Node:
          </h5>
          <pre className={classes.customBox}>
            arduino <br />
            CopyEdit <br />
            {` ./idea-node --connect-full-node "https://node1.ideascan.io/"`}
          </pre>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4" id="Staking-Governance">
            5. Staking & Governance
          </h2>

          <h3 className={classes.heading2} id="Staking-Mechanism">
            Staking Mechanism
          </h3>
          <p className={classes.text}>
            The Proof-of-Stake (PoS) system on IDEA 3.0 allows users to stake
            their tokens and earn rewards while securing the network.
          </p>

          <h3 className={classes.heading2}>How Staking Works</h3>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>Minimum Stake: 50 IDEA tokens</li>
            <li>Epoch System: Validators rotate every 50 epochs</li>
            <li>
              Rewards:
              <ul className={clsx(classes.text, classes.listStyle)}>
                <li>Block rewards for validators</li>
                <li>Transaction fees distributed among validators</li>
              </ul>
            </li>
          </ul>

          <h3 className={classes.heading2}>How to Stake</h3>
          <ol className={clsx(classes.text, classes.listStyle)}>
            <li>
              Connect your wallet to IDEAScan:{" "}
              <a
                href="https://www.ideascan.io/"
                className="text-blue-600 underline"
              >
                IDEAScan
              </a>
            </li>
            <li>Select a Validator</li>
            <li>{`Click "Delegate"`}</li>
            <li>Enter the number of IDEA tokens</li>
            <li>Confirm the transaction</li>
          </ol>

          <h3 className={classes.heading2} id="Validator-Selection-Rewards">
            Validator Selection & Rewards
          </h3>
          <p className={classes.text}>
            Validators are selected based on their stake (minimum 50 IDEA).
          </p>
          <p className="mb-2">Rewards are distributed as follows:</p>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>50% to validators</li>
            <li>30% to delegators</li>
            <li>20% to the network treasury</li>
          </ul>

          <h3 className={classes.heading2} id="Governance-Participation">
            Governance Participation
          </h3>
          <p className={classes.text}>
            IDEA 3.0 follows a decentralized governance model, where token
            holders can vote on proposals.
          </p>

          <h3 className={classes.heading2}>How to Vote</h3>
          <ol className={clsx(classes.text, classes.listStyle)}>
            <li>Visit the governance portal on IDEAScan.</li>
            <li>Browse active proposals.</li>
            <li>Cast your vote based on your staked IDEA tokens.</li>
          </ol>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold mb-2" id="Security-Best-Practices">
            6. Security & Best Practices
          </h2>
          <p className={classes.text}>
            Developers and node operators must follow best security practices to
            protect their assets and infrastructure.
          </p>

          <h3
            className="text-xl font-semibold mt-4 mb-2"
            id="Security-Measures"
          >
            Security Measures
          </h3>
          <ul className={clsx(classes.text, classes.listStyle)}>
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
              <tr style={{ backgroundColor: "#0F2434" }}>
                <th className=" p-2">Attack Type</th>
                <th className=" p-2">Risk Level</th>
                <th className=" p-2">Prevention</th>
              </tr>
            </thead>
            <tbody
              className={classes.text}
              style={{ backgroundColor: "#071120" }}
            >
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

          <h2 className="text-2xl font-bold mt-4 mb-4">
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
          <h1
            style={{
              fontSize: "24px", // text-2xl (1.5rem ≈ 24px)
              fontWeight: "bold", // font-bold
              marginBottom: "16px", // mb-4 (4 * 4px = 16px)
              marginTop: "8px", // mt-2 (2 * 4px = 8px)
            }}
            id="IDEA-Wallet-Guide"
          >
            1. IDEA Wallet Guide
          </h1>
          <p className={classes.text}>
            The IDEA Wallet is the official wallet for the IDEA 3.0 network,
            designed to store, send, and stake IDEA tokens and other assets
            securely.
          </p>

          <h2 className={classes.heading2} id="Features-of-the-IDEA-Wallet">
            Features of the IDEA Wallet
          </h2>
          <ul className={clsx(classes.text, classes.listStyle)}>
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

          <h2 className={classes.heading2} id="How-to-Set-Up-the-IDEA-Wallet">
            How to Set Up the IDEA Wallet
          </h2>
          <ol className={clsx(classes.text, classes.listStyle)}>
            <li>
              <strong>Download & Install</strong>
              <ul className={classes.listStyle}>
                <li>
                  Available for web, mobile (iOS/Android), and browser
                  extensions.
                </li>
                <li>Download from the official IDEA Network website.</li>
              </ul>
            </li>
            <li>
              <strong>Create a New Wallet</strong>
              <ul className={classes.listStyle}>
                <li>{`Open the app and select "Create New Wallet".`}</li>
                <li>
                  Securely save your 12-word seed phrase (cannot be recovered if
                  lost).
                </li>
              </ul>
            </li>
            <li>
              <strong>Import an Existing Wallet</strong>
              <ul className={classes.listStyle}>
                <li>{`Choose "Import Wallet" and enter your seed phrase.`}</li>
              </ul>
            </li>
            <li>
              <strong>Connect to IDEA 3.0 Network</strong>
              <ul className={classes.listStyle}>
                <li>{`Go to Settings &gt; Networks &gt; Add Network.`}</li>
                <li>Enter the details:</li>
                <pre className={classes.customBox}>
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
          <p className={classes.text}>
            {`Now, you're ready to send, receive, and stake IDEA tokens.`}
          </p>
        </div>
        <div className="">
          <h1
            style={{
              fontSize: "24px", // text-2xl (1.5rem ≈ 24px)
              fontWeight: "bold", // font-bold
              marginBottom: "16px", // mb-4 (4 * 4px = 16px)
              marginTop: "8px", // mt-2 (2 * 4px = 8px)
            }}
            id="Using-the-IDEA-DEX"
          >
            2. Using the IDEA DEX
          </h1>
          <p className={classes.text}>
            The IDEA DEX (Decentralized Exchange) allows users to swap tokens,
            provide liquidity, and trade assets on the IDEA blockchain without
            intermediaries.
          </p>

          <h2 className={classes.heading2}>Key Features</h2>
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

          <h2 className={classes.heading2} id="How-to-Trade-on-IDEA-DEX">
            How to Trade on IDEA DEX
          </h2>
          <ol className={clsx(classes.text, classes.listStyle)}>
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
              <ul className={clsx(classes.text, classes.listStyle)}>
                <li>Adjust slippage tolerance (for volatile markets).</li>
                <li>Click Swap and confirm the transaction in your wallet.</li>
              </ul>
            </li>
            <li>
              View Transaction on IDEAScan:
              <ul className={clsx(classes.text, classes.listStyle)}>
                <li>
                  After confirmation, you can track your trade on IDEAScan.
                </li>
              </ul>
            </li>
          </ol>

          <h2 className={classes.heading3} id="Providing-Liquidity-on-IDEA-DEX">
            Providing Liquidity on IDEA DEX
          </h2>
          <ol className={clsx(classes.text, classes.listStyle)}>
            <li>Go to the Liquidity Section of the DEX.</li>
            <li>Select a Trading Pair and add tokens.</li>
            <li>Deposit Funds to earn a share of trading fees.</li>
            <li>Monitor and Remove Liquidity Anytime.</li>
          </ol>
        </div>
        <div className="mt-3">
          <h1
            style={{
              fontSize: "24px", // text-2xl (1.5rem ≈ 24px)
              fontWeight: "bold", // font-bold
              marginBottom: "16px", // mb-4 (4 * 4px = 16px)
              marginTop: "8px", // mt-2 (2 * 4px = 8px)
            }}
            id="NFT-Marketplace-Development"
          >
            3. NFT Marketplace Development
          </h1>
          <p className={classes.text}>
            The IDEA NFT Marketplace enables users to mint, buy, sell, and trade
            NFTs directly on the IDEA 3.0 blockchain.
          </p>
          <h2 className={classes.heading2}>Key Features</h2>
          <ul className={clsx(classes.text, classes.listStyle)}>
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
          <h2 className={classes.heading2} id="How-to-Mint-an-NFT-on-IDEA-3.0">
            How to Mint an NFT on IDEA 3.0
          </h2>
          <ol className={clsx(classes.text, classes.listStyle)}>
            <li>Go to the IDEA NFT Marketplace.</li>
            <li>Connect Your Wallet (IDEA Wallet or MetaMask).</li>
            <li>
              Upload Your Digital Asset (Image, Video, Audio, or 3D Model).
            </li>
            <li>Fill in NFT Details:</li>
            <ul className={clsx(classes.text, classes.listStyle)}>
              <li>Name</li>
              <li>Description</li>
              <li>Supply (1/1 or multiple editions)</li>
              <li>Royalties percentage (optional)</li>
            </ul>
            <li>{`Click "Mint NFT" and confirm the transaction.`}</li>
            <li>NFT is Now Listed on the Marketplace.</li>
          </ol>
          <h2 className={classes.heading2}>Buying & Selling NFTs</h2>
          <p className={classes.text}>
            <strong>To Buy:</strong> Browse collections, select an NFT, and
            purchase using IDEA tokens.
          </p>
          <p className={classes.text}>
            <strong>To Sell:</strong> Set a price, list your NFT, and receive
            payments in IDEA tokens.
          </p>
        </div>
        <div className="mt-3">
          <h2 className={classes.heading2} id="Metaverse-Virtual-Assets">
            4. Metaverse & Virtual Assets
          </h2>
          <p className={classes.text}>
            The IDEA Metaverse aims to integrate virtual assets, digital land,
            and interactive experiences on the blockchain.
          </p>

          <h2 className={classes.heading2}>Metaverse Features</h2>
          <ul className={clsx(classes.text, classes.listStyle)}>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                Virtual Meeting Rooms:
              </span>{" "}
              Businesses and communities can host blockchain-powered virtual
              meetings.
            </li>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                Digital Land Ownership:
              </span>{" "}
              Users can buy, sell, and develop virtual land as NFTs.
            </li>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                Avatar Customization:
              </span>{" "}
              Create and trade custom avatars and digital wearables.
            </li>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                In-Game Economies:
              </span>{" "}
              Games built on IDEA 3.0 can use NFTs and tokens for in-game
              assets.
            </li>
          </ul>

          <h2 className={classes.heading2}>
            How to Get Started in the IDEA Metaverse
          </h2>
          <ol className={clsx(classes.text, classes.listStyle)}>
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
          <p className={classes.text}>
            The IDEA 3.0 API & SDK provides developers with powerful tools to
            interact with the blockchain, automate transactions, query
            blockchain data, and integrate Web3 applications. This section
            covers:
          </p>

          <ul className={classes.list}>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                IDEA 3.0 API Reference:
              </span>{" "}
              REST & WebSocket APIs for querying blockchain data and executing
              transactions.
            </li>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                CLI Commands & Usage:
              </span>{" "}
              Command-line interface for interacting with the network.
            </li>
            <li>
              <span style={{ color: "white", fontWeight: 600 }}>
                Web3 Integration:
              </span>{" "}
              How to connect IDEA 3.0 to dApps using Web3.js, ethers.js, and
              smart contracts.
            </li>
          </ul>

          <h2 className={classes.heading2} id="IDEA-3.0-API-Reference">
            1. IDEA 3.0 API Reference
          </h2>
          <p className="text-[#ffffff] mb-4">
            Developers can use REST APIs and WebSocket APIs to fetch blockchain
            data, check transactions, interact with smart contracts, and manage
            wallets.
          </p>

          <h3 className={classes.heading2}>Base API Endpoint</h3>
          <div className={classes.textrou}>https://api.ideascan.io/</div>

          <h3 className={classes.heading2} style={{ marginTop: "8px" }}>
            API Authentication
          </h3>
          <ul className={classes.list}>
            <li>Public API endpoints do not require authentication.</li>
            <li>
              Private API calls require an API key (optional for advanced
              features).
            </li>
          </ul>

          <h3 className={classes.heading2}>Common API Endpoints</h3>
          <h4 className={classes.heading3} id="Get-Block-Information">
            1. Get Block Information
          </h4>
          <p className={classes.text}>
            Retrieve details of a block by block number or hash.
          </p>

          <div className={classes.textrou}>GET /block/{`{block_number}`}</div>

          <h4 className={classes.heading2} style={{ marginTop: "8px" }}>
            Example Response
          </h4>
          <div className={classes.textrou}>
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
          <h4 className={classes.heading3} id="Get-Transaction-Details">
            2. Get Transaction Details
          </h4>
          <p className={classes.text}>
            Retrieve transaction details by transaction hash.
          </p>

          <div className={classes.textrou}>
            pgsql <br />
            CopyEdit <br />
            GET /transaction/{`{tx_hash}`}
          </div>

          <h4 className={classes.heading2} style={{ marginTop: "8px" }}>
            Example Response
          </h4>
          <div className={classes.textrou}>
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

          <h4 className={classes.heading3} id="Get-Account-Balance">
            3. Get Account Balance
          </h4>
          <p className={classes.text}>Fetch the balance of an address.</p>

          <div className={classes.textrou}>
            pgsql <br />
            CopyEdit <br />
            GET /transaction/{`{wallet_address}`}
          </div>

          <h4 className={classes.heading2} style={{ marginTop: "8px" }}>
            Example Response
          </h4>
          <div className={classes.textrou}>
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

          <h4 className={classes.heading3} id="Send-a-Transaction">
            4. Send a Transaction
          </h4>
          <p className={classes.text}>
            Broadcast a transaction on the network.
          </p>

          <div className={classes.textrou}>
            pgsql <br />
            CopyEdit <br />
            POST /sendTransaction
          </div>

          <h4 className={classes.heading2}>Request Body</h4>
          <div className={classes.textrou}>
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
          <h4 className={classes.heading2} style={{ marginTop: "8px" }}>
            Response
          </h4>
          <div className={classes.textrou}>
            <pre>
              {`{
  "tx_hash": "0xa8cbf3..."
}
`}
            </pre>
          </div>

          <h4 className={classes.heading3} id="Subscribe-to-Real-Time-Events">
            5. Subscribe to Real-Time Events (WebSockets)
          </h4>
          <p className={classes.text}>Subscribe-to-Real-Time-Events</p>

          <div className={classes.textrou}>
            pgsql <br />
            CopyEdit <br />
            wss://api.ideascan.io/ws
          </div>

          <h4 className={classes.heading2} style={{ marginTop: "8px" }}>
            Example Usage (JavaScript)
          </h4>
          <div className={classes.textrou}>
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
          <p className={classes.text}>
            The IDEA 3.0 Command Line Interface (CLI) allows developers to
            interact with the blockchain directly from their terminal.
          </p>

          <h2 className={classes.heading2}>Installing the IDEA CLI</h2>
          <div className={classes.textrou}>npm install -g idea-cli</div>

          <h2 className={classes.heading2} style={{ marginTop: "8px" }}>
            Available CLI Commands
          </h2>

          <h3 className={classes.heading2} id="Check-Network-Status">
            1. Check Network Status
          </h3>
          <div className={classes.textrou}>idea status</div>
          <h4 className={classes.heading3}>Example Output</h4>
          <div className={classes.textrou}>
            <pre>
              {`Network: IDEA 3.0
Block Height: 106789
Connected Peers: 25
Gas Price: 0.00001 IDEA`}
            </pre>
          </div>

          <h3 className={classes.heading4} id="Check-Wallet-Balance">
            2. Check Wallet Balance
          </h3>
          <div className={classes.textrou}>
            idea balance --address 0xabc123...
          </div>
          <h4 className={classes.heading3}>Output</h4>
          <div className={classes.textrou}>
            <pre>
              {`Address: 0xabc123...
Balance: 5000 IDEA`}
            </pre>
          </div>

          <h3 className={classes.heading4} id="Send-a-Transaction">
            3. Send a Transaction
          </h3>
          <div className={classes.textrou}>
            idea send --from 0xabc123... --to 0xdef456... --amount 100
          </div>
          <h4 className={classes.heading3}>After confirmation, you’ll get:</h4>
          <div className={classes.textrou}>
            <pre>{`Transaction submitted: 0xa8cbf3...`}</pre>
          </div>

          <h3 className={classes.heading4} id="Deploy-a-Smart-Contract">
            4. Deploy a Smart Contract
          </h3>
          <div className={classes.textrou}>
            idea deploy --contract myContract.sol
          </div>

          <h3 className={classes.heading4} id="View-Recent-Transactions">
            5. View Recent Transactions
          </h3>
          <div className={classes.textrou}>
            idea transactions --address 0xabc123...
          </div>
          <h4 className={classes.heading3}>Output</h4>
          <div className={classes.textrou}>
            <pre>
              {`Latest Transactions:
- 0xa8cbf3... | Sent 100 IDEA to 0xdef456...
- 0x76baf2... | Received 200 IDEA from 0x987654...`}
            </pre>
          </div>

          <h3 className={classes.heading4} id="Run-a-Node ">
            6. Run a Node
          </h3>
          <h4 className={classes.heading3}>Start a Full Node:</h4>
          <div className={classes.textrou}>idea start-node --sync</div>

          <h4 className={classes.heading3}>Run a Validator Node:</h4>
          <div className={classes.textrou}>idea start-validator --stake 50</div>
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

          <h2 className={classes.heading2} id="Connecting-to-IDEA-3.0-RPC">
            Connecting Web3.js to IDEA 3.0
          </h2>

          <h3 className={classes.heading2} id="">
            Install Web3.js
          </h3>
          <div className={classes.textrou}>npm install web3</div>

          <h3 className={classes.heading4} id="Connecting-to-IDEA-3.0-RPC">
            Connecting to IDEA 3.0 RPC
          </h3>
          <div className={classes.textrou}>
            <pre>
              {`const Web3 = require('web3');
const web3 = new Web3('https://node1.ideascan.io/');
console.log("Connected to IDEA 3.0:", web3.isConnected());`}
            </pre>
          </div>

          <h3 className={classes.heading4} id="Getting-Account-Balance">
            Getting Account Balance
          </h3>
          <div className={classes.textrou}>
            <pre>
              {`async function getBalance(address) {
    let balance = await web3.eth.getBalance(address);
    console.log("Balance:", web3.utils.fromWei(balance, 'ether'), "IDEA");
}
getBalance("0xabc123...");`}
            </pre>
          </div>

          <h3 className={classes.heading4} id="Sending-a-Transaction">
            Sending a Transaction
          </h3>
          <div className={classes.textrou}>
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
            className={classes.heading4}
            id="Interacting-with-Smart-Contracts"
          >
            Interacting with Smart Contracts
          </h3>
          <div className={classes.textrou}>
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

          <h2 className={classes.heading2} id="API & SDK">
            API & SDK
          </h2>
          <ul className={clsx(classes.listStyle, classes.text)}>
            <li className="mb-2">IDEA 3.0 API Reference</li>
            <li className="mb-2">CLI Commands & Usage</li>
            <li>Web3 Integration</li>
          </ul>
        </div>
        <div className="mt-3">
          <h2
            className={classes.heading2}
            id="Cross-Chain-Interoperability-idea"
          >
            Cross-Chain Interoperability in IDEA 3.0
          </h2>
          <p className={classes.text}>
            The IDEA 3.0 blockchain is designed with cross-chain
            interoperability, allowing seamless asset transfers and smart
            contract interactions between multiple blockchains, including
            Ethereum, Binance Smart Chain (BSC), and Solana.
          </p>

          <h2 className={classes.heading2} id="Bridging-Assets">
            1. Bridging Assets from Other Blockchains
          </h2>
          <h3 className={classes.heading2} id="How-Cross-Chain-Bridging-Works">
            How Cross-Chain Bridging Works
          </h3>
          <p className={classes.text}>
            Bridging allows users to transfer tokens, NFTs, and data between
            IDEA 3.0 and other blockchain networks.
          </p>

          <h3 className={classes.heading2} id="Supported-Chains">
            Supported Chains for Bridging
          </h3>
          <ul className={clsx(classes.listStyle, classes.text)}>
            <li>Ethereum (ERC-20)</li>
            <li>Binance Smart Chain (BEP-20)</li>
            <li>Solana (SPL Tokens)</li>
            <li>Polygon (MATIC)</li>
            <li>Other EVM-Compatible Chains</li>
          </ul>

          <h3 className={classes.heading4} id="Steps-to-Bridge">
            Steps to Bridge Assets to IDEA 3.0
          </h3>
          <ol className={clsx(classes.listStyle, classes.text)}>
            <li>Visit the Official IDEA Bridge Portal (Coming Soon)</li>
            <li>Select Source & Destination Chains</li>
            <li>Select the Token to Bridge</li>
            <li>Deposit the Tokens</li>
            <li>Receive Wrapped Tokens on IDEA 3.0</li>
            <li>Use the Bridged Assets</li>
          </ol>

          <h3 className={classes.heading4} id="Bridging-Back">
            Bridging Back to Other Chains
          </h3>
          <ol className={clsx(classes.listStyle, classes.text)}>
            <li>Select IDEA 3.0 → Destination Chain.</li>
            <li>Burn the Wrapped Tokens on IDEA 3.0.</li>
            <li>Release the Original Tokens on the Source Chain.</li>
          </ol>

          <h2 className={classes.heading2} id="Connecting-to-Other-Chains">
            2. Connecting to Ethereum, BSC, Solana, and More
          </h2>
          <h3 className={classes.heading2} id="Connecting-to-Ethereum">
            Connecting IDEA 3.0 to Ethereum (ERC-20)
          </h3>
          <div className={classes.textrou}>
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

          <h3 className={classes.heading4}>Adding BSC to MetaMask</h3>
          <div className={classes.textrou}>
            <pre>
              {`Network Name: Binance Smart Chain
RPC URL: https://bsc-dataseed.binance.org/
Chain ID: 56
Currency Symbol: BNB`}
            </pre>
          </div>

          <h2
            className={classes.heading2}
            style={{ marginTop: "8px" }}
            id="Future-of-Cross-Chain"
          >
            3. Future of Cross-Chain in IDEA 3.0
          </h2>
          <ul className={clsx(classes.listStyle, classes.text)}>
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
