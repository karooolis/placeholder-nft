declare -a networks=("polygon")

declare -a contracts_ethereum=("0xb60D106AaEcB846Dfd35632f7454E5e7d4FB69fe" "0x8f82Fb87A662c18176daBCF2bbFa1D2A5BC09beC" "0x8Ebb0c154E31418cc3E43B1e600423FD9194FF17")

declare -a contracts_bsc=("0x960efe6b1c9F8C5a680e9aDf7f03CD3f4A60153E" "0xe1DBc970Fd854Ec048930d1C6a2ecE47232a180E" "0xEA76ffa7e309a20Cfc61207e5974A7aD0E7Ff301")

declare -a contracts_polygon=("0xdA6076fcfF06833512dB5bD7CC414C079C89ca52" "0xF037fCA1d00Ce242fdE3e00e6348E98533758410" "0xB4dCbE3045100B276817c18c6b97240BeDa98337")

for network in "${networks[@]}"
do
  contracts=contracts_$network[@]

  for contract in "${!contracts}"
  do
    echo $network
    echo $contract

    npx hardhat verify --network $network $contract  
  done
done
