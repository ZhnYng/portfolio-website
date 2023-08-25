import { PortableTextBlock } from "sanity";

export type About = {
    _id: string;
    _createdAt: Date;
    title: string;
    image: string;
    imageDesc: string;
    content: PortableTextBlock[];
}