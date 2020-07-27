import { Embed } from "./Embed";
import { FieldInterface } from "./Field";
import { Footer } from "./Footer";
interface MessageInterface {
    content?: string | undefined;
    username?: string | undefined;
    avatar_url?: string | undefined;
    file?: string | undefined;
    embeds: Embed;
}
export declare abstract class Message implements MessageInterface {
    content?: string | undefined;
    username?: string | undefined;
    avatar_url?: string | undefined;
    file?: string | undefined;
    embeds: Embed;
    webhook: string;
    microserviceName: string;
    constructor(microserviceName: string, webhook: string);
    addContent: (content: string) => this;
    addUsername: (username: string) => this;
    addAvatarURl: (avatar_url: string) => this;
    setColor: (color: number | undefined) => this;
    addFooter: (footer: string) => this;
    addAuthor: (author: string) => this;
    addDescription: (description: string) => this;
    addTitle: (title: string) => this;
    addField: (field: FieldInterface) => this;
    buildPayload: () => {
        content: string | undefined;
        username: string | undefined;
        allowed_mentions: {
            "parse": string[];
        };
        avatar_url: string | undefined;
        file: string | undefined;
        embeds: {
            author: {
                name: string;
            };
            footer: Footer | undefined;
            description: string | undefined;
            title: string | undefined;
            color: string | undefined;
            fields: {
                name: string;
                value: string;
                inline: boolean;
            }[];
        }[];
    };
    sendMessage: () => Promise<void>;
}
export {};
