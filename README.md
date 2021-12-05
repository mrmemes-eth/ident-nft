# Button, button, who's got the button

Hopefully everyone.

## Running the Dapp

In one shell (for first run and then after every contract change):

```shell
npx hardhat compile
npx hardhat node
```

In a second shell:

```shell
cd frontend
npm start
```

In a third shell:

```shell
npx hardhat run scripts/deploy.js --network localhost
```

For most actions you'll need to tap the local faucet. Instructions in-browser.

## Useful Commands

You can discover all commands by typing `npx hardhat` and exploring the options, but a few that will be used frequently follow.

Compile project, build artifacts:

```shell
npx hardhat compile
```

Run tests:

```shell
npx hardhat test
```

Deploy to the testnet:

```shell
npx hardhat run scripts/deploy.js --network testnet
```

## Graphical Assets Needed:

- favicon.ico (scales for 64, 32, 24 and 16)
- logo192.png - 192x192
- logo310.png - 310x310
