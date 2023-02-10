import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-evenly',
    backgroundColor: '#112233'
  },
  screen: {
    fontSize: 50
  },
  userImage: {
    width: 200, 
    height: 200, 
    borderRadius: 50
  },
  editNames: {
    borderWidth: 1, 
    padding: 5, 
    width: '80%'
  },
  names: {
    fontSize: 20
  }
});

export default styles;