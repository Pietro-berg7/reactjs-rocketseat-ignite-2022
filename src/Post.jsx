import { string } from "prop-types";

export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  );
}

Post.propTypes = {
  author: string.isRequired,
  content: string.isRequired,
};
