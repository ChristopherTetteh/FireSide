import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from '../../utils/responsive';
import { colors } from '../../styles/globalStyles';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const ForgotPasswordScreen = ({ navigation }) => {
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
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
              <Text style={styles.title}>Forgot Password</Text>
              <Text style={styles.subtitle}>Enter your email to reset your password</Text>
              
              <Formik
                initialValues={{ email: '' }}
                validationSchema={ForgotPasswordSchema}
                onSubmit={(values) => {
                  // Handle password reset logic
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
                    <CustomButton
                      title='Reset Password'
                      handlePress={handleSubmit}
                      containerStyles={{ marginTop: 40 }}
                    />
                  </>
                )}
              </Formik>
              
              <Pressable onPress={() => router.push('reset-password')}>
                <Text style={styles.link}>Create New Password</Text>
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

export default ForgotPasswordScreen;
