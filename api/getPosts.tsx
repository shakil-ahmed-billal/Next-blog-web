const getPosts = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");
  return data.json();
};

export default getPosts;
