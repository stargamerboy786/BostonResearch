/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView keyboardShouldPersistTaps="always" style={{flex: 1}}>
      <StatusBar />
      <View style={styles.upperView}>
        <Image
          source={require('../../assets/loginImage.jpg')}
          style={styles.logoStyle}
          resizeMode="contain"
        />
      </View>

      <View style={styles.middleView}>
        <Text style={styles.heading1}>Email Address</Text>
        <TextInput
          style={styles.textinput1}
          placeholder="Email"
          placeholderTextColor="grey"
          // onChangeText={handleChange('password')}
          // value={values.password}
        />
        <Text style={[styles.heading1]}>Password</Text>
        <TextInput
          style={styles.textinput1}
          placeholder="Password"
          placeholderTextColor="grey"
          // onChangeText={handleChange('password')}
          // value={values.password}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={true}
              // onValueChange={}
              // tintColors={{true: 'blue', false: 'grey'}}
            />
            <Text style={{fontSize: 18, color: 'grey'}}>Remember me?</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: 'grey',
                fontSize: 18,
                fontWeight: 'normal',
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lowerView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.loginButton}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Login</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <Text style={{color: 'grey', fontSize: 19, marginHorizontal: 5}}>
            Don’t have an account?
          </Text>
          <TouchableOpacity>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  // Customizable Area Start
  upperView: {
    backgroundColor: 'white',
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    //  height:'60%'
    height: '200%',
    width: '100%',
  },
  middleView: {
    backgroundColor: 'white',
    height: 300,
    width: '85%',
    elevation: 2,
    alignSelf: 'center',
    marginTop: -25,
    borderRadius: 10,
    padding: 20,
    // marginHorizontal: 20,
  },
  heading1: {
    // margint: 20,
    color: 'black',
    fontSize: 20,
  },
  textinput1: {
    color: 'black',
    marginVertical: 10,
    // marginHorizontal: 20,
    padding: 20,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
  },
  lowerView: {
    marginTop: 40,
    // paddingTop: 20
  },
  loginButton: {
    backgroundColor: 'rgb(41,90,236)',
    padding: 20,
    alignSelf: 'center',
    width: '85%',
    borderRadius: 10,
    alignItems: 'center',
  },
  newUserText: {
    marginTop: 5,
    color: 'black',
    // marginLeft: 20,
    fontSize: 18,
  },
  createAccountText: {
    marginTop: 5,
    color: '#0A4D68',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputBox: {
    // marginLeft: 20,
    // marginRight: 20,
    borderBottomWidth: 1,
    marginTop: 20,
    borderBottomColor: 'grey',
  },
  otpText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  sendOtpBtn: {
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 25,
    width: '100%',
    alignSelf: 'center',
  },
  emailButton: {
    borderColor: '#0A4D68',
    borderWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 25,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailButtonText: {
    color: '#0A4D68',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  helpText: {
    // marginLeft: 20,
    marginTop: 20,
    color: '#0A4D68',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomView: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  dividerLine: {
    borderWidth: 1,
    width: '45%',
    borderColor: 'grey',
    // marginHorizontal: 15
  },
  continueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
    // fontFamily:FONTS.MontserratBold
  },
});
