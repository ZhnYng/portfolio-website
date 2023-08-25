const contact = {
    name: 'contact',
    title: 'Contacts',
    type: 'document',
    fields: [
        {
            name: 'username',
            title: 'Username',
            type: 'string',
        },
        {
            name: 'profileLink',
            title: 'Link to Profile',
            type: 'url'
        },
        {
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
        }
    ]
}

export default contact;