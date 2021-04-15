import React from 'react';
import { Switch } from 'react-router-dom';

import { HomeRoutes } from './Home/routes';
import { CookiesRoutes } from './Cookies/routes';
import { GroceriesRoutes } from './Groceries/routes';
import { OrdersRoutes } from './Orders/routes';

export const getRoutes = () => (
  <Switch>
    {CookiesRoutes}
    {GroceriesRoutes}
    {OrdersRoutes}
    {HomeRoutes}
  </Switch>
);
