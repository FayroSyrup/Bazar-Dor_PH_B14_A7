
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const mongodbUri = process.env.MONGODB_URI;

if (!mongodbUri) {
  throw new Error("MONGODB_URI is missing from .env.local");
}

const client = new MongoClient(mongodbUri);
const db = client.db();

export const auth = betterAuth({
  // Your application's URL, NOT the MongoDB connection string
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",

  // MongoDB database connection
  database: mongodbAdapter(db),

  // Email and password authentication
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },

  // Google and GitHub authentication
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});
