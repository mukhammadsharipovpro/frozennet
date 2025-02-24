import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import FrozenNetHeader from '../components/FrozenNetHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <FrozenNetHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Six Nations', '06.05 20:00', 'Ireland \n' + 'Scotland')}
        {renderBroadcast('Rugby', '08.05 18:45', 'Australia \n' + 'New Zealand')}
        {renderBroadcast('Gallagher', '10.05 17:30', 'Leicester Tigers \n' + 'Saracens')}
        {renderBroadcast('Top 14', '12.05 19:00', 'Toulouse \n' + 'Racing 92')}
        {renderBroadcast('Pro14', '14.05 18:00', 'Munster \n' + 'Leinster')}
        {renderBroadcast('Super Rugby', '16.05 20:15', 'Crusaders \n' + 'Hurricanes')}
        {renderBroadcast('Japan League', '18.05 16:30', 'Kobe Steelers \n' + 'Suntory Sungoliath')}
        {renderBroadcast('Currie Cup', '20.05 14:45', 'Blue Bulls \n' + 'Sharks')}
        {renderBroadcast('Major Rugby', '22.05 17:00', 'LA Giltinis \n' + 'Austin Gilgronis')}
        {renderBroadcast('European Rugby', '24.05 19:30', 'Exeter Chiefs \n' + 'Clermont')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 25,
  },
  league: {
    fontSize: 28,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
