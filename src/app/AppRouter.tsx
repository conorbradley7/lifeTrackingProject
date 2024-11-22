import {Route, Switch, Redirect, BrowserRouter} from "react-router-dom";
import {BUDGET_PLANNING_ROUTE, HOME_ROUTE, TRANSACTION_TRACKING_ROUTE} from "../constants/routes.tsx";
import MainLandingPage from "../pages/MainLandingPage.tsx";
import BudgetPlanningPage from "../pages/BudgetPlanningPage.tsx";
import SideNavPanel from "../components/SideNavPanel/SideNavPanel.tsx";
import {navigationMenuItem} from "../types/commonTypes.tsx";
import defaultMessages from "../locales/lang/defaultMessages.tsx";
import TransactionTrackingPage from "../pages/TransactionTrackingPage.tsx";

const AppRouter: React.FC = () => {
    const navigationItems: navigationMenuItem[] = [
        {
            id: 'home_page',
            route: HOME_ROUTE,
            title: defaultMessages.globalNavigationMessages.homePage,
        },
        {
            id: 'budget_planning_page',
            route: BUDGET_PLANNING_ROUTE,
            title: defaultMessages.globalNavigationMessages.budgetPlanningPage,
        },
        {
            id: 'transaction_tracking_page',
            route: TRANSACTION_TRACKING_ROUTE,
            title: defaultMessages.globalNavigationMessages.transactionTrackingPage,
        },
    ];

    return (
        <BrowserRouter>
            <SideNavPanel navigationItems={navigationItems}/>
            <Switch>
                <Route path={BUDGET_PLANNING_ROUTE} component={BudgetPlanningPage} exact />
                <Route path={TRANSACTION_TRACKING_ROUTE} component={TransactionTrackingPage} exact />
                <Route path={HOME_ROUTE} component={MainLandingPage}/>
                <Route exact path="*" render={() => <Redirect to={HOME_ROUTE} />} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;