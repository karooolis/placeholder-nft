declare -a networks=("sepolia")

declare -a contracts_sepolia=("0x05B2446B23BBc5A62A2d53b9D74e26fb7fd465e0" "0xF61BaDe11ceb23E56e5dFB7dd1DC1A8d7BCbb383" "0xe41C126975f1E0F2bdD0b86a2C8Ad625a3643D33")

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
