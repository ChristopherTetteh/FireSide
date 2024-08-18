import { Client,Account, Databases, Query} from "react-native-appwrite";
import { Alert } from "react-native";
import { ID } from "react-native-appwrite";
import { router } from "expo-router";

// import Snackbar from "react-native-snackbar";
const client = new Client();
const databases= new Databases(client);
const account = new Account(client); 

export const config={
  endpoint:'https://cloud.appwrite.io/v1',
  projectID:'66bbd6a3002e6b190ee6',
  platform:'com.anonymous.FireSide',
  databaseID:'66be13ef00129d795773',
  usersCollectionID:'66be147e003b5e733eb8'
}

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectID)
  .setPlatform(config.platform);
// Register User
export const createUser= async (email,password,username)=>{
  try {
    const newAccount= await  account.create(
      ID.unique(),
      email,
      password,
      username
    )
    if(!newAccount) throw  Error;
    await signIn(email,password);
    const newUser= await databases.createDocument(
      config.databaseID,
      config.usersCollectionID,
      ID.unique(),
      {
        accountID:newAccount.$id,
        username,
        email,
      }
    )
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
    
  }
}

export const  signIn = async(email,password) =>{
  try {
    const session = await account.createEmailPasswordSession(
      email,password)
      return session;
  } catch (error) {
    throw new Error(error);
    
    
  }
  
}

export const getCurrentUser=async ()=>{
  try {
    const currentAccount= await account.get();
    if(!currentAccount) throw Error
    const currentUser= await databases.listDocuments(
      config.databaseID,
      config.usersCollectionID,
      [Query.equal('accountID',currentAccount.$id)]
    )
    if(!currentUser) throw Error();
    return currentUser.documents[0];
    
  } catch (error) {
    console.log(error);
  }
}
export const handelogout= async()=>
{
  try {
    await account.deleteSession('current') // Delete all user sessions
    Alert.alert("Logged out", "You have been logged out successfully.");
      // Use Expo's Linking API to redirect the user to the start screen
      router.replace('/sign-in'); 
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Logout failed.");
  }
}