import { StyleSheet } from 'react-native';
import { wp, hp } from '../utils/responsive';

export const colors = {
  primary: '#FF9900',
  secondary: '#ff7043',
  background: '#FEFEFD',
  textPrimary: '#000',
  textSecondary: '#757575',
  gray: '#e0e0e0',
  darkBase:'#0D131C',

};

export const fonts = {
  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5), // Use percentage-based padding
    backgroundColor: colors.background,
  },
  title: {
    fontSize: hp(3), // Use percentage-based font size
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: hp(2),
  },
  subtitle: {
    fontSize: hp(2),
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: hp(2),
  },
  input: {
    height: hp(6),
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: wp(2),
    marginBottom: hp(2),
    paddingHorizontal: wp(2),
    color: colors.textPrimary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  link: {
    color: colors.primary,
    textAlign: 'center',
    marginVertical: hp(1),
  },
  divider: {
    height: hp(0.2),
    backgroundColor: colors.gray,
    marginVertical: hp(2),
  },
});
