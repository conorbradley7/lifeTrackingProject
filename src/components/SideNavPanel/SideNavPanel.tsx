import {useState} from "react";
import {Box} from "@mui/material";
import * as colours from '../../constants/colours.ts'
import {navigationMenuItem} from "../../types/commonTypes.tsx";
import SideNavMenuItem from "./SideNavMenuItem.tsx";
import {useHistory, useLocation} from "react-router-dom";
const classes = {
    root: {
        backgroundColor: colours.mainAppNavBarBackground,
        left: '0px',
        height: '100%',
        width: '200px',
        color: '#000',
        boxShadow: 'rgba(0,0,0,0.1) 1px 1px 4px 2px',
        borderRight: `2px solid ${colours.mainAppBarBackground}`,
    },
};

type Props = {
    navigationItems: navigationMenuItem[];
};

const SideNavPanel: React.FC<Props> = (props: Props) => {
    const history = useHistory();
    const location = useLocation();
    const { navigationItems} = props;
    const [selectedItemPath, setSelectedItemPath] = useState<string>(location.pathname);

    const navigationHandler = (menuItem: navigationMenuItem) => {
            setSelectedItemPath(menuItem.route);
            history.push(menuItem.route)
    };


    return (
        <Box sx={classes.root}>
            {
                navigationItems.map((menuItem) => (
                    <SideNavMenuItem menuItem={menuItem} selected={selectedItemPath==menuItem.route} handleMenuItemClick={navigationHandler}/>
                ))
            }
        </Box>
    );
}

export default SideNavPanel