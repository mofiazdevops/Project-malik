import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Post {
  _id: string;
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  url: string;
  image: string;
  date_created: string;

  // Add other properties based on your API response
}

interface BlogContextType {
  data: Post[];
  posts: Post[];
  popularPosts: Post[];
  pageData: Post[];
  singlepopularPosts: Post | null;
  urlPosts: Post | null;
  globalLoader: boolean;
  pageLoading: boolean;
  fetchData: () => Promise<void>;
  fetchPosts: () => Promise<void>;
  fetchPopularPosts: () => Promise<void>;
  fetchSinglePopularPosts: () => Promise<void>;
  fetchDataPagination: () => Promise<void>;
  fetchPostsUrl: (url: string) => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Post[]>([]);
  const [pageData, setPageData] = useState<Post[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [urlPosts, setUrlPosts] = useState<Post | null>(null);
  const [popularPosts, setPopularPosts] = useState<Post[]>([]);
  const [singlepopularPosts, setSinglePopularPosts] = useState<Post | null>(
    null
  );
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [recentLoading, setRecentLoading] = useState<boolean>(false);
  const [popularLoading, setPopularLoading] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const [urlLoading, setUrlLoading] = useState<boolean>(false);
  const [singleLoading, setSingleLoading] = useState<boolean>(false);

  const globalLoader =
    loading ||
    recentLoading ||
    popularLoading ||
    urlLoading ||
    singleLoading;

  const fetchData = async () => {
    setRecentLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_BLOG_RECENT_POST_API ||
          `http://localhost:4000/api/v1/web/posts/recent`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setRecentLoading(false);
    }
  };
  const fetchDataPagination = async () => {
    setPageLoading(true);
    try {
      const nextPage = page; // Get the latest page state

      console.log(`Fetching data for page: ${nextPage}`);
      const response = await fetch(
        `${process.env.REACT_APP_BLOG_RECENT_POST_PAGE_API}?p=${page}` ||
          `http://localhost:4000/api/v1/web/posts?p=${page}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
      // Append new data only if it's available
      if (res.data.length > 0) {
        setPageData((prevData) => [...prevData, ...res.data]);
        // setPageData((prevData) => {
        //   const newData = res.data.filter(
        //     (item) => !prevData.some((prevItem) => prevItem._id === item._id)
        //   );
        //   console.log(prevData, "this is previous data");
        //   console.log(newData, "this is new data");
        //   return [...prevData, ...newData];
        // });
        setPage((prevPage) => prevPage + 1); // Move to the next page
      } else {
        console.log("No more posts available.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setPageLoading(false);
    }
  };

  // Function to fetch latest posts
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_POSTS_API ||
          "http://localhost:4000/api/v1/web/posts"
      );
      if (!response.ok) throw new Error("Failed to fetch latest posts");
      const res = await response.json();
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching latest posts:", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchPostsUrl = async (url: string) => {
    setUrlLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_POSTS_API_URL}/${url}` ||
          `http://localhost:4000/api/v1/web/posts/${url}`
      );
      if (!response.ok) throw new Error("Failed to fetch latest posts");
      const res = await response.json();
      console.log(res.data, "this is res data..............");
      setUrlPosts(res.data || null);
    } catch (error) {
      console.error("Error fetching latest posts:", error);
    } finally {
      setUrlLoading(false);
    }
  };

  // Function to fetch popular posts
  const fetchPopularPosts = async () => {
    setPopularLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_POPULAR_POSTS_API ||
          "http://localhost:4000/api/v1/web/posts/popular"
      );
      if (!response.ok) throw new Error("Failed to fetch popular posts");
      const res = await response.json();
      setPopularPosts(res.data);
    } catch (error) {
      console.error("Error fetching popular posts:", error);
    } finally {
      setPopularLoading(false);
    }
  };
  const fetchSinglePopularPosts = async () => {
    setSingleLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_POPULAR_POSTS_API ||
          "http://localhost:4000/api/v1/web/posts/popular"
      );
      if (!response.ok) throw new Error("Failed to fetch popular posts");
      const res = await response.json();
      setSinglePopularPosts(res.data[0]);
    } catch (error) {
      console.error("Error fetching popular posts:", error);
    } finally {
      setSingleLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchPosts();
    fetchSinglePopularPosts();
    fetchPopularPosts();
    fetchDataPagination();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        pageLoading,
        globalLoader,
        data,
        fetchData,
        fetchPopularPosts,
        fetchSinglePopularPosts,
        fetchDataPagination,
        fetchPosts,
        fetchPostsUrl,
        singlepopularPosts,
        posts,
        popularPosts,
        urlPosts,
        pageData,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};
