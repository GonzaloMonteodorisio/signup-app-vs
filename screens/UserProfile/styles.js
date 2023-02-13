import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#333',
    top: 10,
    width: '90%',
    height: '90%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#00000066',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signoutButton: {
    alignItems: 'center'
  }
});

export default styles;
