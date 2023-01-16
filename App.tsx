import { Appbar, Button, Provider } from 'react-native-paper';
import React, { useState } from 'react';

import { View } from 'react-native';

export default function App() {
  const [titleText, setTitleText] = useState('Press Me!');
  const [pressCount, setPressCount] = useState(0);

  function updateButton() {
    let newCount = pressCount + 1;
    setPressCount(newCount);
    setTitleText(`Presses: ${newCount}`);
  }

  // Auto-forcing a re-render doesn't have any effect.
  if (pressCount == 0) updateButton();

  return (
    <Provider>
      <Appbar.Header elevated={true} mode="center-aligned">
        <Appbar.Content
          title={
            <View style={{ backgroundColor: 'red' }}>
              <Button mode="contained-tonal" onPress={updateButton}>
                {titleText}
              </Button>
            </View>
          }
          // titleStyle={{height: 40, top: 12}}  // A functional workaround to fix the issue 
          // NOTE: This workaround is no longer needed once PR #3596 is merged.
        />
      </Appbar.Header>
    </Provider>
  );
}
