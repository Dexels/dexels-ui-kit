import { boolean, select, text } from '@storybook/addon-knobs';
import Button from '../../molecules/Button/Button';
import Card from './Card';
import React from 'react';
import { storiesOf } from '@storybook/react';

export default {
    component: Card,
    title: 'atoms/Card',
};

const notes = 'Add some nice things';

// export const Configurable = () => (
//     <Card
//         elevation={select('Elevation', Card.elevations, Card.defaultProps.elevation)}
//         hasBorderRadius={boolean('Has border radius', Card.defaultProps.hasBorderRadius)}
//         position={select('Position', Card.positions, Card.defaultProps.position)}
//     >
//         {text('Text', 'Configure me!')}
//     </Card>
// );

// export const ConfigurableWithComponent = () => (
//     <Card
//         elevation={select('Elevation', Card.elevations, Card.defaultProps.elevation)}
//         hasBorderRadius={boolean('Has border radius', Card.defaultProps.hasBorderRadius)}
//         position={select('Position', Card.positions, Card.defaultProps.position)}
//     >
//         <Button
//             onClick={() => {}}
//         >
//             {'Button for testing'}
//         </Button>
//     </Card>
// );

const Configurable1 = () => (
    <Card
        elevation={select('Elevation', Card.elevations, Card.defaultProps.elevation)}
        hasBorderRadius={boolean('Has border radius', Card.defaultProps.hasBorderRadius)}
        position={select('Position', Card.positions, Card.defaultProps.position)}
    >
        {text('Text', 'Configure me!')}
    </Card>
);

storiesOf('atoms/Card', module).add(
    'Card',
    () => (
        <Card
            elevation={select('Elevation', Card.elevations, Card.defaultProps.elevation)}
            hasBorderRadius={boolean('Has border radius', Card.defaultProps.hasBorderRadius)}
            position={select('Position', Card.positions, Card.defaultProps.position)}
        >
            {text('Text', 'Configure me!')}
        </Card>
    ),
    {
        notes,
    },
);
