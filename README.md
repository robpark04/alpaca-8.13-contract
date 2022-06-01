```sh
git clone https://github.com/kritical0613/alpaca-8.13-contract.git
```

```sh
yarn

npx hardhat compile
```


```sh
npx hardhat deploy --network rinkeby --tags AutomatedVaultController
npx hardhat verify --network rinkeby --contract "contracts/AutomatedVaultController.sol:AutomatedVaultController" [deployed address]
```

```sh
npx hardhat deploy --network rinkeby --tags DeltaNeutralVault02
npx hardhat verify --network rinkeby --contract "contracts/DeltaNeutralVault02.sol:DeltaNeutralVault02 [deployed address]
```

```sh
npx hardhat deploy --network rinkeby --tags DeltaNeutralVaultConfig02
npx hardhat verify --network rinkeby --contract "contracts/DeltaNeutralVaultConfig02.sol:DeltaNeutralVaultConfig02" [deployed address]
```

```sh
npx hardhat deploy --network rinkeby --tags xALPACACreditor
npx hardhat verify --network rinkeby --contract "contracts/xALPACACreditor.sol:xALPACACreditor" [deployed address]
```

```sh
npx hardhat deploy --network rinkeby --tags xALPACAPriceSetter
npx hardhat verify --network rinkeby --contract "contracts/xALPACAPriceSetter.sol:xALPACAPriceSetter" [deployed address]
```
