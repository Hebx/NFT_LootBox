import {sdk} from "./helpers.js";

async function main() {
	const packModuleAddress = "0xdf649cacCEfe10a3697c1942D594Ee5e659f0944";
	const packModule = sdk.getPackModule(packModuleAddress);

	console.log("opening packs...");
	const opened = await packModule.open('0');
	console.log("Opened the pack");
	console.log(opened);
}

try {
	await main();
} catch (error) {
	console.error("Error opening the pack", error);
	process.exit(1);
}
