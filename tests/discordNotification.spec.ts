import { DiscordNotification } from "../src/DiscordNotification";
import { scenarios } from "./discordNotification.mocks";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// all this tests must be exec in docker context
describe("Testing the main funcionalyties", () => {
  const eachArr = scenarios.map((scenario) => [
    scenario.scenarioName,
    scenario,
  ]);

  it("should test simple return a fully functional", () => {
    const result = new DiscordNotification("test", "https://webhook.fake");

    expect(result.name).toBe("test");
    expect(result.webhook).toBe("https://webhook.fake");
  });

  it.each(eachArr)('Scenario: %s ', async (_, scenario) => {
    if (typeof scenario === 'string') return;

    expect(scenario.object).toStrictEqual(scenario.expected);
  });

  it('returns data when sendMessage is called', done => {
    var mock = new MockAdapter(axios);
    const data = { response: true };
    mock.onPost('https://webhook.fake').reply(200, data);

    const discord = new DiscordNotification("test", "https://webhook.fake").message().addTitle('title').addDescription('description');

    discord.sendMessage().then(response => {
        expect(response).toBeUndefined();
        done();
    });
});
});
