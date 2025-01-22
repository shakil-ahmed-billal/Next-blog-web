import getPosts from "@/api/getPosts";
import BlogCard from "@/components/BlogCard";

type Post = {
  id: number;
  title: string;
  body: string;
  content: string;
};

const Home = async () => {
  const posts = await getPosts();

  console.log(posts);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 my-5">
      {posts.map((post: Post) => <BlogCard key={post.id} post={post}></BlogCard>)}
      </div>
    </div>
  );
};

export default Home;
