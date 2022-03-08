export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "Who Was Once a Member of The Wild Hunt?",
    image:
    "https://twinfinite.net/wp-content/uploads/2019/09/the-wild-hunt.jpg",
     answers: [
      "Trick question: nothing!",
      "Geralt",
      "Vizimir",
      "Avallac'h",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Where is The School of the Wolf Located?",
    image: "https://static.wikia.nocookie.net/witcher/images/4/4a/Tw3_Kaer_Morhen_promo.jpg",
    answers: ["Kaer Morhen", "Arg Carraigh", "Gwenlech", "The Mountains of Fire"],
    correctAnswerIndex: 0,
  },
  {
    questionText: "Who is Ciri's Real Father?",
    image:
      "https://www.denofgeek.com/wp-content/uploads/2021/07/the-witcher-season-2-ciri-netflix.jpg",
    answers: ["Geralt of Rivia", "Emhyr var Emreis", "Avallac'h", "King Henselt"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "What is the Name of The Wild Hunt's Navigator?",
      image: "https://twinfinite.net/wp-content/uploads/2019/09/navigator.jpg",
    answers: ["Gaunter'O Dimm", "Nithral", "Ge'els", "Caranthir"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "What Event Brought Monsters to The Witcher's World?",
    image: "https://static.wikia.nocookie.net/witcher/images/4/44/Tw3_Conjunction_of_the_Spheres.jpeg",
    answers: ["Conjunction of the Spheres", "The Breaking of the World", "Ithlinne's Prophecy", "The Night of Apocalypse"],
    correctAnswerIndex: 0,
  },
];

export default quizQuestions;
