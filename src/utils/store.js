const cards = [
  {
    id: 'card-1',
    title: 'singing a song',
  },
  {
    id: 'card-2',
    title: 'Making sandwich',
  },
  {
    id: 'card-3',
    title: 'Learning how to cook',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Todo',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'Doing',
      cards: [
        {
          id: 'card-4',
          title: 'Playing basketball',
        }
      ],
    },
    'list-3': {
      id: 'list-3',
      title: 'Done',
      cards: [
        {
          id: 'card-5',
          title: 'Done playing',
        }
      ],
    },
  },
  listIds: ['list-1', 'list-2','list-3'],
};

export default data;
