import { groq } from "next-sanity";

export const homeQuery = groq`{
  "settings": *[_type == "siteSettings"][0]{
    ...,
    "profileImage": profileImage,
    "cvFileTrUrl": cvFileTr.asset->url,
    "cvFileEnUrl": cvFileEn.asset->url
  },
  "skills": *[_type == "skillCategory"] | order(order asc),
  "experience": *[_type == "experience"] | order(order asc),
  "education": *[_type == "education"] | order(order asc),
  "projects": *[_type == "project"] | order(order asc)
}`;
