import { HttpStatus } from "@nestjs/common";

export type HttpResponse<T = any> = {
  status: number
  data: T
}

export const errorResponse = (error: Error): HttpResponse => {
  return {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    data: error.stack
  }
}

export const badRequestResponse = (error: any): HttpResponse => {
  return {
    status: HttpStatus.BAD_REQUEST,
    data: error
  }
};

export const forbiddenResponse = (error: any): HttpResponse => {
  return {
    status: HttpStatus.FORBIDDEN,
    data: error
  }
};

export const successResponse = (data: any): HttpResponse => {
  return {
    status: HttpStatus.OK,
    data
  }
}

export const noContentResponse = (): HttpResponse => {
  return {
    status: HttpStatus.NO_CONTENT,
    data: null
  }
}

export const notAcceptableResponse = (data: any): HttpResponse => {
  return {
    status: HttpStatus.NOT_ACCEPTABLE,
    data
  }
}

export const unauthorized = (data: any): HttpResponse => {
  return {
    status: HttpStatus.UNAUTHORIZED,
    data: 'Unauthorized'
  }
}