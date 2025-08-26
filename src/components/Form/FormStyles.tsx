import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,    
    backgroundColor: '#0a0a1a',
  },
  scrollContainer: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
    paddingTop: 10, // Reduz o padding top para começar após a StatusBar
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    color:'#f0f0f0',
    textAlign:'center',
    marginBottom:10,
  },
  subtitle:{
    fontSize:16,
    color:'#1e80ff',
    textAlign:'center',
    marginBottom:30,
  },
  form:{
    width:'100%',
  },
  label:{
    color:'#f0f0f0',
    marginBottom:8,
    fontWeight:'600',
  },
  input:{
    backgroundColor:'#1a1a2e',
    color:'#f0f0f0',
    padding:12,
    borderRadius:6,
    marginBottom:20,
    borderWidth:1,
    borderColor:'#2a2a3a',
  },
  textArea:{
    minHeight:100,
    textAlignVertical:'top',
  },
  radioGroup:{
    marginBottom:20,
  },
  radioOption:{
    backgroundColor:'#1a1a2e',
    padding:12,
    borderRadius:6,
    marginBottom:10,
    borderWidth:1,
    borderColor:'#2a2a3a'
  },
  radioSelected:{
    borderColor:'#1e80ff',
    backgroundColor:'#1a1a3a', 
  },
  radioText:{
    color:'#f0f0f0',
  },
  buttonRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
  },
  button:{
    paddingVertical:16,
    paddingHorizontal:25,
    borderRadius:8,
    minWidth:'45%',
    alignItems:'center',
  },
  cancelButton:{
    backgroundColor:'#d8534f',
  },
  submitButton:{
    backgroundColor:'#1e90ff',
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
  },
});