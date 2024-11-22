import {memo} from "react";
import {navigationMenuItem} from "../../types/commonTypes.tsx";
import {Box} from "@mui/material";
import * as colours from '../../constants/colours.ts'


const classes = {
    menuItemContainer: {
        padding: '10px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
    },
    selectedMenuItemContainer: {
        backgroundColor: colours.navSelectedMenuItemBackground,
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
        <Box sx={selected? [classes.menuItemContainer,classes.selectedMenuItemContainer] : classes.menuItemContainer} onClick={()=>{
            handleMenuItemClick(menuItem);
        }}>
            {menuItem.title}
        </Box>
    );
};

export default memo(SideNavMenuItem);
