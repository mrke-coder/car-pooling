import React from 'react';
import { StyleSheet, SafeAreaView, Platform} from 'react-native';
import {Provider as PaperProvider} from "react-native-paper";
import AppNavigation from "./src/components/AppNavigation";
import Header from "./src/components/_Shared/Header";

export default function App() {
  return (
    <PaperProvider>
        <SafeAreaView style={styles.container}>
          <Header/>
          <AppNavigation/>
        </SafeAreaView>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0
  },
});
