import {Route, Switch, Redirect, BrowserRouter} from "react-router-dom";
import {BUDGET_ROUTE, HOME_ROUTE} from "../constants/routes.tsx";
import MainLandingPage from "../pages/MainLandingPage.tsx";
import BudgetPage from "../pages/BudgetPage.tsx";
import SideNavPanel from "../components/SideNavPanel/SideNavPanel.tsx";
import {navigationMenuItem} from "../types/commonTypes.ts";
import defaultMessages from "../locales/lang/defaultMessages.tsx";

const AppRouter: React.FC = () => {
    const navigationItems: navigationMenuItem[] = [
        {
            id: 'home_page',
            route: HOME_ROUTE,
            title: defaultMessages.globalNavigationMessages.homePage,
        },
        {
            id: 'budget_page',
            route: BUDGET_ROUTE,
            title: defaultMessages.globalNavigationMessages.budgetPage,
        }
    ];

    return (
        <BrowserRouter>
            <SideNavPanel navigationItems={navigationItems}/>
            <Switch>
                <Route path={BUDGET_ROUTE} component={BudgetPage} exact />
                <Route path={HOME_ROUTE} component={MainLandingPage}/>
                <Route exact path="*" render={() => <Redirect to={HOME_ROUTE} />} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;