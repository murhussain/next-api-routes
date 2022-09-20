import { buildFeedbackPath, extractFeedback } from '../api/feedback.js';

function FeedbackPage(props) {
  return (
    <ul>
      {
        props.feedbackItems.map((item) => (
          <li key={item.id}>{ item.text }</li>
        ))
      }
    </ul>
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