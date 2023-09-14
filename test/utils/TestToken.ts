export const TestToken = {
  contractName: "TestToken",
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "name",
          type: "string"
        },
        {
          internalType: "string",
          name: "symbol",
          type: "string"
        },
        {
          internalType: "uint8",
          name: "initDecimals",
          type: "uint8"
        },
        {
          internalType: "uint256",
          name: "mintLimit",
          type: "uint256"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          internalType: "address",
          name: "spender",
          type: "address"
        }
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "subtractedValue",
          type: "uint256"
        }
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "addedValue",
          type: "uint256"
        }
      ],
      name: "increaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "mint",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ],
  metadata:
    '{"compiler":{"version":"0.8.16+commit.07a7930e"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"initDecimals","type":"uint8"},{"internalType":"uint256","name":"mintLimit","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"author":"Superfluid","details":"Test ERC20 token that allows any one mint new tokens.","kind":"dev","methods":{"allowance(address,address)":{"details":"See {IERC20-allowance}."},"approve(address,uint256)":{"details":"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."},"balanceOf(address)":{"details":"See {IERC20-balanceOf}."},"decimals()":{"details":"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."},"decreaseAllowance(address,uint256)":{"details":"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."},"increaseAllowance(address,uint256)":{"details":"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."},"mint(address,uint256)":{"details":"See {ERC20-_mint}."},"name()":{"details":"Returns the name of the token."},"symbol()":{"details":"Returns the symbol of the token, usually a shorter version of the name."},"totalSupply()":{"details":"See {IERC20-totalSupply}."},"transfer(address,uint256)":{"details":"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."},"transferFrom(address,address,uint256)":{"details":"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``\'s tokens of at least `amount`."}},"title":"Test token contract","version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/utils/TestToken.sol":"TestToken"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"@openzeppelin/contracts/token/ERC20/ERC20.sol":{"keccak256":"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238","license":"MIT","urls":["bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0","dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy"]},"@openzeppelin/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b","license":"MIT","urls":["bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34","dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr"]},"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol":{"keccak256":"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca","license":"MIT","urls":["bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd","dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"]},"@openzeppelin/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"project:/contracts/utils/TestToken.sol":{"keccak256":"0x41cd8061b059c317fe1581e1cffb00670e5b69929c1a27d4a2002b135b5f3ade","license":"AGPLv3","urls":["bzz-raw://d3d2f66f2b93c7da356d2136d6e6c4b80630c35c272b2280d2b332abb2f5a601","dweb:/ipfs/QmYDJu3zMMpyXDHjLPoqJggQFbzemiqkRwfLwfDQaBRQCL"]}},"version":1}',
  bytecode:
    "0x60a06040523480156200001157600080fd5b5060405162000d1838038062000d1883398101604081905262000034916200013c565b8383600362000044838262000256565b50600462000053828262000256565b50506005805460ff191660ff94909416939093179092556080525062000322915050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200009f57600080fd5b81516001600160401b0380821115620000bc57620000bc62000077565b604051601f8301601f19908116603f01168101908282118183101715620000e757620000e762000077565b816040528381526020925086838588010111156200010457600080fd5b600091505b8382101562000128578582018301518183018401529082019062000109565b600093810190920192909252949350505050565b600080600080608085870312156200015357600080fd5b84516001600160401b03808211156200016b57600080fd5b62000179888389016200008d565b955060208701519150808211156200019057600080fd5b506200019f878288016200008d565b935050604085015160ff81168114620001b757600080fd5b6060959095015193969295505050565b600181811c90821680620001dc57607f821691505b602082108103620001fd57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200025157600081815260208120601f850160051c810160208610156200022c5750805b601f850160051c820191505b818110156200024d5782815560010162000238565b5050505b505050565b81516001600160401b0381111562000272576200027262000077565b6200028a81620002838454620001c7565b8462000203565b602080601f831160018114620002c25760008415620002a95750858301515b600019600386901b1c1916600185901b1785556200024d565b600085815260208120601f198616915b82811015620002f357888601518255948401946001909101908401620002d2565b5085821015620003125787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6080516109da6200033e60003960006102ba01526109da6000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f191461014757806370a082311461015a57806395d89b4114610183578063a457c2d71461018b578063a9059cbb1461019e578063dd62ed3e146101b157600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f5780633950935114610134575b600080fd5b6100c16101c4565b6040516100ce919061080e565b60405180910390f35b6100ea6100e5366004610878565b610256565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a3660046108a2565b610270565b60055460405160ff90911681526020016100ce565b6100ea610142366004610878565b610294565b6100ea610155366004610878565b6102b6565b6100fe6101683660046108de565b6001600160a01b031660009081526020819052604090205490565b6100c16102fb565b6100ea610199366004610878565b61030a565b6100ea6101ac366004610878565b61038a565b6100fe6101bf366004610900565b610398565b6060600380546101d390610933565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90610933565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050905090565b6000336102648185856103c3565b60019150505b92915050565b60003361027e8582856104e7565b610289858585610561565b506001949350505050565b6000336102648185856102a78383610398565b6102b1919061096d565b6103c3565b60007f00000000000000000000000000000000000000000000000000000000000000008211156102e8576102e861098e565b6102f2838361072f565b50600192915050565b6060600480546101d390610933565b600033816103188286610398565b90508381101561037d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61028982868684036103c3565b600033610264818585610561565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104255760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610374565b6001600160a01b0382166104865760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610374565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104f38484610398565b9050600019811461055b578181101561054e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610374565b61055b84848484036103c3565b50505050565b6001600160a01b0383166105c55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610374565b6001600160a01b0382166106275760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610374565b6001600160a01b0383166000908152602081905260409020548181101561069f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610374565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106d690849061096d565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161072291815260200190565b60405180910390a361055b565b6001600160a01b0382166107855760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610374565b8060026000828254610797919061096d565b90915550506001600160a01b038216600090815260208190526040812080548392906107c490849061096d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b8181101561083b5785810183015185820160400152820161081f565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461087357600080fd5b919050565b6000806040838503121561088b57600080fd5b6108948361085c565b946020939093013593505050565b6000806000606084860312156108b757600080fd5b6108c08461085c565b92506108ce6020850161085c565b9150604084013590509250925092565b6000602082840312156108f057600080fd5b6108f98261085c565b9392505050565b6000806040838503121561091357600080fd5b61091c8361085c565b915061092a6020840161085c565b90509250929050565b600181811c9082168061094757607f821691505b60208210810361096757634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561026a57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052600160045260246000fdfea2646970667358221220d6e46d65204c0936dc87ffc86d7eca5680a587ceb1f98610be1ca4c99fee82b764736f6c63430008100033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f191461014757806370a082311461015a57806395d89b4114610183578063a457c2d71461018b578063a9059cbb1461019e578063dd62ed3e146101b157600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f5780633950935114610134575b600080fd5b6100c16101c4565b6040516100ce919061080e565b60405180910390f35b6100ea6100e5366004610878565b610256565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a3660046108a2565b610270565b60055460405160ff90911681526020016100ce565b6100ea610142366004610878565b610294565b6100ea610155366004610878565b6102b6565b6100fe6101683660046108de565b6001600160a01b031660009081526020819052604090205490565b6100c16102fb565b6100ea610199366004610878565b61030a565b6100ea6101ac366004610878565b61038a565b6100fe6101bf366004610900565b610398565b6060600380546101d390610933565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90610933565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050905090565b6000336102648185856103c3565b60019150505b92915050565b60003361027e8582856104e7565b610289858585610561565b506001949350505050565b6000336102648185856102a78383610398565b6102b1919061096d565b6103c3565b60007f00000000000000000000000000000000000000000000000000000000000000008211156102e8576102e861098e565b6102f2838361072f565b50600192915050565b6060600480546101d390610933565b600033816103188286610398565b90508381101561037d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61028982868684036103c3565b600033610264818585610561565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104255760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610374565b6001600160a01b0382166104865760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610374565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104f38484610398565b9050600019811461055b578181101561054e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610374565b61055b84848484036103c3565b50505050565b6001600160a01b0383166105c55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610374565b6001600160a01b0382166106275760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610374565b6001600160a01b0383166000908152602081905260409020548181101561069f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610374565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106d690849061096d565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161072291815260200190565b60405180910390a361055b565b6001600160a01b0382166107855760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610374565b8060026000828254610797919061096d565b90915550506001600160a01b038216600090815260208190526040812080548392906107c490849061096d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b8181101561083b5785810183015185820160400152820161081f565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461087357600080fd5b919050565b6000806040838503121561088b57600080fd5b6108948361085c565b946020939093013593505050565b6000806000606084860312156108b757600080fd5b6108c08461085c565b92506108ce6020850161085c565b9150604084013590509250925092565b6000602082840312156108f057600080fd5b6108f98261085c565b9392505050565b6000806040838503121561091357600080fd5b61091c8361085c565b915061092a6020840161085c565b90509250929050565b600181811c9082168061094757607f821691505b60208210810361096757634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561026a57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052600160045260246000fdfea2646970667358221220d6e46d65204c0936dc87ffc86d7eca5680a587ceb1f98610be1ca4c99fee82b764736f6c63430008100033",
  immutableReferences: {
    "40718": [
      {
        length: 32,
        start: 698
      }
    ]
  },
  generatedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:4356:105",
        statements: [
          {
            nodeType: "YulBlock",
            src: "6:3:105",
            statements: []
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "46:95:105",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "63:1:105",
                        type: "",
                        value: "0"
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "70:3:105",
                            type: "",
                            value: "224"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "75:10:105",
                            type: "",
                            value: "0x4e487b71"
                          }
                        ],
                        functionName: {
                          name: "shl",
                          nodeType: "YulIdentifier",
                          src: "66:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "66:20:105"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "56:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "56:31:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "56:31:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "103:1:105",
                        type: "",
                        value: "4"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "106:4:105",
                        type: "",
                        value: "0x41"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "96:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "96:15:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "96:15:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "127:1:105",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "130:4:105",
                        type: "",
                        value: "0x24"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "120:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "120:15:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "120:15:105"
                }
              ]
            },
            name: "panic_error_0x41",
            nodeType: "YulFunctionDefinition",
            src: "14:127:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "210:776:105",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "259:16:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "268:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "271:1:105",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "261:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "261:12:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "261:12:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "238:6:105"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "246:4:105",
                                type: "",
                                value: "0x1f"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "234:3:105"
                            },
                            nodeType: "YulFunctionCall",
                            src: "234:17:105"
                          },
                          {
                            name: "end",
                            nodeType: "YulIdentifier",
                            src: "253:3:105"
                          }
                        ],
                        functionName: {
                          name: "slt",
                          nodeType: "YulIdentifier",
                          src: "230:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "230:27:105"
                      }
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "223:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "223:35:105"
                  },
                  nodeType: "YulIf",
                  src: "220:55:105"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "284:23:105",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "300:6:105"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "294:5:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "294:13:105"
                  },
                  variables: [
                    {
                      name: "_1",
                      nodeType: "YulTypedName",
                      src: "288:2:105",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "316:28:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "334:2:105",
                            type: "",
                            value: "64"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "338:1:105",
                            type: "",
                            value: "1"
                          }
                        ],
                        functionName: {
                          name: "shl",
                          nodeType: "YulIdentifier",
                          src: "330:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "330:10:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "342:1:105",
                        type: "",
                        value: "1"
                      }
                    ],
                    functionName: {
                      name: "sub",
                      nodeType: "YulIdentifier",
                      src: "326:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "326:18:105"
                  },
                  variables: [
                    {
                      name: "_2",
                      nodeType: "YulTypedName",
                      src: "320:2:105",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "367:22:105",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "369:16:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "369:18:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "369:18:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "_1",
                        nodeType: "YulIdentifier",
                        src: "359:2:105"
                      },
                      {
                        name: "_2",
                        nodeType: "YulIdentifier",
                        src: "363:2:105"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "356:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "356:10:105"
                  },
                  nodeType: "YulIf",
                  src: "353:36:105"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "398:17:105",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "412:2:105",
                        type: "",
                        value: "31"
                      }
                    ],
                    functionName: {
                      name: "not",
                      nodeType: "YulIdentifier",
                      src: "408:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "408:7:105"
                  },
                  variables: [
                    {
                      name: "_3",
                      nodeType: "YulTypedName",
                      src: "402:2:105",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "424:23:105",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "444:2:105",
                        type: "",
                        value: "64"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "438:5:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "438:9:105"
                  },
                  variables: [
                    {
                      name: "memPtr",
                      nodeType: "YulTypedName",
                      src: "428:6:105",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "456:71:105",
                  value: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "478:6:105"
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        name: "_1",
                                        nodeType: "YulIdentifier",
                                        src: "502:2:105"
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "506:4:105",
                                        type: "",
                                        value: "0x1f"
                                      }
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "498:3:105"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "498:13:105"
                                  },
                                  {
                                    name: "_3",
                                    nodeType: "YulIdentifier",
                                    src: "513:2:105"
                                  }
                                ],
                                functionName: {
                                  name: "and",
                                  nodeType: "YulIdentifier",
                                  src: "494:3:105"
                                },
                                nodeType: "YulFunctionCall",
                                src: "494:22:105"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "518:2:105",
                                type: "",
                                value: "63"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "490:3:105"
                            },
                            nodeType: "YulFunctionCall",
                            src: "490:31:105"
                          },
                          {
                            name: "_3",
                            nodeType: "YulIdentifier",
                            src: "523:2:105"
                          }
                        ],
                        functionName: {
                          name: "and",
                          nodeType: "YulIdentifier",
                          src: "486:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "486:40:105"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "474:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "474:53:105"
                  },
                  variables: [
                    {
                      name: "newFreePtr",
                      nodeType: "YulTypedName",
                      src: "460:10:105",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "586:22:105",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "588:16:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "588:18:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "588:18:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "545:10:105"
                          },
                          {
                            name: "_2",
                            nodeType: "YulIdentifier",
                            src: "557:2:105"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "542:2:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "542:18:105"
                      },
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "565:10:105"
                          },
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "577:6:105"
                          }
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "562:2:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "562:22:105"
                      }
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "539:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "539:46:105"
                  },
                  nodeType: "YulIf",
                  src: "536:72:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "624:2:105",
                        type: "",
                        value: "64"
                      },
                      {
                        name: "newFreePtr",
                        nodeType: "YulIdentifier",
                        src: "628:10:105"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "617:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "617:22:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "617:22:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "655:6:105"
                      },
                      {
                        name: "_1",
                        nodeType: "YulIdentifier",
                        src: "663:2:105"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "648:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "648:18:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "648:18:105"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "675:14:105",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "685:4:105",
                    type: "",
                    value: "0x20"
                  },
                  variables: [
                    {
                      name: "_4",
                      nodeType: "YulTypedName",
                      src: "679:2:105",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "735:16:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "744:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "747:1:105",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "737:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "737:12:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "737:12:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "712:6:105"
                              },
                              {
                                name: "_1",
                                nodeType: "YulIdentifier",
                                src: "720:2:105"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "708:3:105"
                            },
                            nodeType: "YulFunctionCall",
                            src: "708:15:105"
                          },
                          {
                            name: "_4",
                            nodeType: "YulIdentifier",
                            src: "725:2:105"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "704:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "704:24:105"
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "730:3:105"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "701:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "701:33:105"
                  },
                  nodeType: "YulIf",
                  src: "698:53:105"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "760:10:105",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "769:1:105",
                    type: "",
                    value: "0"
                  },
                  variables: [
                    {
                      name: "i",
                      nodeType: "YulTypedName",
                      src: "764:1:105",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "825:87:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "memPtr",
                                      nodeType: "YulIdentifier",
                                      src: "854:6:105"
                                    },
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "862:1:105"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "850:3:105"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "850:14:105"
                                },
                                {
                                  name: "_4",
                                  nodeType: "YulIdentifier",
                                  src: "866:2:105"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "846:3:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "846:23:105"
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      arguments: [
                                        {
                                          name: "offset",
                                          nodeType: "YulIdentifier",
                                          src: "885:6:105"
                                        },
                                        {
                                          name: "i",
                                          nodeType: "YulIdentifier",
                                          src: "893:1:105"
                                        }
                                      ],
                                      functionName: {
                                        name: "add",
                                        nodeType: "YulIdentifier",
                                        src: "881:3:105"
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "881:14:105"
                                    },
                                    {
                                      name: "_4",
                                      nodeType: "YulIdentifier",
                                      src: "897:2:105"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "877:3:105"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "877:23:105"
                                }
                              ],
                              functionName: {
                                name: "mload",
                                nodeType: "YulIdentifier",
                                src: "871:5:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "871:30:105"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "839:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "839:63:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "839:63:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "790:1:105"
                      },
                      {
                        name: "_1",
                        nodeType: "YulIdentifier",
                        src: "793:2:105"
                      }
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "787:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "787:9:105"
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "797:19:105",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "799:15:105",
                        value: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "808:1:105"
                            },
                            {
                              name: "_4",
                              nodeType: "YulIdentifier",
                              src: "811:2:105"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "804:3:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "804:10:105"
                        },
                        variableNames: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "799:1:105"
                          }
                        ]
                      }
                    ]
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "783:3:105",
                    statements: []
                  },
                  src: "779:133:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "memPtr",
                                nodeType: "YulIdentifier",
                                src: "936:6:105"
                              },
                              {
                                name: "_1",
                                nodeType: "YulIdentifier",
                                src: "944:2:105"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "932:3:105"
                            },
                            nodeType: "YulFunctionCall",
                            src: "932:15:105"
                          },
                          {
                            name: "_4",
                            nodeType: "YulIdentifier",
                            src: "949:2:105"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "928:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "928:24:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "954:1:105",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "921:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "921:35:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "921:35:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "965:15:105",
                  value: {
                    name: "memPtr",
                    nodeType: "YulIdentifier",
                    src: "974:6:105"
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "965:5:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_decode_string_fromMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "184:6:105",
                type: ""
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "192:3:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "200:5:105",
                type: ""
              }
            ],
            src: "146:840:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1141:624:105",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1188:16:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1197:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1200:1:105",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "1190:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1190:12:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1190:12:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1162:7:105"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1171:9:105"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "1158:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1158:23:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1183:3:105",
                        type: "",
                        value: "128"
                      }
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "1154:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1154:33:105"
                  },
                  nodeType: "YulIf",
                  src: "1151:53:105"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1213:30:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1233:9:105"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "1227:5:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1227:16:105"
                  },
                  variables: [
                    {
                      name: "offset",
                      nodeType: "YulTypedName",
                      src: "1217:6:105",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1252:28:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1270:2:105",
                            type: "",
                            value: "64"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1274:1:105",
                            type: "",
                            value: "1"
                          }
                        ],
                        functionName: {
                          name: "shl",
                          nodeType: "YulIdentifier",
                          src: "1266:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1266:10:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1278:1:105",
                        type: "",
                        value: "1"
                      }
                    ],
                    functionName: {
                      name: "sub",
                      nodeType: "YulIdentifier",
                      src: "1262:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1262:18:105"
                  },
                  variables: [
                    {
                      name: "_1",
                      nodeType: "YulTypedName",
                      src: "1256:2:105",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1307:16:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1316:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1319:1:105",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "1309:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1309:12:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1309:12:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "1295:6:105"
                      },
                      {
                        name: "_1",
                        nodeType: "YulIdentifier",
                        src: "1303:2:105"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "1292:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1292:14:105"
                  },
                  nodeType: "YulIf",
                  src: "1289:34:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "1332:71:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1375:9:105"
                          },
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "1386:6:105"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1371:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1371:22:105"
                      },
                      {
                        name: "dataEnd",
                        nodeType: "YulIdentifier",
                        src: "1395:7:105"
                      }
                    ],
                    functionName: {
                      name: "abi_decode_string_fromMemory",
                      nodeType: "YulIdentifier",
                      src: "1342:28:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1342:61:105"
                  },
                  variableNames: [
                    {
                      name: "value0",
                      nodeType: "YulIdentifier",
                      src: "1332:6:105"
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1412:41:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1438:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1449:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1434:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1434:18:105"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "1428:5:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1428:25:105"
                  },
                  variables: [
                    {
                      name: "offset_1",
                      nodeType: "YulTypedName",
                      src: "1416:8:105",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1482:16:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1491:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1494:1:105",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "1484:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1484:12:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1484:12:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "offset_1",
                        nodeType: "YulIdentifier",
                        src: "1468:8:105"
                      },
                      {
                        name: "_1",
                        nodeType: "YulIdentifier",
                        src: "1478:2:105"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "1465:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1465:16:105"
                  },
                  nodeType: "YulIf",
                  src: "1462:36:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "1507:73:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1550:9:105"
                          },
                          {
                            name: "offset_1",
                            nodeType: "YulIdentifier",
                            src: "1561:8:105"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1546:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1546:24:105"
                      },
                      {
                        name: "dataEnd",
                        nodeType: "YulIdentifier",
                        src: "1572:7:105"
                      }
                    ],
                    functionName: {
                      name: "abi_decode_string_fromMemory",
                      nodeType: "YulIdentifier",
                      src: "1517:28:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1517:63:105"
                  },
                  variableNames: [
                    {
                      name: "value1",
                      nodeType: "YulIdentifier",
                      src: "1507:6:105"
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1589:38:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1612:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1623:2:105",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1608:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1608:18:105"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "1602:5:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1602:25:105"
                  },
                  variables: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "1593:5:105",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1675:16:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1684:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1687:1:105",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "1677:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1677:12:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1677:12:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "1649:5:105"
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "1660:5:105"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1667:4:105",
                                type: "",
                                value: "0xff"
                              }
                            ],
                            functionName: {
                              name: "and",
                              nodeType: "YulIdentifier",
                              src: "1656:3:105"
                            },
                            nodeType: "YulFunctionCall",
                            src: "1656:16:105"
                          }
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "1646:2:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1646:27:105"
                      }
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "1639:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1639:35:105"
                  },
                  nodeType: "YulIf",
                  src: "1636:55:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "1700:15:105",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "1710:5:105"
                  },
                  variableNames: [
                    {
                      name: "value2",
                      nodeType: "YulIdentifier",
                      src: "1700:6:105"
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "1724:35:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1744:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1755:2:105",
                            type: "",
                            value: "96"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1740:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1740:18:105"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "1734:5:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1734:25:105"
                  },
                  variableNames: [
                    {
                      name: "value3",
                      nodeType: "YulIdentifier",
                      src: "1724:6:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_uint8t_uint256_fromMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1083:9:105",
                type: ""
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "1094:7:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1106:6:105",
                type: ""
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "1114:6:105",
                type: ""
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "1122:6:105",
                type: ""
              },
              {
                name: "value3",
                nodeType: "YulTypedName",
                src: "1130:6:105",
                type: ""
              }
            ],
            src: "991:774:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1825:325:105",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1835:22:105",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1849:1:105",
                        type: "",
                        value: "1"
                      },
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "1852:4:105"
                      }
                    ],
                    functionName: {
                      name: "shr",
                      nodeType: "YulIdentifier",
                      src: "1845:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1845:12:105"
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "1835:6:105"
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1866:38:105",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "1896:4:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1902:1:105",
                        type: "",
                        value: "1"
                      }
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "1892:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1892:12:105"
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "1870:18:105",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1943:31:105",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "1945:27:105",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "1959:6:105"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1967:4:105",
                              type: "",
                              value: "0x7f"
                            }
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "1955:3:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1955:17:105"
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "1945:6:105"
                          }
                        ]
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "1923:18:105"
                      }
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "1916:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1916:26:105"
                  },
                  nodeType: "YulIf",
                  src: "1913:61:105"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2033:111:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2054:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2061:3:105",
                                  type: "",
                                  value: "224"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2066:10:105",
                                  type: "",
                                  value: "0x4e487b71"
                                }
                              ],
                              functionName: {
                                name: "shl",
                                nodeType: "YulIdentifier",
                                src: "2057:3:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "2057:20:105"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "2047:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2047:31:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2047:31:105"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2098:1:105",
                              type: "",
                              value: "4"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2101:4:105",
                              type: "",
                              value: "0x22"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "2091:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2091:15:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2091:15:105"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2126:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2129:4:105",
                              type: "",
                              value: "0x24"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "2119:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2119:15:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2119:15:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "1989:18:105"
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "2012:6:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2020:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "2009:2:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2009:14:105"
                      }
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "1986:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1986:38:105"
                  },
                  nodeType: "YulIf",
                  src: "1983:161:105"
                }
              ]
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "1805:4:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "1814:6:105",
                type: ""
              }
            ],
            src: "1770:380:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2211:65:105",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2228:1:105",
                        type: "",
                        value: "0"
                      },
                      {
                        name: "ptr",
                        nodeType: "YulIdentifier",
                        src: "2231:3:105"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2221:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2221:14:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2221:14:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "2244:26:105",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2262:1:105",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2265:4:105",
                        type: "",
                        value: "0x20"
                      }
                    ],
                    functionName: {
                      name: "keccak256",
                      nodeType: "YulIdentifier",
                      src: "2252:9:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2252:18:105"
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "2244:4:105"
                    }
                  ]
                }
              ]
            },
            name: "array_dataslot_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "ptr",
                nodeType: "YulTypedName",
                src: "2194:3:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "2202:4:105",
                type: ""
              }
            ],
            src: "2155:121:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2362:464:105",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2395:425:105",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2409:11:105",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "2419:1:105",
                          type: "",
                          value: "0"
                        },
                        variables: [
                          {
                            name: "_1",
                            nodeType: "YulTypedName",
                            src: "2413:2:105",
                            type: ""
                          }
                        ]
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "_1",
                              nodeType: "YulIdentifier",
                              src: "2440:2:105"
                            },
                            {
                              name: "array",
                              nodeType: "YulIdentifier",
                              src: "2444:5:105"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "2433:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2433:17:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2433:17:105"
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2463:31:105",
                        value: {
                          arguments: [
                            {
                              name: "_1",
                              nodeType: "YulIdentifier",
                              src: "2485:2:105"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2489:4:105",
                              type: "",
                              value: "0x20"
                            }
                          ],
                          functionName: {
                            name: "keccak256",
                            nodeType: "YulIdentifier",
                            src: "2475:9:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2475:19:105"
                        },
                        variables: [
                          {
                            name: "data",
                            nodeType: "YulTypedName",
                            src: "2467:4:105",
                            type: ""
                          }
                        ]
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2507:57:105",
                        value: {
                          arguments: [
                            {
                              name: "data",
                              nodeType: "YulIdentifier",
                              src: "2530:4:105"
                            },
                            {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2540:1:105",
                                  type: "",
                                  value: "5"
                                },
                                {
                                  arguments: [
                                    {
                                      name: "startIndex",
                                      nodeType: "YulIdentifier",
                                      src: "2547:10:105"
                                    },
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "2559:2:105",
                                      type: "",
                                      value: "31"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "2543:3:105"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "2543:19:105"
                                }
                              ],
                              functionName: {
                                name: "shr",
                                nodeType: "YulIdentifier",
                                src: "2536:3:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "2536:27:105"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "2526:3:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2526:38:105"
                        },
                        variables: [
                          {
                            name: "deleteStart",
                            nodeType: "YulTypedName",
                            src: "2511:11:105",
                            type: ""
                          }
                        ]
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "2601:23:105",
                          statements: [
                            {
                              nodeType: "YulAssignment",
                              src: "2603:19:105",
                              value: {
                                name: "data",
                                nodeType: "YulIdentifier",
                                src: "2618:4:105"
                              },
                              variableNames: [
                                {
                                  name: "deleteStart",
                                  nodeType: "YulIdentifier",
                                  src: "2603:11:105"
                                }
                              ]
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "startIndex",
                              nodeType: "YulIdentifier",
                              src: "2583:10:105"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2595:4:105",
                              type: "",
                              value: "0x20"
                            }
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "2580:2:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2580:20:105"
                        },
                        nodeType: "YulIf",
                        src: "2577:47:105"
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2637:41:105",
                        value: {
                          arguments: [
                            {
                              name: "data",
                              nodeType: "YulIdentifier",
                              src: "2651:4:105"
                            },
                            {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2661:1:105",
                                  type: "",
                                  value: "5"
                                },
                                {
                                  arguments: [
                                    {
                                      name: "len",
                                      nodeType: "YulIdentifier",
                                      src: "2668:3:105"
                                    },
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "2673:2:105",
                                      type: "",
                                      value: "31"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "2664:3:105"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "2664:12:105"
                                }
                              ],
                              functionName: {
                                name: "shr",
                                nodeType: "YulIdentifier",
                                src: "2657:3:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "2657:20:105"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "2647:3:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2647:31:105"
                        },
                        variables: [
                          {
                            name: "_2",
                            nodeType: "YulTypedName",
                            src: "2641:2:105",
                            type: ""
                          }
                        ]
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2691:24:105",
                        value: {
                          name: "deleteStart",
                          nodeType: "YulIdentifier",
                          src: "2704:11:105"
                        },
                        variables: [
                          {
                            name: "start",
                            nodeType: "YulTypedName",
                            src: "2695:5:105",
                            type: ""
                          }
                        ]
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "2789:21:105",
                          statements: [
                            {
                              expression: {
                                arguments: [
                                  {
                                    name: "start",
                                    nodeType: "YulIdentifier",
                                    src: "2798:5:105"
                                  },
                                  {
                                    name: "_1",
                                    nodeType: "YulIdentifier",
                                    src: "2805:2:105"
                                  }
                                ],
                                functionName: {
                                  name: "sstore",
                                  nodeType: "YulIdentifier",
                                  src: "2791:6:105"
                                },
                                nodeType: "YulFunctionCall",
                                src: "2791:17:105"
                              },
                              nodeType: "YulExpressionStatement",
                              src: "2791:17:105"
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "start",
                              nodeType: "YulIdentifier",
                              src: "2739:5:105"
                            },
                            {
                              name: "_2",
                              nodeType: "YulIdentifier",
                              src: "2746:2:105"
                            }
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "2736:2:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2736:13:105"
                        },
                        nodeType: "YulForLoop",
                        post: {
                          nodeType: "YulBlock",
                          src: "2750:26:105",
                          statements: [
                            {
                              nodeType: "YulAssignment",
                              src: "2752:22:105",
                              value: {
                                arguments: [
                                  {
                                    name: "start",
                                    nodeType: "YulIdentifier",
                                    src: "2765:5:105"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "2772:1:105",
                                    type: "",
                                    value: "1"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "2761:3:105"
                                },
                                nodeType: "YulFunctionCall",
                                src: "2761:13:105"
                              },
                              variableNames: [
                                {
                                  name: "start",
                                  nodeType: "YulIdentifier",
                                  src: "2752:5:105"
                                }
                              ]
                            }
                          ]
                        },
                        pre: {
                          nodeType: "YulBlock",
                          src: "2732:3:105",
                          statements: []
                        },
                        src: "2728:82:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "len",
                        nodeType: "YulIdentifier",
                        src: "2378:3:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2383:2:105",
                        type: "",
                        value: "31"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "2375:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2375:11:105"
                  },
                  nodeType: "YulIf",
                  src: "2372:448:105"
                }
              ]
            },
            name: "clean_up_bytearray_end_slots_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "2334:5:105",
                type: ""
              },
              {
                name: "len",
                nodeType: "YulTypedName",
                src: "2341:3:105",
                type: ""
              },
              {
                name: "startIndex",
                nodeType: "YulTypedName",
                src: "2346:10:105",
                type: ""
              }
            ],
            src: "2281:545:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2916:81:105",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2926:65:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "data",
                            nodeType: "YulIdentifier",
                            src: "2941:4:105"
                          },
                          {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "2959:1:105",
                                        type: "",
                                        value: "3"
                                      },
                                      {
                                        name: "len",
                                        nodeType: "YulIdentifier",
                                        src: "2962:3:105"
                                      }
                                    ],
                                    functionName: {
                                      name: "shl",
                                      nodeType: "YulIdentifier",
                                      src: "2955:3:105"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "2955:11:105"
                                  },
                                  {
                                    arguments: [
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "2972:1:105",
                                        type: "",
                                        value: "0"
                                      }
                                    ],
                                    functionName: {
                                      name: "not",
                                      nodeType: "YulIdentifier",
                                      src: "2968:3:105"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "2968:6:105"
                                  }
                                ],
                                functionName: {
                                  name: "shr",
                                  nodeType: "YulIdentifier",
                                  src: "2951:3:105"
                                },
                                nodeType: "YulFunctionCall",
                                src: "2951:24:105"
                              }
                            ],
                            functionName: {
                              name: "not",
                              nodeType: "YulIdentifier",
                              src: "2947:3:105"
                            },
                            nodeType: "YulFunctionCall",
                            src: "2947:29:105"
                          }
                        ],
                        functionName: {
                          name: "and",
                          nodeType: "YulIdentifier",
                          src: "2937:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2937:40:105"
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2983:1:105",
                            type: "",
                            value: "1"
                          },
                          {
                            name: "len",
                            nodeType: "YulIdentifier",
                            src: "2986:3:105"
                          }
                        ],
                        functionName: {
                          name: "shl",
                          nodeType: "YulIdentifier",
                          src: "2979:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2979:11:105"
                      }
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "2934:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2934:57:105"
                  },
                  variableNames: [
                    {
                      name: "used",
                      nodeType: "YulIdentifier",
                      src: "2926:4:105"
                    }
                  ]
                }
              ]
            },
            name: "extract_used_part_and_set_length_of_short_byte_array",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "2893:4:105",
                type: ""
              },
              {
                name: "len",
                nodeType: "YulTypedName",
                src: "2899:3:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "used",
                nodeType: "YulTypedName",
                src: "2907:4:105",
                type: ""
              }
            ],
            src: "2831:166:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3098:1256:105",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3108:24:105",
                  value: {
                    arguments: [
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "3128:3:105"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "3122:5:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3122:10:105"
                  },
                  variables: [
                    {
                      name: "newLen",
                      nodeType: "YulTypedName",
                      src: "3112:6:105",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3175:22:105",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "3177:16:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "3177:18:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3177:18:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "3147:6:105"
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3163:2:105",
                                type: "",
                                value: "64"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3167:1:105",
                                type: "",
                                value: "1"
                              }
                            ],
                            functionName: {
                              name: "shl",
                              nodeType: "YulIdentifier",
                              src: "3159:3:105"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3159:10:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3171:1:105",
                            type: "",
                            value: "1"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "3155:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3155:18:105"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "3144:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3144:30:105"
                  },
                  nodeType: "YulIf",
                  src: "3141:56:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "3250:4:105"
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "slot",
                                nodeType: "YulIdentifier",
                                src: "3288:4:105"
                              }
                            ],
                            functionName: {
                              name: "sload",
                              nodeType: "YulIdentifier",
                              src: "3282:5:105"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3282:11:105"
                          }
                        ],
                        functionName: {
                          name: "extract_byte_array_length",
                          nodeType: "YulIdentifier",
                          src: "3256:25:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3256:38:105"
                      },
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "3296:6:105"
                      }
                    ],
                    functionName: {
                      name: "clean_up_bytearray_end_slots_string_storage",
                      nodeType: "YulIdentifier",
                      src: "3206:43:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3206:97:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3206:97:105"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3312:18:105",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "3329:1:105",
                    type: "",
                    value: "0"
                  },
                  variables: [
                    {
                      name: "srcOffset",
                      nodeType: "YulTypedName",
                      src: "3316:9:105",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3339:23:105",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "3358:4:105",
                    type: "",
                    value: "0x20"
                  },
                  variables: [
                    {
                      name: "srcOffset_1",
                      nodeType: "YulTypedName",
                      src: "3343:11:105",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "3371:24:105",
                  value: {
                    name: "srcOffset_1",
                    nodeType: "YulIdentifier",
                    src: "3384:11:105"
                  },
                  variableNames: [
                    {
                      name: "srcOffset",
                      nodeType: "YulIdentifier",
                      src: "3371:9:105"
                    }
                  ]
                },
                {
                  cases: [
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "3441:656:105",
                        statements: [
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "3455:35:105",
                            value: {
                              arguments: [
                                {
                                  name: "newLen",
                                  nodeType: "YulIdentifier",
                                  src: "3474:6:105"
                                },
                                {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "3486:2:105",
                                      type: "",
                                      value: "31"
                                    }
                                  ],
                                  functionName: {
                                    name: "not",
                                    nodeType: "YulIdentifier",
                                    src: "3482:3:105"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "3482:7:105"
                                }
                              ],
                              functionName: {
                                name: "and",
                                nodeType: "YulIdentifier",
                                src: "3470:3:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3470:20:105"
                            },
                            variables: [
                              {
                                name: "loopEnd",
                                nodeType: "YulTypedName",
                                src: "3459:7:105",
                                type: ""
                              }
                            ]
                          },
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "3503:49:105",
                            value: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "3547:4:105"
                                }
                              ],
                              functionName: {
                                name: "array_dataslot_string_storage",
                                nodeType: "YulIdentifier",
                                src: "3517:29:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3517:35:105"
                            },
                            variables: [
                              {
                                name: "dstPtr",
                                nodeType: "YulTypedName",
                                src: "3507:6:105",
                                type: ""
                              }
                            ]
                          },
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "3565:10:105",
                            value: {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3574:1:105",
                              type: "",
                              value: "0"
                            },
                            variables: [
                              {
                                name: "i",
                                nodeType: "YulTypedName",
                                src: "3569:1:105",
                                type: ""
                              }
                            ]
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "3652:172:105",
                              statements: [
                                {
                                  expression: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "3677:6:105"
                                      },
                                      {
                                        arguments: [
                                          {
                                            arguments: [
                                              {
                                                name: "src",
                                                nodeType: "YulIdentifier",
                                                src: "3695:3:105"
                                              },
                                              {
                                                name: "srcOffset",
                                                nodeType: "YulIdentifier",
                                                src: "3700:9:105"
                                              }
                                            ],
                                            functionName: {
                                              name: "add",
                                              nodeType: "YulIdentifier",
                                              src: "3691:3:105"
                                            },
                                            nodeType: "YulFunctionCall",
                                            src: "3691:19:105"
                                          }
                                        ],
                                        functionName: {
                                          name: "mload",
                                          nodeType: "YulIdentifier",
                                          src: "3685:5:105"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "3685:26:105"
                                      }
                                    ],
                                    functionName: {
                                      name: "sstore",
                                      nodeType: "YulIdentifier",
                                      src: "3670:6:105"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "3670:42:105"
                                  },
                                  nodeType: "YulExpressionStatement",
                                  src: "3670:42:105"
                                },
                                {
                                  nodeType: "YulAssignment",
                                  src: "3729:24:105",
                                  value: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "3743:6:105"
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "3751:1:105",
                                        type: "",
                                        value: "1"
                                      }
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "3739:3:105"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "3739:14:105"
                                  },
                                  variableNames: [
                                    {
                                      name: "dstPtr",
                                      nodeType: "YulIdentifier",
                                      src: "3729:6:105"
                                    }
                                  ]
                                },
                                {
                                  nodeType: "YulAssignment",
                                  src: "3770:40:105",
                                  value: {
                                    arguments: [
                                      {
                                        name: "srcOffset",
                                        nodeType: "YulIdentifier",
                                        src: "3787:9:105"
                                      },
                                      {
                                        name: "srcOffset_1",
                                        nodeType: "YulIdentifier",
                                        src: "3798:11:105"
                                      }
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "3783:3:105"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "3783:27:105"
                                  },
                                  variableNames: [
                                    {
                                      name: "srcOffset",
                                      nodeType: "YulIdentifier",
                                      src: "3770:9:105"
                                    }
                                  ]
                                }
                              ]
                            },
                            condition: {
                              arguments: [
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "3599:1:105"
                                },
                                {
                                  name: "loopEnd",
                                  nodeType: "YulIdentifier",
                                  src: "3602:7:105"
                                }
                              ],
                              functionName: {
                                name: "lt",
                                nodeType: "YulIdentifier",
                                src: "3596:2:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3596:14:105"
                            },
                            nodeType: "YulForLoop",
                            post: {
                              nodeType: "YulBlock",
                              src: "3611:28:105",
                              statements: [
                                {
                                  nodeType: "YulAssignment",
                                  src: "3613:24:105",
                                  value: {
                                    arguments: [
                                      {
                                        name: "i",
                                        nodeType: "YulIdentifier",
                                        src: "3622:1:105"
                                      },
                                      {
                                        name: "srcOffset_1",
                                        nodeType: "YulIdentifier",
                                        src: "3625:11:105"
                                      }
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "3618:3:105"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "3618:19:105"
                                  },
                                  variableNames: [
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "3613:1:105"
                                    }
                                  ]
                                }
                              ]
                            },
                            pre: {
                              nodeType: "YulBlock",
                              src: "3592:3:105",
                              statements: []
                            },
                            src: "3588:236:105"
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "3872:166:105",
                              statements: [
                                {
                                  nodeType: "YulVariableDeclaration",
                                  src: "3890:43:105",
                                  value: {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "src",
                                            nodeType: "YulIdentifier",
                                            src: "3917:3:105"
                                          },
                                          {
                                            name: "srcOffset",
                                            nodeType: "YulIdentifier",
                                            src: "3922:9:105"
                                          }
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "3913:3:105"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "3913:19:105"
                                      }
                                    ],
                                    functionName: {
                                      name: "mload",
                                      nodeType: "YulIdentifier",
                                      src: "3907:5:105"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "3907:26:105"
                                  },
                                  variables: [
                                    {
                                      name: "lastValue",
                                      nodeType: "YulTypedName",
                                      src: "3894:9:105",
                                      type: ""
                                    }
                                  ]
                                },
                                {
                                  expression: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "3957:6:105"
                                      },
                                      {
                                        arguments: [
                                          {
                                            name: "lastValue",
                                            nodeType: "YulIdentifier",
                                            src: "3969:9:105"
                                          },
                                          {
                                            arguments: [
                                              {
                                                arguments: [
                                                  {
                                                    arguments: [
                                                      {
                                                        arguments: [
                                                          {
                                                            kind: "number",
                                                            nodeType:
                                                              "YulLiteral",
                                                            src: "3996:1:105",
                                                            type: "",
                                                            value: "3"
                                                          },
                                                          {
                                                            name: "newLen",
                                                            nodeType:
                                                              "YulIdentifier",
                                                            src: "3999:6:105"
                                                          }
                                                        ],
                                                        functionName: {
                                                          name: "shl",
                                                          nodeType:
                                                            "YulIdentifier",
                                                          src: "3992:3:105"
                                                        },
                                                        nodeType:
                                                          "YulFunctionCall",
                                                        src: "3992:14:105"
                                                      },
                                                      {
                                                        kind: "number",
                                                        nodeType: "YulLiteral",
                                                        src: "4008:3:105",
                                                        type: "",
                                                        value: "248"
                                                      }
                                                    ],
                                                    functionName: {
                                                      name: "and",
                                                      nodeType: "YulIdentifier",
                                                      src: "3988:3:105"
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "3988:24:105"
                                                  },
                                                  {
                                                    arguments: [
                                                      {
                                                        kind: "number",
                                                        nodeType: "YulLiteral",
                                                        src: "4018:1:105",
                                                        type: "",
                                                        value: "0"
                                                      }
                                                    ],
                                                    functionName: {
                                                      name: "not",
                                                      nodeType: "YulIdentifier",
                                                      src: "4014:3:105"
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "4014:6:105"
                                                  }
                                                ],
                                                functionName: {
                                                  name: "shr",
                                                  nodeType: "YulIdentifier",
                                                  src: "3984:3:105"
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "3984:37:105"
                                              }
                                            ],
                                            functionName: {
                                              name: "not",
                                              nodeType: "YulIdentifier",
                                              src: "3980:3:105"
                                            },
                                            nodeType: "YulFunctionCall",
                                            src: "3980:42:105"
                                          }
                                        ],
                                        functionName: {
                                          name: "and",
                                          nodeType: "YulIdentifier",
                                          src: "3965:3:105"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "3965:58:105"
                                      }
                                    ],
                                    functionName: {
                                      name: "sstore",
                                      nodeType: "YulIdentifier",
                                      src: "3950:6:105"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "3950:74:105"
                                  },
                                  nodeType: "YulExpressionStatement",
                                  src: "3950:74:105"
                                }
                              ]
                            },
                            condition: {
                              arguments: [
                                {
                                  name: "loopEnd",
                                  nodeType: "YulIdentifier",
                                  src: "3843:7:105"
                                },
                                {
                                  name: "newLen",
                                  nodeType: "YulIdentifier",
                                  src: "3852:6:105"
                                }
                              ],
                              functionName: {
                                name: "lt",
                                nodeType: "YulIdentifier",
                                src: "3840:2:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3840:19:105"
                            },
                            nodeType: "YulIf",
                            src: "3837:201:105"
                          },
                          {
                            expression: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "4058:4:105"
                                },
                                {
                                  arguments: [
                                    {
                                      arguments: [
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "4072:1:105",
                                          type: "",
                                          value: "1"
                                        },
                                        {
                                          name: "newLen",
                                          nodeType: "YulIdentifier",
                                          src: "4075:6:105"
                                        }
                                      ],
                                      functionName: {
                                        name: "shl",
                                        nodeType: "YulIdentifier",
                                        src: "4068:3:105"
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "4068:14:105"
                                    },
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "4084:1:105",
                                      type: "",
                                      value: "1"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "4064:3:105"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "4064:22:105"
                                }
                              ],
                              functionName: {
                                name: "sstore",
                                nodeType: "YulIdentifier",
                                src: "4051:6:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "4051:36:105"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "4051:36:105"
                          }
                        ]
                      },
                      nodeType: "YulCase",
                      src: "3434:663:105",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3439:1:105",
                        type: "",
                        value: "1"
                      }
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "4114:234:105",
                        statements: [
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "4128:14:105",
                            value: {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4141:1:105",
                              type: "",
                              value: "0"
                            },
                            variables: [
                              {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "4132:5:105",
                                type: ""
                              }
                            ]
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "4177:67:105",
                              statements: [
                                {
                                  nodeType: "YulAssignment",
                                  src: "4195:35:105",
                                  value: {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "src",
                                            nodeType: "YulIdentifier",
                                            src: "4214:3:105"
                                          },
                                          {
                                            name: "srcOffset",
                                            nodeType: "YulIdentifier",
                                            src: "4219:9:105"
                                          }
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "4210:3:105"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4210:19:105"
                                      }
                                    ],
                                    functionName: {
                                      name: "mload",
                                      nodeType: "YulIdentifier",
                                      src: "4204:5:105"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4204:26:105"
                                  },
                                  variableNames: [
                                    {
                                      name: "value",
                                      nodeType: "YulIdentifier",
                                      src: "4195:5:105"
                                    }
                                  ]
                                }
                              ]
                            },
                            condition: {
                              name: "newLen",
                              nodeType: "YulIdentifier",
                              src: "4158:6:105"
                            },
                            nodeType: "YulIf",
                            src: "4155:89:105"
                          },
                          {
                            expression: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "4264:4:105"
                                },
                                {
                                  arguments: [
                                    {
                                      name: "value",
                                      nodeType: "YulIdentifier",
                                      src: "4323:5:105"
                                    },
                                    {
                                      name: "newLen",
                                      nodeType: "YulIdentifier",
                                      src: "4330:6:105"
                                    }
                                  ],
                                  functionName: {
                                    name: "extract_used_part_and_set_length_of_short_byte_array",
                                    nodeType: "YulIdentifier",
                                    src: "4270:52:105"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "4270:67:105"
                                }
                              ],
                              functionName: {
                                name: "sstore",
                                nodeType: "YulIdentifier",
                                src: "4257:6:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "4257:81:105"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "4257:81:105"
                          }
                        ]
                      },
                      nodeType: "YulCase",
                      src: "4106:242:105",
                      value: "default"
                    }
                  ],
                  expression: {
                    arguments: [
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "3414:6:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3422:2:105",
                        type: "",
                        value: "31"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "3411:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3411:14:105"
                  },
                  nodeType: "YulSwitch",
                  src: "3404:944:105"
                }
              ]
            },
            name: "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "3083:4:105",
                type: ""
              },
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "3089:3:105",
                type: ""
              }
            ],
            src: "3002:1352:105"
          }
        ]
      },
      contents:
        "{\n    { }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_string_fromMemory(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := mload(offset)\n        let _2 := sub(shl(64, 1), 1)\n        if gt(_1, _2) { panic_error_0x41() }\n        let _3 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_1, 0x1f), _3), 63), _3))\n        if or(gt(newFreePtr, _2), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _1)\n        let _4 := 0x20\n        if gt(add(add(offset, _1), _4), end) { revert(0, 0) }\n        let i := 0\n        for { } lt(i, _1) { i := add(i, _4) }\n        {\n            mstore(add(add(memPtr, i), _4), mload(add(add(offset, i), _4)))\n        }\n        mstore(add(add(memPtr, _1), _4), 0)\n        array := memPtr\n    }\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_uint8t_uint256_fromMemory(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        let offset := mload(headStart)\n        let _1 := sub(shl(64, 1), 1)\n        if gt(offset, _1) { revert(0, 0) }\n        value0 := abi_decode_string_fromMemory(add(headStart, offset), dataEnd)\n        let offset_1 := mload(add(headStart, 32))\n        if gt(offset_1, _1) { revert(0, 0) }\n        value1 := abi_decode_string_fromMemory(add(headStart, offset_1), dataEnd)\n        let value := mload(add(headStart, 64))\n        if iszero(eq(value, and(value, 0xff))) { revert(0, 0) }\n        value2 := value\n        value3 := mload(add(headStart, 96))\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function array_dataslot_string_storage(ptr) -> data\n    {\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n    }\n    function clean_up_bytearray_end_slots_string_storage(array, len, startIndex)\n    {\n        if gt(len, 31)\n        {\n            let _1 := 0\n            mstore(_1, array)\n            let data := keccak256(_1, 0x20)\n            let deleteStart := add(data, shr(5, add(startIndex, 31)))\n            if lt(startIndex, 0x20) { deleteStart := data }\n            let _2 := add(data, shr(5, add(len, 31)))\n            let start := deleteStart\n            for { } lt(start, _2) { start := add(start, 1) }\n            { sstore(start, _1) }\n        }\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used\n    {\n        used := or(and(data, not(shr(shl(3, len), not(0)))), shl(1, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src)\n    {\n        let newLen := mload(src)\n        if gt(newLen, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        clean_up_bytearray_end_slots_string_storage(slot, extract_byte_array_length(sload(slot)), newLen)\n        let srcOffset := 0\n        let srcOffset_1 := 0x20\n        srcOffset := srcOffset_1\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(31))\n            let dstPtr := array_dataslot_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, srcOffset_1) }\n            {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, srcOffset_1)\n            }\n            if lt(loopEnd, newLen)\n            {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, and(lastValue, not(shr(and(shl(3, newLen), 248), not(0)))))\n            }\n            sstore(slot, add(shl(1, newLen), 1))\n        }\n        default {\n            let value := 0\n            if newLen\n            {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n}",
      id: 105,
      language: "Yul",
      name: "#utility.yul"
    }
  ],
  deployedGeneratedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:6246:105",
        statements: [
          {
            nodeType: "YulBlock",
            src: "6:3:105",
            statements: []
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "135:427:105",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "145:12:105",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "155:2:105",
                    type: "",
                    value: "32"
                  },
                  variables: [
                    {
                      name: "_1",
                      nodeType: "YulTypedName",
                      src: "149:2:105",
                      type: ""
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "173:9:105"
                      },
                      {
                        name: "_1",
                        nodeType: "YulIdentifier",
                        src: "184:2:105"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "166:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "166:21:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "166:21:105"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "196:27:105",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "216:6:105"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "210:5:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "210:13:105"
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "200:6:105",
                      type: ""
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "243:9:105"
                          },
                          {
                            name: "_1",
                            nodeType: "YulIdentifier",
                            src: "254:2:105"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "239:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "239:18:105"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "259:6:105"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "232:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "232:34:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "232:34:105"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "275:10:105",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "284:1:105",
                    type: "",
                    value: "0"
                  },
                  variables: [
                    {
                      name: "i",
                      nodeType: "YulTypedName",
                      src: "279:1:105",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "344:90:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "headStart",
                                      nodeType: "YulIdentifier",
                                      src: "373:9:105"
                                    },
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "384:1:105"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "369:3:105"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "369:17:105"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "388:2:105",
                                  type: "",
                                  value: "64"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "365:3:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "365:26:105"
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      arguments: [
                                        {
                                          name: "value0",
                                          nodeType: "YulIdentifier",
                                          src: "407:6:105"
                                        },
                                        {
                                          name: "i",
                                          nodeType: "YulIdentifier",
                                          src: "415:1:105"
                                        }
                                      ],
                                      functionName: {
                                        name: "add",
                                        nodeType: "YulIdentifier",
                                        src: "403:3:105"
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "403:14:105"
                                    },
                                    {
                                      name: "_1",
                                      nodeType: "YulIdentifier",
                                      src: "419:2:105"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "399:3:105"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "399:23:105"
                                }
                              ],
                              functionName: {
                                name: "mload",
                                nodeType: "YulIdentifier",
                                src: "393:5:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "393:30:105"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "358:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "358:66:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "358:66:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "305:1:105"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "308:6:105"
                      }
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "302:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "302:13:105"
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "316:19:105",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "318:15:105",
                        value: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "327:1:105"
                            },
                            {
                              name: "_1",
                              nodeType: "YulIdentifier",
                              src: "330:2:105"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "323:3:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "323:10:105"
                        },
                        variableNames: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "318:1:105"
                          }
                        ]
                      }
                    ]
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "298:3:105",
                    statements: []
                  },
                  src: "294:140:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "458:9:105"
                              },
                              {
                                name: "length",
                                nodeType: "YulIdentifier",
                                src: "469:6:105"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "454:3:105"
                            },
                            nodeType: "YulFunctionCall",
                            src: "454:22:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "478:2:105",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "450:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "450:31:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "483:1:105",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "443:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "443:42:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "443:42:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "494:62:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "510:9:105"
                          },
                          {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "length",
                                    nodeType: "YulIdentifier",
                                    src: "529:6:105"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "537:2:105",
                                    type: "",
                                    value: "31"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "525:3:105"
                                },
                                nodeType: "YulFunctionCall",
                                src: "525:15:105"
                              },
                              {
                                arguments: [
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "546:2:105",
                                    type: "",
                                    value: "31"
                                  }
                                ],
                                functionName: {
                                  name: "not",
                                  nodeType: "YulIdentifier",
                                  src: "542:3:105"
                                },
                                nodeType: "YulFunctionCall",
                                src: "542:7:105"
                              }
                            ],
                            functionName: {
                              name: "and",
                              nodeType: "YulIdentifier",
                              src: "521:3:105"
                            },
                            nodeType: "YulFunctionCall",
                            src: "521:29:105"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "506:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "506:45:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "553:2:105",
                        type: "",
                        value: "64"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "502:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "502:54:105"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "494:4:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "104:9:105",
                type: ""
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "115:6:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "126:4:105",
                type: ""
              }
            ],
            src: "14:548:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "616:124:105",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "626:29:105",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "648:6:105"
                      }
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "635:12:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "635:20:105"
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "626:5:105"
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "718:16:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "727:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "730:1:105",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "720:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "720:12:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "720:12:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "677:5:105"
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "688:5:105"
                              },
                              {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "703:3:105",
                                        type: "",
                                        value: "160"
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "708:1:105",
                                        type: "",
                                        value: "1"
                                      }
                                    ],
                                    functionName: {
                                      name: "shl",
                                      nodeType: "YulIdentifier",
                                      src: "699:3:105"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "699:11:105"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "712:1:105",
                                    type: "",
                                    value: "1"
                                  }
                                ],
                                functionName: {
                                  name: "sub",
                                  nodeType: "YulIdentifier",
                                  src: "695:3:105"
                                },
                                nodeType: "YulFunctionCall",
                                src: "695:19:105"
                              }
                            ],
                            functionName: {
                              name: "and",
                              nodeType: "YulIdentifier",
                              src: "684:3:105"
                            },
                            nodeType: "YulFunctionCall",
                            src: "684:31:105"
                          }
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "674:2:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "674:42:105"
                      }
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "667:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "667:50:105"
                  },
                  nodeType: "YulIf",
                  src: "664:70:105"
                }
              ]
            },
            name: "abi_decode_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "595:6:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "606:5:105",
                type: ""
              }
            ],
            src: "567:173:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "832:167:105",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "878:16:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "887:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "890:1:105",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "880:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "880:12:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "880:12:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "853:7:105"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "862:9:105"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "849:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "849:23:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "874:2:105",
                        type: "",
                        value: "64"
                      }
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "845:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "845:32:105"
                  },
                  nodeType: "YulIf",
                  src: "842:52:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "903:39:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "932:9:105"
                      }
                    ],
                    functionName: {
                      name: "abi_decode_address",
                      nodeType: "YulIdentifier",
                      src: "913:18:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "913:29:105"
                  },
                  variableNames: [
                    {
                      name: "value0",
                      nodeType: "YulIdentifier",
                      src: "903:6:105"
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "951:42:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "978:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "989:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "974:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "974:18:105"
                      }
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "961:12:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "961:32:105"
                  },
                  variableNames: [
                    {
                      name: "value1",
                      nodeType: "YulIdentifier",
                      src: "951:6:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_decode_tuple_t_addresst_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "790:9:105",
                type: ""
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "801:7:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "813:6:105",
                type: ""
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "821:6:105",
                type: ""
              }
            ],
            src: "745:254:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1099:92:105",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1109:26:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1121:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1132:2:105",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1117:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1117:18:105"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "1109:4:105"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1151:9:105"
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "value0",
                                nodeType: "YulIdentifier",
                                src: "1176:6:105"
                              }
                            ],
                            functionName: {
                              name: "iszero",
                              nodeType: "YulIdentifier",
                              src: "1169:6:105"
                            },
                            nodeType: "YulFunctionCall",
                            src: "1169:14:105"
                          }
                        ],
                        functionName: {
                          name: "iszero",
                          nodeType: "YulIdentifier",
                          src: "1162:6:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1162:22:105"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1144:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1144:41:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1144:41:105"
                }
              ]
            },
            name: "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1068:9:105",
                type: ""
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1079:6:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "1090:4:105",
                type: ""
              }
            ],
            src: "1004:187:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1297:76:105",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1307:26:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1319:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1330:2:105",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1315:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1315:18:105"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "1307:4:105"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1349:9:105"
                      },
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "1360:6:105"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1342:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1342:25:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1342:25:105"
                }
              ]
            },
            name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1266:9:105",
                type: ""
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1277:6:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "1288:4:105",
                type: ""
              }
            ],
            src: "1196:177:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1482:224:105",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1528:16:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1537:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1540:1:105",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "1530:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1530:12:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1530:12:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1503:7:105"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1512:9:105"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "1499:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1499:23:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1524:2:105",
                        type: "",
                        value: "96"
                      }
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "1495:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1495:32:105"
                  },
                  nodeType: "YulIf",
                  src: "1492:52:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "1553:39:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1582:9:105"
                      }
                    ],
                    functionName: {
                      name: "abi_decode_address",
                      nodeType: "YulIdentifier",
                      src: "1563:18:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1563:29:105"
                  },
                  variableNames: [
                    {
                      name: "value0",
                      nodeType: "YulIdentifier",
                      src: "1553:6:105"
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "1601:48:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1634:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1645:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1630:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1630:18:105"
                      }
                    ],
                    functionName: {
                      name: "abi_decode_address",
                      nodeType: "YulIdentifier",
                      src: "1611:18:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1611:38:105"
                  },
                  variableNames: [
                    {
                      name: "value1",
                      nodeType: "YulIdentifier",
                      src: "1601:6:105"
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "1658:42:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1685:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1696:2:105",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1681:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1681:18:105"
                      }
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "1668:12:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1668:32:105"
                  },
                  variableNames: [
                    {
                      name: "value2",
                      nodeType: "YulIdentifier",
                      src: "1658:6:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_decode_tuple_t_addresst_addresst_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1432:9:105",
                type: ""
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "1443:7:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1455:6:105",
                type: ""
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "1463:6:105",
                type: ""
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "1471:6:105",
                type: ""
              }
            ],
            src: "1378:328:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1808:87:105",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1818:26:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1830:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1841:2:105",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1826:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1826:18:105"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "1818:4:105"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1860:9:105"
                      },
                      {
                        arguments: [
                          {
                            name: "value0",
                            nodeType: "YulIdentifier",
                            src: "1875:6:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1883:4:105",
                            type: "",
                            value: "0xff"
                          }
                        ],
                        functionName: {
                          name: "and",
                          nodeType: "YulIdentifier",
                          src: "1871:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1871:17:105"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1853:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1853:36:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1853:36:105"
                }
              ]
            },
            name: "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1777:9:105",
                type: ""
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1788:6:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "1799:4:105",
                type: ""
              }
            ],
            src: "1711:184:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1970:116:105",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2016:16:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2025:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2028:1:105",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "2018:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2018:12:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2018:12:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1991:7:105"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2000:9:105"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "1987:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1987:23:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2012:2:105",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "1983:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1983:32:105"
                  },
                  nodeType: "YulIf",
                  src: "1980:52:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "2041:39:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "2070:9:105"
                      }
                    ],
                    functionName: {
                      name: "abi_decode_address",
                      nodeType: "YulIdentifier",
                      src: "2051:18:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2051:29:105"
                  },
                  variableNames: [
                    {
                      name: "value0",
                      nodeType: "YulIdentifier",
                      src: "2041:6:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_decode_tuple_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1936:9:105",
                type: ""
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "1947:7:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1959:6:105",
                type: ""
              }
            ],
            src: "1900:186:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2178:173:105",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2224:16:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2233:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2236:1:105",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "2226:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2226:12:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2226:12:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "2199:7:105"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2208:9:105"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2195:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2195:23:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2220:2:105",
                        type: "",
                        value: "64"
                      }
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "2191:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2191:32:105"
                  },
                  nodeType: "YulIf",
                  src: "2188:52:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "2249:39:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "2278:9:105"
                      }
                    ],
                    functionName: {
                      name: "abi_decode_address",
                      nodeType: "YulIdentifier",
                      src: "2259:18:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2259:29:105"
                  },
                  variableNames: [
                    {
                      name: "value0",
                      nodeType: "YulIdentifier",
                      src: "2249:6:105"
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "2297:48:105",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2330:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2341:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2326:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2326:18:105"
                      }
                    ],
                    functionName: {
                      name: "abi_decode_address",
                      nodeType: "YulIdentifier",
                      src: "2307:18:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2307:38:105"
                  },
                  variableNames: [
                    {
                      name: "value1",
                      nodeType: "YulIdentifier",
                      src: "2297:6:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_decode_tuple_t_addresst_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2136:9:105",
                type: ""
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "2147:7:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "2159:6:105",
                type: ""
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "2167:6:105",
                type: ""
              }
            ],
            src: "2091:260:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2411:325:105",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2421:22:105",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2435:1:105",
                        type: "",
                        value: "1"
                      },
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "2438:4:105"
                      }
                    ],
                    functionName: {
                      name: "shr",
                      nodeType: "YulIdentifier",
                      src: "2431:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2431:12:105"
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "2421:6:105"
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "2452:38:105",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "2482:4:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2488:1:105",
                        type: "",
                        value: "1"
                      }
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "2478:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2478:12:105"
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "2456:18:105",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2529:31:105",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "2531:27:105",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "2545:6:105"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2553:4:105",
                              type: "",
                              value: "0x7f"
                            }
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "2541:3:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2541:17:105"
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "2531:6:105"
                          }
                        ]
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "2509:18:105"
                      }
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "2502:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2502:26:105"
                  },
                  nodeType: "YulIf",
                  src: "2499:61:105"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2619:111:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2640:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2647:3:105",
                                  type: "",
                                  value: "224"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2652:10:105",
                                  type: "",
                                  value: "0x4e487b71"
                                }
                              ],
                              functionName: {
                                name: "shl",
                                nodeType: "YulIdentifier",
                                src: "2643:3:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "2643:20:105"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "2633:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2633:31:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2633:31:105"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2684:1:105",
                              type: "",
                              value: "4"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2687:4:105",
                              type: "",
                              value: "0x22"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "2677:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2677:15:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2677:15:105"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2712:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2715:4:105",
                              type: "",
                              value: "0x24"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "2705:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2705:15:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2705:15:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "2575:18:105"
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "2598:6:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2606:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "2595:2:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2595:14:105"
                      }
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "2572:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2572:38:105"
                  },
                  nodeType: "YulIf",
                  src: "2569:161:105"
                }
              ]
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "2391:4:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "2400:6:105",
                type: ""
              }
            ],
            src: "2356:380:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2789:174:105",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2799:16:105",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "2810:1:105"
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "2813:1:105"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2806:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2806:9:105"
                  },
                  variableNames: [
                    {
                      name: "sum",
                      nodeType: "YulIdentifier",
                      src: "2799:3:105"
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2846:111:105",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2867:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2874:3:105",
                                  type: "",
                                  value: "224"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2879:10:105",
                                  type: "",
                                  value: "0x4e487b71"
                                }
                              ],
                              functionName: {
                                name: "shl",
                                nodeType: "YulIdentifier",
                                src: "2870:3:105"
                              },
                              nodeType: "YulFunctionCall",
                              src: "2870:20:105"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "2860:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2860:31:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2860:31:105"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2911:1:105",
                              type: "",
                              value: "4"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2914:4:105",
                              type: "",
                              value: "0x11"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "2904:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2904:15:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2904:15:105"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2939:1:105",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2942:4:105",
                              type: "",
                              value: "0x24"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "2932:6:105"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2932:15:105"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2932:15:105"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "2830:1:105"
                      },
                      {
                        name: "sum",
                        nodeType: "YulIdentifier",
                        src: "2833:3:105"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "2827:2:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2827:10:105"
                  },
                  nodeType: "YulIf",
                  src: "2824:133:105"
                }
              ]
            },
            name: "checked_add_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "2772:1:105",
                type: ""
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "2775:1:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "sum",
                nodeType: "YulTypedName",
                src: "2781:3:105",
                type: ""
              }
            ],
            src: "2741:222:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3000:95:105",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3017:1:105",
                        type: "",
                        value: "0"
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3024:3:105",
                            type: "",
                            value: "224"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3029:10:105",
                            type: "",
                            value: "0x4e487b71"
                          }
                        ],
                        functionName: {
                          name: "shl",
                          nodeType: "YulIdentifier",
                          src: "3020:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3020:20:105"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3010:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3010:31:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3010:31:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3057:1:105",
                        type: "",
                        value: "4"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3060:4:105",
                        type: "",
                        value: "0x01"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3050:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3050:15:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3050:15:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3081:1:105",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3084:4:105",
                        type: "",
                        value: "0x24"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "3074:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3074:15:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3074:15:105"
                }
              ]
            },
            name: "panic_error_0x01",
            nodeType: "YulFunctionDefinition",
            src: "2968:127:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3274:227:105",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "3291:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3302:2:105",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3284:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3284:21:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3284:21:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3325:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3336:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3321:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3321:18:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3341:2:105",
                        type: "",
                        value: "37"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3314:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3314:30:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3314:30:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3364:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3375:2:105",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3360:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3360:18:105"
                      },
                      {
                        hexValue:
                          "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "3380:34:105",
                        type: "",
                        value: "ERC20: decreased allowance below"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3353:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3353:62:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3353:62:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3435:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3446:2:105",
                            type: "",
                            value: "96"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3431:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3431:18:105"
                      },
                      {
                        hexValue: "207a65726f",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "3451:7:105",
                        type: "",
                        value: " zero"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3424:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3424:35:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3424:35:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "3468:27:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "3480:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3491:3:105",
                        type: "",
                        value: "128"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3476:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3476:19:105"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "3468:4:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "3251:9:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "3265:4:105",
                type: ""
              }
            ],
            src: "3100:401:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3680:226:105",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "3697:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3708:2:105",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3690:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3690:21:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3690:21:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3731:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3742:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3727:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3727:18:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3747:2:105",
                        type: "",
                        value: "36"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3720:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3720:30:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3720:30:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3770:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3781:2:105",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3766:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3766:18:105"
                      },
                      {
                        hexValue:
                          "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "3786:34:105",
                        type: "",
                        value: "ERC20: approve from the zero add"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3759:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3759:62:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3759:62:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3841:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3852:2:105",
                            type: "",
                            value: "96"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3837:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3837:18:105"
                      },
                      {
                        hexValue: "72657373",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "3857:6:105",
                        type: "",
                        value: "ress"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3830:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3830:34:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3830:34:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "3873:27:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "3885:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3896:3:105",
                        type: "",
                        value: "128"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3881:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3881:19:105"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "3873:4:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "3657:9:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "3671:4:105",
                type: ""
              }
            ],
            src: "3506:400:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4085:224:105",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "4102:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4113:2:105",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4095:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4095:21:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4095:21:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4136:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4147:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4132:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4132:18:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4152:2:105",
                        type: "",
                        value: "34"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4125:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4125:30:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4125:30:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4175:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4186:2:105",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4171:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4171:18:105"
                      },
                      {
                        hexValue:
                          "45524332303a20617070726f766520746f20746865207a65726f206164647265",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "4191:34:105",
                        type: "",
                        value: "ERC20: approve to the zero addre"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4164:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4164:62:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4164:62:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4246:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4257:2:105",
                            type: "",
                            value: "96"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4242:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4242:18:105"
                      },
                      {
                        hexValue: "7373",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "4262:4:105",
                        type: "",
                        value: "ss"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4235:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4235:32:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4235:32:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "4276:27:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "4288:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4299:3:105",
                        type: "",
                        value: "128"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4284:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4284:19:105"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "4276:4:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "4062:9:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "4076:4:105",
                type: ""
              }
            ],
            src: "3911:398:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4488:179:105",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "4505:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4516:2:105",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4498:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4498:21:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4498:21:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4539:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4550:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4535:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4535:18:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4555:2:105",
                        type: "",
                        value: "29"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4528:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4528:30:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4528:30:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4578:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4589:2:105",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4574:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4574:18:105"
                      },
                      {
                        hexValue:
                          "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "4594:31:105",
                        type: "",
                        value: "ERC20: insufficient allowance"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4567:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4567:59:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4567:59:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "4635:26:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "4647:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4658:2:105",
                        type: "",
                        value: "96"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4643:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4643:18:105"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "4635:4:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "4465:9:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "4479:4:105",
                type: ""
              }
            ],
            src: "4314:353:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4846:227:105",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "4863:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4874:2:105",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4856:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4856:21:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4856:21:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4897:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4908:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4893:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4893:18:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4913:2:105",
                        type: "",
                        value: "37"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4886:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4886:30:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4886:30:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4936:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4947:2:105",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4932:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4932:18:105"
                      },
                      {
                        hexValue:
                          "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "4952:34:105",
                        type: "",
                        value: "ERC20: transfer from the zero ad"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4925:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4925:62:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4925:62:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "5007:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5018:2:105",
                            type: "",
                            value: "96"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5003:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5003:18:105"
                      },
                      {
                        hexValue: "6472657373",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "5023:7:105",
                        type: "",
                        value: "dress"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4996:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4996:35:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4996:35:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "5040:27:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "5052:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5063:3:105",
                        type: "",
                        value: "128"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5048:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5048:19:105"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "5040:4:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "4823:9:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "4837:4:105",
                type: ""
              }
            ],
            src: "4672:401:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5252:225:105",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "5269:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5280:2:105",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5262:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5262:21:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5262:21:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "5303:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5314:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5299:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5299:18:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5319:2:105",
                        type: "",
                        value: "35"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5292:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5292:30:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5292:30:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "5342:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5353:2:105",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5338:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5338:18:105"
                      },
                      {
                        hexValue:
                          "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "5358:34:105",
                        type: "",
                        value: "ERC20: transfer to the zero addr"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5331:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5331:62:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5331:62:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "5413:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5424:2:105",
                            type: "",
                            value: "96"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5409:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5409:18:105"
                      },
                      {
                        hexValue: "657373",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "5429:5:105",
                        type: "",
                        value: "ess"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5402:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5402:33:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5402:33:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "5444:27:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "5456:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5467:3:105",
                        type: "",
                        value: "128"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5452:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5452:19:105"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "5444:4:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "5229:9:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "5243:4:105",
                type: ""
              }
            ],
            src: "5078:399:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5656:228:105",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "5673:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5684:2:105",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5666:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5666:21:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5666:21:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "5707:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5718:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5703:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5703:18:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5723:2:105",
                        type: "",
                        value: "38"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5696:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5696:30:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5696:30:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "5746:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5757:2:105",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5742:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5742:18:105"
                      },
                      {
                        hexValue:
                          "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "5762:34:105",
                        type: "",
                        value: "ERC20: transfer amount exceeds b"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5735:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5735:62:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5735:62:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "5817:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5828:2:105",
                            type: "",
                            value: "96"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5813:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5813:18:105"
                      },
                      {
                        hexValue: "616c616e6365",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "5833:8:105",
                        type: "",
                        value: "alance"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5806:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5806:36:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5806:36:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "5851:27:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "5863:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5874:3:105",
                        type: "",
                        value: "128"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5859:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5859:19:105"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "5851:4:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "5633:9:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "5647:4:105",
                type: ""
              }
            ],
            src: "5482:402:105"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6063:181:105",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "6080:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6091:2:105",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6073:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6073:21:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6073:21:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6114:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6125:2:105",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "6110:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6110:18:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6130:2:105",
                        type: "",
                        value: "31"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6103:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6103:30:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6103:30:105"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6153:9:105"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6164:2:105",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "6149:3:105"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6149:18:105"
                      },
                      {
                        hexValue:
                          "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "6169:33:105",
                        type: "",
                        value: "ERC20: mint to the zero address"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6142:6:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6142:61:105"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6142:61:105"
                },
                {
                  nodeType: "YulAssignment",
                  src: "6212:26:105",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "6224:9:105"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6235:2:105",
                        type: "",
                        value: "96"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "6220:3:105"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6220:18:105"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "6212:4:105"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "6040:9:105",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "6054:4:105",
                type: ""
              }
            ],
            src: "5889:355:105"
          }
        ]
      },
      contents:
        '{\n    { }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        mstore(headStart, _1)\n        let length := mload(value0)\n        mstore(add(headStart, _1), length)\n        let i := 0\n        for { } lt(i, length) { i := add(i, _1) }\n        {\n            mstore(add(add(headStart, i), 64), mload(add(add(value0, i), _1)))\n        }\n        mstore(add(add(headStart, length), 64), 0)\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum)\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x11)\n            revert(0, 0x24)\n        }\n    }\n    function panic_error_0x01()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x01)\n        revert(0, 0x24)\n    }\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), "ERC20: decreased allowance below")\n        mstore(add(headStart, 96), " zero")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), "ERC20: approve from the zero add")\n        mstore(add(headStart, 96), "ress")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), "ERC20: approve to the zero addre")\n        mstore(add(headStart, 96), "ss")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 29)\n        mstore(add(headStart, 64), "ERC20: insufficient allowance")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), "ERC20: transfer from the zero ad")\n        mstore(add(headStart, 96), "dress")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), "ERC20: transfer to the zero addr")\n        mstore(add(headStart, 96), "ess")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), "ERC20: transfer amount exceeds b")\n        mstore(add(headStart, 96), "alance")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 31)\n        mstore(add(headStart, 64), "ERC20: mint to the zero address")\n        tail := add(headStart, 96)\n    }\n}',
      id: 105,
      language: "Yul",
      name: "#utility.yul"
    }
  ],
  sourceMap:
    "254:688:103:-:0;;;360:224;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;497:4;503:6;2044:5:7;:13;497:4:103;2044:5:7;:13;:::i;:::-;-1:-1:-1;2067:7:7;:17;2077:7;2067;:17;:::i;:::-;-1:-1:-1;;521:9:103::1;:24:::0;;-1:-1:-1;;521:24:103::1;;::::0;;;::::1;::::0;;;::::1;::::0;;;555:22:::1;::::0;-1:-1:-1;254:688:103;;-1:-1:-1;;254:688:103;14:127:105;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:840;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;294:13;;-1:-1:-1;;;;;356:10:105;;;353:36;;;369:18;;:::i;:::-;444:2;438:9;412:2;498:13;;-1:-1:-1;;494:22:105;;;518:2;490:31;486:40;474:53;;;542:18;;;562:22;;;539:46;536:72;;;588:18;;:::i;:::-;628:10;624:2;617:22;663:2;655:6;648:18;685:4;675:14;;730:3;725:2;720;712:6;708:15;704:24;701:33;698:53;;;747:1;744;737:12;698:53;769:1;760:10;;779:133;793:2;790:1;787:9;779:133;;;881:14;;;877:23;;871:30;850:14;;;846:23;;839:63;804:10;;;;779:133;;;954:1;932:15;;;928:24;;;921:35;;;;936:6;146:840;-1:-1:-1;;;;146:840:105:o;991:774::-;1106:6;1114;1122;1130;1183:3;1171:9;1162:7;1158:23;1154:33;1151:53;;;1200:1;1197;1190:12;1151:53;1227:16;;-1:-1:-1;;;;;1292:14:105;;;1289:34;;;1319:1;1316;1309:12;1289:34;1342:61;1395:7;1386:6;1375:9;1371:22;1342:61;:::i;:::-;1332:71;;1449:2;1438:9;1434:18;1428:25;1412:41;;1478:2;1468:8;1465:16;1462:36;;;1494:1;1491;1484:12;1462:36;;1517:63;1572:7;1561:8;1550:9;1546:24;1517:63;:::i;:::-;1507:73;;;1623:2;1612:9;1608:18;1602:25;1667:4;1660:5;1656:16;1649:5;1646:27;1636:55;;1687:1;1684;1677:12;1636:55;1755:2;1740:18;;;;1734:25;991:774;;;;-1:-1:-1;;;991:774:105:o;1770:380::-;1849:1;1845:12;;;;1892;;;1913:61;;1967:4;1959:6;1955:17;1945:27;;1913:61;2020:2;2012:6;2009:14;1989:18;1986:38;1983:161;;2066:10;2061:3;2057:20;2054:1;2047:31;2101:4;2098:1;2091:15;2129:4;2126:1;2119:15;1983:161;;1770:380;;;:::o;2281:545::-;2383:2;2378:3;2375:11;2372:448;;;2419:1;2444:5;2440:2;2433:17;2489:4;2485:2;2475:19;2559:2;2547:10;2543:19;2540:1;2536:27;2530:4;2526:38;2595:4;2583:10;2580:20;2577:47;;;-1:-1:-1;2618:4:105;2577:47;2673:2;2668:3;2664:12;2661:1;2657:20;2651:4;2647:31;2637:41;;2728:82;2746:2;2739:5;2736:13;2728:82;;;2791:17;;;2772:1;2761:13;2728:82;;;2732:3;;;2372:448;2281:545;;;:::o;3002:1352::-;3122:10;;-1:-1:-1;;;;;3144:30:105;;3141:56;;;3177:18;;:::i;:::-;3206:97;3296:6;3256:38;3288:4;3282:11;3256:38;:::i;:::-;3250:4;3206:97;:::i;:::-;3358:4;;3422:2;3411:14;;3439:1;3434:663;;;;4141:1;4158:6;4155:89;;;-1:-1:-1;4210:19:105;;;4204:26;4155:89;-1:-1:-1;;2959:1:105;2955:11;;;2951:24;2947:29;2937:40;2983:1;2979:11;;;2934:57;4257:81;;3404:944;;3434:663;2228:1;2221:14;;;2265:4;2252:18;;-1:-1:-1;;3470:20:105;;;3588:236;3602:7;3599:1;3596:14;3588:236;;;3691:19;;;3685:26;3670:42;;3783:27;;;;3751:1;3739:14;;;;3618:19;;3588:236;;;3592:3;3852:6;3843:7;3840:19;3837:201;;;3913:19;;;3907:26;-1:-1:-1;;3996:1:105;3992:14;;;4008:3;3988:24;3984:37;3980:42;3965:58;3950:74;;3837:201;-1:-1:-1;;;;;4084:1:105;4068:14;;;4064:22;4051:36;;-1:-1:-1;3002:1352:105:o;:::-;254:688:103;;;;;;;;;;;;",
  deployedSourceMap:
    "254:688:103:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98:7;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4433:197;;;;;;:::i;:::-;;:::i;:::-;;;1169:14:105;;1162:22;1144:41;;1132:2;1117:18;4433:197:7;1004:187:105;3244:106:7;3331:12;;3244:106;;;1342:25:105;;;1330:2;1315:18;3244:106:7;1196:177:105;5192:286:7;;;;;;:::i;:::-;;:::i;850:90:103:-;924:9;;850:90;;924:9;;;;1853:36:105;;1841:2;1826:18;850:90:103;1711:184:105;5873:234:7;;;;;;:::i;:::-;;:::i;637:207:103:-;;;;;;:::i;:::-;;:::i;3408:125:7:-;;;;;;:::i;:::-;-1:-1:-1;;;;;3508:18:7;3482:7;3508:18;;;;;;;;;;;;3408:125;2367:102;;;:::i;6594:427::-;;;;;;:::i;:::-;;:::i;3729:189::-;;;;;;:::i;:::-;;:::i;3976:149::-;;;;;;:::i;:::-;;:::i;2156:98::-;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;719:10:16;4570:32:7;719:10:16;4586:7:7;4595:6;4570:8;:32::i;:::-;4619:4;4612:11;;;4433:197;;;;;:::o;5192:286::-;5319:4;719:10:16;5375:38:7;5391:4;719:10:16;5406:6:7;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;-1:-1:-1;5467:4:7;;5192:286;-1:-1:-1;;;;5192:286:7:o;5873:234::-;5961:4;719:10:16;6015:64:7;719:10:16;6031:7:7;6068:10;6040:25;719:10:16;6031:7:7;6040:9;:25::i;:::-;:38;;;;:::i;:::-;6015:8;:64::i;637:207:103:-;700:4;733:10;723:6;:20;;716:28;;;;:::i;:::-;788;800:7;809:6;788:11;:28::i;:::-;-1:-1:-1;833:4:103;637:207;;;;:::o;2367:102:7:-;2423:13;2455:7;2448:14;;;;;:::i;6594:427::-;6687:4;719:10:16;6687:4:7;6768:25;719:10:16;6785:7:7;6768:9;:25::i;:::-;6741:52;;6831:15;6811:16;:35;;6803:85;;;;-1:-1:-1;;;6803:85:7;;3302:2:105;6803:85:7;;;3284:21:105;3341:2;3321:18;;;3314:30;3380:34;3360:18;;;3353:62;-1:-1:-1;;;3431:18:105;;;3424:35;3476:19;;6803:85:7;;;;;;;;;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;3729:189::-;3808:4;719:10:16;3862:28:7;719:10:16;3879:2:7;3883:6;3862:9;:28::i;3976:149::-;-1:-1:-1;;;;;4091:18:7;;;4065:7;4091:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3976:149::o;10110:370::-;-1:-1:-1;;;;;10241:19:7;;10233:68;;;;-1:-1:-1;;;10233:68:7;;3708:2:105;10233:68:7;;;3690:21:105;3747:2;3727:18;;;3720:30;3786:34;3766:18;;;3759:62;-1:-1:-1;;;3837:18:105;;;3830:34;3881:19;;10233:68:7;3506:400:105;10233:68:7;-1:-1:-1;;;;;10319:21:7;;10311:68;;;;-1:-1:-1;;;10311:68:7;;4113:2:105;10311:68:7;;;4095:21:105;4152:2;4132:18;;;4125:30;4191:34;4171:18;;;4164:62;-1:-1:-1;;;4242:18:105;;;4235:32;4284:19;;10311:68:7;3911:398:105;10311:68:7;-1:-1:-1;;;;;10390:18:7;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;10441:32;;1342:25:105;;;10441:32:7;;1315:18:105;10441:32:7;;;;;;;10110:370;;;:::o;10761:441::-;10891:24;10918:25;10928:5;10935:7;10918:9;:25::i;:::-;10891:52;;-1:-1:-1;;10957:16:7;:37;10953:243;;11038:6;11018:16;:26;;11010:68;;;;-1:-1:-1;;;11010:68:7;;4516:2:105;11010:68:7;;;4498:21:105;4555:2;4535:18;;;4528:30;4594:31;4574:18;;;4567:59;4643:18;;11010:68:7;4314:353:105;11010:68:7;11120:51;11129:5;11136:7;11164:6;11145:16;:25;11120:8;:51::i;:::-;10881:321;10761:441;;;:::o;7475:651::-;-1:-1:-1;;;;;7601:18:7;;7593:68;;;;-1:-1:-1;;;7593:68:7;;4874:2:105;7593:68:7;;;4856:21:105;4913:2;4893:18;;;4886:30;4952:34;4932:18;;;4925:62;-1:-1:-1;;;5003:18:105;;;4996:35;5048:19;;7593:68:7;4672:401:105;7593:68:7;-1:-1:-1;;;;;7679:16:7;;7671:64;;;;-1:-1:-1;;;7671:64:7;;5280:2:105;7671:64:7;;;5262:21:105;5319:2;5299:18;;;5292:30;5358:34;5338:18;;;5331:62;-1:-1:-1;;;5409:18:105;;;5402:33;5452:19;;7671:64:7;5078:399:105;7671:64:7;-1:-1:-1;;;;;7817:15:7;;7795:19;7817:15;;;;;;;;;;;7850:21;;;;7842:72;;;;-1:-1:-1;;;7842:72:7;;5684:2:105;7842:72:7;;;5666:21:105;5723:2;5703:18;;;5696:30;5762:34;5742:18;;;5735:62;-1:-1:-1;;;5813:18:105;;;5806:36;5859:19;;7842:72:7;5482:402:105;7842:72:7;-1:-1:-1;;;;;7948:15:7;;;:9;:15;;;;;;;;;;;7966:20;;;7948:38;;8006:13;;;;;;;;:23;;7980:6;;7948:9;8006:23;;7980:6;;8006:23;:::i;:::-;;;;;;;;8060:2;-1:-1:-1;;;;;8045:26:7;8054:4;-1:-1:-1;;;;;8045:26:7;;8064:6;8045:26;;;;1342:25:105;;1330:2;1315:18;;1196:177;8045:26:7;;;;;;;;8082:37;11786:121;8402:389;-1:-1:-1;;;;;8485:21:7;;8477:65;;;;-1:-1:-1;;;8477:65:7;;6091:2:105;8477:65:7;;;6073:21:105;6130:2;6110:18;;;6103:30;6169:33;6149:18;;;6142:61;6220:18;;8477:65:7;5889:355:105;8477:65:7;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:7;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:7;;1342:25:105;;;-1:-1:-1;;;;;8688:37:7;;;8705:1;;8688:37;;1330:2:105;1315:18;8688:37:7;;;;;;;8402:389;;:::o;14:548:105:-;126:4;155:2;184;173:9;166:21;216:6;210:13;259:6;254:2;243:9;239:18;232:34;284:1;294:140;308:6;305:1;302:13;294:140;;;403:14;;;399:23;;393:30;369:17;;;388:2;365:26;358:66;323:10;;294:140;;;298:3;483:1;478:2;469:6;458:9;454:22;450:31;443:42;553:2;546;542:7;537:2;529:6;525:15;521:29;510:9;506:45;502:54;494:62;;;;14:548;;;;:::o;567:173::-;635:20;;-1:-1:-1;;;;;684:31:105;;674:42;;664:70;;730:1;727;720:12;664:70;567:173;;;:::o;745:254::-;813:6;821;874:2;862:9;853:7;849:23;845:32;842:52;;;890:1;887;880:12;842:52;913:29;932:9;913:29;:::i;:::-;903:39;989:2;974:18;;;;961:32;;-1:-1:-1;;;745:254:105:o;1378:328::-;1455:6;1463;1471;1524:2;1512:9;1503:7;1499:23;1495:32;1492:52;;;1540:1;1537;1530:12;1492:52;1563:29;1582:9;1563:29;:::i;:::-;1553:39;;1611:38;1645:2;1634:9;1630:18;1611:38;:::i;:::-;1601:48;;1696:2;1685:9;1681:18;1668:32;1658:42;;1378:328;;;;;:::o;1900:186::-;1959:6;2012:2;2000:9;1991:7;1987:23;1983:32;1980:52;;;2028:1;2025;2018:12;1980:52;2051:29;2070:9;2051:29;:::i;:::-;2041:39;1900:186;-1:-1:-1;;;1900:186:105:o;2091:260::-;2159:6;2167;2220:2;2208:9;2199:7;2195:23;2191:32;2188:52;;;2236:1;2233;2226:12;2188:52;2259:29;2278:9;2259:29;:::i;:::-;2249:39;;2307:38;2341:2;2330:9;2326:18;2307:38;:::i;:::-;2297:48;;2091:260;;;;;:::o;2356:380::-;2435:1;2431:12;;;;2478;;;2499:61;;2553:4;2545:6;2541:17;2531:27;;2499:61;2606:2;2598:6;2595:14;2575:18;2572:38;2569:161;;2652:10;2647:3;2643:20;2640:1;2633:31;2687:4;2684:1;2677:15;2715:4;2712:1;2705:15;2569:161;;2356:380;;;:::o;2741:222::-;2806:9;;;2827:10;;;2824:133;;;2879:10;2874:3;2870:20;2867:1;2860:31;2914:4;2911:1;2904:15;2942:4;2939:1;2932:15;2968:127;3029:10;3024:3;3020:20;3017:1;3010:31;3060:4;3057:1;3050:15;3084:4;3081:1;3074:15",
  source:
    '// SPDX-License-Identifier: AGPLv3\npragma solidity 0.8.16;\n\nimport { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n\n/**\n * @title Test token contract\n * @author Superfluid\n * @dev Test ERC20 token that allows any one mint new tokens.\n */\ncontract TestToken is ERC20 {\n    uint256 private immutable _mintLimit;\n    uint8 private _decimals;\n\n    constructor(\n        string memory name,\n        string memory symbol,\n        uint8 initDecimals,\n        uint256 mintLimit\n    ) ERC20(name, symbol) {\n        _decimals = initDecimals;\n        _mintLimit = mintLimit;\n    }\n\n    /**\n     * @dev See {ERC20-_mint}.\n     */\n    function mint(address account, uint256 amount) public returns (bool) {\n        assert(amount <= _mintLimit); // no revert msg for you, bad boy\n        ERC20._mint(account, amount);\n        return true;\n    }\n\n    function decimals() public view override returns (uint8) {\n        return _decimals;\n    }\n}\n',
  sourcePath:
    "/home/runner/work/protocol-monorepo/protocol-monorepo/packages/ethereum-contracts/contracts/utils/TestToken.sol",
  ast: {
    absolutePath: "project:/contracts/utils/TestToken.sol",
    exportedSymbols: {
      ERC20: [1444],
      TestToken: [40780]
    },
    id: 40781,
    license: "AGPLv3",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 40711,
        literals: ["solidity", "0.8", ".16"],
        nodeType: "PragmaDirective",
        src: "35:23:103"
      },
      {
        absolutePath: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        file: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        id: 40713,
        nameLocation: "-1:-1:-1",
        nodeType: "ImportDirective",
        scope: 40781,
        sourceUnit: 1445,
        src: "60:70:103",
        symbolAliases: [
          {
            foreign: {
              id: 40712,
              name: "ERC20",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 1444,
              src: "69:5:103",
              typeDescriptions: {}
            },
            nameLocation: "-1:-1:-1"
          }
        ],
        unitAlias: ""
      },
      {
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 40715,
              name: "ERC20",
              nameLocations: ["276:5:103"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 1444,
              src: "276:5:103"
            },
            id: 40716,
            nodeType: "InheritanceSpecifier",
            src: "276:5:103"
          }
        ],
        canonicalName: "TestToken",
        contractDependencies: [],
        contractKind: "contract",
        documentation: {
          id: 40714,
          nodeType: "StructuredDocumentation",
          src: "132:121:103",
          text: " @title Test token contract\n @author Superfluid\n @dev Test ERC20 token that allows any one mint new tokens."
        },
        fullyImplemented: true,
        id: 40780,
        linearizedBaseContracts: [40780, 1444, 1547, 1522, 2384],
        name: "TestToken",
        nameLocation: "263:9:103",
        nodeType: "ContractDefinition",
        nodes: [
          {
            constant: false,
            id: 40718,
            mutability: "immutable",
            name: "_mintLimit",
            nameLocation: "314:10:103",
            nodeType: "VariableDeclaration",
            scope: 40780,
            src: "288:36:103",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256"
            },
            typeName: {
              id: 40717,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "288:7:103",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256"
              }
            },
            visibility: "private"
          },
          {
            constant: false,
            id: 40720,
            mutability: "mutable",
            name: "_decimals",
            nameLocation: "344:9:103",
            nodeType: "VariableDeclaration",
            scope: 40780,
            src: "330:23:103",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint8",
              typeString: "uint8"
            },
            typeName: {
              id: 40719,
              name: "uint8",
              nodeType: "ElementaryTypeName",
              src: "330:5:103",
              typeDescriptions: {
                typeIdentifier: "t_uint8",
                typeString: "uint8"
              }
            },
            visibility: "private"
          },
          {
            body: {
              id: 40743,
              nodeType: "Block",
              src: "511:73:103",
              statements: [
                {
                  expression: {
                    id: 40737,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 40735,
                      name: "_decimals",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 40720,
                      src: "521:9:103",
                      typeDescriptions: {
                        typeIdentifier: "t_uint8",
                        typeString: "uint8"
                      }
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 40736,
                      name: "initDecimals",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 40726,
                      src: "533:12:103",
                      typeDescriptions: {
                        typeIdentifier: "t_uint8",
                        typeString: "uint8"
                      }
                    },
                    src: "521:24:103",
                    typeDescriptions: {
                      typeIdentifier: "t_uint8",
                      typeString: "uint8"
                    }
                  },
                  id: 40738,
                  nodeType: "ExpressionStatement",
                  src: "521:24:103"
                },
                {
                  expression: {
                    id: 40741,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 40739,
                      name: "_mintLimit",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 40718,
                      src: "555:10:103",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      }
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 40740,
                      name: "mintLimit",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 40728,
                      src: "568:9:103",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      }
                    },
                    src: "555:22:103",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  id: 40742,
                  nodeType: "ExpressionStatement",
                  src: "555:22:103"
                }
              ]
            },
            id: 40744,
            implemented: true,
            kind: "constructor",
            modifiers: [
              {
                arguments: [
                  {
                    id: 40731,
                    name: "name",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 40722,
                    src: "497:4:103",
                    typeDescriptions: {
                      typeIdentifier: "t_string_memory_ptr",
                      typeString: "string memory"
                    }
                  },
                  {
                    id: 40732,
                    name: "symbol",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 40724,
                    src: "503:6:103",
                    typeDescriptions: {
                      typeIdentifier: "t_string_memory_ptr",
                      typeString: "string memory"
                    }
                  }
                ],
                id: 40733,
                kind: "baseConstructorSpecifier",
                modifierName: {
                  id: 40730,
                  name: "ERC20",
                  nameLocations: ["491:5:103"],
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 1444,
                  src: "491:5:103"
                },
                nodeType: "ModifierInvocation",
                src: "491:19:103"
              }
            ],
            name: "",
            nameLocation: "-1:-1:-1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 40729,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 40722,
                  mutability: "mutable",
                  name: "name",
                  nameLocation: "395:4:103",
                  nodeType: "VariableDeclaration",
                  scope: 40744,
                  src: "381:18:103",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 40721,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "381:6:103",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 40724,
                  mutability: "mutable",
                  name: "symbol",
                  nameLocation: "423:6:103",
                  nodeType: "VariableDeclaration",
                  scope: 40744,
                  src: "409:20:103",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 40723,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "409:6:103",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 40726,
                  mutability: "mutable",
                  name: "initDecimals",
                  nameLocation: "445:12:103",
                  nodeType: "VariableDeclaration",
                  scope: 40744,
                  src: "439:18:103",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint8",
                    typeString: "uint8"
                  },
                  typeName: {
                    id: 40725,
                    name: "uint8",
                    nodeType: "ElementaryTypeName",
                    src: "439:5:103",
                    typeDescriptions: {
                      typeIdentifier: "t_uint8",
                      typeString: "uint8"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 40728,
                  mutability: "mutable",
                  name: "mintLimit",
                  nameLocation: "475:9:103",
                  nodeType: "VariableDeclaration",
                  scope: 40744,
                  src: "467:17:103",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 40727,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "467:7:103",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "371:119:103"
            },
            returnParameters: {
              id: 40734,
              nodeType: "ParameterList",
              parameters: [],
              src: "511:0:103"
            },
            scope: 40780,
            src: "360:224:103",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public"
          },
          {
            body: {
              id: 40769,
              nodeType: "Block",
              src: "706:138:103",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        },
                        id: 40757,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 40755,
                          name: "amount",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 40749,
                          src: "723:6:103",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        nodeType: "BinaryOperation",
                        operator: "<=",
                        rightExpression: {
                          id: 40756,
                          name: "_mintLimit",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 40718,
                          src: "733:10:103",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        src: "723:20:103",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      ],
                      id: 40754,
                      name: "assert",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 4294967293,
                      src: "716:6:103",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_assert_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure"
                      }
                    },
                    id: 40758,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "716:28:103",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 40759,
                  nodeType: "ExpressionStatement",
                  src: "716:28:103"
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 40763,
                        name: "account",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 40747,
                        src: "800:7:103",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        }
                      },
                      {
                        id: 40764,
                        name: "amount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 40749,
                        src: "809:6:103",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      ],
                      expression: {
                        id: 40760,
                        name: "ERC20",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 1444,
                        src: "788:5:103",
                        typeDescriptions: {
                          typeIdentifier: "t_type$_t_contract$_ERC20_$1444_$",
                          typeString: "type(contract ERC20)"
                        }
                      },
                      id: 40762,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "794:5:103",
                      memberName: "_mint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 1261,
                      src: "788:11:103",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        typeString: "function (address,uint256)"
                      }
                    },
                    id: 40765,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "788:28:103",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 40766,
                  nodeType: "ExpressionStatement",
                  src: "788:28:103"
                },
                {
                  expression: {
                    hexValue: "74727565",
                    id: 40767,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "bool",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "833:4:103",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool"
                    },
                    value: "true"
                  },
                  functionReturnParameters: 40753,
                  id: 40768,
                  nodeType: "Return",
                  src: "826:11:103"
                }
              ]
            },
            documentation: {
              id: 40745,
              nodeType: "StructuredDocumentation",
              src: "590:42:103",
              text: " @dev See {ERC20-_mint}."
            },
            functionSelector: "40c10f19",
            id: 40770,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "mint",
            nameLocation: "646:4:103",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 40750,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 40747,
                  mutability: "mutable",
                  name: "account",
                  nameLocation: "659:7:103",
                  nodeType: "VariableDeclaration",
                  scope: 40770,
                  src: "651:15:103",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 40746,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "651:7:103",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 40749,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "676:6:103",
                  nodeType: "VariableDeclaration",
                  scope: 40770,
                  src: "668:14:103",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 40748,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "668:7:103",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "650:33:103"
            },
            returnParameters: {
              id: 40753,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 40752,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 40770,
                  src: "700:4:103",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool"
                  },
                  typeName: {
                    id: 40751,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "700:4:103",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "699:6:103"
            },
            scope: 40780,
            src: "637:207:103",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public"
          },
          {
            baseFunctions: [933],
            body: {
              id: 40778,
              nodeType: "Block",
              src: "907:33:103",
              statements: [
                {
                  expression: {
                    id: 40776,
                    name: "_decimals",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 40720,
                    src: "924:9:103",
                    typeDescriptions: {
                      typeIdentifier: "t_uint8",
                      typeString: "uint8"
                    }
                  },
                  functionReturnParameters: 40775,
                  id: 40777,
                  nodeType: "Return",
                  src: "917:16:103"
                }
              ]
            },
            functionSelector: "313ce567",
            id: 40779,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "decimals",
            nameLocation: "859:8:103",
            nodeType: "FunctionDefinition",
            overrides: {
              id: 40772,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "882:8:103"
            },
            parameters: {
              id: 40771,
              nodeType: "ParameterList",
              parameters: [],
              src: "867:2:103"
            },
            returnParameters: {
              id: 40775,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 40774,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 40779,
                  src: "900:5:103",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint8",
                    typeString: "uint8"
                  },
                  typeName: {
                    id: 40773,
                    name: "uint8",
                    nodeType: "ElementaryTypeName",
                    src: "900:5:103",
                    typeDescriptions: {
                      typeIdentifier: "t_uint8",
                      typeString: "uint8"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "899:7:103"
            },
            scope: 40780,
            src: "850:90:103",
            stateMutability: "view",
            virtual: false,
            visibility: "public"
          }
        ],
        scope: 40781,
        src: "254:688:103",
        usedErrors: []
      }
    ],
    src: "35:908:103"
  },
  compiler: {
    name: "solc",
    version: "0.8.16+commit.07a7930e.Emscripten.clang"
  },
  networks: {},
  schemaVersion: "3.4.9",
  updatedAt: "2022-10-17T13:30:38.005Z",
  devdoc: {
    author: "Superfluid",
    details: "Test ERC20 token that allows any one mint new tokens.",
    kind: "dev",
    methods: {
      "allowance(address,address)": {
        details: "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        details:
          "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        details: "See {IERC20-balanceOf}."
      },
      "decimals()": {
        details:
          "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "decreaseAllowance(address,uint256)": {
        details:
          "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "increaseAllowance(address,uint256)": {
        details:
          "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
      },
      "mint(address,uint256)": {
        details: "See {ERC20-_mint}."
      },
      "name()": {
        details: "Returns the name of the token."
      },
      "symbol()": {
        details:
          "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        details: "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        details:
          "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
      },
      "transferFrom(address,address,uint256)": {
        details:
          "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
      }
    },
    title: "Test token contract",
    version: 1
  },
  userdoc: {
    kind: "user",
    methods: {},
    version: 1
  }
};
