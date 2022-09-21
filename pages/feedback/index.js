import { Fragment, useState } from 'react';

import { buildFeedbackPath, extractFeedback } from '../api/feedback/index.js';

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/feedback/${id}`
    ).then((response) => (response.json())
    ).then((data) => {
      setFeedbackData(data.feedback);
    });
  }

  return (
    <Fragment>
      {feedbackData && <p>{ feedbackData.email }</p>}
      <ul>
        {
          props.feedbackItems.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Details</button>
            </li>
          ))
        }
      </ul>
    </Fragment>
  );
}
export default FeedbackPage;

export async function getStaticProps(context) {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  
  return{
    props: {
      feedbackItems: data
    }
  }
}