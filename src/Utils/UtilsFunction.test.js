describe('Utils_Function', () => {
  test('sort an array by createdAt and state, state finished should be last and others are sorted from newer to older', () => {
    const functionToTest = require('./SortTodos');
    const testData = [
      {
        id: 1,
        title: 'Faire les courses',
        description: "Prendre du pain, des tomates et de l'eau",
        state: 'finished',
        createdAt: '2022-08-10T18:24:00',
      },
      {
        id: 2,
        title: 'Aller au sport',
        description: '',
        state: 'unfinished',
        createdAt: '2022-08-11T09:00:00',
      },
      {
        id: 3,
        title: 'Déjeuner avec Bernard',
        description: '48 rue des Roses',
        state: 'unfinished',
        createdAt: '2022-08-11T13:28:00',
      },
    ];

    expect(functionToTest.sortTodos(testData)).toEqual([
      {
        id: 3,
        title: 'Déjeuner avec Bernard',
        description: '48 rue des Roses',
        state: 'unfinished',
        createdAt: '2022-08-11T13:28:00',
      },
      {
        id: 2,
        title: 'Aller au sport',
        description: '',
        state: 'unfinished',
        createdAt: '2022-08-11T09:00:00',
      },
      {
        id: 1,
        title: 'Faire les courses',
        description: "Prendre du pain, des tomates et de l'eau",
        state: 'finished',
        createdAt: '2022-08-10T18:24:00',
      },
    ]);
  });
  test('Get a new id by sorting existing id, .pop() the last and add + 1', () => {
    const functionToTest = require('./GetNewId');
    const testData = [
      {
        id: 1,
      },
      {
        id: 7,
      },
      {
        id: 3,
      },
    ];
    expect(functionToTest.GetNewId(testData)).toEqual(8);
  });
});
