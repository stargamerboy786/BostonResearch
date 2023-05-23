/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

const SwiperFile = () => {
  const navigation = useNavigation();
  // loginnavigation = () => {
  //   navigation.navigate('Login');
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.swiperview}>
        <Swiper
          activeDotColor="black"
          showsButtons={false}
          dotStyle={{top: 35}}
          activeDotStyle={{top: 35}}
          autoplay>
          <View style={styles.slide1}>
            <Image
              source={require('../../assets/onboardingimages.png')}
              resizeMode="stretch"
              style={{
                width: '100%',
                height: 520,
              }}
            />
            <Text style={styles.title}>
              Research Publication Is Now Much Better
            </Text>
            <Text style={styles.description}>
              Now you can see news anywhere, anytime, even if there is no
              internet access!
            </Text>
          </View>
          <View style={styles.slide1}>
            <Image
              source={require('../../assets/onboardingimages1.png')}
              resizeMode="stretch"
              style={{
                width: '100%',
                height: 520,
              }}
            />
            <Text style={styles.title}>
              Stay Informed On Latest Research News
            </Text>
            <Text style={styles.description}>
              Stay informed with the latest news from around the world.
            </Text>
          </View>
          <View style={styles.slide1}>
            <Image
              source={require('../../assets/onboardingimages2.png')}
              resizeMode="stretch"
              style={{
                alignSelf: 'center',
                width: '90%',
                height: 520,
              }}
            />
            <Text style={styles.title}>Get Updates On What’s Happening</Text>
            <Text style={styles.description}>
              Our app brings you coverage from top news sources, personalized to
              your interests.
            </Text>
          </View>
        </Swiper>
      </View>
      <View>
        <TouchableOpacity style={styles.privacybox}>
          <Text style={styles.privacytext}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.started}>
          <Text style={styles.privacytext1}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SwiperFile;
const styles = StyleSheet.create({
  swiperview: {
    height: '70%',
    width: '100%',
    // borderWidth: 1
  },

  slide1: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    // borderWidth: 1
  },
  title: {
    marginTop: 10,
    color: 'black',
    // marginTop: '3%',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 36,
    textAlign: 'center',
  },
  description: {
    marginTop: 5,
    justifyContent: 'center',
    paddingHorizontal: 20,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 4,
  },
  connecttext: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    // fontWeight: "bold",
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5,
  },
  googleboxview: {
    width: '86%',
    height: 90,
    // borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageview: {
    height: 80,
    width: 80,
  },
  calenderText: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 14,
    marginTop: 15,
    fontFamily: 'Montserrat-Regular',
  },
  privacybox: {
    backgroundColor: 'rgb(41,90,236)',
    width: '90%',
    borderRadius: 10,
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'space-between',
  },
  started: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  privacytext: {
    color: 'white',
    fontSize: 20,
    top: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  privacytext1: {
    color: 'black',
    fontSize: 16,
    top: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  loaderview: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.85)',
    height: '120%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
    opacity: 0.6,
  },
});
