import { View, Text, StyleSheet, Pressable, SafeAreaView,ActivityIndicator ,Alert} from 'react-native';
import React,{useState} from 'react';
import { router,Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from '../../utils/responsive';
import { icons } from '../../constants';
import { colors } from '../../styles/globalStyles';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { GestureHandlerRootView,ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { getCurrentUser, signIn } from '../../lib/appwriteConfig';
import { useGlobalContext } from '../../context/GlobalProvider';
import * as Yup from 'yup';

const SignIn = ({ navigation }) => {
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
      .matches(/\d/, 'Password must contain at least one number')
      .required('Password is required'),
  });
  const { setUser, setIsLoggedIn } = useGlobalContext(); // Destructure setUser and setIsLoggedIn from the global context

 const  [isSubmitting,setIsSubmitting]=useState(false)

 const handleSignIn = async (values) => {
  setIsSubmitting(true);
  try {
    await signIn(values.email, values.password);
    const result = await getCurrentUser();
    setUser(result);  // Use the setUser from the global context
    setIsLoggedIn(true); // Use setIsLoggedIn from the global context
    Alert.alert('Success', 'User signed in successfully');
    router.replace('/home');
  } catch (error) {
    Alert.alert('Error', error.message);
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={styles.body}>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to read stories of Kweku Ananse</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInSchema}
        onSubmit={handleSignIn}
        >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <FormField
              title='Email'
              value={values.email}
              placeholder='Enter your email'
              handleChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && errors.email}
              otherStyles={{ marginTop: 20 }}
              keyboardType='email-address'
              />
            <FormField
              title='Password'
              value={values.password}
              placeholder='Enter your password'
              handleChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={touched.password && errors.password}
              otherStyles={{ marginTop: 24 }}
              secureTextEntry
              />
            <CustomButton
              title='Sign In'
              handlePress={handleSubmit}
              containerStyles={{ marginTop: 50 }}
              isLoading={isSubmitting} 
              />
              {/* Loading Animation */}
          {isSubmitting && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={colors.primary} /> 
              <Text style={styles.loadingText}>Signing in...</Text>
            </View>
          )}

          </>
          
        )}
      </Formik>
      <View>
        <Link style={styles.forgotPassword} href='/forget-password'>Forgot Password</Link>
      </View>
{/* 
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View> */}

      {/* <CustomButton
        title="Sign in with Google"
        handlePress={() => console.log('Google Sign In pressed')}
        containerStyles={{ width: "100%", marginTop: 10 }}
        backgroundColor="#555555"
        icon={icons.googleIcon}
        iconStyles={{ width: 25, height: 25 }}
        textStyles={{ color: colors.textWhite }}
        isLoading={isSubmitting}
        /> */}
{/* 
      {/* Link to other pages */}
      <View>
        <Text style={styles.signUpText}>  Don't have an account?
        <Link style={styles.signUpLink} href='/onboardingScreen1'>Sign Up</Link>
        </Text>
      </View>
        
        </View>
        </ScrollView>
        <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    </GestureHandlerRootView>
    
  );
};

const styles = StyleSheet.create({
  body:{
    // flex:1,
    width:'100%',
    height:'100%'
   
  },
  container: {
    width: '100%',
    height:'auto',
    // flex: 1,
    paddingHorizontal: wp(6),
    paddingVertical: hp(15),
    backgroundColor: colors.tertairy,
  },
  title: {
    fontSize: wp(7),
    fontFamily:'Poppins-Bold',
    color: colors.textWhite,
    textAlign: 'left',
    marginBottom: hp(1.5),
  },
  subtitle: {
    fontSize: wp(3.5),
    color: colors.textWhite,
    fontFamily:'Poppins-Regular',
    textAlign: 'left',
    marginBottom: hp(3),
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
    marginVertical: hp(2.5),
  },
  signUpText: {
    color: '#777',
    fontSize: wp(4),
    textAlign: 'center',
    paddingVertical: hp(5),
  },
  signUpLink: {
    color: colors.primary,
    
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: colors.primary, // Or any color you prefer
    fontSize: wp(4),
  },
});

export default SignIn;
