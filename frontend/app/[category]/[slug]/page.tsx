// app/[category]/[slug]/page.tsx
import { Box, Heading, Text, Container, Spinner, Center } from "@chakra-ui/react";
import { notFound } from "next/navigation";

async function getPost(category: string, slug: string) {
  const res = await fetch(`http://backend:8081/${category}/${slug}`);
  const post = await res.json();
  if (!post) {
    notFound(); // Redireciona para a página 404
  }
  return post;
}

export default async function PostPage({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;
  const post = await getPost(category, slug);

  if (!post) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Container maxW="3xl" py={10}>
      <Box>
        <Heading as="h1" size="2xl" mb={4} color="teal.500">
          {post.title}
        </Heading>
        <Text fontSize="lg" color="gray.500" mb={6}>
          Categoria: {post.category}
        </Text>
        <Text fontSize="md" lineHeight="1.75" color="gray.700">
          {post.content}
        </Text>
      </Box>
    </Container>
  );
}
