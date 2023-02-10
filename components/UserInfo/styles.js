import { StyleSheet } from 'react-native';

const styles = (profilePhotoSize, rowAligned) => StyleSheet.create({
  container: {
    flexDirection: rowAligned ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: rowAligned ? 'space-evenly' : 'space-around',
  },
  imagebox: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: rowAligned ? 6 : 0,
  },
  playerimg: {
    height: profilePhotoSize,
    width: profilePhotoSize,
    borderRadius: profilePhotoSize / 2,
    borderWidth: 2,
    borderColor: '#0F6CF6',
  },
  editableCover: {
    position: 'absolute',
    top: 0,
    width: 50,
    height: 50,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editableProfilePhoto: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 10,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
