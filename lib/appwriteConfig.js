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
  usersCollectionID:'66be147e003b5e733eb8',
  storiesCollectionID:'66cb31c30012019900fd',
  bookmarksCollectionID:'66cb4f1d00258d1bfc2a',

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
      router.replace('/sign-in'); 
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Logout failed.");
  }
}
// Example of fetching stories with error handling
export const getStoriesFromBackend = async () => {
  try {
    const storiesResponse = await databases.listDocuments(
      config.databaseID,
      config.storiesCollectionID
    );
    
    // Check if the response contains the documents field
    if (storiesResponse && storiesResponse.documents) {
      console.log('Fetched stories:', storiesResponse);
      return storiesResponse;  // Return the response as expected
    } else {
      throw new Error('Invalid response structure');
    }
  } catch (error) {
    console.error('Error fetching stories:', error.message);
    throw error;  // Re-throw the error after logging
  }
};


// Fetch bookmarks for the current user
export const getBookmarksFromBackend = async (userID) => {
  try {
    const bookmarksResponse = await databases.listDocuments(
      config.databaseID,
      config.bookmarksCollectionID,
      [Query.equal('user_id', userID)]
    );
    return bookmarksResponse;
  } catch (error) {
    console.error("Error fetching bookmarks:", error);
    throw error;
  }
};
// Add a bookmark for a story
export const addBookmark = async (userID, storyID, progress, rating) => {
  try {
    const bookmarkResponse = await databases.createDocument(
      config.databaseID,
      config.bookmarksCollectionID,
      ID.unique(),
      {
        user_id: userID,
        story_id: storyID,
        progress: progress || 0,
        rating: rating || 0,
      }
    );
    return bookmarkResponse;
  } catch (error) {
    console.error("Error adding bookmark:", error);
    throw error;
  }
};
// Update the progress of a story
export const updateProgress = async (bookmarkID, newProgress) => {
  try {
    const updatedBookmark = await databases.updateDocument(
      config.databaseID,
      config.bookmarksCollectionID,
      bookmarkID,
      { progress: newProgress }
    );
    return updatedBookmark;
  } catch (error) {
    console.error("Error updating progress:", error);
    throw error;
  }
};
