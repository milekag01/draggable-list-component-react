import React from 'react';
import ListCard from './ListCard';

const List = ({title}) => {
    return (
        <div style={styles.container}>
            <h2>{title}</h2>
            <ListCard />
        </div>
    );
}
const styles={
    container: {
        backgroundColor: '#ccc',
        borderRadius: 4,
        width: 300,
        padding: 8
    }
}

export default List;
