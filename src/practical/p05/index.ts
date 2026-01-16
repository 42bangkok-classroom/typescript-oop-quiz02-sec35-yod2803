import axios from 'axios';

interface APIComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface SafeComment {
  id: number;
  body: string;
}

export const safeFetchComment = async (commentId: number | null | undefined): Promise<SafeComment | null> => {
  try {

    if (commentId === null  commentId === undefined 
 commentId <= 0) {
      return null;
    }

    const { data } = await axios.get<APIComment>(https://jsonplaceholder.typicode.com/comments/${commentId});


    return [data].map((comment) => ({
      id: comment.id,
      body: comment.body,
    }))[0];

  } catch (error) {
    return null;
  }
};