import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Welcome } from '@storybook/react/demo';
import ProductCards from '../src/components/ProductCard/ProductCards';
import ProductData from '../src/components/ProductCard/ProductData';
import Cards from '../src/components/ProductCard/Card'

storiesOf('Button',module)
    .add('with text',() => <Button>Hello World</Button>)
    .add('with emoji 😁',() => <Button><span role="img" aria-label="btn" >✌🆒</span></Button>)

storiesOf('Welcome',module)
    .add('with text',() => <Welcome />)

storiesOf('Card', module)
    .add('Without class name', () =>  (
        <Cards />
    ));