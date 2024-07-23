import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import TransHeader from '../../Components/TransHeader';
import ScheduleCard from '../../Components/ScheduleCard';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const TranViewBids = props => {
  const {navigation, name} = props;

  return (
    <View>
      <TransHeader name="View Bids" />
      {/* <Text> Go</Text> */}
      <View style={{backgroundColor: 'white'}}>
        <Text
          style={{
            fontFamily: 'Lato-Bold',
            marginVertical: hp(2),
            marginLeft: wp(4),
          }}>
          Select an enquiry to place bid.
        </Text>
      </View>
      <View style={{backgroundColor: '#fff', marginBottom: 30}}>
        <ScrollView
          style={{
            backgroundColor: '#fff',
            marginBottom: hp(8),
            width: wp(85),
            alignSelf: 'center',
          }}>
          <ScheduleCard />
          <ScheduleCard />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TranViewBids;