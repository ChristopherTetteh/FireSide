import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from '../../utils/responsive';
import { icons } from '../../constants';
import { colors } from '../../styles/globalStyles';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUp = ({ navigation }) => { 
  const SignInSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, 'First Name should contain only alphabetic characters')
      .required('First Name is required'),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, 'Last Name should contain only alphabetic characters')
      .required('Last Name is required'),
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
              initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
              validationSchema={SignInSchema}
              onSubmit={(values) => {
                // Handle sign in logic
                console.log(values);
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                  <View style={styles.formContainer}>
                    {/* First Name */}
                    <FormField
                      title='First Name'
                      value={values.firstName}
                      placeholder='First name'
                      handleChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      error={touched.firstName && errors.firstName}
                      otherStyles={{ marginTop: 10, width: '50%' }}
                    />
                    {/* Last Name */}
                    <FormField
                      title='Last Name'
                      value={values.lastName}
                      placeholder='Last Name'
                      handleChangeText={handleChange('lastName')}
                      onBlur={handleBlur('lastName')}
                      error={touched.lastName && errors.lastName}
                      otherStyles={{ marginTop: 10, width: '50%' }}
                    />
                  </View>
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
                  />
                </>
              )}
            </Formik>
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.line} />
            </View>

            <CustomButton
              title="Sign up with Google"
              handlePress={() => console.log('Google Sign In pressed')}
              containerStyles={{ width: "100%", marginTop: 10 }}
              backgroundColor="#555555"
              icon={icons.googleIcon}
              iconStyles={{ width: 25, height: 25 }}
              textStyles={{ color: colors.textWhite }}
            />

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
  formContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
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
});

export default SignUp;
