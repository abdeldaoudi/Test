import { PostsList } from "../../components/posts-list"
import { data } from "./mock-data"
export const Posts = ({}) => {
  return (
    <>
      <div>
         <PostsList Posts={data}/>
      </div>
    </>
  );
};
