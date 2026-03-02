import { Container, Title, Text } from "@mantine/core";

export default function HomePage() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Title order={1}>League Meetings</Title>
      <Text size="lg" c="dimmed" mt="md">
        Hello World
      </Text>
    </Container>
  );
}
