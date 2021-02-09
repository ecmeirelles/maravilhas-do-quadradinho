import React from "react";
import { OrdersScreen }  from "./OrdersScreen/OrdersScreen";
import { BaseWrapper } from "../shared/BaseWrapper/BaseWrapper";

export const OrdersRoute = props => (
  <BaseWrapper>
    <OrdersScreen {...props} />
  </BaseWrapper>
);
