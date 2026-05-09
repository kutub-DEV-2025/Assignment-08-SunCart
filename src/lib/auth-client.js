"use client";

import { createAuthClient } from "better-auth/react";


export const authClient = createAuthClient({
  baseURL: 'https://assignment-08-sun-cart-gray.vercel.app/',
});