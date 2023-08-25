// This file contains all the functions we are going to use to grab data
import { createClient, groq } from 'next-sanity'
import clientConfig from './config/client-config';
import { Project } from '@/types/Project';
import { Page } from '@/types/Pages';
import { Hackathon } from '@/types/Hackathons';
const revalidate = 0

export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            githubUrl,
            content
        }`,
        {next: { revalidate: revalidate }},
        {cache: 'no-store'}
    )
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type=="project" && slug.current==$slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            githubUrl,
            content
        }`,
        {slug: slug},
        // { next: { revalidate: revalidate } },
        { cache: 'no-store' }
    )
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type=="page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`,
        { next: { revalidate: revalidate } },
        { cache: 'no-store' }
    )
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type=="page" && slug.current==$slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        { slug },
        { next: { revalidate: revalidate } },
        // { cache: 'no-store' }
    )
}

export async function getHackathons(): Promise<Hackathon[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type=="hackathon"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        {next: { revalidate: revalidate }},
        // {cache: 'no-store'}
    )
}

export async function getHackathon(slug: string): Promise<Hackathon> {
    return createClient(clientConfig).fetch(
        groq`*[_type=="hackathon" && slug.current==$slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`,
        {slug: slug},
        { next: { revalidate: revalidate } },
        // { cache: 'no-store' }
    )
}