const initialState = [
    { 
        title: "Last Update",
        id: 0,
        cards: [
            {
                id: 0,
                title: 'Card-1 of list-1',
                date: 'March 24, 2020',
                description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Odit voluptatibus culpa possimus numquam voluptates error 
                aspernatur temporibus alias doloremque mollitia, fuga iusto ducimus, 
                id deleniti soluta ratione, molestiae eaque voluptatem?.`,
                author: 'Milek',
                assigned_to: [
                    {
                        user_id: 'u1',
                        name: 'Abhinav'
                    },
                    {
                        user_id: 'u2',
                        name: 'Raj'
                    }
                ]
            }
        ]

    },
    { 
        title: "Latest News",
        id: 1,
        cards: [
            {
                id: 0,
                title: 'Card-1 of list-2',
                date: 'March 24, 2020',
                description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Odit voluptatibus culpa possimus numquam voluptates error 
                aspernatur temporibus alias doloremque mollitia, fuga iusto ducimus, 
                id deleniti soluta ratione, molestiae eaque voluptatem?.`,
                author: 'Abhinav',
                assigned_to: [
                    {
                        user_id: 'u1',
                        name: 'Abhinav'
                    },
                    {
                        user_id: 'u2',
                        name: 'Raj'
                    }
                ]
            },
            {
                id: 1,
                title: 'Card-2 of list-2',
                date: 'March 24, 2020',
                description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Odit voluptatibus culpa possimus numquam voluptates error 
                aspernatur temporibus alias doloremque mollitia, fuga iusto ducimus, 
                id deleniti soluta ratione, molestiae eaque voluptatem?.`,
                author: 'Raj',
                assigned_to: [
                    {
                        user_id: 'u1',
                        name: 'Abhinav'
                    },
                    {
                        user_id: 'u2',
                        name: 'Raj'
                    }
                ]
            },
            {
                id: 2,
                title: 'Card-3 of list-2',
                date: 'March 24, 2020',
                description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Odit voluptatibus culpa possimus numquam voluptates error 
                aspernatur temporibus alias doloremque mollitia, fuga iusto ducimus, 
                id deleniti soluta ratione, molestiae eaque voluptatem?.`,
                author: 'Smit',
                assigned_to: [
                    {
                        user_id: 'u1',
                        name: 'Abhinav'
                    },
                    {
                        user_id: 'u2',
                        name: 'Raj'
                    }
                ]
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default listsReducer;