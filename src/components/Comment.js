import "./Comment.css";
import CommentDate from "./CommentDate";
import CommentUserInfo from "./CommentUserInfo";
import CommentWrapper from "./CommentWrapper";

function Comment({ data }) {
  return (
    <div>
      <CommentWrapper className="comment-first">
        <CommentUserInfo
          avatarUrl={data.author.avatarUrl}
          name={data.author.name}
        />
      </CommentWrapper>

      <CommentWrapper className="comment-first-date">
        <div className="Comment-text">{data.text}</div>
        <CommentDate date={data.date} className={"date"} />
      </CommentWrapper>
    </div>
  );
}
export default Comment;
