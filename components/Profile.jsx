import PromptCard from "./PromptCard";
import BaseLoader from "./BaseLoader";

const Profile = ({ name, desc, data, handleEdit, handleDelete, loading }) => {
  return (
    <section className="w-full relative">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      {loading ? (
        <BaseLoader />
      ) : (
        <div className="mt-10 prompt_layout grid-cols-3 mb-32">
          {data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              loading={loading}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Profile;
