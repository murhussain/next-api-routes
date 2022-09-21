import { buildFeedbackPath, extractFeedback } from './feedback';

function handler(req, res) {
  const feedbackId = req.query.feedbackId;

  // accessing our data
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  // find a specific data based on oe id
  const selectedFeedback = feedbackData.find((feedback) => (feedback.id === feedbackId));

  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;