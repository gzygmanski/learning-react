import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const createComment = () => {
  let date = faker.date.recent()
  return {
    imgUrl: faker.image.avatar(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    timeAgo: `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`,
    comment: faker.lorem.sentence(),
  }
}

const App = () => {
  const comment1 = createComment();
  const comment2 = createComment();
  const comment3 = createComment();

  return (
    <div className="ui container cards">
      <ApprovalCard>
        <CommentDetail
          imgUrl={comment2.imgUrl}
          author={comment2.author}
          timeAgo={comment2.timeAgo}
          comment={comment2.comment}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imgUrl={comment3.imgUrl}
          author={comment3.author}
          timeAgo={comment3.timeAgo}
          comment={comment3.comment}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imgUrl={comment1.imgUrl}
          author={comment1.author}
          timeAgo={comment1.timeAgo}
          comment={comment1.comment}
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
