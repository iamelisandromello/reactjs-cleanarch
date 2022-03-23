import { AccountEntity } from '@/domain/entities'
import { AuthenticationParams } from '@/domain/usecases/'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccount = (): AccountEntity => ({
  accesToken: faker.random.uuid()
})
