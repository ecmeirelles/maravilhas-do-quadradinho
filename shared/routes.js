import { BottomNavigation } from "react-native-paper";
import { InvestmentsRoute } from "../components/Investments/InvestmentsRoute";
import { HomeRoute } from "../components/Home/HomeRoute";
import { OrdersRoute } from "../components/Orders/OrdersRoute";

export const renderScene = BottomNavigation.SceneMap({
  investments: InvestmentsRoute,
  home: HomeRoute,
  orders: OrdersRoute,
});

export const routes = [
  { key: 'investments', title: 'Investimentos', icon: 'cash-multiple' },
  { key: 'home', title: '', icon: 'home' },
  { key: 'orders', title: 'Pedidos', icon: 'chart-bubble' },
];

