const initState = {
  projects: [
    {
      id: 1,
      title: "project 01",
      content: "project 01 description",
    },
    {
      id: 2,
      title: "project 02",
      content: "project 02 description",
    },
    {
      id: 3,
      title: "project 03",
      content: "project 03 description",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("CREATE_PROJECT", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("CREATE_PROJECT_ERROR", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
