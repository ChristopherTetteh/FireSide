import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser, getStoriesFromBackend, getBookmarksFromBackend } from "../lib/appwriteConfig";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // New state for stories and bookmarks
  const [stories, setStories] = useState([]);
  const [bookmarkedStories, setBookmarkedStories] = useState([]);

  // Fetch user, stories, and bookmarks when the component mounts or when the user state changes
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = await getCurrentUser();
        
        if (currentUser) {
          setIsLoggedIn(true);
          setUser(currentUser);

          // Fetch stories and bookmarks if the user is logged in
          const storiesResponse = await getStoriesFromBackend();
          setStories(storiesResponse.documents);

          const bookmarksResponse = await getBookmarksFromBackend(currentUser.$id);
          setBookmarkedStories(bookmarksResponse.documents);
        } else {
          setIsLoggedIn(false);
          setUser(null);
          setStories([]);
          setBookmarkedStories([]);
        }
      } catch (error) {
        console.log("Error fetching user or data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [isLoggedIn, user]);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        user,
        isLoading,
        stories,              // Stories globally accessible
        bookmarkedStories,    // Bookmarked stories globally accessible
        setIsLoading,
        setIsLoggedIn,
        setUser,
        setStories,           // Provide setter to update stories
        setBookmarkedStories, // Provide setter to update bookmarks
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
