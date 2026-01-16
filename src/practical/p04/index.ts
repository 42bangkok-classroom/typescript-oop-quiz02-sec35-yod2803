import axios from 'axios';

interface Comment {
  postId: number; 
  id: number;
  name: string;
  email: string;
  body: string;
}

export const countCommentsByPost = async (): Promise<Record<number, number>> => {
  try {
    const { data } = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');

 
    return data.reduce((acc, comment) => {
      
      if (comment.postId === null || comment.postId === undefined) {
        return acc;
      }

      acc[comment.postId] = (acc[comment.postId] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

  } catch (error) {
    throw error;
  }
};