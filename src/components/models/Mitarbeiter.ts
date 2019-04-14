import { FluidObject } from 'gatsby-image'

export default class Mitarbeiter {
  private index: number
  private alt: string
  private firstName: string
  private lastName: string
  private job: string
  private email: string
  private image: FluidObject

  constructor({
    index,
    alt,
    firstName,
    lastName,
    job,
    email,
    image,
  }: {
    index: number
    alt: string
    firstName: string
    lastName: string
    job: string
    email: string
    image: FluidObject
  }) {
    this.index = index
    this.alt = alt
    this.firstName = firstName
    this.lastName = lastName
    this.job = job
    this.email = email
    this.image = image
  }

  get getIndex(): number {
    return this.index
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
    return this.image
  }
}
