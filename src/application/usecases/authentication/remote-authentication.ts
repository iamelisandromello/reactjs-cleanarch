import { HttpPostClient, HttpStatusCode } from '@/application/contracts/http'
import { AuthenticationParams, Authentication } from '@/domain/usecases'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { AccountEntity } from '@/domain/entities'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountEntity>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountEntity> {
    const htppResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (htppResponse.statusCode) {
      case HttpStatusCode.ok: return htppResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
