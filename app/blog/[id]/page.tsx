import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await response.json();

  const { title, body } = post || {};

  return (
    <div className="py-20">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{body}</CardDescription>
        </CardContent>
        <CardFooter>
          <Link href={'/'}><Button>Back to Home</Button></Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;

