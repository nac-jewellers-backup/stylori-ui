import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';
import StoryRouter from 'storybook-react-router';

import { Button, Welcome } from '@storybook/react/demo';
import ProductCards from '../src/components/ProductCard/ProductCards';
// import ProductData from '../src/components/ProductCard/ProductData';
import Cards from '../src/components/ProductCard/Card'

addDecorator(muiTheme());
addDecorator(StoryRouter());


storiesOf('Card', module)
    .add('Without class name', () =>  (
        <Cards />
    ));