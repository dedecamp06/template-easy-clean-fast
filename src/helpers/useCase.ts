import { HttpResponse } from '@/helpers/contracts'

export interface UseCase<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}