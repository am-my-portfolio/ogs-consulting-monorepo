import './style-converter.css';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@/helpers/graphql/queries/posts';
import PostCard from '@/components/card/PostCard';
import LoadingSpinner from '../base/LoadingSpinner.js';

export interface PostsOfPageProps {
  category: string;
}

const PostsOfPage = ({ category }: PostsOfPageProps) => {
  // Apollo's useQuery hook automatically caches data
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { category },
  });
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error.message} </div>;
  }

  // console.log(data?.posts?.nodes);
  return (
    <div className="mt-6">
      <ul
        role="list"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2"
      >
        {data?.posts?.nodes.map((item, index) => (
          <li
            key={index}
            className="flex flex-col p-1 divide-y divide-dull-secondary rounded-md shadow bg-pop-secondary"
          >
            <PostCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsOfPage;
