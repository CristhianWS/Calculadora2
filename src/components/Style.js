import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#bab3b3',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 60,
    flex: 2,
  },
  buttonOther: {
    backgroundColor: '#8c8888',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 50,
    flex: 2,
  },
  textButton: {
    color: "#000000",
    fontSize: 20,
  },
});