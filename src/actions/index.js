export const ADD_POST = "ADD_POST";

export function addPost(id, title, desc) {
    return {
      type: ADD_POST,
      id,
      title, desc
    }
};