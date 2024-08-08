import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { wp, hp } from '../../utils/responsive';
import { colors } from '../../styles/globalStyles';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const ResetPassword= ({ navigation }) => {
  const ResetPasswordSchema = Yup.object().shape({
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
              <Text style={styles.title}>Reset Password</Text>
              <Text style={styles.subtitle}>Enter your new password</Text>

              <Formik
                initialValues={{ password: '', confirmPassword: '' }}
                validationSchema={ResetPasswordSchema}
                onSubmit={(values) => {
                  // Handle password reset logic
                  console.log(values);
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                  <>
                    <FormField
                      title='New Password'
                      value={values.password}
                      placeholder='Enter your password'
                      handleChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      error={touched.password && errors.password}
                      otherStyles={{ marginTop: 24 }}
                      secureTextEntry
                    />
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
                      title='Reset Password'
                      handlePress={handleSubmit}
                      containerStyles={{ marginTop: 40 }}
                    />
                  </>
                )}
              </Formik>

              <Pressable onPress={() => router.push('/sign-in')}>
                <Text style={styles.link}>Back to Login</Text>
              </Pressable>
            </View>
          </ScrollView>
        <StatusBar backgroundColor='#161622' style='light' />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
  },
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: wp(6),
    paddingVertical: hp(8),
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
  link: {
    color: colors.primary,
    fontSize: wp(4),
    textAlign: 'center',
    paddingVertical: hp(4),
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default ResetPassword;
