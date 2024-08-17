import { View, Text, StyleSheet, Pressable, SafeAreaView, Alert,ActivityIndicator } from 'react-native';
import {React,useState} from 'react';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from '../../utils/responsive';
import { icons } from '../../constants';
import { colors } from '../../styles/globalStyles';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { createUser } from '../../lib/appwriteConfig';
const SignUp = ({ navigation }) => { 
  const SignInSchema = Yup.object().shape({
    username: Yup.string()
      .matches(/^[A-Za-z]+$/, 'First Name should contain only alphabetic characters')
      .required('First Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
      .matches(/\d/, 'Password must contain at least one number')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  const  [isSubmitting,setIsSubmitting]=useState(false)

  const handleSignUp = async (values) => {
    // setIsSubmitting(true);

    // try {
    //   const newUser = await createrUser(
    //     values.username,
    //     values.email,
    //     values.password,
    //     values.confirmPassword 
    //   );
    //   console.log('User created:', newUser);

    //   // Navigate to the next screen or perform other actions after successful sign-up
    //    router.push('/sign-in'); 
    // } catch (error) {
    //   console.error('Signup error:', error);
    //   // Display error message to the user (e.g., using an alert or a state variable)
    //   Alert.alert('Sign up error ', error)
    // } finally {
    //   setIsSubmitting(false);
    // // }
    // if(!values.username || values.password || values.email){
    //   Alert.alert('Error','Please fill all fields  ')
    // }
    setIsSubmitting(true)
    try {
      const result= await createUser(values.email,values.password,values.username)

      // set it to global state
      router.replace('/home')
    } catch (error) {
      Alert.alert('Error',error.message)
    }finally{
      setIsSubmitting(false)
    }
   
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.body}>
        <ScrollView 
          showsVerticalScrollIndicator={true} 
          persistentScrollbar={true} 
          indicatorStyle="white"
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Create an account</Text>
            <Text style={styles.subtitle}>Sign up to read stories of Kweku Ananse</Text>

            <Formik
              initialValues={{ username:'', email: '', password: '', confirmPassword: '' }}
              validationSchema={SignInSchema}
              onSubmit={handleSignUp}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                 
                    {/* username */}
                    <FormField
                      title='UserName'
                      value={values.username}
                      placeholder='UserName'
                      handleChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      error={touched.username && errors.username}
                      otherStyles={{ marginTop: 10 }}
                    />
                  {/* Email */}
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
                  {/* Password */}
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
                  {/* Confirm Password */}
                  <FormField
                    title='Confirm Password'
                    value={values.confirmPassword}
                    placeholder='Enter your password again'
                    handleChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    error={touched.confirmPassword && errors.confirmPassword}
                    otherStyles={{ marginTop: 24 }}
                    secureTextEntry
                  />

                  <CustomButton
                    title='Sign Up'
                    handlePress={handleSubmit}
                    containerStyles={{ marginTop: 35 }}
                    isLoading={isSubmitting}
                  />
                  {/* Loading Animation */}
                  {isSubmitting && (
                    <View style={styles.loadingContainer}>
                      <ActivityIndicator size="large" color={colors.primary} /> 
                      <Text style={styles.loadingText}>Signing up...</Text>
                    </View>
                  )}
                </>
              )}
            </Formik>
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.line} />
            </View>

            {/* <CustomButton
              title="Sign up with Google"
              handlePress={() => console.log('Google Sign In pressed')}
              containerStyles={{ width: "100%", marginTop: 10 }}
              backgroundColor="#555555"
              icon={icons.googleIcon}
              iconStyles={{ width: 25, height: 25 }}
              textStyles={{ color: colors.textWhite }}
            /> */}

            <Pressable onPress={() => router.push('/sign-in')}>
              <Text style={styles.signUpText}>
                Already have an account? <Text style={styles.signUpLink}>Sign In</Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
        <StatusBar backgroundColor='#161622' style='light' />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
  },
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: wp(6),
    paddingVertical: hp(7),
    backgroundColor: colors.tertairy,
  },
  title: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: colors.textWhite,
    textAlign: 'left',
    marginBottom: hp(2),
  },
  subtitle: {
    fontSize: wp(3.2),
    color: colors.textWhite,
    textAlign: 'left',
    marginBottom: hp(2),
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
    marginTop: hp(3),
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
  signUpText: {
    color: '#777',
    fontSize: wp(4),
    textAlign: 'center',
    paddingVertical: hp(3),
  },
  signUpLink: {
    color: colors.primary,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: colors.textWhite, // Or any color you prefer
    fontSize: wp(4),
  },
});

export default SignUp;
