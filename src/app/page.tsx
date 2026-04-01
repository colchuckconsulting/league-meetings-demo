"use client";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  RingProgress,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { Navbar } from "@/components/Navbar";

const BLUE = "#0064F0";
const GOLD = "#FCD43D";

const players = [
  {
    name: "Aaron Rodgers",
    position: "QB",
    rating: 96,
    team: "Green Bay Packers",
    initials: "AR",
    gradient: { from: BLUE, to: "#003985" },
    href: "/players/aaron-rodgers",
  },
  {
    name: "Larry Allen",
    position: "OL",
    rating: 99,
    team: "Dallas Cowboys",
    initials: "LA",
    gradient: { from: GOLD, to: "#e6bf2a" },
  },
  {
    name: "Jerry Rice",
    position: "WR",
    rating: 99,
    team: "San Francisco 49ers",
    initials: "JR",
    gradient: { from: BLUE, to: "#003985" },
  },
  {
    name: "Jon Kitna",
    position: "QB",
    rating: 78,
    team: "Detroit Lions",
    initials: "JK",
    gradient: { from: GOLD, to: "#e6bf2a" },
  },
];

function HeroSection() {
  return (
    <Box
      style={{
        background: `linear-gradient(135deg, ${BLUE} 0%, #003985 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: "50%",
          backgroundColor: GOLD,
          opacity: 0.1,
        }}
      />
      <Box
        style={{
          position: "absolute",
          bottom: -80,
          left: -40,
          width: 250,
          height: 250,
          borderRadius: "50%",
          backgroundColor: GOLD,
          opacity: 0.08,
        }}
      />
      <Container size="xl" py={80} style={{ position: "relative", zIndex: 1 }}>
        <Flex direction="column" align="center" ta="center" gap="lg">
          <Image
            src="/leaguestarz_03.svg"
            alt="LeagueStarz"
            h={80}
            w="auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <Text
            component="h1"
            ff="var(--font-industry)"
            fw={900}
            fs="italic"
            tt="uppercase"
            c="white"
            lh={0.95}
            style={{
              fontSize: "clamp(3rem, 8vw, 8rem)",
              letterSpacing: "-0.025em",
            }}
          >
            LeagueStarz
          </Text>
          <Title order={1} c="white" size="3rem" maw={700} lh={1.2}>
            Get Discovered.{" "}
            <Text component="span" inherit c={GOLD}>
              Get Recruited.
            </Text>{" "}
            Get Ahead.
          </Title>
          <Text
            c="rgba(255,255,255,0.8)"
            size="xl"
            maw={550}
            ff="var(--font-industry)"
            fs={"normal"}
            fw={600}
          >
            Build your player profile, showcase your highlights, and connect
            with coaches actively recruiting — all in one place.
          </Text>
          <Group mt="md">
            <Button
              size="lg"
              style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
              fw={600}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              color="white"
              style={{ borderColor: "rgba(255,255,255,0.4)" }}
            >
              Learn More
            </Button>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
}

function RatingRing({ rating }: { rating: number }) {
  const color = rating >= 95 ? GOLD : rating >= 85 ? BLUE : "#868e96";

  return (
    <RingProgress
      size={80}
      thickness={6}
      roundCaps
      sections={[{ value: rating, color }]}
      label={
        <Text ta="center" fw={700} size="lg">
          {rating}
        </Text>
      }
    />
  );
}

function PlayerCard({ player }: { player: (typeof players)[number] }) {
  const card = (
    <Card
      shadow="sm"
      radius="lg"
      padding="xl"
      withBorder
      style={{
        borderColor: "#e9ecef",
        transition: "transform 150ms ease, box-shadow 150ms ease",
        cursor: player.href ? "pointer" : "default",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 100, 240, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <Flex direction="column" align="center" gap="md">
        <Avatar
          size={90}
          radius="xl"
          variant="gradient"
          gradient={player.gradient}
          style={{ fontSize: "1.5rem", fontWeight: 700 }}
        >
          {player.initials}
        </Avatar>
        <Box ta="center">
          <Text fw={700} size="lg">
            {player.name}
          </Text>
          <Text size="sm" c="dimmed">
            {player.team}
          </Text>
        </Box>
        <Badge
          size="lg"
          variant="light"
          color={BLUE}
          style={{ fontWeight: 600 }}
        >
          {player.position}
        </Badge>
        <RatingRing rating={player.rating} />
        <Text size="xs" c="dimmed" tt="uppercase" fw={600} ta="center" lh={1.4}>
          LeagueStarz
          <br />
          Rating
        </Text>
      </Flex>
    </Card>
  );

  if (player.href) {
    return (
      <a
        href={player.href}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {card}
      </a>
    );
  }

  return card;
}

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <HeroSection />

      <Container size="xl" py={60} id="players">
        <Flex direction="column" align="center" gap="xs" mb={40}>
          <Badge
            size="lg"
            variant="light"
            color={BLUE}
            style={{ fontWeight: 600 }}
          >
            Featured
          </Badge>
          <Title order={2} ta="center" size="2rem">
            Player Profiles
          </Title>
          <Text c="dimmed" ta="center" maw={500}>
            Check out some of our featured players and their overall ratings.
          </Text>
        </Flex>

        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="xl">
          {players.map((player) => (
            <PlayerCard key={player.name} player={player} />
          ))}
        </SimpleGrid>
      </Container>

      <Box py="xl" ta="center" style={{ borderTop: "1px solid #e9ecef" }}>
        <Text size="sm" c="dimmed">
          &copy; {new Date().getFullYear()} LeagueStarz. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
