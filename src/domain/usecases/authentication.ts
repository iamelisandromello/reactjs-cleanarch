import { AccountEntity } from '@/domain/entities/account-entity'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth (params: AuthenticationParams): Promise<AccountEntity>
}
