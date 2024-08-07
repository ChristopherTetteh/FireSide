import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from '../../utils/responsive';
import { icons } from '../../constants';
import { colors } from '../../styles/globalStyles';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { GestureHandlerRootView,ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
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
        onSubmit={(values) => {
          // Handle sign in logic
          console.log(values);
        }}
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
              />
          </>
        )}
      </Formik>

      <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </Pressable>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <CustomButton
        title="Sign in with Google"
        handlePress={() => console.log('Google Sign In pressed')}
        containerStyles={{ width: "100%", marginTop: 10 }}
        backgroundColor="#555555"
        icon={icons.googleIcon}
        iconStyles={{ width: 25, height: 25 }}
        textStyles={{ color: colors.textWhite }}
        />

      <Pressable onPress={() => router.push('/onboardingScreen1')}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </Pressable>
        
        </View>
        </ScrollView>
        <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    </GestureHandlerRootView>
    
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    width:'100%'
  },
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: wp(6),
    paddingVertical: hp(10),
    backgroundColor: colors.tertairy,
  },
  title: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: colors.textWhite,
    textAlign: 'left',
    marginBottom: hp(3),
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
    paddingVertical: hp(8),
  },
  signUpLink: {
    color: colors.primary,
  },
});

export default SignIn;
