"use client";

import {
  Avatar,
  Badge,
  Box,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  RingProgress,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Title,
  ThemeIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Navbar } from "@/components/Navbar";

const BLUE = "#0064F0";
const GOLD = "#FCD43D";

const player = {
  name: "Aaron Rodgers",
  position: "Quarterback",
  number: 12,
  team: "New York Jets",
  college: "California",
  draft: "2005 · Round 1 · Pick 24",
  born: "December 2, 1983",
  height: "6' 2\"",
  weight: "225 lbs",
  experience: "20 years",
  rating: 96,
};

const careerStats = [
  { label: "Games", value: "233" },
  { label: "Pass Yards", value: "59,055" },
  { label: "Pass TDs", value: "475" },
  { label: "Comp %", value: "65.3%" },
  { label: "Passer Rating", value: "104.5" },
  { label: "Interceptions", value: "105" },
  { label: "Rush Yards", value: "3,108" },
  { label: "Rush TDs", value: "35" },
];

const seasonData = [
  { year: "2008", team: "GB", gp: 16, yards: 4038, tds: 28, ints: 13, rating: 93.8 },
  { year: "2009", team: "GB", gp: 16, yards: 4434, tds: 30, ints: 7, rating: 103.2 },
  { year: "2010", team: "GB", gp: 15, yards: 3922, tds: 28, ints: 11, rating: 101.2 },
  { year: "2011", team: "GB", gp: 15, yards: 4643, tds: 45, ints: 6, rating: 122.5 },
  { year: "2012", team: "GB", gp: 11, yards: 3307, tds: 29, ints: 8, rating: 108.0 },
  { year: "2014", team: "GB", gp: 16, yards: 4381, tds: 38, ints: 5, rating: 112.2 },
  { year: "2016", team: "GB", gp: 16, yards: 4428, tds: 40, ints: 7, rating: 104.2 },
  { year: "2020", team: "GB", gp: 16, yards: 4299, tds: 48, ints: 5, rating: 121.5 },
  { year: "2021", team: "GB", gp: 16, yards: 4115, tds: 37, ints: 4, rating: 111.9 },
  { year: "2023", team: "NYJ", gp: 1, yards: 0, tds: 0, ints: 0, rating: 0.0 },
  { year: "2024", team: "NYJ", gp: 17, yards: 3623, tds: 24, ints: 11, rating: 88.5 },
];

const highlights = [
  "4x NFL MVP (2011, 2014, 2020, 2021)",
  "Super Bowl XLV Champion & MVP",
  "10x Pro Bowl Selection",
  "First-team All-Pro (2011, 2014, 2020)",
  "NFL record 402 pass attempts without an interception (2018)",
  "Led the 2011 Packers to a 15-1 regular season record",
  "Guest hosted Jeopardy! in April 2021",
  "Only player in NFL history to win back-to-back MVPs twice",
];

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <Card
      padding="lg"
      radius="md"
      withBorder
      style={{ borderColor: "#e9ecef", textAlign: "center" }}
    >
      <Text size="1.5rem" fw={700} c={BLUE}>
        {value}
      </Text>
      <Text size="xs" c="dimmed" tt="uppercase" fw={600} mt={4}>
        {label}
      </Text>
    </Card>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <Group justify="space-between" py={8} style={{ borderBottom: "1px solid #f1f3f5" }}>
      <Text size="sm" c="dimmed">
        {label}
      </Text>
      <Text size="sm" fw={500}>
        {value}
      </Text>
    </Group>
  );
}

function SeasonRowMobile({ s, index }: { s: (typeof seasonData)[number]; index: number }) {
  const fields = [
    { label: "Year", value: <Text component="span" fw={500}>{s.year}</Text> },
    { label: "Team", value: s.team },
    { label: "Games Played", value: s.gp },
    { label: "Yards", value: s.yards.toLocaleString() },
    {
      label: "Touchdowns",
      value: (
        <Text component="span" fw={s.tds >= 40 ? 700 : 400} c={s.tds >= 40 ? BLUE : undefined}>
          {s.tds}
        </Text>
      ),
    },
    { label: "Interceptions", value: s.ints },
    {
      label: "Passer Rating",
      value: (
        <Text component="span" fw={s.rating >= 110 ? 700 : 400} c={s.rating >= 110 ? GOLD : undefined}>
          {s.rating.toFixed(1)}
        </Text>
      ),
    },
  ];

  return (
    <Box
      py="sm"
      px="md"
      style={{
        borderBottom: "2px solid #e9ecef",
        backgroundColor: index % 2 === 0 ? "#f8f9fa" : "white",
      }}
    >
      {fields.map((f, i) => (
        <Group
          key={f.label}
          justify="space-between"
          py={6}
          style={i < fields.length - 1 ? { borderBottom: "1px solid #e9ecef" } : undefined}
        >
          <Text size="sm" fw={600}>
            {f.label}
          </Text>
          <Text size="sm">{f.value}</Text>
        </Group>
      ))}
    </Box>
  );
}

function SeasonTable() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Card padding="xl" radius="md" withBorder style={{ borderColor: "#e9ecef" }}>
      <Title order={4} mb="md">
        Season-by-Season
      </Title>
      {isMobile ? (
        <Stack gap={0}>
          {seasonData.map((s, i) => (
            <SeasonRowMobile key={s.year} s={s} index={i} />
          ))}
        </Stack>
      ) : (
        <Box style={{ overflowX: "auto" }}>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Year</Table.Th>
                <Table.Th>Team</Table.Th>
                <Table.Th ta="center">GP</Table.Th>
                <Table.Th ta="right">Yards</Table.Th>
                <Table.Th ta="center">TDs</Table.Th>
                <Table.Th ta="center">INTs</Table.Th>
                <Table.Th ta="right">Rating</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {seasonData.map((s) => (
                <Table.Tr key={s.year}>
                  <Table.Td fw={500}>{s.year}</Table.Td>
                  <Table.Td>{s.team}</Table.Td>
                  <Table.Td ta="center">{s.gp}</Table.Td>
                  <Table.Td ta="right">{s.yards.toLocaleString()}</Table.Td>
                  <Table.Td ta="center">
                    <Text fw={s.tds >= 40 ? 700 : 400} c={s.tds >= 40 ? BLUE : undefined}>
                      {s.tds}
                    </Text>
                  </Table.Td>
                  <Table.Td ta="center">{s.ints}</Table.Td>
                  <Table.Td ta="right">
                    <Text fw={s.rating >= 110 ? 700 : 400} c={s.rating >= 110 ? GOLD : undefined}>
                      {s.rating.toFixed(1)}
                    </Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Box>
      )}
    </Card>
  );
}

export default function AaronRodgersProfile() {
  return (
    <Box>
      <Navbar />

      {/* Hero header */}
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
            top: -40,
            right: -40,
            width: 250,
            height: 250,
            borderRadius: "50%",
            backgroundColor: GOLD,
            opacity: 0.08,
          }}
        />
        <Container size="xl" py={50} style={{ position: "relative", zIndex: 1 }}>
          <Group gap="xs" mb="lg">
            <Text
              component="a"
              href="/"
              size="sm"
              c="rgba(255,255,255,0.6)"
              style={{ textDecoration: "none" }}
            >
              Home
            </Text>
            <Text size="sm" c="rgba(255,255,255,0.4)">
              /
            </Text>
            <Text
              component="a"
              href="/#players"
              size="sm"
              c="rgba(255,255,255,0.6)"
              style={{ textDecoration: "none" }}
            >
              Players
            </Text>
            <Text size="sm" c="rgba(255,255,255,0.4)">
              /
            </Text>
            <Text size="sm" c="white">
              Aaron Rodgers
            </Text>
          </Group>

          <Flex
            direction={{ base: "column", sm: "row" }}
            align={{ base: "center", sm: "flex-end" }}
            gap="xl"
          >
            <Avatar
              size={120}
              radius="xl"
              variant="gradient"
              gradient={{ from: GOLD, to: "#e6bf2a" }}
              style={{ fontSize: "2.5rem", fontWeight: 700, border: "4px solid rgba(255,255,255,0.2)" }}
            >
              AR
            </Avatar>
            <Flex direction="column" gap={4}>
              <Group gap="sm">
                <Title order={1} c="white" size="2.5rem">
                  Aaron Rodgers
                </Title>
                <Badge
                  size="xl"
                  variant="filled"
                  style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
                >
                  #{player.number}
                </Badge>
              </Group>
              <Group gap="md">
                <Badge size="lg" variant="light" color="white">
                  {player.position}
                </Badge>
                <Text c="rgba(255,255,255,0.8)" size="md">
                  {player.team}
                </Text>
              </Group>
            </Flex>
            <Box ml="auto" visibleFrom="sm">
              <RingProgress
                size={100}
                thickness={8}
                roundCaps
                sections={[{ value: player.rating, color: GOLD }]}
                label={
                  <Text ta="center" fw={700} size="xl" c="white">
                    {player.rating}
                  </Text>
                }
              />
              <Text ta="center" size="xs" c="rgba(255,255,255,0.6)" tt="uppercase" fw={600}>
                Overall
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container size="xl" py={40}>
        <Grid gutter="xl">
          {/* Left column: Bio + Info */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card padding="xl" radius="md" withBorder style={{ borderColor: "#e9ecef" }}>
              <Title order={4} mb="md">
                Player Info
              </Title>
              <InfoRow label="Born" value={player.born} />
              <InfoRow label="Height" value={player.height} />
              <InfoRow label="Weight" value={player.weight} />
              <InfoRow label="College" value={player.college} />
              <InfoRow label="Draft" value={player.draft} />
              <InfoRow label="Experience" value={player.experience} />
            </Card>

            <Card padding="xl" radius="md" withBorder mt="xl" style={{ borderColor: "#e9ecef" }}>
              <Title order={4} mb="md">
                About
              </Title>
              <Text size="sm" c="dimmed" lh={1.7}>
                Aaron Charles Rodgers is an American football quarterback. After
                being the backup to Brett Favre for three seasons, Rodgers became
                the Packers&apos; starting quarterback in 2008. He led Green Bay to
                a Super Bowl XLV victory and was named Super Bowl MVP. Widely
                regarded as one of the most talented quarterbacks in NFL history,
                Rodgers holds numerous records including the best touchdown-to-interception
                ratio in league history.
              </Text>
            </Card>
          </Grid.Col>

          {/* Right column: Stats */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            {/* Career totals */}
            <Title order={3} mb="md">
              Career Statistics
            </Title>
            <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md" mb="xl">
              {careerStats.map((stat) => (
                <StatCard key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </SimpleGrid>

            {/* Season table */}
            <SeasonTable />

            {/* Highlights */}
            <Card
              padding="xl"
              radius="md"
              withBorder
              mt="xl"
              style={{ borderColor: "#e9ecef" }}
            >
              <Title order={4} mb="md">
                Highlights &amp; Fun Facts
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
                {highlights.map((item) => (
                  <Group key={item} gap="sm" align="flex-start" wrap="nowrap">
                    <ThemeIcon
                      size={8}
                      radius="xl"
                      style={{
                        backgroundColor: GOLD,
                        minWidth: 8,
                        minHeight: 8,
                        marginTop: 8,
                      }}
                    >
                      <span />
                    </ThemeIcon>
                    <Text size="sm">{item}</Text>
                  </Group>
                ))}
              </SimpleGrid>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>

      <Box py="xl" ta="center" style={{ borderTop: "1px solid #e9ecef" }}>
        <Text size="sm" c="dimmed">
          &copy; {new Date().getFullYear()} LeagueStarz. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
