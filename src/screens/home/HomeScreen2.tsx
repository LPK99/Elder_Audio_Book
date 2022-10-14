import {Box, ScrollView, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import AlbumComponent from '../../components/Album';
import {songs} from '../../utils/mock-data';

const HomeScreen2 = () => {
  return (
    <Box style={styles.root}>
      <Box alignItems={'center'}>
      <Box style={styles.titleContainer}>
        <Text color="#fff" fontSize={31}>
          SÁCH NÓI
        </Text>
      </Box>
      </Box>
      <ScrollView style={styles.container}>
        <Box
          flexDirection="row"
          flexWrap={'wrap'}
          justifyContent={'space-around'}>
          {songs.map(audio => (
            <AlbumComponent album={audio} key={audio.id} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen2;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 20,
  },
  titleContainer: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
});
