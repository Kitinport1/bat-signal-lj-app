import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0a0a1a',
    padding: 90,
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    color:'#f0f0f0',
    textAlign:'center',
  },
  subtitle:{
    fontSize:16,
    color:'#888',
    marginBottom:40,
    textAlign:'center',
  },
  button:{
    backgroundColor:'#1e90ff',
    paddingVertical:15,
    paddingHorizontal:30,
    borderRadius:8,
    elevation:5,
    marginLeft:10,
    marginRight:10,
  },
  buttonText:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },
});