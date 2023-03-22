# declare -a networks=("ethereum" "rinkeby" "ropsten" "kovan" "goerli" "bsc" "bsc_testnet" "polygon" "mumbai" "optimism_kovan" "arbitrum_rinkeby")
declare -a networks=("goerli" "sepolia" "polygonMumbai" "bscTestnet" "optimismTestnet" "arbitrumTestnet")

for network in "${networks[@]}"
do
  npx hardhat --network $network run scripts/deploy.ts
done
