import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface EdgePost {
  id: number;
  title: string;
}

export const getEdgePosts = async (): Promise<EdgePost[]> => {
  try {
    const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

    if (data.length === 0) {
      return [];
    }

    const firstPost = data[0];
    const lastPost = data[data.length - 1];

    
    return [firstPost, lastPost].map(({ id, title }) => ({
      id,
      title,
    }));
  } catch (error) {
    throw error;
  }
};