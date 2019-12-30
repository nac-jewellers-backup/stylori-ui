#header

    >This is for listing out the menu items in the header

        >###Example
            >**menuListHeader** - An array of strings
            >export const menuListHeader = ['Whats New', 'Jewellery', 'Solitaires', 'Gold Coins', 'Gifts', 'Collections', 'One Day Sipping', 'Stories' ]

#HeaderHoverMenuItem

        >This is for a paper displayed on hovering menu items in header component
        >Data is passsed in two types 
            >RawData - Type is of Object
            >RawData with hovering menu list
        
        >###Example

            >   export const menuLists = {
                'Jewellery': {
                'menuOne':
                    [{ value: 'earings', title: 'Earrings', url: '#Earrings' },
                    { value: 'pendants', title: 'Pendants', url: '#' },
                    { value: 'rings', title: 'Rings', url: '#' },
                    { value: 'nosepins', title: 'Nose pins', url: '#' },
                    { value: 'banglesbracelets', title: 'Bangles & Bracelets', url: '#' },
                    ],
                'menuTwo': [{ value: 'Price', title: 'By Price', url: '#Price' },
                    { value: 'Collection', title: 'By Collection', url: '#' },
                    { value: 'Material', title: 'By Material', url: '#' },
                    ]
                    },
                    }

            >   export const earings = {
                    images: [
                        {
                            img: 'https://assets-cdn.stylori.com/images/megamenu/studs.jpg',
                            title: 'Breakfast',
                            author: 'jill111',
                        },
                        {
                            img: 'https://assets-cdn.stylori.com/images/megamenu/drops.jpg',
                            title: 'Tasty burger',
                            author: 'director90',
                        },
                        {
                            img: 'https://assets-cdn.stylori.com/images/megamenu/ear-cuffs.jpg',
                            title: 'Tasty burger',
                            author: 'director90',
                        },
                        {
                            img: 'https://assets-cdn.stylori.com/images/megamenu/huggies.jpg',
                            title: 'Tasty burger',
                            author: 'director90',

                        },
                        {
                            img: 'https://assets-cdn.stylori.com/images/megamenu/jhumkas.jpg',
                            title: 'Tasty burger',
                            author: 'director90',
                        },
                        {
                            img: 'https://assets-cdn.stylori.com/images/megamenu/ear-jacket.jpg',
                            title: 'Tasty burger',
                            author: 'director90',
                        },
                    ],
                    sideBanner: [
                        {
                            img: 'https://assets-cdn.stylori.com/images/megamenu/stylori_menu_banner01.jpg',
                            title: 'Breakfast',
                            author: 'jill111',
                        },
                    ]
                }
                }
