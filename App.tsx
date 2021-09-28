import React from 'react';
import { SafeAreaView, ScrollView, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Section from './src/components/Section';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#171717' : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? '#171717' : Colors.white,
          }}>
          <Section title="Learn More">Read the docs to discover what to do next:</Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
