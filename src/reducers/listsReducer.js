import {CONSTANTS} from '../actions/index';

var listID = 2;
var cardID = 3;

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

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            };
            // eslint-disable-next-line no-const-assign
            listID+=1;
            return [...state,newList];

        case CONSTANTS.ADD_CARD:
            var options = {year: 'numeric', month: 'long', day: 'numeric' };
            var today  = new Date();

            const newCard = {
                title: action.payload.title,
                description: action.payload.description,
                id: cardID,
                author: 'Milek',
                date: today.toLocaleDateString("en-US", options),
                assigned_to: []
            };
            cardID+=1;

            const newState = state.map((list) => {
                if(list.id === action.payload.listID) {
                    return {...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });

            return newState;

        default: 
            return state;
    }
}

export default listsReducer;