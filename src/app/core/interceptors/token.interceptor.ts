import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpHandlerFn,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export const tokenInterceptor:HttpInterceptorFn=(req:HttpRequest<any>,next:HttpHandlerFn)=>{
  const token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDRjNGJjMThiOWI2NDhmZjlmYzc4Nzk1MjM2MGE3YSIsInN1YiI6IjY0Y2QxZGUwNzA2ZTU2MDE0ZWM0YzkzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v8UL3bC5AgtJuqQal0m_Q6aMD7Hpsm0jWeq4eJPitn4'
  const request=req.clone({
    headers:req.headers.set('Authorization',`Bearer ${token}`)
  })
  return next(request).pipe(
    catchError((err:HttpErrorResponse)=>{
      return throwError(()=>new Error(err.message))
    })
  )
}