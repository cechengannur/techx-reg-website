const menus = [
    // {
    //     id: 1,
    //     name: 'Home',
    //     links: '/',
    //     // namesub: [
    //     //     {
    //     //         id: 1,
    //     //         sub: 'Home',
    //     //         links: '/'
    //     //     },
    //     //     {
    //     //         id: 2,
    //     //         sub: 'Home 02',
    //     //         links: '/home-v2'
    //     //     },
    //     //     {
    //     //         id: 3,
    //     //         sub: 'Home 03',
    //     //         links: '/home-v3'
    //     //     },
    //     // ]
    // },
    {
        id: 1,
        name: 'About',
        links: '/about',
        namesub: [
            {
                id: 1,
                sub: 'FAQ',
                links: '/faq'
            },
            // {
            //     id: 1,
            //     sub: 'Coming Soon',
            //     links: '/coming-soon'
            // },
            // {
            //     id: 1,
            //     sub: 'Community',
            //     links: '/community'
            // },
            // {
            //     id: 2,
            //     sub: 'Team Details',
            //     links: '/team-details'
            // },
            // {
            //     id: 3,
            //     sub: 'FAQ',
            //     links: '/faq'
            // },
            // {
            //     id: 5,
            //     sub: '404',
            //     links: '/404'
            // },

        ]
    },
    {
        id: 2,
        name: 'Events',
        links: '/events',  ///'nft-item'
        // namesub: [
        //     {
        //         id: 1,
        //         sub: 'Nft Item',
        //         links: '/nft-item'
        //     },
        //     {
        //         id: 1,
        //         sub: 'Event Details',
        //         links: '/nft-item-details'
        //     },
        // ],
    },
    {
        id: 3,
        name: 'Job Fair',
        links: '/',
        namesub: [
                {
                    id: 1,
                    sub: 'Candidates',
                    links: '/guidelines',
                },
                {
                    id: 2,
                    sub: 'Companies',
                    links: '/register'
                },
                {
                    id: 3,
                    sub: 'Company-list',
                    links: '/company-list'
                }
        ],
    },
    {
        id: 4,
        name: 'Downloads',
        links: '/download',
    },
    {
        id: 5,
        name: 'Gallery',
        links: '/gallery',
    },
    
    {
        id: 6,
        name: 'Pre-Events',
        links: '/pre-events',

    },
    {
        id: 7,
        name: 'Arcade',
        links: '/arcade',
    },
    // {
    //     id: 5,
    //     name: 'Blog',
    //     links: '#',
    //     namesub: [
    //         {
    //             id: 1,
    //             sub: 'Our Blog',
    //             links: '/blog'
    //         },
    //         {
    //             id: 2,
    //             sub: 'Blog Details',
    //             links: '/blog-details'
    //         },
    //     ],
    // },
    {
        id: 8,
        name: 'Contact',
        links: '/contact'
    },
    
]

export default menus;