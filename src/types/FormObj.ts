export type UserRegistrationObj = {
  firstname: string
  lastname: string
  email: string
  password: string
  confirmPassword: string
}

export type UserLoginObj = {
  email: string
  password: string
}

export type UserObj = {
  firstname: string
  lastname: string
  email: string
  user_preferences?: {
    categories?: Array<string>
    authors?: Array<string>
    sources?: Array<string>
  }
}
