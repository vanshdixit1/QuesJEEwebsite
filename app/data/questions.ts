// Each question has an id, text, 4 options, and the index of the correct option.
// This data is used on the Dashboard page to show practice questions.

export type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number; // index (0-3) of the correct option
};

const questions: Question[] = [
  {
    id: 1,
    question:
      "A particle moves along a straight line with an acceleration of 2 m/s². If it starts from rest, what is its velocity after 5 seconds?",
    options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
    correctIndex: 1,
  },
  {
    id: 2,
    question:
      "The number of real solutions of the equation x² + 3|x| + 2 = 0 is:",
    options: ["0", "1", "2", "4"],
    correctIndex: 0,
  },
  {
    id: 3,
    question:
      "The IUPAC name of CH₃–CH=CH–CHO is:",
    options: ["But-2-enal", "But-3-enal", "2-Butenal", "Crotonaldehyde"],
    correctIndex: 0,
  },
  {
    id: 4,
    question:
      "If the sum of the first n terms of an A.P. is 3n² + 5n, then the common difference is:",
    options: ["3", "5", "6", "8"],
    correctIndex: 2,
  },
  {
    id: 5,
    question:
      "A convex lens of focal length 20 cm produces an image of magnification −1. The object distance is:",
    options: ["20 cm", "30 cm", "40 cm", "60 cm"],
    correctIndex: 2,
  },
  {
    id: 6,
    question:
      "Which of the following is a Lewis acid?",
    options: ["NH₃", "BF₃", "H₂O", "NaOH"],
    correctIndex: 1,
  },
  {
    id: 7,
    question:
      "The value of ∫₀^π sin²x dx is:",
    options: ["0", "π/4", "π/2", "π"],
    correctIndex: 2,
  },
  {
    id: 8,
    question:
      "The dimensional formula of Planck's constant is:",
    options: ["[ML²T⁻¹]", "[MLT⁻²]", "[ML²T⁻²]", "[ML²T⁻³]"],
    correctIndex: 0,
  },
  {
    id: 9,
    question:
      "The hybridisation of carbon in diamond is:",
    options: ["sp", "sp²", "sp³", "sp³d"],
    correctIndex: 2,
  },
  {
    id: 10,
    question:
      "If A is a 3×3 matrix such that det(A) = 5, then det(2A) is:",
    options: ["10", "20", "40", "80"],
    correctIndex: 2,
  },
];

export default questions;
