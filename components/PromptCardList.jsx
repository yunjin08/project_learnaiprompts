import BaseLoader from "./BaseLoader";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick, loading }) => {
  return (
    <>
      {loading ? (
        <BaseLoader />
      ) : (
        <div className="mt-16 prompt_layout sm:mb-32 mb-20">
          {data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PromptCardList;
