import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

// const menuList =['Earrings','Pendants','Rings','Nose pins',' Bangles & Bracelets'];
const menuListFilters = ["By Price", "By Collection", "By Material"];
const menuLists = [
	{ value: "earings", title: "Earrings", url: "#Earrings" },
	{ value: "pendants", title: "Pendants", url: "#" },
	{ value: "rings", title: "Rings", url: "#" },
	{ value: "nosepins", title: "Nose pins", url: "#" },
	{ value: "banglesbracelets", title: "Bangles & Bracelets", url: "#" }
];

class MenuListItem extends React.Component {
	render() {
		return (
			<div>
				<List component="nav" className="ListColor">
					{menuLists.map(menuList => (
						<ListItem
							component="li"
							className="ListColor"
							onMouseOver={() => this.props.handleMouseOver(menuList.value)}
							onClick={() => {
								window.location.href = "/" + menuList.url;
							}}
						>
							<ListItemText variant>{menuList.title}</ListItemText>
						</ListItem>
					))}
				</List>
				<hr className="hrColor" />
				<List component="nav" className="ListColor">
					{menuListFilters.map(menuLists => (
						<ListItem component="li" className="ListColor">
							<ListItemText>{menuLists}</ListItemText>
						</ListItem>
					))}
				</List>
			</div>
		);
	}
}
export default MenuListItem;
