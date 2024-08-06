import { View, Text, StyleSheet,Pressable } from 'react-native'
import {React,useState} from 'react'
import {wp,hp} from '../../utils/responsive'
import { icons } from '../../constants'
import {colors,opacityShades} from  '../../styles/globalStyles'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleEmailChange=(text)=>{
    setForm({...form,email:text});
  }
  const handlePasswordChange=(text)=>{
    setForm({...form,password:text});

  }
  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to read stories of Kweku Ananse</Text>
      
      {/* Email Field */}
      <FormField
      title='Email'
      value={form.email}
      handleChangeText={handleEmailChange}
      otherStyles={{marginTop:24}}
      keyboardType='email-address'
      />
        {/* Password Field */}
      <FormField
      title='Password'
      value={form.password}
      handleChangeText={handlePasswordChange}
      otherStyles={{marginTop:24}}
      secureEntry
      />
      <CustomButton
      title='Sign In'
      handlePress={() => {}}
      containerStyles={{marginTop:30}}

      />
      <Pressable onPress={() => navigation.navigate('ForgotPassword')}
        //the naviagation  needs to be updated to routing 
        >
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </Pressable>
      {/* Line Stroke /Or */}
      <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>
        {/* Google Sign Button */}
        <CustomButton
        title="Sign in with Google"
        handlePress={() => console.log('Google Sign In pressed')}
        containerStyles={{ width: "100%", marginTop: 10 }}
        backgroundColor="#555555" 
        icon={icons.googleIcon} 
        iconStyles={{ width: 25, height: 25 }}
        textStyles={{ color: colors.textWhite }} 
      />
       <Pressable onPress={() => navigation.navigate('Signup')}
        //the naviagation  needs to be updated to routing 

        >
        
          <Text style={styles.signUpText}>Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text></Text>
        </Pressable>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    width:'100%',
    //  height:100,
    flex:1,
    paddingHorizontal: wp(6),
    paddingVertical:hp(10),
    backgroundColor:colors.tertairy,
  },
  title:{
    fontSize: wp(7),
    fontWeight: 'bold',
    color: colors.textWhite,
    textAlign: 'left',
    marginBottom: hp(3),
  },
  subtitle:{
    fontSize: wp(3.2),
    color: colors.textWhite,
    textAlign: 'left',
    marginBottom: hp(4),
  },
  
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(4),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#999999',
  },
  orText: {
    marginHorizontal: wp(2),
    color: '#999999',
    fontSize: wp(4),
  },
  forgotPassword: {
    color: colors.primary,
    fontSize: wp(3),
    textAlign: 'right',
    marginVertical:hp(2.5),
  },
  
  signUpText: {
    color: '#999999',
    fontSize: wp(4),
    textAlign: 'center',
    paddingVertical:hp(4),
  },
  signUpLink: {
    color: colors.primary,
  },
})
export default SignIn