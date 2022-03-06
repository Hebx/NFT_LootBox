import {readFileSync} from 'fs';
import {sdk} from "./helpers.js";

async function main()  {
	const bundleModuleAddress = "0x419841E2025B79295Fd2EB39c0f3AF130eE76B80";
	const bundleModule = sdk.getBundleModule(bundleModuleAddress);

	const packModuleAddress = "0xdf649cacCEfe10a3697c1942D594Ee5e659f0944";
	const packModule = sdk.getPackModule(packModuleAddress);

	console.log("getting all NFTs from bundle ...");
	const nftsInBundle = await bundleModule.getAll();

	console.log("NFT in Bundle:");
	console.log(nftsInBundle);

	console.log("creating a packc containing Nfts from bundle...");
	const created = await packModule.create({
		assetContract: bundleModuleAddress,
		metadata: {
			name: "The Witcher Pack!",
			image: readFileSync("./assets/witcher.png"),
		},
		assets: nftsInBundle.map(nft => ({
			tokenId: nft.metadata.id,
			amount: nft.supply,
		})),
	});
	console.log("pack created");
	console.log(created);
}
try {
	await main()
} catch(error) {
	console.error("Error minting the Nfts", error);
	process.exit(1);
}
