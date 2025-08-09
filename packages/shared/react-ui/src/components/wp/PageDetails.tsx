import './style-converter.css';
import { useQuery } from '@apollo/client';
import { GET_PAGE } from '@/helpers/graphql/queries/page';
import RowLayout from '@/components/layout/RowLayout';
import SanitizeHTML from '@/components/base/SanitizedHtml';
import LoadingSpinner from '../base/LoadingSpinner';

export interface PageDetailsProps {
  uri: string;
}

const PageDetails = ({ uri }: PageDetailsProps) => {
  // Apollo's useQuery hook automatically caches data
  const { loading, error, data } = useQuery(GET_PAGE, { variables: { uri } });
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error.message} </div>;
  }

  const page = data?.pageBy;
  // console.log(page);

  // Hero Image must be the Featured Image in Wordpress
  return (
    <div className="flex flex-col gap-y-4">
      {page?.featuredImage?.node?.sourceUrl && (
        <img
          src={page?.featuredImage?.node?.sourceUrl}
          alt="logo"
          className="w-full h-80 object-cover rounded-md"
        />
      )}
      <RowLayout
        titleRight={page?.title}
        content={
          <div className="text-md text-dull-secondary/70">
            <SanitizeHTML dirty={page?.content} />
          </div>
        }
      />
    </div>
  );
};

export default PageDetails;
