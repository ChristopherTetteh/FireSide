import { SafeAreaView } from 'react-native-safe-area-context';
import { View,Text, ScrollView,Image } from 'react-native';
import { useGlobalContext } from '../../context/GlobalProvider'; // Import the global context
import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalStyles';
import { wp,hp } from '../../utils/responsive';
import { icons, images } from '../../constants';
const Home = () => {
  const { user, isLoggedIn } = useGlobalContext(); // Destructure user and isLoggedIn from global context

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
{/* Header Part */}
    <View style={styles.headerContainer}>
      <View >
        {isLoggedIn && user&& ( // Check if user is logged in and user data exists
          <Text style={styles.welcomeText}>Hi, {user.username}</Text> // Display the username
        )}
      <Text>Welcome to Fire Side</Text>
      </View>
      <Image source={icons.profileIcon} style={{width:30,height:30}}/>
        </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: wp(5),
    paddingVertical: hp(5),
    backgroundColor: colors.secondary,
  },
  headerContainer:{
  flexDirection:'row',
justifyContent:'space-between',
  },
  welcomeText: {
    fontSize: wp(4),
    fontFamily:'Poppins-Bold',
    color: colors.textBalck,
    textAlign: 'left',
    marginBottom: hp(1),
  },
 
})
export default Home;