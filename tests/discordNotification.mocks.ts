export interface DiscordNotificationDetailedTestScenario {
  [key: string]: DiscordNotificationDetailedTestConfig;
}

export interface DiscordNotificationDetailedTestConfig {
  expected: boolean;
}
// all this tests must be exec in docker context
export const scenarios: DiscordNotificationDetailedTestScenario = {};
