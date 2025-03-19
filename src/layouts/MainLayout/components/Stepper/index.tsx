import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

export const table = [
  {
    id: "1",
    name: "Introduction",
    path: "#Introduction",
  },
  {
    id: "2",
    name: "What is IDEA 3.0? ",
    path: "#What-is-IDEA-3.0",
  },
  {
    id: "3",
    name: "Key Components of IDEA 3.0",
    path: "#Key-Components-of-IDEA-3.0",
  },
  {
    id: "4",
    name: "Key Features",
    path: "#Key-Features",
    subSections: [
      {
        id: "4.1",
        name: "Fixed Maximum Stake for Decentralization",
        path: "#Fixed-Maximum-Stake-for-Decentralization",
      },
      {
        id: "4.2",
        name: "High-Speed Transactions & Low Fees",
        path: "#High-Speed-Transactions-Low-Fees",
      },
      {
        id: "4.3",
        name: "Epoch-Based Validator Selection",
        path: "#Epoch-Based-Validator-Selection",
      },
      {
        id: "4.4",
        name: "Smart Contract Flexibility",
        path: "#Smart-Contract-Flexibility",
      },
      {
        id: "4.5",
        name: "Cross-Chain Interoperability",
        path: "#Cross-Chain-Interoperability",
      },
      {
        id: "4.6",
        name: "Decentralized Governance",
        path: "#Decentralized-Governance",
      },
      {
        id: "4.7",
        name: "Security & Fraud Prevention",
        path: "#Security-Fraud-Prevention",
      },
    ],
  },
  {
    id: "5",
    name: "Why IDEA 3.0?",
    path: "#Why-IDEA-3.0",
  },
  {
    id: "6",
    name: "How IDEA 3.0 Stands Out",
    path: "#How-IDEA-3.0-Stands-Out",
  },
  {
    id: "7",
    name: "Roadmap",
    path: "#Roadmap",
  },
  {
    id: "8",
    name: "Getting Started with IDEA 3.0",
    path: "#Getting-Started-with-IDEA-3.0",
    subSections: [
      { id: "8.1", name: "Setting Up a Wallet", path: "#Setting-Up-a-Wallet" },
      { id: "8.1.1", name: "Supported Wallets", path: "#Supported-Wallets" },
      {
        id: "8.1.2",
        name: "Adding IDEA 3.0 to MetaMask",
        path: "#Adding-IDEA-3.0-to-MetaMask",
      },
      { id: "8.2", name: "How to Use IDEA 3.0", path: "#How-to-Use-IDEA-3.0" },
      {
        id: "8.2.1",
        name: "Sending Transactions",
        path: "#Sending-Transactions",
      },
      {
        id: "8.2.2",
        name: "Creating Tokens Without Coding (No-Code Token Generator)",
        path: "#Creating-Tokens-Without-Coding",
      },
      {
        id: "8.3",
        name: "Network Details (RPC, Explorer, etc.)",
        path: "#Network-Details",
      },
      { id: "8.4", name: "Quickstart Guide", path: "#Quickstart-Guide" },
      {
        id: "8.5",
        name: "Deploying a Smart Contract",
        path: "#Deploying-a-Smart-Contract",
      },
    ],
  },
  {
    id: "9",
    name: "Developers Guide for IDEA 3.0",
    path: "#Developers-Guide-for-IDEA-3.0",
    subSections: [
      {
        id: "9.1",
        name: "Smart Contracts on IDEA 3.0",
        path: "#Smart-Contracts-on-IDEA-3.0",
      },
      {
        id: "9.2",
        name: "Writing & Deploying Smart Contracts",
        path: "#Writing-Deploying-Smart-Contracts",
      },
      { id: "9.3", name: "Supported Languages", path: "#Supported-Languages" },
      {
        id: "9.4",
        name: "Gas Fees & Optimizations",
        path: "#Gas-Fees-Optimizations",
      },
      { id: "9.4.1", name: "Gas Fees", path: "#Gas-Fees" },
      { id: "9.4.2", name: "Optimizations", path: "#Optimizations" },
      {
        id: "9.5",
        name: "Running a Node on IDEA 3.0",
        path: "#Running-a-Node",
      },
      { id: "9.5.1", name: "Full Node Setup", path: "#Full-Node-Setup" },
      {
        id: "9.5.2",
        name: "Validator Node Setup",
        path: "#Validator-Node-Setup",
      },
      { id: "9.5.3", name: "Light Node Setup", path: "#Light-Node-Setup" },
    ],
  },
  {
    id: "10",
    name: "Staking & Governance",
    path: "#Staking-Governance",
    subSections: [
      { id: "10.1", name: "Staking Mechanism", path: "#Staking-Mechanism" },
      {
        id: "10.2",
        name: "Validator Selection & Rewards",
        path: "#Validator-Selection-Rewards",
      },
      {
        id: "10.3",
        name: "Governance Participation",
        path: "#Governance-Participation",
      },
    ],
  },
  {
    id: "11",
    name: "Security & Best Practices",
    path: "#Security-Best-Practices",
    subSections: [
      { id: "11.1", name: "Security Measures", path: "#Security-Measures" },
      {
        id: "11.2",
        name: "Common Attacks & Mitigation",
        path: "#Common-Attacks-Mitigation",
      },
    ],
  },
  {
    id: "11.5",
    name: "IDEA Wallet Guide",
    path: "#IDEA-Wallet-Guide",
    subSections: [
      {
        id: "11.5.1",
        name: "Features of the IDEA Wallet",
        path: "#Features-of-the-IDEA-Wallet",
      },
      {
        id: "11.5.2",
        name: "How to Set Up the IDEA Wallet",
        path: "#How-to-Set-Up-the-IDEA-Wallet",
      },
    ],
  },
  {
    id: "11.6",
    name: "Using the IDEA DEX",
    path: "#Using-the-IDEA-DEX",
    subSections: [
      {
        id: "11.6.1",
        name: " How to Trade on IDEA DEX",
        path: "#How-to-Trade-on-IDEA-DEX",
      },
      {
        id: "11.6.2",
        name: "Providing Liquidity on IDEA DEX",
        path: "#Providing-Liquidity-on-IDEA-DEX",
      },
    ],
  },
  {
    id: "11.7",
    name: "Metaverse & Virtual Assets",
    path: "#Metaverse-Virtual-Assets",
  },
  {
    id: "11.8",
    name: "NFT Marketplace Development",
    path: "#NFT-Marketplace-Development",
    subSections: [
      {
        id: "11.8.1",
        name: " How to Mint an NFT on IDEA 3.0",
        path: "#How-to-Mint-an-NFT-on-IDEA-3.0",
      },
    ],
  },
  {
    id: "11.9.1",
    name: " IDEA 3.0 API Reference",
    path: "#IDEA-3.0-API-Reference",
    subSections: [
      {
        id: "11.9.1.1",
        name: "Get Block Information",
        path: "#Get-Block-Information",
      },
      {
        id: "11.9.1.2",
        name: "Get Transaction Details",
        path: "#Get-Transaction-Details",
      },
      {
        id: "11.9.1.3",
        name: "Get Account Balance",
        path: "#Get-Account-Balance",
      },
      {
        id: "11.9.1.4",
        name: "Send a Transaction",
        path: "#Send-a-Transaction",
      },
      {
        id: "11.9.1.5",
        name: "Subscribe to Real-Time Events ",
        path: "#Subscribe-to-Real-Time-Events ",
      },
    ],
  },
  {
    id: "11.9.2",
    name: "CLI Commands & Usage",
    path: "#CLI-Commands-Usage",
    subSections: [
      {
        id: "11.9.2.1",
        name: "Check Network Status",
        path: "#Check-Network-Status",
      },
      {
        id: "11.9.2.2",
        name: "Check Wallet Balance",
        path: "#Check-Wallet-Balance",
      },
      {
        id: "11.9.2.3",
        name: "Send a Transaction",
        path: "#Send-a-Transaction",
      },
      {
        id: "11.9.2.4",
        name: "Deploy a Smart Contract",
        path: "#Deploy-a-Smart-Contract",
      },
      {
        id: "11.9.2.5",
        name: "View Recent Transactions",
        path: "#View-Recent-Transactions ",
      },
      {
        id: "11.9.2.6",
        name: " Run a Node",
        path: "# Run-a-Node ",
      },
    ],
  },
  {
    id: "11.9.3",
    name: "Web3 Integration",
    path: "#Web3-Integration",
    subSections: [
      {
        id: "11.9.3.2",
        name: "Connecting to IDEA 3.0 RPC",
        path: "#Connecting-to-IDEA-3.0-RPC",
      },
      {
        id: "11.9.3.3",
        name: "Getting Account Balance",
        path: "#Getting-Account-Balance",
      },
      {
        id: "11.9.3.4",
        name: "Sending a Transaction",
        path: "#Sending-a-Transaction",
      },
      {
        id: "11.9.3.5",
        name: "Interacting with Smart Contracts",
        path: "#Interacting-with-Smart-Contracts",
      },
      {
        id: "11.9.3.6",
        name: " API & SDK",
        path: "#API & SDK ",
      },
    ],
  },

  {
    id: "12",
    name: "Cross-Chain Interoperability in IDEA 3.0",
    path: "#Cross-Chain-Interoperability-idea",
    subSections: [
      {
        id: "12.1",
        name: "Bridging Assets from Other Blockchains",
        path: "#Bridging-Assets",
      },
      {
        id: "12.1.1",
        name: "How Cross-Chain Bridging Works",
        path: "#How-Cross-Chain-Bridging-Works",
      },
      {
        id: "12.1.2",
        name: "Supported Chains for Bridging",
        path: "#Supported-Chains",
      },
      {
        id: "12.1.3",
        name: "Steps to Bridge Assets to IDEA 3.0",
        path: "#Steps-to-Bridge",
      },
      {
        id: "12.1.4",
        name: "Bridging Back to Other Chains",
        path: "#Bridging-Back",
      },
      {
        id: "12.2",
        name: "Connecting to Ethereum, BSC, Solana, and More",
        path: "#Connecting-to-Other-Chains",
      },
      {
        id: "12.2.1",
        name: "Connecting IDEA 3.0 to Ethereum (ERC-20)",
        path: "#Connecting-to-Ethereum",
      },
    ],
  },
  {
    id: "13",
    name: "Future of Cross-Chain in IDEA 3.0",
    path: "#Future-of-Cross-Chain",
  },
];

const useStyles = makeStyles((theme: any) => ({
  root: {
    position: "fixed",
    width: "16%",
    left: 0,
    top: "8%",
    display: "none", // hidden by default
    [theme.breakpoints.up("sm")]: {
      display: "block", // shows for medium screens and up
    },
  },
  sidebar: {
    backgroundColor: "#040507",
    width: 200,
    [theme.breakpoints.up("lg")]: {
      width: 300,
    },
    height: "100vh",
    overflowY: "auto",
    scrollbarWidth: "none", // Hides scrollbar in Firefox
    "-ms-overflow-style": "none", // Hides scrollbar in Internet Explorer/Edge
    "&::-webkit-scrollbar": {
      display: "none", // Hides scrollbar in Chrome, Safari, and Edge
    },
  },
  list: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(12),
  },
  listItem: {
    paddingLeft: theme.spacing(1.5),
    paddingBottom: theme.spacing(0.8),
  },
  listItemContent: {
    display: "flex",
    alignItems: "center",
  },
  toggleButton: {
    marginRight: theme.spacing(0.5),
    color: "#cbd5e0",
    fontSize: "0.75rem",
    minWidth: "auto",
    textTransform: "none",
    "&:hover": {
      color: "#2563eb",
    },
  },
  sectionLink: {
    fontSize: 10,
    [theme.breakpoints.up("lg")]: {
      fontSize: 12,
    },
    fontWeight: 500,
    fontFamily: "sans-serif",
    color: "#ffffff",
    textDecoration: "none",
    "&:hover": {
      color: "#2563eb",
    },
  },
  activeSectionLink: {
    color: "#2563eb",
  },
  nestedList: {
    marginLeft: theme.spacing(2.5),
    marginTop: theme.spacing(0.5),
    borderLeft: "2px solid #d1d5db",
    paddingLeft: theme.spacing(1),
  },
  subLink: {
    fontSize: 10,
    [theme.breakpoints.up("lg")]: {
      fontSize: 12,
    },
    color: "#cbd5e0",
    textDecoration: "none",
    "&:hover": {
      color: "#2563eb",
    },
  },
}));

const Stepper = () => {
  const classes = useStyles();
  const [activeSection, setActiveSection] = useState("");
  const [openSections, setOpenSections] = useState({});

  const toggleDropdown = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Handle smooth scrolling on click
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    console.log(id, "this is id");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = document.querySelectorAll("div[id]");
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  // Auto-scroll sidebar when active section changes
  useEffect(() => {
    const activeLink = document.querySelector(`a[href="#${activeSection}"]`);
    if (activeLink) {
      activeLink.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeSection]);

  return (
    <Box className={classes.root}>
      <Box className={classes.sidebar}>
        <List className={classes.list}>
          {table.map((section) => (
            <div key={section.id} className={classes.listItem}>
              <Box className={classes.listItemContent}>
                {section.subSections && (
                  <Button
                    className={classes.toggleButton}
                    onClick={() => toggleDropdown(section.id)}
                  >
                    {openSections[section.id] ? "▲" : "▼"}
                  </Button>
                )}
                <Link
                  href={section.path}
                  onClick={(e) => {
                    setActiveSection(section.id);
                    handleScroll(e, section.path.replace("#", ""));
                  }}
                  className={`${classes.sectionLink} ${
                    activeSection === section.id
                      ? classes.activeSectionLink
                      : ""
                  }`}
                >
                  {section.name}
                </Link>
              </Box>
              {section.subSections && openSections[section.id] && (
                <List className={classes.nestedList}>
                  {section.subSections.map((sub: any) => (
                    <ListItem key={sub.id} className={classes.listItem}>
                      <Link
                        href={sub.path}
                        onClick={(e) =>
                          handleScroll(e, section.path.replace("#", ""))
                        }
                        className={classes.subLink}
                      >
                        {sub.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Stepper;
