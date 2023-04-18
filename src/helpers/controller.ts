import { HttpResponse } from '@/presentation/contracts'

export interface UseCase<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}