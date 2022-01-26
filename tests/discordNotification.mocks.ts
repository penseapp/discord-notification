import { DiscordNotification } from "../src/DiscordNotification";
import { ERROR_COLOR, INFO_COLOR, SUCCESSFUL_COLOR, WARNING_COLOR } from "../src/MessageVariants";

const NAME = "my-name";
const WEBHOOK = "https://webhook.fake";
export interface DiscordNotificationDetailedTestConfig {
  scenarioName: string;
  object: any;
  expected: any;
}

const discord = new DiscordNotification(NAME, WEBHOOK);

// all this tests must be exec in docker context
export const scenarios: DiscordNotificationDetailedTestConfig[] = [
  {
    scenarioName: "should show a success message",
    object: discord.sucessfulMessage().buildPayload(),
    expected: {
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          color: `${SUCCESSFUL_COLOR}`,
          fields: [],
        },
      ],
    },
  },
  {
    scenarioName: "should show a error message",
    object: discord.errorMessage().buildPayload(),
    expected: {
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          color: `${ERROR_COLOR}`,
          fields: [],
        },
      ],
    },
  },
  {
    scenarioName: "should show a info message",
    object: discord.infoMessage().buildPayload(),
    expected: {
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          color: `${INFO_COLOR}`,
          fields: [],
        },
      ],
    },
  },
  {
    scenarioName: "should show a warning message",
    object: discord.warningMessage().buildPayload(),
    expected: {
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          color: `${WARNING_COLOR}`,
          fields: [],
        },
      ],
    },
  },
  {
    scenarioName: "should show a success message with title",
    object: discord.sucessfulMessage().addTitle("My title").buildPayload(),
    expected: {
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          title: "My title",
          color: `${SUCCESSFUL_COLOR}`,
          fields: [],
        },
      ],
    },
  },
  {
    scenarioName: "should show a success message with title and description",
    object: discord.sucessfulMessage().addTitle("My title").addDescription("My description").buildPayload(),
    expected: {
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          description: "My description",
          title: "My title",
          color: `${SUCCESSFUL_COLOR}`,
          fields: [],
        },
      ],
    },
  },
  {
    scenarioName: "should show a message with one field",
    object: discord.message().addField({ name: "Field 1", value: "Content #1", inline: false }).buildPayload(),
    expected: {
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          fields: [
            {
              name: "Field 1",
              value: "Content #1",
              inline: false,
            },
          ],
        },
      ],
    },
  },
  {
    scenarioName: "should show a message with username",
    object: discord.message().addUsername("My username").buildPayload(),
    expected: {
      username: "My username",
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          fields: [],
        },
      ],
    },
  },
  {
    scenarioName: "should show a message with custom avatar url",
    object: discord.message().addAvatarURl("https://my-avatar-url").buildPayload(),
    expected: {
      avatar_url: "https://my-avatar-url",
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          fields: [],
        },
      ],
    },
  },
  {
    scenarioName: "should show a message with custom copntent",
    object: discord.message().addContent("My content").buildPayload(),
    expected: {
      content: "My content",
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          fields: [],
        },
      ],
    },
  },
  {
    scenarioName: "should show a message with two fields",
    object: discord.message().addField({ name: "Field 1", value: "Content #1" }).addField({ name: "Field 2", value: "Content #2" }).buildPayload(),
    expected: {
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          fields: [
            {
              name: "Field 1",
              value: "Content #1",
              inline: true,
            },
            {
              name: "Field 2",
              value: "Content #2",
              inline: true,
            },
          ],
        },
      ],
    },
  },
  {
    scenarioName: "should show a complete success message",
    object: discord
      .sucessfulMessage()
      .addTitle("My title")
      .addDescription("My description")
      .addUsername("My username")
      .addAvatarURl("https://my-avatar-url")
      .addContent("My content")
      .addField({ name: "Field 1", value: "Content #1", inline: false }) //breakline
      .addField({ name: "Field 2", value: "Content #2" })
      .addField({ name: "Field 3", value: "Content #3" })
      .addFooter("My footer") // Small text at the end of discord notification
      .buildPayload(),
    expected: {
      allowed_mentions: {
        parse: ["everyone"],
      },
      username: "My username",
      content: "My content",
      avatar_url: "https://my-avatar-url",
      embeds: [
        {
          title: "My title",
          description: "My description",
          author: {
            name: NAME,
          },
          footer: {
            text: "My footer",
          },
          color: `${SUCCESSFUL_COLOR}`,
          fields: [
            {
              name: "Field 1",
              value: "Content #1",
              inline: false,
            },
            {
              name: "Field 2",
              value: "Content #2",
              inline: true,
            },
            {
              name: "Field 3",
              value: "Content #3",
              inline: true,
            },
          ],
        },
      ],
    },
  },
  {
    scenarioName: "should set inline true when inline field not specified",
    object: discord.message().addField({ name: "Field 1", value: "Content #1" }).buildPayload(),
    expected: {
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          fields: [
            {
              name: "Field 1",
              value: "Content #1",
              inline: true,
            },
          ],
        },
      ],
    },
  },
  {
    scenarioName: "should set inline false when inline field is false",
    object: discord.message().addField({ name: "Field 1", value: "Content #1", inline: false }).buildPayload(),
    expected: {
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          fields: [
            {
              name: "Field 1",
              value: "Content #1",
              inline: false,
            },
          ],
        },
      ],
    },
  },
  {
    scenarioName: "should set inline false when inline field is false using multiple fields",
    object: discord
      .message()
      .addField({ name: "Field 1", value: "Content #1", inline: false })
      .addField({ name: "Field 2", value: "Content #2" })
      .addField({ name: "Field 3", value: "Content #3", inline: false })
      .addField({ name: "Field 4", value: "Content #4", inline: true })
      .buildPayload(),
    expected: {
      allowed_mentions: {
        parse: ["everyone"],
      },
      embeds: [
        {
          author: {
            name: NAME,
          },
          footer: {},
          fields: [
            {
              name: "Field 1",
              value: "Content #1",
              inline: false,
            },
            {
              name: "Field 2",
              value: "Content #2",
              inline: true,
            },
            {
              name: "Field 3",
              value: "Content #3",
              inline: false,
            },
            {
              name: "Field 4",
              value: "Content #4",
              inline: true,
            },
          ],
        },
      ],
    },
  },
];
