import React from 'react';
import { Switch } from 'react-router-dom';

import { HomeRoutes } from './Home/routes';

export const getRoutes = () => <Switch>{HomeRoutes}</Switch>;
