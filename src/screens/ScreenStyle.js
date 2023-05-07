import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  container: {
    flex: 1,
  },
  results: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#c7c7c7",
  },
  resultText: {
    color: "#000000",
    fontSize: 32,
    fontWeight: "bold",
    padding: 12,
    textAlign: "right",
  },
  historyText: {
    color: "#000000",
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  }
});