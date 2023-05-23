import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

export default function Dashboard() {
  const apiCalling = async () => {
    const apiUrl = 'https://bostonresearch.org/feed/?post_type=news';
    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.text(); // Read response as text
        } else {
          throw new Error('API request failed');
        }
      })
      .then(text => {
        // Log the response text
        console.log('response text:', text);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };
  useEffect(() => {
    apiCalling();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
