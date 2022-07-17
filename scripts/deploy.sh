## declare an array variable
declare -a networks=("rinkeby" "ropsten" "kovan" "goerli" "bsc_testnet" "mumbai" "optimism_kovan" "arbitrum_rinkeby")

for network in "${networks[@]}"
do
  contract_address=$(npx hardhat --network $network run scripts/deploy.ts | awk '{print $NF}' | grep -E '\b0x')
  echo "$network: ${contract_address}"
done
