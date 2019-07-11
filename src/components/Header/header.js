import React, { Component } from 'react';
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Hidden } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import JewelleryMenuItem from '../../screens/Stylori/JewlleryMenuItem';
import HeaderNotification from './Notification/HeaderNotification'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      panel: false,
      panel1: false,
      Menuopen: false,
      selected: '',
      Checked: false,
    }
  }
  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }
  handleClick = (e, name, value) => {
    this.setState({ [name]: !value })
  };
  selectItem = (name) => {
    let { selected } = this.state;
    let value = selected === name ? "" : name;
    this.setState({ selected: value })
  }
  render() {
    // const mainliast = [
    //   'Whats New', 'Jewellery', 'Solitaires', 'Gold Coins', 'Gifts', 'Colleactions', 'One Day Shopping', 'Stories'
    // ];
     const mainliast= [
      {
        name: "Whats New",
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JmYmZiZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjAuNCw5MS43MzMzM2gtMjguNjY2Njd2MjguNjY2NjdjMCwzLjE3MDUzIC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdoLTI4LjY2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41NjI4IC01LjczMzMzLC01LjczMzMzYzAsLTMuMTcwNTMgMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzaDI4LjY2NjY3di0yOC42NjY2N2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTYyOCA1LjczMzMzLDUuNzMzMzN2MjguNjY2NjdoMjguNjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2MjggNS43MzMzMyw1LjczMzMzYzAsMy4xNzA1MyAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=',
        url: "/#/",
      },
      {
        name: "Jewellery",
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NWwtNjQuNSwyMi44NDM3NXY4MC42MjVsNjQuNSwyMi44NDM3NWw2NC41LC0yMi44NDM3NXoiIGZpbGw9IiNiZmJmYmYiPjwvcGF0aD48cGF0aCBkPSJNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1bC02NC41LDIyLjg0Mzc1djgwLjYyNWw2NC41LDIyLjg0Mzc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMS41LDYzLjE1NjI1bC0xNi4xMjUsMjYuODc1bDY0LjUsMjIuODQzNzVsMTYuMTI1LC0yNi44NzV6TTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw5MC4wMzEyNWMtMS42MTI1LDAgLTMuMjI1LC0xLjA3NSAtMy43NjI1LC0yLjY4NzVjLTAuODA2MjUsLTIuMTUgMC40MDMxMywtNC40MzQzOCAyLjQxODc1LC01LjEwNjI1bDY0LjUsLTIyLjg0Mzc1YzIuMTUsLTAuODA2MjUgNC40MzQzNywwLjQwMzEyIDUuMTA2MjUsMi40MTg3NWMwLjgwNjI1LDIuMTUgLTAuNDAzMTIsNC40MzQzOCAtMi40MTg3NSw1LjEwNjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNzAuNjU2MjVjLTAuODA2MjUsMCAtMS42MTI1LC0wLjI2ODc1IC0yLjI4NDM3LC0wLjY3MTg3Yy0xLjA3NSwtMC44MDYyNSAtMS43NDY4OCwtMi4wMTU2MiAtMS43NDY4OCwtMy4zNTkzN3YtMzguMDI4MTJjMCwtMi4yODQzOCAxLjc0Njg4LC00LjAzMTI1IDQuMDMxMjUsLTQuMDMxMjVjMi4yODQzNywwIDQuMDMxMjUsMS43NDY4OCA0LjAzMTI1LDQuMDMxMjV2MzIuMzg0MzhsNTYuNDM3NSwtMjAuMDIxODh2LTc3LjgwMzEyYzAsLTIuMjg0MzggMS43NDY4NywtNC4wMzEyNSA0LjAzMTI1LC00LjAzMTI1YzIuMjg0MzgsMCA0LjAzMTI1LDEuNzQ2ODcgNC4wMzEyNSw0LjAzMTI1djgwLjYyNWMwLDEuNzQ2ODcgLTEuMDc1LDMuMjI1IC0yLjY4NzUsMy43NjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSw2My4xNTYyNWwtNjQuNSwtMjIuODQzNzVNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1TTg2LDg2bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNy40Njg3NSwxNDMuNzgxMjVjMCwxLjc0Njg3IDEuMDc1LDMuMjI1IDIuNjg3NSwzLjc2MjVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzggMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjYxMjUsMCAzLjIyNSwtMS4wNzUgMy43NjI1LC0yLjY4NzVjMC44MDYyNSwtMi4xNSAtMC40MDMxMywtNC40MzQzNyAtMi40MTg3NSwtNS4xMDYyNWwtNjEuODEyNSwtMjEuOTAzMTN2LTQzLjgwNjI1bC04LjA2MjUsLTIuODIxODh6IiBmaWxsPSIjNDQ0YjU0Ij48L3BhdGg+PHBhdGggZD0iTTE2Ni42MjUsOTAuMDMxMjVsLTY0LjUsMjIuODQzNzVsLTE2LjEyNSwtMjYuODc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuMTE4NzUsODguMDE1NjNsLTE2LjEyNSwtMjYuODc1bC0wLjEzNDM4LC0wLjEzNDM3YzAsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMjY4NzVjLTAuMTM0MzcsLTAuMTM0MzggLTAuMTM0MzcsLTAuMjY4NzUgLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMTM0MzggLTAuNDAzMTIsLTAuMjY4NzVjLTAuMTM0MzgsMCAtMC4xMzQzOCwtMC4xMzQzOCAtMC4yNjg3NSwtMC4xMzQzOGMtMC4yNjg3NSwtMC4xMzQzNyAtMC40MDMxMiwtMC4yNjg3NSAtMC42NzE4NywtMC4yNjg3NXYwbC02NC41LC0yMi44NDM3NWMtMC4yNjg3NSwtMC4xMzQzNyAtMC41Mzc1LC0wLjEzNDM3IC0wLjgwNjI1LC0wLjEzNDM3aC0wLjEzNDM3Yy0wLjI2ODc1LDAgLTAuNDAzMTMsMCAtMC42NzE4NywwYy0wLjEzNDM4LDAgLTAuMTM0MzgsMCAtMC4yNjg3NSwwYy0wLjI2ODc1LDAgLTAuNTM3NSwwLjEzNDM3IC0wLjgwNjI1LDAuMTM0MzdsLTY0LjUsMjIuODQzNzV2MGMwLDAgLTAuMTM0MzgsMCAtMC4xMzQzOCwwLjEzNDM4djBjLTAuMTM0MzcsMC4xMzQzNyAtMC40MDMxMiwwLjEzNDM3IC0wLjUzNzUsMC4yNjg3NXYwdjBjLTAuMjY4NzUsMC4xMzQzNyAtMC41Mzc1LDAuNDAzMTIgLTAuODA2MjUsMC42NzE4OHYwbC0wLjEzNDM3LDAuMTM0Mzd2MGMtMC4xMzQzNywwLjEzNDM4IC0wLjEzNDM3LDAuMjY4NzUgLTAuMjY4NzUsMC4yNjg3NXYwYzAsMCAwLDAgLTAuMTM0MzgsMC4xMzQzOGwtMTYuMTI1LDI2Ljg3NWMtMC42NzE4OCwwLjk0MDYyIC0wLjgwNjI1LDIuMjg0MzcgLTAuNDAzMTMsMy4zNTkzOGMwLjQwMzEyLDEuMDc1IDEuMzQzNzUsMi4wMTU2MyAyLjQxODc1LDIuNDE4NzVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzcgMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjM0Mzc1LDAgMi42ODc1LC0wLjY3MTg3IDMuNDkzNzUsLTIuMDE1NjJsMTIuNjMxMjUsLTIxLjA5Njg3bDEyLjYzMTI1LDIxLjA5Njg3YzAuODA2MjUsMS4zNDM3NSAyLjE1LDIuMDE1NjMgMy40OTM3NSwyLjAxNTYzYzAuNDAzMTMsMCAwLjk0MDYyLC0wLjEzNDM3IDEuMzQzNzUsLTAuMjY4NzVsNjQuNSwtMjIuODQzNzVjMS4wNzUsLTAuNDAzMTMgMi4wMTU2MywtMS4zNDM3NSAyLjQxODc1LC0yLjQxODc1YzAuNDAzMTMsLTEuMDc1IDAuMjY4NzUsLTIuNDE4NzUgLTAuMjY4NzUsLTMuMzU5Mzd6TTkwLjAzMTI1LDQ1Ljk1NjI1bDQ4LjM3NSwxNy4ybC00OC4zNzUsMTcuMnpNNjguMTI4MTMsMTA4LjAzNzVsLTU2LjcwNjI1LC0yMC4xNTYyNWwxMS45NTkzNywtMTkuODg3NWw1Ni43MDYyNSwyMC4xNTYyNXpNMTAzLjg3MTg4LDEwOC4wMzc1bC0xMS45NTkzOCwtMTkuODg3NWw1Ni43MDYyNSwtMjAuMTU2MjVsMTEuOTU5MzcsMTkuODg3NXoiIGZpbGw9IiM0NDRiNTQiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==',
        url: "/#/",
      },
        {
          name: "Pendants",
          url: "/#/",
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NWwtNjQuNSwyMi44NDM3NXY4MC42MjVsNjQuNSwyMi44NDM3NWw2NC41LC0yMi44NDM3NXoiIGZpbGw9IiNiZmJmYmYiPjwvcGF0aD48cGF0aCBkPSJNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1bC02NC41LDIyLjg0Mzc1djgwLjYyNWw2NC41LDIyLjg0Mzc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMS41LDYzLjE1NjI1bC0xNi4xMjUsMjYuODc1bDY0LjUsMjIuODQzNzVsMTYuMTI1LC0yNi44NzV6TTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw5MC4wMzEyNWMtMS42MTI1LDAgLTMuMjI1LC0xLjA3NSAtMy43NjI1LC0yLjY4NzVjLTAuODA2MjUsLTIuMTUgMC40MDMxMywtNC40MzQzOCAyLjQxODc1LC01LjEwNjI1bDY0LjUsLTIyLjg0Mzc1YzIuMTUsLTAuODA2MjUgNC40MzQzNywwLjQwMzEyIDUuMTA2MjUsMi40MTg3NWMwLjgwNjI1LDIuMTUgLTAuNDAzMTIsNC40MzQzOCAtMi40MTg3NSw1LjEwNjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNzAuNjU2MjVjLTAuODA2MjUsMCAtMS42MTI1LC0wLjI2ODc1IC0yLjI4NDM3LC0wLjY3MTg3Yy0xLjA3NSwtMC44MDYyNSAtMS43NDY4OCwtMi4wMTU2MiAtMS43NDY4OCwtMy4zNTkzN3YtMzguMDI4MTJjMCwtMi4yODQzOCAxLjc0Njg4LC00LjAzMTI1IDQuMDMxMjUsLTQuMDMxMjVjMi4yODQzNywwIDQuMDMxMjUsMS43NDY4OCA0LjAzMTI1LDQuMDMxMjV2MzIuMzg0MzhsNTYuNDM3NSwtMjAuMDIxODh2LTc3LjgwMzEyYzAsLTIuMjg0MzggMS43NDY4NywtNC4wMzEyNSA0LjAzMTI1LC00LjAzMTI1YzIuMjg0MzgsMCA0LjAzMTI1LDEuNzQ2ODcgNC4wMzEyNSw0LjAzMTI1djgwLjYyNWMwLDEuNzQ2ODcgLTEuMDc1LDMuMjI1IC0yLjY4NzUsMy43NjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSw2My4xNTYyNWwtNjQuNSwtMjIuODQzNzVNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1TTg2LDg2bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNy40Njg3NSwxNDMuNzgxMjVjMCwxLjc0Njg3IDEuMDc1LDMuMjI1IDIuNjg3NSwzLjc2MjVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzggMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjYxMjUsMCAzLjIyNSwtMS4wNzUgMy43NjI1LC0yLjY4NzVjMC44MDYyNSwtMi4xNSAtMC40MDMxMywtNC40MzQzNyAtMi40MTg3NSwtNS4xMDYyNWwtNjEuODEyNSwtMjEuOTAzMTN2LTQzLjgwNjI1bC04LjA2MjUsLTIuODIxODh6IiBmaWxsPSIjNDQ0YjU0Ij48L3BhdGg+PHBhdGggZD0iTTE2Ni42MjUsOTAuMDMxMjVsLTY0LjUsMjIuODQzNzVsLTE2LjEyNSwtMjYuODc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuMTE4NzUsODguMDE1NjNsLTE2LjEyNSwtMjYuODc1bC0wLjEzNDM4LC0wLjEzNDM3YzAsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMjY4NzVjLTAuMTM0MzcsLTAuMTM0MzggLTAuMTM0MzcsLTAuMjY4NzUgLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMTM0MzggLTAuNDAzMTIsLTAuMjY4NzVjLTAuMTM0MzgsMCAtMC4xMzQzOCwtMC4xMzQzOCAtMC4yNjg3NSwtMC4xMzQzOGMtMC4yNjg3NSwtMC4xMzQzNyAtMC40MDMxMiwtMC4yNjg3NSAtMC42NzE4NywtMC4yNjg3NXYwbC02NC41LC0yMi44NDM3NWMtMC4yNjg3NSwtMC4xMzQzNyAtMC41Mzc1LC0wLjEzNDM3IC0wLjgwNjI1LC0wLjEzNDM3aC0wLjEzNDM3Yy0wLjI2ODc1LDAgLTAuNDAzMTMsMCAtMC42NzE4NywwYy0wLjEzNDM4LDAgLTAuMTM0MzgsMCAtMC4yNjg3NSwwYy0wLjI2ODc1LDAgLTAuNTM3NSwwLjEzNDM3IC0wLjgwNjI1LDAuMTM0MzdsLTY0LjUsMjIuODQzNzV2MGMwLDAgLTAuMTM0MzgsMCAtMC4xMzQzOCwwLjEzNDM4djBjLTAuMTM0MzcsMC4xMzQzNyAtMC40MDMxMiwwLjEzNDM3IC0wLjUzNzUsMC4yNjg3NXYwdjBjLTAuMjY4NzUsMC4xMzQzNyAtMC41Mzc1LDAuNDAzMTIgLTAuODA2MjUsMC42NzE4OHYwbC0wLjEzNDM3LDAuMTM0Mzd2MGMtMC4xMzQzNywwLjEzNDM4IC0wLjEzNDM3LDAuMjY4NzUgLTAuMjY4NzUsMC4yNjg3NXYwYzAsMCAwLDAgLTAuMTM0MzgsMC4xMzQzOGwtMTYuMTI1LDI2Ljg3NWMtMC42NzE4OCwwLjk0MDYyIC0wLjgwNjI1LDIuMjg0MzcgLTAuNDAzMTMsMy4zNTkzOGMwLjQwMzEyLDEuMDc1IDEuMzQzNzUsMi4wMTU2MyAyLjQxODc1LDIuNDE4NzVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzcgMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjM0Mzc1LDAgMi42ODc1LC0wLjY3MTg3IDMuNDkzNzUsLTIuMDE1NjJsMTIuNjMxMjUsLTIxLjA5Njg3bDEyLjYzMTI1LDIxLjA5Njg3YzAuODA2MjUsMS4zNDM3NSAyLjE1LDIuMDE1NjMgMy40OTM3NSwyLjAxNTYzYzAuNDAzMTMsMCAwLjk0MDYyLC0wLjEzNDM3IDEuMzQzNzUsLTAuMjY4NzVsNjQuNSwtMjIuODQzNzVjMS4wNzUsLTAuNDAzMTMgMi4wMTU2MywtMS4zNDM3NSAyLjQxODc1LC0yLjQxODc1YzAuNDAzMTMsLTEuMDc1IDAuMjY4NzUsLTIuNDE4NzUgLTAuMjY4NzUsLTMuMzU5Mzd6TTkwLjAzMTI1LDQ1Ljk1NjI1bDQ4LjM3NSwxNy4ybC00OC4zNzUsMTcuMnpNNjguMTI4MTMsMTA4LjAzNzVsLTU2LjcwNjI1LC0yMC4xNTYyNWwxMS45NTkzNywtMTkuODg3NWw1Ni43MDYyNSwyMC4xNTYyNXpNMTAzLjg3MTg4LDEwOC4wMzc1bC0xMS45NTkzOCwtMTkuODg3NWw1Ni43MDYyNSwtMjAuMTU2MjVsMTEuOTU5MzcsMTkuODg3NXoiIGZpbGw9IiM0NDRiNTQiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==',
        },
        {
          name: "Rings",
          url: "/#/",
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JmYmZiZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjAuNCw5MS43MzMzM2gtMjguNjY2Njd2MjguNjY2NjdjMCwzLjE3MDUzIC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdoLTI4LjY2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41NjI4IC01LjczMzMzLC01LjczMzMzYzAsLTMuMTcwNTMgMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzaDI4LjY2NjY3di0yOC42NjY2N2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTYyOCA1LjczMzMzLDUuNzMzMzN2MjguNjY2NjdoMjguNjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2MjggNS43MzMzMyw1LjczMzMzYzAsMy4xNzA1MyAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=',
        },
        {
          name: "Nose Pins",
          url: "/#/",
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NWwtNjQuNSwyMi44NDM3NXY4MC42MjVsNjQuNSwyMi44NDM3NWw2NC41LC0yMi44NDM3NXoiIGZpbGw9IiNiZmJmYmYiPjwvcGF0aD48cGF0aCBkPSJNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1bC02NC41LDIyLjg0Mzc1djgwLjYyNWw2NC41LDIyLjg0Mzc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMS41LDYzLjE1NjI1bC0xNi4xMjUsMjYuODc1bDY0LjUsMjIuODQzNzVsMTYuMTI1LC0yNi44NzV6TTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw5MC4wMzEyNWMtMS42MTI1LDAgLTMuMjI1LC0xLjA3NSAtMy43NjI1LC0yLjY4NzVjLTAuODA2MjUsLTIuMTUgMC40MDMxMywtNC40MzQzOCAyLjQxODc1LC01LjEwNjI1bDY0LjUsLTIyLjg0Mzc1YzIuMTUsLTAuODA2MjUgNC40MzQzNywwLjQwMzEyIDUuMTA2MjUsMi40MTg3NWMwLjgwNjI1LDIuMTUgLTAuNDAzMTIsNC40MzQzOCAtMi40MTg3NSw1LjEwNjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNzAuNjU2MjVjLTAuODA2MjUsMCAtMS42MTI1LC0wLjI2ODc1IC0yLjI4NDM3LC0wLjY3MTg3Yy0xLjA3NSwtMC44MDYyNSAtMS43NDY4OCwtMi4wMTU2MiAtMS43NDY4OCwtMy4zNTkzN3YtMzguMDI4MTJjMCwtMi4yODQzOCAxLjc0Njg4LC00LjAzMTI1IDQuMDMxMjUsLTQuMDMxMjVjMi4yODQzNywwIDQuMDMxMjUsMS43NDY4OCA0LjAzMTI1LDQuMDMxMjV2MzIuMzg0MzhsNTYuNDM3NSwtMjAuMDIxODh2LTc3LjgwMzEyYzAsLTIuMjg0MzggMS43NDY4NywtNC4wMzEyNSA0LjAzMTI1LC00LjAzMTI1YzIuMjg0MzgsMCA0LjAzMTI1LDEuNzQ2ODcgNC4wMzEyNSw0LjAzMTI1djgwLjYyNWMwLDEuNzQ2ODcgLTEuMDc1LDMuMjI1IC0yLjY4NzUsMy43NjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSw2My4xNTYyNWwtNjQuNSwtMjIuODQzNzVNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1TTg2LDg2bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNy40Njg3NSwxNDMuNzgxMjVjMCwxLjc0Njg3IDEuMDc1LDMuMjI1IDIuNjg3NSwzLjc2MjVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzggMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjYxMjUsMCAzLjIyNSwtMS4wNzUgMy43NjI1LC0yLjY4NzVjMC44MDYyNSwtMi4xNSAtMC40MDMxMywtNC40MzQzNyAtMi40MTg3NSwtNS4xMDYyNWwtNjEuODEyNSwtMjEuOTAzMTN2LTQzLjgwNjI1bC04LjA2MjUsLTIuODIxODh6IiBmaWxsPSIjNDQ0YjU0Ij48L3BhdGg+PHBhdGggZD0iTTE2Ni42MjUsOTAuMDMxMjVsLTY0LjUsMjIuODQzNzVsLTE2LjEyNSwtMjYuODc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuMTE4NzUsODguMDE1NjNsLTE2LjEyNSwtMjYuODc1bC0wLjEzNDM4LC0wLjEzNDM3YzAsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMjY4NzVjLTAuMTM0MzcsLTAuMTM0MzggLTAuMTM0MzcsLTAuMjY4NzUgLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMTM0MzggLTAuNDAzMTIsLTAuMjY4NzVjLTAuMTM0MzgsMCAtMC4xMzQzOCwtMC4xMzQzOCAtMC4yNjg3NSwtMC4xMzQzOGMtMC4yNjg3NSwtMC4xMzQzNyAtMC40MDMxMiwtMC4yNjg3NSAtMC42NzE4NywtMC4yNjg3NXYwbC02NC41LC0yMi44NDM3NWMtMC4yNjg3NSwtMC4xMzQzNyAtMC41Mzc1LC0wLjEzNDM3IC0wLjgwNjI1LC0wLjEzNDM3aC0wLjEzNDM3Yy0wLjI2ODc1LDAgLTAuNDAzMTMsMCAtMC42NzE4NywwYy0wLjEzNDM4LDAgLTAuMTM0MzgsMCAtMC4yNjg3NSwwYy0wLjI2ODc1LDAgLTAuNTM3NSwwLjEzNDM3IC0wLjgwNjI1LDAuMTM0MzdsLTY0LjUsMjIuODQzNzV2MGMwLDAgLTAuMTM0MzgsMCAtMC4xMzQzOCwwLjEzNDM4djBjLTAuMTM0MzcsMC4xMzQzNyAtMC40MDMxMiwwLjEzNDM3IC0wLjUzNzUsMC4yNjg3NXYwdjBjLTAuMjY4NzUsMC4xMzQzNyAtMC41Mzc1LDAuNDAzMTIgLTAuODA2MjUsMC42NzE4OHYwbC0wLjEzNDM3LDAuMTM0Mzd2MGMtMC4xMzQzNywwLjEzNDM4IC0wLjEzNDM3LDAuMjY4NzUgLTAuMjY4NzUsMC4yNjg3NXYwYzAsMCAwLDAgLTAuMTM0MzgsMC4xMzQzOGwtMTYuMTI1LDI2Ljg3NWMtMC42NzE4OCwwLjk0MDYyIC0wLjgwNjI1LDIuMjg0MzcgLTAuNDAzMTMsMy4zNTkzOGMwLjQwMzEyLDEuMDc1IDEuMzQzNzUsMi4wMTU2MyAyLjQxODc1LDIuNDE4NzVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzcgMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjM0Mzc1LDAgMi42ODc1LC0wLjY3MTg3IDMuNDkzNzUsLTIuMDE1NjJsMTIuNjMxMjUsLTIxLjA5Njg3bDEyLjYzMTI1LDIxLjA5Njg3YzAuODA2MjUsMS4zNDM3NSAyLjE1LDIuMDE1NjMgMy40OTM3NSwyLjAxNTYzYzAuNDAzMTMsMCAwLjk0MDYyLC0wLjEzNDM3IDEuMzQzNzUsLTAuMjY4NzVsNjQuNSwtMjIuODQzNzVjMS4wNzUsLTAuNDAzMTMgMi4wMTU2MywtMS4zNDM3NSAyLjQxODc1LC0yLjQxODc1YzAuNDAzMTMsLTEuMDc1IDAuMjY4NzUsLTIuNDE4NzUgLTAuMjY4NzUsLTMuMzU5Mzd6TTkwLjAzMTI1LDQ1Ljk1NjI1bDQ4LjM3NSwxNy4ybC00OC4zNzUsMTcuMnpNNjguMTI4MTMsMTA4LjAzNzVsLTU2LjcwNjI1LC0yMC4xNTYyNWwxMS45NTkzNywtMTkuODg3NWw1Ni43MDYyNSwyMC4xNTYyNXpNMTAzLjg3MTg4LDEwOC4wMzc1bC0xMS45NTkzOCwtMTkuODg3NWw1Ni43MDYyNSwtMjAuMTU2MjVsMTEuOTU5MzcsMTkuODg3NXoiIGZpbGw9IiM0NDRiNTQiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==',
        },
        {
          name: "Banles & Bracelets",
          url: "/#/",
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JmYmZiZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjAuNCw5MS43MzMzM2gtMjguNjY2Njd2MjguNjY2NjdjMCwzLjE3MDUzIC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdoLTI4LjY2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41NjI4IC01LjczMzMzLC01LjczMzMzYzAsLTMuMTcwNTMgMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzaDI4LjY2NjY3di0yOC42NjY2N2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTYyOCA1LjczMzMzLDUuNzMzMzN2MjguNjY2NjdoMjguNjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2MjggNS43MzMzMyw1LjczMzMzYzAsMy4xNzA1MyAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=',
        },  {
          name: "By Price",
          url: "/#/",
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NWwtNjQuNSwyMi44NDM3NXY4MC42MjVsNjQuNSwyMi44NDM3NWw2NC41LC0yMi44NDM3NXoiIGZpbGw9IiNiZmJmYmYiPjwvcGF0aD48cGF0aCBkPSJNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1bC02NC41LDIyLjg0Mzc1djgwLjYyNWw2NC41LDIyLjg0Mzc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMS41LDYzLjE1NjI1bC0xNi4xMjUsMjYuODc1bDY0LjUsMjIuODQzNzVsMTYuMTI1LC0yNi44NzV6TTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw5MC4wMzEyNWMtMS42MTI1LDAgLTMuMjI1LC0xLjA3NSAtMy43NjI1LC0yLjY4NzVjLTAuODA2MjUsLTIuMTUgMC40MDMxMywtNC40MzQzOCAyLjQxODc1LC01LjEwNjI1bDY0LjUsLTIyLjg0Mzc1YzIuMTUsLTAuODA2MjUgNC40MzQzNywwLjQwMzEyIDUuMTA2MjUsMi40MTg3NWMwLjgwNjI1LDIuMTUgLTAuNDAzMTIsNC40MzQzOCAtMi40MTg3NSw1LjEwNjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNzAuNjU2MjVjLTAuODA2MjUsMCAtMS42MTI1LC0wLjI2ODc1IC0yLjI4NDM3LC0wLjY3MTg3Yy0xLjA3NSwtMC44MDYyNSAtMS43NDY4OCwtMi4wMTU2MiAtMS43NDY4OCwtMy4zNTkzN3YtMzguMDI4MTJjMCwtMi4yODQzOCAxLjc0Njg4LC00LjAzMTI1IDQuMDMxMjUsLTQuMDMxMjVjMi4yODQzNywwIDQuMDMxMjUsMS43NDY4OCA0LjAzMTI1LDQuMDMxMjV2MzIuMzg0MzhsNTYuNDM3NSwtMjAuMDIxODh2LTc3LjgwMzEyYzAsLTIuMjg0MzggMS43NDY4NywtNC4wMzEyNSA0LjAzMTI1LC00LjAzMTI1YzIuMjg0MzgsMCA0LjAzMTI1LDEuNzQ2ODcgNC4wMzEyNSw0LjAzMTI1djgwLjYyNWMwLDEuNzQ2ODcgLTEuMDc1LDMuMjI1IC0yLjY4NzUsMy43NjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSw2My4xNTYyNWwtNjQuNSwtMjIuODQzNzVNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1TTg2LDg2bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNy40Njg3NSwxNDMuNzgxMjVjMCwxLjc0Njg3IDEuMDc1LDMuMjI1IDIuNjg3NSwzLjc2MjVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzggMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjYxMjUsMCAzLjIyNSwtMS4wNzUgMy43NjI1LC0yLjY4NzVjMC44MDYyNSwtMi4xNSAtMC40MDMxMywtNC40MzQzNyAtMi40MTg3NSwtNS4xMDYyNWwtNjEuODEyNSwtMjEuOTAzMTN2LTQzLjgwNjI1bC04LjA2MjUsLTIuODIxODh6IiBmaWxsPSIjNDQ0YjU0Ij48L3BhdGg+PHBhdGggZD0iTTE2Ni42MjUsOTAuMDMxMjVsLTY0LjUsMjIuODQzNzVsLTE2LjEyNSwtMjYuODc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuMTE4NzUsODguMDE1NjNsLTE2LjEyNSwtMjYuODc1bC0wLjEzNDM4LC0wLjEzNDM3YzAsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMjY4NzVjLTAuMTM0MzcsLTAuMTM0MzggLTAuMTM0MzcsLTAuMjY4NzUgLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMTM0MzggLTAuNDAzMTIsLTAuMjY4NzVjLTAuMTM0MzgsMCAtMC4xMzQzOCwtMC4xMzQzOCAtMC4yNjg3NSwtMC4xMzQzOGMtMC4yNjg3NSwtMC4xMzQzNyAtMC40MDMxMiwtMC4yNjg3NSAtMC42NzE4NywtMC4yNjg3NXYwbC02NC41LC0yMi44NDM3NWMtMC4yNjg3NSwtMC4xMzQzNyAtMC41Mzc1LC0wLjEzNDM3IC0wLjgwNjI1LC0wLjEzNDM3aC0wLjEzNDM3Yy0wLjI2ODc1LDAgLTAuNDAzMTMsMCAtMC42NzE4NywwYy0wLjEzNDM4LDAgLTAuMTM0MzgsMCAtMC4yNjg3NSwwYy0wLjI2ODc1LDAgLTAuNTM3NSwwLjEzNDM3IC0wLjgwNjI1LDAuMTM0MzdsLTY0LjUsMjIuODQzNzV2MGMwLDAgLTAuMTM0MzgsMCAtMC4xMzQzOCwwLjEzNDM4djBjLTAuMTM0MzcsMC4xMzQzNyAtMC40MDMxMiwwLjEzNDM3IC0wLjUzNzUsMC4yNjg3NXYwdjBjLTAuMjY4NzUsMC4xMzQzNyAtMC41Mzc1LDAuNDAzMTIgLTAuODA2MjUsMC42NzE4OHYwbC0wLjEzNDM3LDAuMTM0Mzd2MGMtMC4xMzQzNywwLjEzNDM4IC0wLjEzNDM3LDAuMjY4NzUgLTAuMjY4NzUsMC4yNjg3NXYwYzAsMCAwLDAgLTAuMTM0MzgsMC4xMzQzOGwtMTYuMTI1LDI2Ljg3NWMtMC42NzE4OCwwLjk0MDYyIC0wLjgwNjI1LDIuMjg0MzcgLTAuNDAzMTMsMy4zNTkzOGMwLjQwMzEyLDEuMDc1IDEuMzQzNzUsMi4wMTU2MyAyLjQxODc1LDIuNDE4NzVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzcgMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjM0Mzc1LDAgMi42ODc1LC0wLjY3MTg3IDMuNDkzNzUsLTIuMDE1NjJsMTIuNjMxMjUsLTIxLjA5Njg3bDEyLjYzMTI1LDIxLjA5Njg3YzAuODA2MjUsMS4zNDM3NSAyLjE1LDIuMDE1NjMgMy40OTM3NSwyLjAxNTYzYzAuNDAzMTMsMCAwLjk0MDYyLC0wLjEzNDM3IDEuMzQzNzUsLTAuMjY4NzVsNjQuNSwtMjIuODQzNzVjMS4wNzUsLTAuNDAzMTMgMi4wMTU2MywtMS4zNDM3NSAyLjQxODc1LC0yLjQxODc1YzAuNDAzMTMsLTEuMDc1IDAuMjY4NzUsLTIuNDE4NzUgLTAuMjY4NzUsLTMuMzU5Mzd6TTkwLjAzMTI1LDQ1Ljk1NjI1bDQ4LjM3NSwxNy4ybC00OC4zNzUsMTcuMnpNNjguMTI4MTMsMTA4LjAzNzVsLTU2LjcwNjI1LC0yMC4xNTYyNWwxMS45NTkzNywtMTkuODg3NWw1Ni43MDYyNSwyMC4xNTYyNXpNMTAzLjg3MTg4LDEwOC4wMzc1bC0xMS45NTkzOCwtMTkuODg3NWw1Ni43MDYyNSwtMjAuMTU2MjVsMTEuOTU5MzcsMTkuODg3NXoiIGZpbGw9IiM0NDRiNTQiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==',
        },  {
          name: "By Collections",
          url: "/#/",
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JmYmZiZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjAuNCw5MS43MzMzM2gtMjguNjY2Njd2MjguNjY2NjdjMCwzLjE3MDUzIC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdoLTI4LjY2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41NjI4IC01LjczMzMzLC01LjczMzMzYzAsLTMuMTcwNTMgMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzaDI4LjY2NjY3di0yOC42NjY2N2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTYyOCA1LjczMzMzLDUuNzMzMzN2MjguNjY2NjdoMjguNjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2MjggNS43MzMzMyw1LjczMzMzYzAsMy4xNzA1MyAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=',
        },
        {
          name: "My Materials",
          url: "/#/",
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NWwtNjQuNSwyMi44NDM3NXY4MC42MjVsNjQuNSwyMi44NDM3NWw2NC41LC0yMi44NDM3NXoiIGZpbGw9IiNiZmJmYmYiPjwvcGF0aD48cGF0aCBkPSJNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1bC02NC41LDIyLjg0Mzc1djgwLjYyNWw2NC41LDIyLjg0Mzc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMS41LDYzLjE1NjI1bC0xNi4xMjUsMjYuODc1bDY0LjUsMjIuODQzNzVsMTYuMTI1LC0yNi44NzV6TTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw5MC4wMzEyNWMtMS42MTI1LDAgLTMuMjI1LC0xLjA3NSAtMy43NjI1LC0yLjY4NzVjLTAuODA2MjUsLTIuMTUgMC40MDMxMywtNC40MzQzOCAyLjQxODc1LC01LjEwNjI1bDY0LjUsLTIyLjg0Mzc1YzIuMTUsLTAuODA2MjUgNC40MzQzNywwLjQwMzEyIDUuMTA2MjUsMi40MTg3NWMwLjgwNjI1LDIuMTUgLTAuNDAzMTIsNC40MzQzOCAtMi40MTg3NSw1LjEwNjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNzAuNjU2MjVjLTAuODA2MjUsMCAtMS42MTI1LC0wLjI2ODc1IC0yLjI4NDM3LC0wLjY3MTg3Yy0xLjA3NSwtMC44MDYyNSAtMS43NDY4OCwtMi4wMTU2MiAtMS43NDY4OCwtMy4zNTkzN3YtMzguMDI4MTJjMCwtMi4yODQzOCAxLjc0Njg4LC00LjAzMTI1IDQuMDMxMjUsLTQuMDMxMjVjMi4yODQzNywwIDQuMDMxMjUsMS43NDY4OCA0LjAzMTI1LDQuMDMxMjV2MzIuMzg0MzhsNTYuNDM3NSwtMjAuMDIxODh2LTc3LjgwMzEyYzAsLTIuMjg0MzggMS43NDY4NywtNC4wMzEyNSA0LjAzMTI1LC00LjAzMTI1YzIuMjg0MzgsMCA0LjAzMTI1LDEuNzQ2ODcgNC4wMzEyNSw0LjAzMTI1djgwLjYyNWMwLDEuNzQ2ODcgLTEuMDc1LDMuMjI1IC0yLjY4NzUsMy43NjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSw2My4xNTYyNWwtNjQuNSwtMjIuODQzNzVNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1TTg2LDg2bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNy40Njg3NSwxNDMuNzgxMjVjMCwxLjc0Njg3IDEuMDc1LDMuMjI1IDIuNjg3NSwzLjc2MjVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzggMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjYxMjUsMCAzLjIyNSwtMS4wNzUgMy43NjI1LC0yLjY4NzVjMC44MDYyNSwtMi4xNSAtMC40MDMxMywtNC40MzQzNyAtMi40MTg3NSwtNS4xMDYyNWwtNjEuODEyNSwtMjEuOTAzMTN2LTQzLjgwNjI1bC04LjA2MjUsLTIuODIxODh6IiBmaWxsPSIjNDQ0YjU0Ij48L3BhdGg+PHBhdGggZD0iTTE2Ni42MjUsOTAuMDMxMjVsLTY0LjUsMjIuODQzNzVsLTE2LjEyNSwtMjYuODc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuMTE4NzUsODguMDE1NjNsLTE2LjEyNSwtMjYuODc1bC0wLjEzNDM4LC0wLjEzNDM3YzAsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMjY4NzVjLTAuMTM0MzcsLTAuMTM0MzggLTAuMTM0MzcsLTAuMjY4NzUgLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMTM0MzggLTAuNDAzMTIsLTAuMjY4NzVjLTAuMTM0MzgsMCAtMC4xMzQzOCwtMC4xMzQzOCAtMC4yNjg3NSwtMC4xMzQzOGMtMC4yNjg3NSwtMC4xMzQzNyAtMC40MDMxMiwtMC4yNjg3NSAtMC42NzE4NywtMC4yNjg3NXYwbC02NC41LC0yMi44NDM3NWMtMC4yNjg3NSwtMC4xMzQzNyAtMC41Mzc1LC0wLjEzNDM3IC0wLjgwNjI1LC0wLjEzNDM3aC0wLjEzNDM3Yy0wLjI2ODc1LDAgLTAuNDAzMTMsMCAtMC42NzE4NywwYy0wLjEzNDM4LDAgLTAuMTM0MzgsMCAtMC4yNjg3NSwwYy0wLjI2ODc1LDAgLTAuNTM3NSwwLjEzNDM3IC0wLjgwNjI1LDAuMTM0MzdsLTY0LjUsMjIuODQzNzV2MGMwLDAgLTAuMTM0MzgsMCAtMC4xMzQzOCwwLjEzNDM4djBjLTAuMTM0MzcsMC4xMzQzNyAtMC40MDMxMiwwLjEzNDM3IC0wLjUzNzUsMC4yNjg3NXYwdjBjLTAuMjY4NzUsMC4xMzQzNyAtMC41Mzc1LDAuNDAzMTIgLTAuODA2MjUsMC42NzE4OHYwbC0wLjEzNDM3LDAuMTM0Mzd2MGMtMC4xMzQzNywwLjEzNDM4IC0wLjEzNDM3LDAuMjY4NzUgLTAuMjY4NzUsMC4yNjg3NXYwYzAsMCAwLDAgLTAuMTM0MzgsMC4xMzQzOGwtMTYuMTI1LDI2Ljg3NWMtMC42NzE4OCwwLjk0MDYyIC0wLjgwNjI1LDIuMjg0MzcgLTAuNDAzMTMsMy4zNTkzOGMwLjQwMzEyLDEuMDc1IDEuMzQzNzUsMi4wMTU2MyAyLjQxODc1LDIuNDE4NzVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzcgMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjM0Mzc1LDAgMi42ODc1LC0wLjY3MTg3IDMuNDkzNzUsLTIuMDE1NjJsMTIuNjMxMjUsLTIxLjA5Njg3bDEyLjYzMTI1LDIxLjA5Njg3YzAuODA2MjUsMS4zNDM3NSAyLjE1LDIuMDE1NjMgMy40OTM3NSwyLjAxNTYzYzAuNDAzMTMsMCAwLjk0MDYyLC0wLjEzNDM3IDEuMzQzNzUsLTAuMjY4NzVsNjQuNSwtMjIuODQzNzVjMS4wNzUsLTAuNDAzMTMgMi4wMTU2MywtMS4zNDM3NSAyLjQxODc1LC0yLjQxODc1YzAuNDAzMTMsLTEuMDc1IDAuMjY4NzUsLTIuNDE4NzUgLTAuMjY4NzUsLTMuMzU5Mzd6TTkwLjAzMTI1LDQ1Ljk1NjI1bDQ4LjM3NSwxNy4ybC00OC4zNzUsMTcuMnpNNjguMTI4MTMsMTA4LjAzNzVsLTU2LjcwNjI1LC0yMC4xNTYyNWwxMS45NTkzNywtMTkuODg3NWw1Ni43MDYyNSwyMC4xNTYyNXpNMTAzLjg3MTg4LDEwOC4wMzc1bC0xMS45NTkzOCwtMTkuODg3NWw1Ni43MDYyNSwtMjAuMTU2MjVsMTEuOTU5MzcsMTkuODg3NXoiIGZpbGw9IiM0NDRiNTQiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==',
        },
      ];
    
    const mainliast1 = {
   
      'Jewellery': [
        'Earrings',
        'Pendants',
        'Rings',
        'Nose Pins',
        'Banles & Bracelets',
        'By Price',
        'By Collections',
        'My Materials',
      ],
      'Solitaires': [
        'Solitaire Jewellery'
      ],

      'Gold Coins': [
        'Gold Coins'
      ],

      'Gifts': [
        'By Occasion',
        'By Price'
      ],

      'Colleactions': [
        'By Colleactions',
        'By Themes'
      ],
    };

    let { selected } = this.state;
    return (
      <div>
        <Hidden smDown>
          
          <AppBar className="header-appbar">
          {/* <HeaderNotification /> */}
            <Grid container spacing={12} >
              <Grid item xs={3}>
                <div className="head-icons">
                  <i class="fa fa-truck "></i>
                  <i class="fa fa-phone"></i>
                </div>
              </Grid>
              <Grid item xs={5}>
                <div >
                  <img className="img" src="https://assets-cdn.stylori.com/images/static/stylori-logo.svg" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="head-icons" style={{ fontFamily: "fontawesome" }}>
                  <InputBase
                    className="search"
                    placeholder='&#xf002; Search here'
                  />
                  <i class="fa fa-user"></i>
                  <Badge badgeContent={4} color="secondary">
                    <i class="fa fa-heart"></i>
                  </Badge>
                  <Badge badgeContent={4} color="secondary">
                    <i class="fa fa-shopping-bag"></i>
                  </Badge>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={12}>
              <Grid item xs={12} className="header-navbar-list">
                <nav >
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Whats New</a>
                  <a href="" onMouseOver={() => { this.setState({ Menuopen: true, Checked: true }) }} ><i class="fa fa-plus-circle"></i>&nbsp;Jewellery</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Solitaires</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Gold Coins</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Gifts</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Collections</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;One Day Sipping</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Stories</a>
                </nav>
              </Grid>
            </Grid>
            <div className="header-bottom"></div>
          </AppBar>
        </Hidden>
        <Hidden mdUp>
          
          <AppBar
            className="header-appbar-moblie"
          >
          
            <Toolbar>
              <Grid item xs={2}>
                <IconButton
                  onClick={this.handleDrawerOpen}
                >
                  <MenuIcon style={{ color: '#222', fontSize: '30px' }} />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                <div >
                  <img className="mobile-img" src="https://assets-cdn.stylori.com/images/static/stylori-logo.svg" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="mobli-icon">
                  <Badge >
                    <i class="fa fa-comments"></i>
                  </Badge>
                  <Badge >
                    <i class="fa fa-search"></i>
                  </Badge>
                  <Badge badgeContent={4} color="secondary">
                    <i class="fa fa-heart"></i>
                  </Badge>
                  <Badge badgeContent={4} color="secondary">
                    <i class="fa fa-shopping-bag"></i>
                  </Badge>
                </div>
              </Grid>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="left"
            open={this.state.open}
            className="nav-drawer"
          >
            <div className="header-drawer">
              <IconButton onClick={this.handleDrawerClose}
                style={{ float: 'right' }}>
                <i class="fa fa-times"></i>
              </IconButton>
              <Typography className="drawer-menu">Menu</Typography>
            </div>
            <Divider />
            <List className="sideNavListing">
              {mainliast.map(row => (
                <>
                  <ListItem button key={row.name} className="drawer-list">
                    <img className="submenu-icons" src={row.icon}></img>
                    <ListItemText
                      onClick={() => this.selectItem(row.url)}
                    >
                      <Typography className="list-items"
                        variant=""
                      >{row.name}
                      </Typography>
                    </ListItemText>
                    {this.mainliast ? <ExpandLess className="drawer-arrow" /> : <ExpandMore className="drawer-arrow" />}
                  </ListItem>
                  {selected === row &&
                    mainliast1[row] !== undefined && mainliast1[row].map(row => (
                      <ListItem button key={row} className="drawer-list">
                        <MailIcon className="submenu-icons" />
                        <ListItemText >
                          <Typography className="Jew-mbl-head-list" variant="">{row}
                          </Typography>
                        </ListItemText>
                        {selected ? <ExpandLess className="drawer-arrow" /> : <ExpandMore className="drawer-arrow" />}
                      </ListItem>
                    ))
                  }
                </>
              ))}
            </List>
          </Drawer>

        </Hidden>
        {
         this.state.Menuopen ?
           <JewelleryMenuItem Checked={this.state.Checked} onMouseLeave={() => { this.setState({ Menuopen: false, Checked: false }) }} />
           //onMouseLeave={() => { this.setState({ Menuopen: false,Checked:false }) }}
           :
           ''
       }
      </div>
    )
  }
}
export default Header;
