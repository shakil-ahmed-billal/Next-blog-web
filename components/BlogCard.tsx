import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardDescription, CardFooter, CardTitle } from "./ui/card";

interface Post {
  id: number;
  title: string;
  body: string;
}

const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  const { title, body } = post || {};

  return (
    <Card className="p-4">
      <CardTitle>{title}</CardTitle>
      <CardDescription className="py-3">{body}</CardDescription>
      <CardFooter>
        <Link href={`/blog/${post.id}`}>
          <Button>Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
