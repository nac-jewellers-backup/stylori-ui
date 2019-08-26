import React from 'react';
import './chckout.css'
import {
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Avatar
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Login from './loginRegister/login';
import Addressform from './addressDetails/addressForm';
import ProductList from './orderSummary/productList';
class Chckoutindex extends React.Component {
    state = {
        expanded: 'panel1',
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { expanded } = this.state;
        return (
            <div className='pt-sm'>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel1'}
                    onChange={this.handleChange('panel1')}
                >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                        <Avatar className='avart-ckc'>1</Avatar><Typography className='text-chck'> Login or Register</Typography>
                    </ExpansionPanelSummary >
                    <ExpansionPanelDetails 
                    >
                        <Typography>
                            <Login/>
                         </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel2'}
                    onChange={this.handleChange('panel2')}
                >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                        <Avatar className='avart-ckc'>2</Avatar><Typography className='text-chck'>Address Detail</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <Addressform/>  
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel3'}
                    onChange={this.handleChange('panel3')}
                >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                        <Avatar className='avart-ckc'>3</Avatar><Typography className='text-chck'>Order Summary</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                           <ProductList/>
                              </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel4'}
                    onChange={this.handleChange('panel4')}
                >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                        <Avatar className='avart-ckc'>4</Avatar><Typography className='text-chck'>Order Summary</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                              </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>



            </div>
        )
    }
}
export default Chckoutindex;