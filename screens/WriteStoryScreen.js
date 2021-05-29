import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class TransactionScreen extends React.Component {

    render() {
        return(
            <View>
            <View style={styles.textContainer}>
          <Header
          centerComponent={{
              text:'Story Hub'
          }}/>
          </View>

            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Title"
              />  
            </View>

            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Author"
              />
        </View>

            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox2}
              placeholder="Write Your Story Here"
              />
        </View>

        <TouchableOpacity
                style={styles.submitButton}>
                    <Text>Submit</Text>
                </TouchableOpacity>
        </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textContainer: {
        backgroundColor: 'lightpink',
        width: '100%',
    },
    inputView:{
        flexDirection: 'row',
        margin: 20
      },
      inputBox:{
        width: 380,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        borderLeftWidth: 1.5,
        fontSize: 20
      },
      inputBox2:{
        width: 380,
        height: 200,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        borderLeftWidth: 1.5,
        fontSize: 20
      },
      submitButton: {
        width: 80,
        height: 50,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        borderWidth:1.5,
        backgroundColor:'lightpink'
    },
  });
