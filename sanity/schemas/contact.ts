import { defineField } from "sanity";

const contact = {
    name: 'contact',
    title: 'Contacts',
    type: 'document',
    fields: [
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string',
        }),
        defineField({
            name: 'linkToProfile',
            title: 'Link to profile',
            type: 'url'
        }),
        defineField({
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        })
    ]
}

export default contact;