import { Embed } from "./Embed"
import { Field, FieldInterface } from "./Field"
import { Footer } from "./Footer"
import axios from 'axios'

interface MessageInterface {
  content?: string | undefined
  username?: string | undefined
  avatar_url?: string | undefined
  file?: string | undefined
  embeds: Embed
}

export abstract class Message implements MessageInterface {
  content?: string | undefined
  username?: string | undefined
  avatar_url?: string | undefined
  file?: string | undefined
  embeds: Embed
  webhook: string
  microserviceName: string

  constructor(microserviceName: string, webhook: string) {
    this.embeds = new Embed()
    this.webhook = webhook
    this.microserviceName = microserviceName
  }

  addContent = (content: string) => {
    this.content = content
    return this
  }

  addUsername = (username: string) => {
    this.username = username
    return this
  }

  addAvatarURl = (avatar_url: string) => {
    this.avatar_url = avatar_url
    return this
  }

  setColor = (color: number | undefined) => {
    this.embeds.color = color && color.toString() || undefined
    return this
  }

  addFooter = (footer: string) => {
    this.embeds.footer = new Footer(footer)
    return this
  }

  addAuthor = (author: string) => {
    this.embeds.author = author
    return this
  }

  addDescription = (description: string) => {
    this.embeds.description = description
    return this
  }

  addTitle = (title: string) => {
    this.embeds.title = title
    return this
  }

  addField = (field: FieldInterface) => {
    const { name, value, inline } = field
    const fieldObj = new Field(name, value, inline)

    this.embeds.fields.push(fieldObj)
    return this
  }

  buildPayload = () => {
    return {
      content: this.content,
      username: this.username,
      allowed_mentions: {
        "parse": ["everyone"]
      },
      avatar_url: this.avatar_url,
      file: this.file,
      embeds: [
        {
          author: {
            name: this.microserviceName,
          },
          footer: this.embeds.footer,
          description: this.embeds.description,
          title: this.embeds.title,
          color: this.embeds.color,
          fields: this.embeds.fields.map(({ name, value, inline }) => {
            return { name, value, inline }
          }),
        },
      ],
    }
  }

  sendMessage = async () => {
    axios.post(this.webhook, this.buildPayload())
      .then(() => {})
      .catch(() => {})
  }
}
