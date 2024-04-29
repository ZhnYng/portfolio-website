const about = {

    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        },
        {
            name: 'imageDesc',
            title: 'Image Desciption',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: "block"}],
        }
    ]
}

export default about;