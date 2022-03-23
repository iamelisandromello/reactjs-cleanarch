import { AccountModel } from '@/domain/models'
import { AuthenticationParams } from '@/domain/usecases/'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccount = (): AccountModel => ({
  accesToken: faker.random.uuid()
})
