const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();
  console.log(post);
  
  return (
    <div>
      <p>Blogs details</p>
      <p>Blog Post ID: {id}</p>
    </div>
  );
};

export default page;
