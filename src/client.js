import sanityClient from "@sanity/client";
import imageUrlBuilder from "sanity/image-url";

export const client = sanityClient({
  projectId: process.env.sanityProjectID,
  dataset: "production",
  apiVersion: "2022-10-03",
  useCdn: true,
  token: process.env.sanityToken,
});

const builder = imageUrlBuilder(client);

export const UrlFor = (source) => builder.image(source);
