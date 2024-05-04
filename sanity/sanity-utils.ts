import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import * as SanityTypes from "./types";
const revalidate = 0;

export async function getProjects(): Promise<SanityTypes.ProjectsQueryResult> {
  const projectsQuery = groq`
    *[_type == "project"] {
      _id,
      _updatedAt,
      name,
      completionDate,
      "image": image.asset->url,
      "technologies": technologies[]->{
        ...,
        "imageUrl": image.asset->url,
      },
      "slug": slug.current,
      projectUrl,
      repositoryUrl,
      elevatorPitch,
    } | order(_updatedAt desc)
  `;
  return createClient(clientConfig).fetch(
    projectsQuery,
    { revalidate: revalidate },
    { cache: "no-store" }
  );
}

export async function getProject(slug: string): Promise<SanityTypes.ProjectQueryResult> {
  const projectQuery = groq`
    *[_type=="project" && slug.current==$slug][0]{
      _id,
      _updatedAt,
      name,
      completionDate,
      "image": image.asset->url,
      "technologies": technologies[]->{
        ...,
        "imageUrl": image.asset->url,
      },
      "slug": slug.current,
      projectUrl,
      repositoryUrl,
      elevatorPitch,
      content
    }
  `;
  return createClient(clientConfig).fetch(
    projectQuery,
    { slug: slug },
    { cache: "no-store" }
  );
}

// export async function getPages(): Promise<Page[]> {
//     return createClient(clientConfig).fetch(
//         groq`*[_type=="page"]{
//             _id,
//             _createdAt,
//             title,
//             "slug": slug.current
//         }`,
//         { revalidate: revalidate },
//         { cache: 'no-store' }
//     )
// }

// export async function getPage(slug: string): Promise<Page> {
//     return createClient(clientConfig).fetch(
//         groq`*[_type=="page" && slug.current==$slug][0]{
//             _id,
//             _createdAt,
//             title,
//             "slug": slug.current,
//             content
//         }`,
//         { slug },
//         { next: { revalidate: revalidate } },
//     )
// }

// export async function getHackathons(): Promise<Hackathon[]> {
//     return createClient(clientConfig).fetch(
//         groq`*[_type=="hackathon"]{
//             _id,
//             _createdAt,
//             name,
//             "slug": slug.current,
//             "image": image.asset->url,
//             url,
//             content
//         }`,
//         { revalidate: revalidate },
//         {cache: 'no-store'}
//     )
// }

// export async function getHackathon(slug: string): Promise<Hackathon> {
//     return createClient(clientConfig).fetch(
//         groq`*[_type=="hackathon" && slug.current==$slug][0]{
//             _id,
//             _createdAt,
//             name,
//             "slug": slug.current,
//             "image": image.asset->url,
//             url,
//             content,
//         }`,
//         {slug: slug},
//         { next: { revalidate: revalidate } },
//     )
// }

export async function getContacts(): Promise<SanityTypes.ContactsQueryResult> {
  const contactsQuery = groq`
    *[_type=="contact"]{
        _id,
        _updatedAt,
        username,
        linkToProfile,
        "favicon": {
          ...favicon,
          "url": favicon.asset->url,
        }
    }
  `
  return createClient(clientConfig).fetch(
    contactsQuery,
    { revalidate: revalidate },
    { cache: "no-store" }
  );
}

export async function getAbout(name:string): Promise<SanityTypes.AboutQueryResult> {
  const aboutQuery = groq`
    *[_type=="about" && name==$name][0]{
      _id,
      _updatedAt,
      name,
      introduction,
      "image1": {
        ...image1,
        "url": image1.asset->url, 
      },
      "image2": {
        ...image2,
        "url": image2.asset->url, 
      },
      "image3": {
        ...image3,
        "url": image3.asset->url, 
      },
    }
  `
  return createClient(clientConfig).fetch(
    aboutQuery,
    { name: name },
    { cache: "no-store" }
  );
}