import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import Card from '../../molecules/Card/Card';
import ContainerContent from './ContainerContent';
import React from 'react';

export default { title: 'organisms/ContainerContent' };

export const Configurable = () => (
    <ContainerContent
        elevation={select('Elevation', ContainerContent.elevations, ContainerContent.defaultProps.elevation)}
        position={select('Position', ContainerContent.positions, ContainerContent.defaultProps.position)}
    >
        {text('Text', 'Configure me!')}
    </ContainerContent>
);

export const ConfigurableWithComponent = () => (
    <ContainerContent
        elevation={select('Elevation', ContainerContent.elevations, ContainerContent.defaultProps.elevation)}
        position={select('Position', ContainerContent.positions, ContainerContent.defaultProps.position)}
    >
        <Card
            elevation={Card.elevations.LEVEL_4}
        >
            <Button
                onClick={action('On click')}
            >
                {'Button for testing'}
            </Button>
        </Card>
    </ContainerContent>
);
