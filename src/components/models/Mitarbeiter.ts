import { FluidObject } from 'gatsby-image'
import { Edge } from '../../pages'

export default class Mitarbeiter {
  private index: number
  private title: string
  private alt: string
  private firstName: string
  private lastName: string
  private job: string
  private email: string
  private image?: FluidObject

  constructor({
    index,
    title,
    alt,
    firstName,
    lastName,
    job,
    email,
  }: {
    index: number
    title: string
    alt: string
    firstName: string
    lastName: string
    job: string
    email: string
  }) {
    this.index = index
    this.title = title
    this.alt = alt
    this.firstName = firstName
    this.lastName = lastName
    this.job = job
    this.email = email
  }

  get getIndex(): number {
    return this.index
  }

  get getTitle(): string {
    return this.title
  }

  get getAlt(): string {
    return this.alt
  }

  get getFirstName(): string {
    return this.firstName
  }

  get getLastName(): string {
    return this.lastName
  }

  get getName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  get getJob(): string {
    return this.job
  }

  get getEmail(): string {
    return this.email
  }

  get getImage(): FluidObject {
    if (this.image) {
      return this.image
    }
    return {} as FluidObject
  }

  setImage(edges: Edge[]): this {
    edges.map(({ node: { name, childImageSharp: { fluid } } }) => {
      if (name && name.includes(this.firstName)) {
        this.image = fluid
      }
    })
    return this
  }
}
