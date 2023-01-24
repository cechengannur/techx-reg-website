const menus = [  

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
        ]
    },
    {
        id: 2,
        name: 'Events',
        links: '/events',  ///'nft-item'        
    },
    {
        id: 3,
        name: 'Job Fair',
        links: '/',
        namesub: [
                {
                    id: 1,
                    sub: 'Candidate Registration',
                    links: '/guidelines',
                },
                {
                    id: 2,
                    sub: 'Company Registration',
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
        name: 'Accomodation',
        links: '/',
        namesub: [
            {
                id: 1,
                sub: 'For Boys',
                links: '/fba'
            },  
            {
                id: 2,
                sub: 'For Girls',
                links: '/fga'
            },          
        ]
    },
    
    {
        id: 5,
        name: 'Downloads',
        links: '/download',
    },
    {
        id: 6,
        name: 'Gallery',
        links: '/gallery',
    },
    
    {
        id: 7,
        name: 'Pre-Events',
        links: '/pre-events',

    },
    {
        id: 8,
        name: 'Arcade',
        links: '/arcade',
    },  
    {
        id: 9,
        name: 'Contact',
        links: '/contact'
    },
    
]

export default menus;