import { DiscordNotification } from "./DiscordNotification";

// bootstrap da aplicação
export const discordNotification = new DiscordNotification(
  "MS-TEST",
  "https://discord.com/api/webhooks/803700867030974504/-mdVYyS7PYiiOtpLbMrMdutlcUYyarCZ4SnkxiLAJtv6JV134i9zq5MfiQerqliqP_ai"
);

try {
  discordNotification
    .sucessfulMessage()
    .addFooter("qeqiheiqwuehqw")
    .addTitle("woeqeuh")
    .addField({ name: "higor bocó", value: "miguel teta" })
    .addTitle("qwiuehqiueqhwe")
    .addContent(
      "```json" +
        "\n" +
        JSON.stringify({
          teste: "teste",
        }) +
        "```"
    )
    .sendMessage();
  throw new Error("Meu erro bla");
} catch (error) {
  const e: Error = error as Error;
  discordNotification
    .errorMessage()
    // .addFooter(e.stack || 'Sem stack de erro')
    .addTitle(e.message)
    .addContent(
      "```json" +
        "\n" +
        JSON.stringify({
          teste: "teste",
        }) +
        "```"
    )
    .sendMessage();
}
