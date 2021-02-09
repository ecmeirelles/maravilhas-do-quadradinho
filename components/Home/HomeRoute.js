import React from "react";
import { HomeScreen }  from "./HomeScreen/HomeScreen";
import { BaseWrapper } from "../shared/BaseWrapper/BaseWrapper";

export const HomeRoute = props => (
  <BaseWrapper>
    <HomeScreen {...props} />
  </BaseWrapper>
);
