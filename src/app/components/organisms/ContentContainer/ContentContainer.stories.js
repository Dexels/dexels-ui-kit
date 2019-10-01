import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import Card from '../../molecules/Card/Card';
import ContentContainer from './ContentContainer';
import React from 'react';

export default { title: 'organisms/ContentContainer' };

export const Configurable = () => (
    <ContentContainer
        elevation={select('Elevation', ContentContainer.elevations, ContentContainer.defaultProps.elevation)}
        height={text('Set height in px or %', ContentContainer.defaultProps.height)}
        padding={text('Set padding in px or %', ContentContainer.defaultProps.padding)}
        position={select('Position', ContentContainer.positions, ContentContainer.defaultProps.position)}
        width={text('Set width in px or %', ContentContainer.defaultProps.width)}
    >
        {text('Text', 'Configure me!')}
    </ContentContainer>
);

export const ConfigurableWithComponent = () => (
    <ContentContainer
        elevation={select('Elevation', ContentContainer.elevations, ContentContainer.defaultProps.elevation)}
        height={text('Set height in px or %', ContentContainer.defaultProps.height)}
        padding={text('Set padding in px or %', ContentContainer.defaultProps.padding)}
        position={select('Position', ContentContainer.positions, ContentContainer.defaultProps.position)}
        width={text('Set width in px or %', ContentContainer.defaultProps.width)}
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
    </ContentContainer>
);
