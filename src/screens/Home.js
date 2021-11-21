import * as React from 'react';
import {View} from 'react-native';
import { Button, Text, Header, Icon, Chip } from 'react-native-elements';
import styles from '../styles';


function HomeScreen({ navigation }) {
    navigation.setOptions({
      header: () =>
        <Header
          leftComponent={() => <Icon name="user-o" type="font-awesome" color="white" />}
          rightComponent={() => <Chip
            title="FAQ"
            type="outline"
            titleStyle={{ color: "white" }}
          />
          }
        />
    })
    return (
      <View style={styles.container}>
  
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

  export default HomeScreen;