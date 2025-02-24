import React from 'react';
import {StyleSheet, ImageBackground, FlatList, Text} from 'react-native';
import FrozenNetHeader from '../components/FrozenNetHeader';
import FrozenNetMenuComponent from '../components/FrozenNetMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {breakfastBurgers} from '../assets/products';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderProduct = ({item}) => <FrozenNetMenuComponent item={item} />;
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <FrozenNetHeader />

      <Text style={styles.title}>Меню</Text>

      <FlatList
        data={breakfastBurgers}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.main}
        numColumns={2}
        horizontal={false}
        columnWrapperStyle={{
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    paddingBottom: 100,
    width,
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
});
