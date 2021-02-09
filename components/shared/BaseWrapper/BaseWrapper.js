import React from "react";
import { View } from "react-native";

export const BaseWrapper = ({ children }) => (
  <View style={{ marginTop: 40, padding: 24 }}>
    {children}
  </View>
);
