import {ethers} from "ethers";
import {sdk} from "./helpers.js";

async function main() {
	const packModuleAddress = "0xdf649cacCEfe10a3697c1942D594Ee5e659f0944";
	const packModule = sdk.getPackModule(packModuleAddress);
	console.log("depositing Link ...");

	const amount = ethers.utils.parseEther('2');

	await packModule.depositLink(amount);
	console.log("deposited!");

	const balance = await packModule.getLinkBalance();
	console.log(balance);
}

try {
	await main();
} catch (error) {
	console.error("Error Depositing Link", error
	);
	process.exit(1);
}

