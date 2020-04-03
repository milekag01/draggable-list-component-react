import React from 'react';
import ListCard from './ListCard';
import ActionButton from './ActionButton';

const List = ({title, cards}) => {
    return (
        <div style={styles.container}>
            <h2 style={{paddingLeft: "3px"}}>{title}</h2>
            {
                cards.map((card) => (
                    <ListCard card={card} />
                ))
            }
            <ActionButton />
        </div>
    );
}
const styles={
    container: {
        backgroundColor: '#dfe3e6',
        borderRadius: 4,
        width: 300,
        padding: 8,
        marginRight: 10,
        height: '100%'
    }
}

export default List;
