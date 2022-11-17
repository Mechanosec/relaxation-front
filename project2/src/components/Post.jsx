import MyButton from "./UI/button/MyButton";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <p>{post.body}</p>
      </div>
      <div className="post_btns">
        <MyButton>delete</MyButton>
      </div>
    </div>
  );
};

export default Post;
