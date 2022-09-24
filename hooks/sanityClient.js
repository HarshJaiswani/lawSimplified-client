import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "gov5eqnr",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-09-19",
});
