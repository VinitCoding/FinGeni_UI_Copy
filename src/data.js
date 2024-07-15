const response = [
  {
    data: [
      {
        uid: 1,
        message: [
            {
                user: "Tell me about Titan Stocks",
                assistant: "answer 1",
              },
              {
                user: "What is the value of these Titan stocks?",
                assistant: "answer 2",
              },
              {
                user: "What is the value of these Titan stocks?",
                assistant: "answer 3",
              },
              {
                user: "What is the value of these Titan stocks?",
                assistant: "answer 4",
              },
        ]
    }
    ],
  },
  {
    history: [
      {
        uid: 1,
        messages: [
          {
            user: "Tell me about Titan Stocks",
            assistant: "answer 1",
          },
          {
            user: "What is the value of these Titan stocks?",
            assistant: "answer 2",
          },
        ],
      },
      {
        uid: 2,
        messages: [
          {
            user: "Tell me about Adani Stocks",
            assistant: "answer 1",
          },
          {
            user: "What is the value of these Adanai stocks?",
            assistant: "answer 2",
          },
        ],
      },
      {
        uid: 3,
        messages: [
          {
            user: "Tell me about SEBI Stocks",
            assistant: "answer 1",
          },
          {
            user: "What is the value of these SEBI stocks?",
            assistant: "answer 2",
          },
        ],
      },
    ],
  },
];

export default response;
