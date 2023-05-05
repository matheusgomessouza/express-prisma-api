import express from "express";

declare global {
  namespace Express {
    interface Request {
      email?: Record<string,any>
      password?: Record<string,any>
    }
  }
}