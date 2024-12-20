export function weiToEthers(value) {
  return value / 1000000000000000000;
}

export function hideAddress(address) {
  const _arrOfAddress = address.split("");
  // console.log(_arrOfAddress);
  const _hiddenAddress = `${_arrOfAddress[0]}${_arrOfAddress[1]}${
    _arrOfAddress[2]
  }${_arrOfAddress[3]}${_arrOfAddress[4]}${_arrOfAddress[5]}...${
    _arrOfAddress[_arrOfAddress.length - 1]
  }${_arrOfAddress[_arrOfAddress.length - 2]}${
    _arrOfAddress[_arrOfAddress.length - 3]
  }`;
  return _hiddenAddress;
}

export function unixToDate(time) {
  const _expiryDate = new Date(time * 1000);
  const _expiryDateInString = String(_expiryDate).split(" ");
  const expiryDay = `${_expiryDateInString[1]}, ${_expiryDateInString[2]} ${_expiryDateInString[3]}`;
  return expiryDay;
}

export function calculateTimeDifference(endTime) {
  const currentTime = new Date().getTime(); // Get current timestamp in milliseconds
  const timeDifference = endTime - currentTime;
  if (timeDifference < 0) {
    // End time is in the past
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
  const oneHour = 60 * 60 * 1000; // Milliseconds in an hour
  const oneMinute = 60 * 1000; // Milliseconds in a minute

  const days = Math.floor(timeDifference / oneDay);
  const hours = Math.floor((timeDifference % oneDay) / oneHour);
  const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
  const seconds = Math.floor((timeDifference % oneMinute) / 1000);
  return { days, hours, minutes, seconds };
}

export const switchNetwork = async () => {
  if (window.ethereum) {
    try {
      const networkId = await window.ethereum.request({
        method: "net_version",
      });

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x61" }], // Chain ID for BSCTestnet
      });

      if (networkId === "97") {
        console.log("MetaMask is connected to BSCTestnet");
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to switch network:", error);
    }
  } else {
    console.error("MetaMask is not installed");
  }
};
