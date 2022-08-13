// Sort todos by id and return higher id + 1
export const GetNewId = (todos) => {
  const newTodos = [...todos];
  return +newTodos.sort((a, b) => a.id - b.id).pop().id + 1;
};
