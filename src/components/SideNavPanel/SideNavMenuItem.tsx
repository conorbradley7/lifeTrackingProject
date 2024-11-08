import {memo} from "react";
import {navigationMenuItem} from "../../types/commonTypes.ts";
import {Box} from "@mui/material";
import * as colours from '../../constants/colours.ts'


const classes = {
    menuItemContainer: {
        padding: '10px',
    },
    selectedMenuItemContainer: {
        backgroundColor: colours.navSelectedMenuItemBackground,
        padding: '10px',
    }
}

type Props = {
    menuItem: navigationMenuItem;
    selected: boolean;
    handleMenuItemClick: (menuItem: navigationMenuItem) => void;
};

const SideNavMenuItem: React.FC<Props> = (props: Props) => {
    const {menuItem, selected, handleMenuItemClick} = props;
    return (
        <Box sx={selected? classes.selectedMenuItemContainer : classes.menuItemContainer} onClick={()=>{
            handleMenuItemClick(menuItem);
        }}>
            {menuItem.title}
        </Box>
    );
};

export default memo(SideNavMenuItem);
