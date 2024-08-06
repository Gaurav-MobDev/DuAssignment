import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function Error({error}: {error: string}) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    color: 'red',
  },
});

export {Error};
