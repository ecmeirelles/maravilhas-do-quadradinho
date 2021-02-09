import React, {useState}  from "react";
import { Provider, BottomNavigation } from "react-native-paper";
import { routes, renderScene } from "./shared/routes";

export default function App() {
  const [index, setIndex] = useState(1);

  return (
    <Provider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#B6D7E0' }}
      />
    </Provider>
  );
}
