import { DiscordNotification } from "../src/DiscordNotification";
// import { scenarios } from "./discordNotification.mocks";

// all this tests must be exec in docker context
describe("Testing the main funcionalyties", () => {
  it("should test simple return a fully functional", () => {
    const result = new DiscordNotification("test", "https://webhook.fake");

    expect(result.name).toBe("test");
    expect(result.webhook).toBe("https://webhook.fake");
  });
});
