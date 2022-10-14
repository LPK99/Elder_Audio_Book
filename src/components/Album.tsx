import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {RootStackProps} from '../navigation/Root';
import {IAudio} from '../utils/firebase';

export type AlbumProps = {
  album: IAudio;
};

const AlbumComponent = (props: AlbumProps) => {
  const {album} = props;
  const navigation = useNavigation<RootStackProps['navigation']>();

  const onPress = () => {
    navigation.navigate('PlayerScreen', {audioId: album.id - 1});
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: album.artwork}} style={styles.image} />
        <Text style={styles.text}>{album.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 144,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  text: {
    color: 'black',
    marginTop: 10,
  },
});

export default AlbumComponent;
