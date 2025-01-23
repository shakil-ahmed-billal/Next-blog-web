import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

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

export default page;
