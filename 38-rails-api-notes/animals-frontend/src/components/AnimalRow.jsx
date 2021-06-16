import React from 'react';
import {Table} from 'semantic-ui-react';

const AnimalRow = ({animal}) => {
    return (
        <Table.Row>
            <Table.Cell>{animal.name}</Table.Cell>
            <Table.Cell>{animal.gender}</Table.Cell>
            <Table.Cell>{animal.species.name}</Table.Cell>
        </Table.Row>
    );
}

export default AnimalRow;
