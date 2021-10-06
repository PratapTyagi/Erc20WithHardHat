require("@nomiclabs/hardhat-waffle")
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const INFURA_API = 'https://rinkeby.infura.io/v3/9cc41dc5f509454d81181867bdaf01b2';
const PRIVATE_KEY = '462db13aac5abb547df5a1a542fbd07487d70ec375d611a14b922549e793a9bf';

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: INFURA_API,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
