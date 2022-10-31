import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import Rotas from "./src/Pages/Rotas";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Rotas />
    </NativeBaseProvider>
  );
}
