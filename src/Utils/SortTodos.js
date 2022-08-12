// Sort todos, first by state from unfinished to finished and then, by date from newer to older
export const sortTodos = (todoToSort) => {
  return todoToSort.sort(
    (a, b) =>
      b.state.localeCompare(a.state) || b.createdAt.localeCompare(a.createdAt)
  );
};
