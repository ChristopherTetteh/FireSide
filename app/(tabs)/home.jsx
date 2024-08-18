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
    <ScrollView 
    showsVerticalScrollIndicator={true} 
    persistentScrollbar={true} 
    indicatorStyle="#ff9000"
    >
{/* Header Part */}
    <View style={styles.headerContainer}>
      <View >
        {isLoggedIn && user&& ( // Check if user is logged in and user data exists
          <Text style={styles.userText}>Hi, {user.username}</Text> // Display the username
        )}
      <Text style={styles.welcomeText}>Welcome to Fire Side</Text>
      </View>
      <Image source={icons.profileIcon} style={{width:40,height:40}}/>
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
    paddingVertical: hp(4),
    backgroundColor: colors.secondary,
  },
  headerContainer:{
  flexDirection:'row',
justifyContent:'space-between',
  },
  userText: {
    fontSize: wp(4.5),
    fontFamily:'Poppins-Medium',
    color: colors.textBalck,
    textAlign: 'left',
    marginBottom: hp(1),
  },
  welcomeText:{
    fontFamily:'Poppins-Light',
    color:colors.textSecondary
  }
 
})
export default Home;