import React from "react";
import { InvestmentsScreen }  from "./InvestmentsScreen/InvestmentsScreen";
import { BaseWrapper } from "../shared/BaseWrapper/BaseWrapper";

export const InvestmentsRoute = props => (
  <BaseWrapper>
    <InvestmentsScreen {...props} />
  </BaseWrapper>
);
