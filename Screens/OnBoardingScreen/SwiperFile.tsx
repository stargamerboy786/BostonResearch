import {
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

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.swiperview}>
        <Swiper
          activeDotColor="black"
          showsButtons={false}
          dotStyle={styles.dotstyles}
          activeDotStyle={styles.dotstyles}
          autoplay>
          <View style={styles.slide1}>
            <Image
              source={require('../../assets/onboardingimages.png')}
              resizeMode="stretch"
              style={styles.contimage1}
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
              style={styles.contimage1}
            />
            <Text style={styles.title}>
              Stay Informed On Latest Research News
            </Text>
            <Text style={styles.description}>
              Stay informed with the latest news from around the world.
            </Text>
          </View>
          <View style={styles.slide2}>
            <Image
              source={require('../../assets/onboardingimages2.png')}
              resizeMode="stretch"
              style={styles.contimage2}
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
  safearea: {flex: 1, backgroundColor: '#fff'},
  swiperview: {
    height: '70%',
    width: '100%',
  },
  dotstyles: {
    top: 35,
    marginLeft: 10,
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  contimage1: {
    width: '100%',
    height: 520,
  },
  contimage2: {
    alignSelf: 'center',
    width: '90%',
    height: 480,
  },

  slide1: {
    backgroundColor: 'white',
  },
  slide2: {
    marginTop: 30,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'PlayfairDisplay-Bold',
    marginTop: 10,
    color: 'black',
    fontSize: 42,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Manrope-Regular',
    marginTop: 5,
    justifyContent: 'center',
    paddingHorizontal: 20,
    fontSize: 21,
    color: '#969696',
    textAlign: 'center',
    marginBottom: 4,
  },
  connecttext: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    fontFamily: 'PlayfairDisplay-Italic',
    marginTop: 5,
  },
  googleboxview: {
    width: '86%',
    height: 90,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageview: {
    height: 80,
    width: 80,
  },
  privacybox: {
    fontFamily: 'Manrope-Bold',
    backgroundColor: 'rgb(41,90,236)',
    width: '90%',
    borderRadius: 10,
    height: 70,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'space-between',
  },
  started: {
    borderColor: 'black',
    borderWidth: 1.5,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    height: 70,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  privacytext: {
    color: 'white',
    fontSize: 20,
    top: 15,
    textAlign: 'center',
    fontFamily: 'Manrope-Bold',
  },
  privacytext1: {
    color: 'black',
    fontSize: 20,
    top: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Manrope-Bold',
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
