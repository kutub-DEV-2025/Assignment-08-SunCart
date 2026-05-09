import { betterAuth } from "better-auth";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
trustedOrigins: [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:4173",
  ...(process.env.VERCEL_URL ? [`https://${process.env.VERCEL_URL}`, `http://${process.env.VERCEL_URL}`] : []),
],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});