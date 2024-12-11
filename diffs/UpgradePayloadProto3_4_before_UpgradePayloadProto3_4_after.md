## Reserve changes

### Reserves altered

#### GHO ([0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f))

| description | value before | value after |
| --- | --- | --- |
| supplyCap | 0 GHO | 1 GHO |
| reserveFactor | 0 % [0] | 100 % [10000] |
| aTokenImpl | [0x2f32A274e02FA356423CE5e97a8e3155c1Ac396b](https://etherscan.io/address/0x2f32A274e02FA356423CE5e97a8e3155c1Ac396b) | [0x2e234DAe75C793f67A35089C9d99245E1C58470b](https://etherscan.io/address/0x2e234DAe75C793f67A35089C9d99245E1C58470b) |
| variableDebtTokenImpl | [0x20Cb2f303EDe313e2Cc44549Ad8653a5E8c0050e](https://etherscan.io/address/0x20Cb2f303EDe313e2Cc44549Ad8653a5E8c0050e) | [0xF62849F9A0B5Bf2913b396098F7c7019b51A820a](https://etherscan.io/address/0xF62849F9A0B5Bf2913b396098F7c7019b51A820a) |
| aTokenName | Aave Ethereum GHO | hello |
| aTokenSymbol | aEthGHO | yay |
| variableDebtTokenName | Aave Ethereum Variable Debt GHO | hello |
| variableDebtTokenSymbol | variableDebtEthGHO | yay |


## Raw diff

```json
{
  "poolConfig": {
    "poolConfiguratorImpl": {
      "from": "0x4816b2C2895f97fB918f1aE7Da403750a0eE372e",
      "to": "0xc7183455a4C133Ae270771860664b6B7ec320bB1"
    },
    "poolImpl": {
      "from": "0xeF434E4573b90b6ECd4a00f4888381e4D0CC5Ccd",
      "to": "0x5991A2dF15A8F6A256D3Ec51E99254Cd3fb576A9"
    }
  },
  "reserves": {
    "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f": {
      "aTokenImpl": {
        "from": "0x2f32A274e02FA356423CE5e97a8e3155c1Ac396b",
        "to": "0x2e234DAe75C793f67A35089C9d99245E1C58470b"
      },
      "aTokenName": {
        "from": "Aave Ethereum GHO",
        "to": "hello"
      },
      "aTokenSymbol": {
        "from": "aEthGHO",
        "to": "yay"
      },
      "reserveFactor": {
        "from": 0,
        "to": 10000
      },
      "supplyCap": {
        "from": 0,
        "to": 1
      },
      "variableDebtTokenImpl": {
        "from": "0x20Cb2f303EDe313e2Cc44549Ad8653a5E8c0050e",
        "to": "0xF62849F9A0B5Bf2913b396098F7c7019b51A820a"
      },
      "variableDebtTokenName": {
        "from": "Aave Ethereum Variable Debt GHO",
        "to": "hello"
      },
      "variableDebtTokenSymbol": {
        "from": "variableDebtEthGHO",
        "to": "yay"
      }
    }
  }
}
```