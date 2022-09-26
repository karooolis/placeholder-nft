/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  PlaceholderNFTERC721,
  PlaceholderNFTERC721Interface,
} from "../../contracts/PlaceholderNFTERC721";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280601881526020017f506c616365686f6c646572204e465420284552433732312900000000000000008152506040518060400160405280600b81526020017f504e46542d455243373231000000000000000000000000000000000000000000815250816000908051906020019062000096929190620000b8565b508060019080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000197565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001b057607f821691505b60208210811415620001c757620001c662000168565b5b50919050565b6136e880620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a22cb46511610066578063a22cb4651461025b578063b88d4fde14610277578063c87b56dd14610293578063e985e9c5146102c3576100ea565b806370a08231146101f157806395d89b4114610221578063a0712d681461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b61010960048036038101906101049190611831565b6102f3565b6040516101169190611879565b60405180910390f35b6101276103d5565b604051610134919061192d565b60405180910390f35b61015760048036038101906101529190611985565b610467565b60405161016491906119f3565b60405180910390f35b61018760048036038101906101829190611a3a565b6104ad565b005b6101a3600480360381019061019e9190611a7a565b6105c5565b005b6101bf60048036038101906101ba9190611a7a565b610625565b005b6101db60048036038101906101d69190611985565b610645565b6040516101e891906119f3565b60405180910390f35b61020b60048036038101906102069190611acd565b6106f7565b6040516102189190611b09565b60405180910390f35b6102296107af565b604051610236919061192d565b60405180910390f35b61025960048036038101906102549190611985565b610841565b005b61027560048036038101906102709190611b50565b610886565b005b610291600480360381019061028c9190611cc5565b61089c565b005b6102ad60048036038101906102a89190611985565b6108fe565b6040516102ba919061192d565b60405180910390f35b6102dd60048036038101906102d89190611d48565b61098a565b6040516102ea9190611879565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103be57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103ce57506103cd82610a1e565b5b9050919050565b6060600080546103e490611db7565b80601f016020809104026020016040519081016040528092919081815260200182805461041090611db7565b801561045d5780601f106104325761010080835404028352916020019161045d565b820191906000526020600020905b81548152906001019060200180831161044057829003601f168201915b5050505050905090565b600061047282610a88565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104b882610645565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610529576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611e5b565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610548610ad3565b73ffffffffffffffffffffffffffffffffffffffff161480610577575061057681610571610ad3565b61098a565b5b6105b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ad90611eed565b60405180910390fd5b6105c08383610adb565b505050565b6105d66105d0610ad3565b82610b94565b610615576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060c90611f7f565b60405180910390fd5b610620838383610c29565b505050565b6106408383836040518060200160405280600081525061089c565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e590611feb565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610768576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075f9061207d565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107be90611db7565b80601f01602080910402602001604051908101604052809291908181526020018280546107ea90611db7565b80156108375780601f1061080c57610100808354040283529160200191610837565b820191906000526020600020905b81548152906001019060200180831161081a57829003601f168201915b5050505050905090565b60005b818110156108825760006108586007610e90565b90506108643382610e9e565b61086e6007610ebc565b50808061087a906120cc565b915050610844565b5050565b610898610891610ad3565b8383610ed2565b5050565b6108ad6108a7610ad3565b83610b94565b6108ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e390611f7f565b60405180910390fd5b6108f88484848461103f565b50505050565b606061090982610a88565b600061095a6109178461109b565b604051602001610927919061219d565b6040516020818303038152906040526040516020016109469190613056565b6040516020818303038152906040526111fc565b905060008160405160200161096f91906130cf565b60405160208183030381529060405290508092505050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610a9181611360565b610ad0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac790611feb565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610b4e83610645565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610ba083610645565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610be25750610be1818561098a565b5b80610c2057508373ffffffffffffffffffffffffffffffffffffffff16610c0884610467565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610c4982610645565b73ffffffffffffffffffffffffffffffffffffffff1614610c9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9690613163565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d06906131f5565b60405180910390fd5b610d1a8383836113cc565b610d25600082610adb565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d759190613215565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dcc9190613249565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610e8b8383836113d1565b505050565b600081600001549050919050565b610eb88282604051806020016040528060008152506113d6565b5050565b6001816000016000828254019250508190555050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f38906132eb565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110329190611879565b60405180910390a3505050565b61104a848484610c29565b61105684848484611431565b611095576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108c9061337d565b60405180910390fd5b50505050565b606060008214156110e3576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506111f7565b600082905060005b600082146111155780806110fe906120cc565b915050600a8261110e91906133cc565b91506110eb565b60008167ffffffffffffffff81111561113157611130611b9a565b5b6040519080825280601f01601f1916602001820160405280156111635781602001600182028036833780820191505090505b5090505b600085146111f05760018261117c9190613215565b9150600a8561118b91906133fd565b60306111979190613249565b60f81b8183815181106111ad576111ac61342e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856111e991906133cc565b9450611167565b8093505050505b919050565b606060008251141561121f5760405180602001604052806000815250905061135b565b6000604051806060016040528060408152602001613673604091399050600060036002855161124e9190613249565b61125891906133cc565b6004611264919061345d565b67ffffffffffffffff81111561127d5761127c611b9a565b5b6040519080825280601f01601f1916602001820160405280156112af5781602001600182028036833780820191505090505b509050600182016020820185865187015b8082101561131b576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f81168501518453600184019350506112c0565b5050600386510660018114611337576002811461134a57611352565b603d6001830353603d6002830353611352565b603d60018303535b50505080925050505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b6113e083836115c8565b6113ed6000848484611431565b61142c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114239061337d565b60405180910390fd5b505050565b60006114528473ffffffffffffffffffffffffffffffffffffffff166117a2565b156115bb578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261147b610ad3565b8786866040518563ffffffff1660e01b815260040161149d949392919061350c565b602060405180830381600087803b1580156114b757600080fd5b505af19250505080156114e857506040513d601f19601f820116820180604052508101906114e5919061356d565b60015b61156b573d8060008114611518576040519150601f19603f3d011682016040523d82523d6000602084013e61151d565b606091505b50600081511415611563576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155a9061337d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506115c0565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162f906135e6565b60405180910390fd5b61164181611360565b15611681576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167890613652565b60405180910390fd5b61168d600083836113cc565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116dd9190613249565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461179e600083836113d1565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61180e816117d9565b811461181957600080fd5b50565b60008135905061182b81611805565b92915050565b600060208284031215611847576118466117cf565b5b60006118558482850161181c565b91505092915050565b60008115159050919050565b6118738161185e565b82525050565b600060208201905061188e600083018461186a565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156118ce5780820151818401526020810190506118b3565b838111156118dd576000848401525b50505050565b6000601f19601f8301169050919050565b60006118ff82611894565b611909818561189f565b93506119198185602086016118b0565b611922816118e3565b840191505092915050565b6000602082019050818103600083015261194781846118f4565b905092915050565b6000819050919050565b6119628161194f565b811461196d57600080fd5b50565b60008135905061197f81611959565b92915050565b60006020828403121561199b5761199a6117cf565b5b60006119a984828501611970565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006119dd826119b2565b9050919050565b6119ed816119d2565b82525050565b6000602082019050611a0860008301846119e4565b92915050565b611a17816119d2565b8114611a2257600080fd5b50565b600081359050611a3481611a0e565b92915050565b60008060408385031215611a5157611a506117cf565b5b6000611a5f85828601611a25565b9250506020611a7085828601611970565b9150509250929050565b600080600060608486031215611a9357611a926117cf565b5b6000611aa186828701611a25565b9350506020611ab286828701611a25565b9250506040611ac386828701611970565b9150509250925092565b600060208284031215611ae357611ae26117cf565b5b6000611af184828501611a25565b91505092915050565b611b038161194f565b82525050565b6000602082019050611b1e6000830184611afa565b92915050565b611b2d8161185e565b8114611b3857600080fd5b50565b600081359050611b4a81611b24565b92915050565b60008060408385031215611b6757611b666117cf565b5b6000611b7585828601611a25565b9250506020611b8685828601611b3b565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611bd2826118e3565b810181811067ffffffffffffffff82111715611bf157611bf0611b9a565b5b80604052505050565b6000611c046117c5565b9050611c108282611bc9565b919050565b600067ffffffffffffffff821115611c3057611c2f611b9a565b5b611c39826118e3565b9050602081019050919050565b82818337600083830152505050565b6000611c68611c6384611c15565b611bfa565b905082815260208101848484011115611c8457611c83611b95565b5b611c8f848285611c46565b509392505050565b600082601f830112611cac57611cab611b90565b5b8135611cbc848260208601611c55565b91505092915050565b60008060008060808587031215611cdf57611cde6117cf565b5b6000611ced87828801611a25565b9450506020611cfe87828801611a25565b9350506040611d0f87828801611970565b925050606085013567ffffffffffffffff811115611d3057611d2f6117d4565b5b611d3c87828801611c97565b91505092959194509250565b60008060408385031215611d5f57611d5e6117cf565b5b6000611d6d85828601611a25565b9250506020611d7e85828601611a25565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611dcf57607f821691505b60208210811415611de357611de2611d88565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611e4560218361189f565b9150611e5082611de9565b604082019050919050565b60006020820190508181036000830152611e7481611e38565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000611ed7603e8361189f565b9150611ee282611e7b565b604082019050919050565b60006020820190508181036000830152611f0681611eca565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000611f69602e8361189f565b9150611f7482611f0d565b604082019050919050565b60006020820190508181036000830152611f9881611f5c565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611fd560188361189f565b9150611fe082611f9f565b602082019050919050565b6000602082019050818103600083015261200481611fc8565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061206760298361189f565b91506120728261200b565b604082019050919050565b600060208201905081810360008301526120968161205a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006120d78261194f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561210a5761210961209d565b5b600182019050919050565b600081905092915050565b7f506c616365686f6c646572204e46542028455243373231292023000000000000600082015250565b6000612156601a83612115565b915061216182612120565b601a82019050919050565b600061217782611894565b6121818185612115565b93506121918185602086016118b0565b80840191505092915050565b60006121a882612149565b91506121b4828461216c565b915081905092915050565b7f7b226e616d65223a202200000000000000000000000000000000000000000000600082015250565b60006121f5600a83612115565b9150612200826121bf565b600a82019050919050565b7f222c20226465736372697074696f6e223a2022506c616365686f6c646572204e60008201527f465420697320616e20756e6c696d6974656420737570706c792c2066756c6c7960208201527f206f6e2d636861696e2c204e465420636f6c6c656374696f6e20617661696c6160408201527f626c65206f6e20616e792045564d2d636f6d70617469626c6520636861696e2e60608201527f20596f75206d6179206d696e7420697420667265656c792c20616e642075736560808201527f20697420666f722074657374696e672c206f7220796f7572206f776e2073617460a08201527f697366616374696f6e2e222c2022696d616765223a2022646174613a696d616760c08201527f652f7376672b786d6c3b6261736536342c50484e325a79423462577875637a3060e08201527f6e6148523063446f764c336433647935334d793576636d63764d6a41774d43396101008201527f7a646d636e49485a705a586443623367394a7a457849444578494455774944556101208201527f774a7a34385a7a3438636d566a64434234505363784d6963676554306e4d54496101408201527f6e494864705a48526f505363304f436367614756705a326830505363304f43636101608201527f675a6d6c736244306e493045314e7a6b7a4f536367633352796232746c5053646101808201527f756232356c4a79427a64484a766132557462476c755a574e686344306e636d396101a08201527f31626d516e49484e30636d39725a5331736157356c616d3970626a306e636d396101c08201527f31626d516e49484e30636d39725a5331746158526c636d787062576c305053636101e08201527f784d436367633352796232746c4c5864705a48526f505363794a7a34384c334a6102008201527f6c5933512b50484a6c593351676544306e4d54676e49486b394a7a45344a79426102208201527f33615752306144306e4d7a596e4947686c6157646f6444306e4d7a596e49475a6102408201527f70624777394a794d354d6b517a526a556e49484e30636d39725a54306e626d396102608201527f755a536367633352796232746c4c577870626d566a595841394a334a766457356102808201527f6b4a79427a64484a766132557462476c755a577076615734394a334a766457356102a08201527f6b4a79427a64484a766132557462576c305a584a73615731706444306e4d54416102c08201527f6e49484e30636d39725a533133615752306144306e4d69632b504339795a574e6102e08201527f30506a786a61584a6a62475567593367394a7a49324a79426a6554306e4d7a416103008201527f6e494849394a7a516e49475a70624777394a794e47513056424d6b496e49484e6103208201527f30636d39725a54306e626d39755a536367633352796232746c4c577870626d566103408201527f6a595841394a334a766457356b4a79427a64484a766132557462476c755a57706103608201527f76615734394a334a766457356b4a79427a64484a766132557462576c305a584a6103808201527f73615731706444306e4d54416e49484e30636d39725a533133615752306144306103a08201527f6e4d69632b5043396a61584a6a6247552b50484268644767675a6d6c736244306103c08201527f6e497a56444f55557a4d536367633352796232746c5053636a4e554d3552544d6103e08201527f784a79427a64484a766132557462476c755a574e686344306e636d3931626d516104008201527f6e49484e30636d39725a5331736157356c616d3970626a306e636d3931626d516104208201527f6e49484e30636d39725a5331746158526c636d787062576c30505363784d43636104408201527f67633352796232746c4c5864705a48526f505363794a79426b5053644e4e54416104608201527f734d7a566a4c5449754f446b314f4330774c6a67314e4449744e6934794e7a6b6104808201527f314c5463754f5467344e6930344c54686a4c5451754d6a41344c5441754d44496104a08201527f334f4330324c6a49314e4377314c6a677a4e6930784d5377355979307a4c44496104c08201527f744d79347a4e7a51314c4449754f4451354e7930324c44526a4c5449754d6a676104e08201527f794e4377784c544d734d79307a4c6a49314c444d754e6a51774e69426a4c54416105008201527f754d7a417a4d5377774c6a63334e6a59744d5334304e7a55784c4449754e54496105208201527f784e4330774c6a6b314f444d734d7934784d446b30597a45754d6a41344d79776105408201527f784c6a4d334e5377794c6a51314f444d734d5334314c4455734d4334334d54636105608201527f35597a49754d5451334c5441754e6a59774e6977304c6a6b334e6a6b744e43346105808201527f344d4463304c4459754f4463314c5459754d6a45334f53426a4d6934794e7a416105a08201527f344c5445754e6a67334e5377304c6a59304e5467744d6934314c4467754d44676105c08201527f7a4d793079597a49754e4463354e5377774c6a4d324d4459734e6934324e69776105e08201527f7a4c6a45334d6a4d734e7934344d5449314c444d754d4459794e574d784c6a4d6106008201527f784d6a55744d4334784d6a55744d5334314f544d334c5449754e5459794e53306106208201527f774c6a557a4d5449744e4334784f44633149474d784c6a457a4d6a63744d53346106408201527f334d7a49314c4449754f5445774d6977774c6a45314d6a6b734d7934324d7a556106608201527f304c5445754d44677a4d304d314d5334354f4451304c444d324c6a55734e54416106808201527f754e6a4d794c444d314c6a45344e6a51734e5441734d7a56364a7a34384c33426106a08201527f686447672b5043396e506a786e506a78795a574e30494867394a7a45794a79426106c08201527f35505363784d69636764326c6b644767394a7a51344a79426f5a576c6e6148516106e08201527f394a7a51344a79426d61577873505364756232356c4a79427a64484a766132556107008201527f394a794d774d4441774d44416e49484e30636d39725a5331736157356c5932466107208201527f7750536479623356755a436367633352796232746c4c577870626d567162326c6107408201527f7550536479623356755a436367633352796232746c4c5731706447567962476c6107608201527f74615851394a7a45774a79427a64484a766132557464326c6b644767394a7a496107808201527f6e506a7776636d566a64443438636d566a64434234505363784f4363676554306107a08201527f6e4d54676e494864705a48526f5053637a4e696367614756705a3268305053636107c08201527f7a4e6963675a6d6c736244306e626d39755a536367633352796232746c5053636107e08201527f6a4d4441774d4441774a79427a64484a766132557462476c755a574e686344306108008201527f6e636d3931626d516e49484e30636d39725a5331736157356c616d3970626a306108208201527f6e636d3931626d516e49484e30636d39725a5331746158526c636d787062576c6108408201527f30505363784d436367633352796232746c4c5864705a48526f505363794a7a346108608201527f384c334a6c5933512b50474e70636d4e735a53426a6544306e4d6a596e49474e6108808201527f355053637a4d436367636a306e4e4363675a6d6c736244306e626d39755a53636108a08201527f67633352796232746c5053636a4d4441774d4441774a79427a64484a766132556108c08201527f7462476c755a574e686344306e636d3931626d516e49484e30636d39725a53316108e08201527f736157356c616d3970626a306e636d3931626d516e49484e30636d39725a53316109008201527f746158526c636d787062576c30505363784d436367633352796232746c4c58646109208201527f705a48526f505363794a7a34384c324e70636d4e735a543438636d566a6443426109408201527f34505363784f4363676554306e4d54676e494864705a48526f5053637a4e69636109608201527f67614756705a3268305053637a4e6963675a6d6c736244306e626d39755a53636109808201527f67633352796232746c5053636a4d4441774d4441774a79427a64484a766132556109a08201527f7462476c755a574e686344306e636d3931626d516e49484e30636d39725a53316109c08201527f736157356c616d3970626a306e636d3931626d516e49484e30636d39725a53316109e08201527f746158526c636d787062576c30505363784d436367633352796232746c4c5864610a008201527f705a48526f505363794a7a34384c334a6c5933512b50484268644767675a6d6c610a208201527f736244306e626d39755a536367633352796232746c5053636a4d4441774d4441610a408201527f774a79427a64484a766132557462476c755a574e686344306e636d3931626d51610a608201527f6e49484e30636d39725a5331736157356c616d3970626a306e636d3931626d51610a808201527f6e49484e30636d39725a5331746158526c636d787062576c30505363784d4363610aa08201527f67633352796232746c4c5864705a48526f505363794a79426b5053644e4d6a49610ac08201527f734e444e6a4d4334314d6a55354c5445754d4445354f4377774c6a63794e7a55610ae08201527f744d5334354e6a63794c444d744d324d794c6a59774f5459744d5334784f4455610b008201527f354c444d744d6977324c54526a4e4334334e4459744d7934784e6a51734e6934610b208201527f334f5449744f5334774d6a63344c4445784c546c6a4d5334334d6a41314c4441610b408201527f754d4445784e4377314c4463734f4377344a7a34384c3342686447672b504339610b608201527f6e506a777663335a6e50673d3d227d0000000000000000000000000000000000610b8082015250565b600061303f610b8f83612115565b915061304a8261220b565b610b8f82019050919050565b6000613061826121e8565b915061306d828461216c565b915061307882613031565b915081905092915050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000600082015250565b60006130b9601d83612115565b91506130c482613083565b601d82019050919050565b60006130da826130ac565b91506130e6828461216c565b915081905092915050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061314d60258361189f565b9150613158826130f1565b604082019050919050565b6000602082019050818103600083015261317c81613140565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006131df60248361189f565b91506131ea82613183565b604082019050919050565b6000602082019050818103600083015261320e816131d2565b9050919050565b60006132208261194f565b915061322b8361194f565b92508282101561323e5761323d61209d565b5b828203905092915050565b60006132548261194f565b915061325f8361194f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156132945761329361209d565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006132d560198361189f565b91506132e08261329f565b602082019050919050565b60006020820190508181036000830152613304816132c8565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061336760328361189f565b91506133728261330b565b604082019050919050565b600060208201905081810360008301526133968161335a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006133d78261194f565b91506133e28361194f565b9250826133f2576133f161339d565b5b828204905092915050565b60006134088261194f565b91506134138361194f565b9250826134235761342261339d565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006134688261194f565b91506134738361194f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156134ac576134ab61209d565b5b828202905092915050565b600081519050919050565b600082825260208201905092915050565b60006134de826134b7565b6134e881856134c2565b93506134f88185602086016118b0565b613501816118e3565b840191505092915050565b600060808201905061352160008301876119e4565b61352e60208301866119e4565b61353b6040830185611afa565b818103606083015261354d81846134d3565b905095945050505050565b60008151905061356781611805565b92915050565b600060208284031215613583576135826117cf565b5b600061359184828501613558565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006135d060208361189f565b91506135db8261359a565b602082019050919050565b600060208201905081810360008301526135ff816135c3565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061363c601c8361189f565b915061364782613606565b602082019050919050565b6000602082019050818103600083015261366b8161362f565b905091905056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212200ee44d8f24dfc05bdda80eb8e5d6d06ed149c0bc53c5ab7be7ee9e2dad568d5764736f6c63430008090033";

type PlaceholderNFTERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PlaceholderNFTERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PlaceholderNFTERC721__factory extends ContractFactory {
  constructor(...args: PlaceholderNFTERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PlaceholderNFTERC721> {
    return super.deploy(overrides || {}) as Promise<PlaceholderNFTERC721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PlaceholderNFTERC721 {
    return super.attach(address) as PlaceholderNFTERC721;
  }
  override connect(signer: Signer): PlaceholderNFTERC721__factory {
    return super.connect(signer) as PlaceholderNFTERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PlaceholderNFTERC721Interface {
    return new utils.Interface(_abi) as PlaceholderNFTERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PlaceholderNFTERC721 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PlaceholderNFTERC721;
  }
}