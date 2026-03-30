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
  {
    year: "2008",
    team: "GB",
    gp: 16,
    yards: 4038,
    tds: 28,
    ints: 13,
    rating: 93.8,
  },
  {
    year: "2009",
    team: "GB",
    gp: 16,
    yards: 4434,
    tds: 30,
    ints: 7,
    rating: 103.2,
  },
  {
    year: "2010",
    team: "GB",
    gp: 15,
    yards: 3922,
    tds: 28,
    ints: 11,
    rating: 101.2,
  },
  {
    year: "2011",
    team: "GB",
    gp: 15,
    yards: 4643,
    tds: 45,
    ints: 6,
    rating: 122.5,
  },
  {
    year: "2012",
    team: "GB",
    gp: 11,
    yards: 3307,
    tds: 29,
    ints: 8,
    rating: 108.0,
  },
  {
    year: "2014",
    team: "GB",
    gp: 16,
    yards: 4381,
    tds: 38,
    ints: 5,
    rating: 112.2,
  },
  {
    year: "2016",
    team: "GB",
    gp: 16,
    yards: 4428,
    tds: 40,
    ints: 7,
    rating: 104.2,
  },
  {
    year: "2020",
    team: "GB",
    gp: 16,
    yards: 4299,
    tds: 48,
    ints: 5,
    rating: 121.5,
  },
  {
    year: "2021",
    team: "GB",
    gp: 16,
    yards: 4115,
    tds: 37,
    ints: 4,
    rating: 111.9,
  },
  { year: "2023", team: "NYJ", gp: 1, yards: 0, tds: 0, ints: 0, rating: 0.0 },
  {
    year: "2024",
    team: "NYJ",
    gp: 17,
    yards: 3623,
    tds: 24,
    ints: 11,
    rating: 88.5,
  },
];

const skillRatings = [
  { label: "Arm Strength", value: 97 },
  { label: "Accuracy", value: 95 },
  { label: "Football IQ", value: 99 },
  { label: "Leadership", value: 88 },
  { label: "Pocket Presence", value: 96 },
  { label: "Mobility", value: 82 },
];

const coachEvaluations = [
  { coach: "Coach Williams", rating: 97 },
  { coach: "Coach Davis", rating: 95 },
  { coach: "Coach Thompson", rating: 94 },
];

const scoutingReports = [
  {
    coach: "Coach Mark Williams",
    role: "Head Coach, West Valley HS",
    meeting: "West Valley Conference — Fall All-League Meeting",
    date: "Nov 15, 2025",
    overall: 97,
    ratings: {
      armStrength: 98,
      accuracy: 96,
      footballIQ: 99,
      leadership: 92,
      pocketPresence: 97,
      mobility: 84,
    },
    notes:
      "Elite-level quarterback with rare anticipation and ball placement. Consistently makes throws other QBs can't even attempt. Reads coverages pre-snap faster than any player I've coached against. Slight knock on willingness to check down under pressure — sometimes forces hero plays.",
    recommendation: "All-League First Team",
  },
  {
    coach: "Coach Sarah Davis",
    role: "Offensive Coordinator, Eastside Prep",
    meeting: "West Valley Conference — Midseason Review",
    date: "Oct 8, 2025",
    overall: 95,
    ratings: {
      armStrength: 97,
      accuracy: 94,
      footballIQ: 98,
      leadership: 85,
      pocketPresence: 96,
      mobility: 80,
    },
    notes:
      "Watched three game films. The hard count is a genuine weapon — drew 4 offsides in one game. Arm talent is generational. Would like to see more vocal leadership in huddle situations, especially in 4th quarter comeback scenarios.",
    recommendation: "All-League First Team",
  },
  {
    coach: "Coach Ray Thompson",
    role: "Defensive Coordinator, North Ridge HS",
    meeting: "West Valley Conference — Fall All-League Meeting",
    date: "Nov 15, 2025",
    overall: 94,
    ratings: {
      armStrength: 96,
      accuracy: 95,
      footballIQ: 99,
      leadership: 88,
      pocketPresence: 95,
      mobility: 81,
    },
    notes:
      "From a defensive perspective, this is the hardest QB to scheme against. His ability to manipulate safeties with his eyes and then deliver to the opposite side is elite. The only times we had success were with interior pressure — he's less effective when the pocket collapses up the middle vs off the edge.",
    recommendation: "All-League First Team",
  },
];

const leagueMeetings = [
  {
    date: "Nov 15, 2025",
    meeting: "Fall All-League Meeting",
    league: "West Valley Conference",
    action: "Voted All-League First Team QB",
    status: "approved" as const,
    votes: "12-0 (Unanimous)",
    details:
      "All coaches present voted in favor. Player recognized as top quarterback in the conference for the 2025 season.",
  },
  {
    date: "Oct 8, 2025",
    meeting: "Midseason Evaluation Review",
    league: "West Valley Conference",
    action: "Flagged for All-League consideration",
    status: "in_review" as const,
    votes: "N/A",
    details:
      "Three coaches submitted scouting reports. Composite rating of 95.3 placed player in the top tier for midseason review. Coaches agreed to monitor leadership metrics in remaining games.",
  },
  {
    date: "Sep 5, 2025",
    meeting: "Season Opener Scouting Assignments",
    league: "West Valley Conference",
    action: "Assigned to 3 coaches for evaluation",
    status: "completed" as const,
    votes: "N/A",
    details:
      "Coaches Williams (West Valley HS), Davis (Eastside Prep), and Thompson (North Ridge HS) assigned to evaluate based on head-to-head games and film.",
  },
  {
    date: "Jun 20, 2025",
    meeting: "Preseason Planning Meeting",
    league: "West Valley Conference",
    action: "Nominated as preseason watchlist QB",
    status: "completed" as const,
    votes: "8-2",
    details:
      "Nominated based on prior season performance. Two dissenting coaches cited concerns about team record vs. individual stats.",
  },
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
    <Group
      justify="space-between"
      py={8}
      style={{ borderBottom: "1px solid #f1f3f5" }}
    >
      <Text size="sm" c="dimmed">
        {label}
      </Text>
      <Text size="sm" fw={500}>
        {value}
      </Text>
    </Group>
  );
}

function RadarChart() {
  const size = 260;
  const cx = size / 2;
  const cy = size / 2;
  const levels = 5;
  const maxVal = 100;
  const count = skillRatings.length;

  function polarToCart(angle: number, radius: number) {
    const rad = (Math.PI / 180) * (angle - 90);
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  }

  const angleStep = 360 / count;
  const maxR = 100;

  const gridLevels = Array.from({ length: levels }, (_, i) => {
    const r = (maxR / levels) * (i + 1);
    const pts = skillRatings
      .map((_, j) => {
        const p = polarToCart(j * angleStep, r);
        return `${p.x},${p.y}`;
      })
      .join(" ");
    return pts;
  });

  const dataPoints = skillRatings.map((s, i) => {
    const r = (s.value / maxVal) * maxR;
    return polarToCart(i * angleStep, r);
  });
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" style={{ maxWidth: 300 }}>
      {gridLevels.map((pts, i) => (
        <polygon
          key={i}
          points={pts}
          fill="none"
          stroke="#e9ecef"
          strokeWidth={1}
        />
      ))}
      {skillRatings.map((_, i) => {
        const p = polarToCart(i * angleStep, maxR);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke="#e9ecef"
            strokeWidth={1}
          />
        );
      })}
      <polygon
        points={dataPath}
        fill={BLUE}
        fillOpacity={0.2}
        stroke={BLUE}
        strokeWidth={2}
      />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={4} fill={BLUE} />
      ))}
      {skillRatings.map((s, i) => {
        const labelR = maxR + 18;
        const p = polarToCart(i * angleStep, labelR);
        return (
          <text
            key={i}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={9}
            fontWeight={600}
            fill="#495057"
          >
            {s.label}
          </text>
        );
      })}
    </svg>
  );
}

function SkillRatingsPanel() {
  const composite = Math.round(
    skillRatings.reduce((sum, s) => sum + s.value, 0) / skillRatings.length,
  );

  return (
    <Card
      padding="xl"
      radius="md"
      withBorder
      style={{ borderColor: "#e9ecef" }}
    >
      <Group justify="space-between" mb="md">
        <Title order={3}>Coach Skill Ratings</Title>
        <Badge size="lg" variant="light" color={BLUE}>
          {coachEvaluations.length} Evaluations
        </Badge>
      </Group>
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Flex justify="center" align="center">
            <RadarChart />
          </Flex>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Stack gap="sm">
            {skillRatings.map((s) => (
              <Box key={s.label}>
                <Group justify="space-between" mb={4}>
                  <Text size="sm" fw={500}>
                    {s.label}
                  </Text>
                  <Text size="sm" fw={700} c={s.value >= 95 ? GOLD : BLUE}>
                    {s.value}
                  </Text>
                </Group>
                <Box
                  style={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#e9ecef",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    style={{
                      height: "100%",
                      width: `${s.value}%`,
                      borderRadius: 4,
                      background:
                        s.value >= 95
                          ? `linear-gradient(90deg, ${GOLD}, #e6bf2a)`
                          : `linear-gradient(90deg, ${BLUE}, #003985)`,
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Stack>
          <Card
            mt="lg"
            padding="md"
            radius="md"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <Group justify="space-between">
              <Text size="sm" fw={600}>
                Composite Rating
              </Text>
              <Text size="xl" fw={700} c={BLUE}>
                {composite}
              </Text>
            </Group>
            <Text size="xs" c="dimmed" mt={4}>
              Average across {coachEvaluations.length} coach evaluations
            </Text>
          </Card>
        </Grid.Col>
      </Grid>
      <Card
        mt="xl"
        padding="md"
        radius="md"
        style={{
          background: `linear-gradient(135deg, rgba(0,100,240,0.05) 0%, rgba(252,212,61,0.08) 100%)`,
          border: `1px solid rgba(0,100,240,0.15)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${BLUE}, ${GOLD})`,
            opacity: 0.06,
          }}
        />
        <Group gap={6} mb={8}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle
              cx="8"
              cy="8"
              r="7"
              fill="none"
              stroke={BLUE}
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
            <circle cx="8" cy="8" r="3" fill={BLUE} opacity="0.6" />
            <circle cx="8" cy="8" r="1" fill={BLUE} />
          </svg>
          <Text
            size="xs"
            fw={700}
            tt="uppercase"
            style={{ letterSpacing: 1, color: BLUE }}
          >
            AI Insights
          </Text>
          <Badge size="xs" variant="light" color={BLUE} style={{ fontSize: 9 }}>
            Beta
          </Badge>
        </Group>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Group gap={6} align="flex-start" wrap="nowrap">
            <Text size="xs" c={BLUE} mt={2}>
              ▲
            </Text>
            <Text size="xs" c="dimmed" lh={1.6}>
              <Text component="span" size="xs" fw={600} c="dark">
                Football IQ (99) is a standout trait
              </Text>{" "}
              — ranks in the top 1% of all QBs evaluated on the platform.
              Coaches unanimously flagged pre-snap reads as elite.
            </Text>
          </Group>
          <Group gap={6} align="flex-start" wrap="nowrap">
            <Text size="xs" c={GOLD} mt={2}>
              ◆
            </Text>
            <Text size="xs" c="dimmed" lh={1.6}>
              <Text component="span" size="xs" fw={600} c="dark">
                Leadership (88) shows growth potential
              </Text>{" "}
              — 8-point gap vs. other attributes. Two of three coaches noted
              huddle presence as an area to develop. Trending upward from
              midseason.
            </Text>
          </Group>
          <Group gap={6} align="flex-start" wrap="nowrap">
            <Text size="xs" c={BLUE} mt={2}>
              ◎
            </Text>
            <Text size="xs" c="dimmed" lh={1.6}>
              <Text component="span" size="xs" fw={600} c="dark">
                Coach consensus is unusually high
              </Text>{" "}
              — standard deviation of 1.5 across evaluations (avg is 6.2). All
              three coaches independently recommended All-League First Team.
            </Text>
          </Group>
          <Group gap={6} align="flex-start" wrap="nowrap">
            <Text size="xs" c={GOLD} mt={2}>
              ★
            </Text>
            <Text size="xs" c="dimmed" lh={1.6}>
              <Text component="span" size="xs" fw={600} c="dark">
                Projected composite: 96.2
              </Text>{" "}
              — based on current trajectory and historical patterns, expect a
              slight increase if leadership metrics continue to improve in
              postseason play.
            </Text>
          </Group>
        </SimpleGrid>
        <Text size="xs" c="dimmed" mt={10} fs="italic">
          Generated from {coachEvaluations.length} coach evaluations and{" "}
          {seasonData.length} seasons of data
        </Text>
      </Card>
    </Card>
  );
}

function ScoutingReportCard({
  report,
}: {
  report: (typeof scoutingReports)[number];
}) {
  const skillLabels: { key: keyof typeof report.ratings; label: string }[] = [
    { key: "armStrength", label: "Arm Str" },
    { key: "accuracy", label: "Accuracy" },
    { key: "footballIQ", label: "IQ" },
    { key: "leadership", label: "Lead" },
    { key: "pocketPresence", label: "Pocket" },
    { key: "mobility", label: "Mobility" },
  ];

  return (
    <Card
      padding="xl"
      radius="md"
      withBorder
      style={{ borderColor: "#e9ecef" }}
    >
      <Group justify="space-between" mb="sm" wrap="wrap">
        <Box>
          <Text fw={700}>{report.coach}</Text>
          <Text size="xs" c="dimmed">
            {report.role}
          </Text>
        </Box>
        <Badge size="lg" variant="filled" style={{ backgroundColor: BLUE }}>
          {report.overall}/100
        </Badge>
      </Group>
      <Group gap="xs" mb="md">
        <Badge size="sm" variant="light" color="gray">
          {report.meeting}
        </Badge>
        <Badge size="sm" variant="light" color="gray">
          {report.date}
        </Badge>
      </Group>
      <SimpleGrid cols={{ base: 3, sm: 6 }} spacing="xs" mb="md">
        {skillLabels.map((s) => (
          <Card
            key={s.key}
            padding="xs"
            radius="sm"
            style={{ backgroundColor: "#f8f9fa", textAlign: "center" }}
          >
            <Text
              size="lg"
              fw={700}
              c={report.ratings[s.key] >= 95 ? GOLD : BLUE}
            >
              {report.ratings[s.key]}
            </Text>
            <Text size="xs" c="dimmed" fw={500}>
              {s.label}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
      <Text size="sm" c="dimmed" lh={1.7} mb="md">
        {report.notes}
      </Text>
      <Group gap="xs">
        <Text size="xs" fw={600} c="dimmed">
          Recommendation:
        </Text>
        <Badge size="sm" variant="light" color="green">
          {report.recommendation}
        </Badge>
      </Group>
    </Card>
  );
}

function ScoutingReportsSection() {
  return (
    <Box>
      <Group justify="space-between" mb="md">
        <Title order={3}>Scouting Reports</Title>
        <Badge size="lg" variant="light" color={BLUE}>
          {scoutingReports.length} Reports
        </Badge>
      </Group>
      <Stack gap="lg">
        {scoutingReports.map((r) => (
          <ScoutingReportCard key={r.coach} report={r} />
        ))}
      </Stack>
    </Box>
  );
}

function LeagueMeetingLog() {
  const statusColors: Record<string, string> = {
    approved: "green",
    in_review: "yellow",
    completed: "gray",
  };
  const statusLabels: Record<string, string> = {
    approved: "Approved",
    in_review: "In Review",
    completed: "Completed",
  };

  return (
    <Box>
      <Group justify="space-between" mb="md">
        <Title order={3}>League Meeting Log</Title>
        <Badge size="lg" variant="light" color={BLUE}>
          {leagueMeetings.length} Meetings
        </Badge>
      </Group>
      <Stack gap={0}>
        {leagueMeetings.map((m, i) => (
          <Box key={i} style={{ position: "relative", paddingLeft: 28 }}>
            <Box
              style={{
                position: "absolute",
                left: 8,
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: i === 0 ? BLUE : "#e9ecef",
              }}
            />
            <Box
              style={{
                position: "absolute",
                left: 3,
                top: 6,
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: i === 0 ? BLUE : "#dee2e6",
                border: "2px solid white",
              }}
            />
            <Card
              padding="lg"
              radius="md"
              withBorder
              mb="md"
              style={{ borderColor: "#e9ecef" }}
            >
              <Group justify="space-between" mb="xs" wrap="wrap">
                <Box>
                  <Text fw={700} size="sm">
                    {m.meeting}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {m.league}
                  </Text>
                </Box>
                <Group gap="xs">
                  <Badge
                    size="sm"
                    variant="light"
                    color={statusColors[m.status]}
                  >
                    {statusLabels[m.status]}
                  </Badge>
                  <Text size="xs" c="dimmed">
                    {m.date}
                  </Text>
                </Group>
              </Group>
              <Box
                style={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: 8,
                  padding: "8px 12px",
                }}
                mb="xs"
              >
                <Text size="sm" fw={600}>
                  {m.action}
                </Text>
                {m.votes !== "N/A" && (
                  <Text size="xs" c="dimmed">
                    Vote: {m.votes}
                  </Text>
                )}
              </Box>
              <Text size="xs" c="dimmed" lh={1.6}>
                {m.details}
              </Text>
            </Card>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

function SeasonRowMobile({
  s,
  index,
}: {
  s: (typeof seasonData)[number];
  index: number;
}) {
  const fields = [
    {
      label: "Year",
      value: (
        <Text component="span" fw={500}>
          {s.year}
        </Text>
      ),
    },
    { label: "Team", value: s.team },
    { label: "Games Played", value: s.gp },
    { label: "Yards", value: s.yards.toLocaleString() },
    {
      label: "Touchdowns",
      value: (
        <Text
          component="span"
          fw={s.tds >= 40 ? 700 : 400}
          c={s.tds >= 40 ? BLUE : undefined}
        >
          {s.tds}
        </Text>
      ),
    },
    { label: "Interceptions", value: s.ints },
    {
      label: "Passer Rating",
      value: (
        <Text
          component="span"
          fw={s.rating >= 110 ? 700 : 400}
          c={s.rating >= 110 ? GOLD : undefined}
        >
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
          style={
            i < fields.length - 1
              ? { borderBottom: "1px solid #e9ecef" }
              : undefined
          }
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
    <Card
      padding="xl"
      radius="md"
      withBorder
      style={{ borderColor: "#e9ecef" }}
    >
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
                    <Text
                      fw={s.tds >= 40 ? 700 : 400}
                      c={s.tds >= 40 ? BLUE : undefined}
                    >
                      {s.tds}
                    </Text>
                  </Table.Td>
                  <Table.Td ta="center">{s.ints}</Table.Td>
                  <Table.Td ta="right">
                    <Text
                      fw={s.rating >= 110 ? 700 : 400}
                      c={s.rating >= 110 ? GOLD : undefined}
                    >
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
        <Container
          size="xl"
          py={50}
          style={{ position: "relative", zIndex: 1 }}
        >
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
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                border: "4px solid rgba(255,255,255,0.2)",
              }}
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
            <Box ml="auto" visibleFrom="sm" ta="center">
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
              <Group gap={4} justify="center">
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <polygon
                    points="6,0 7.5,4 12,4.5 8.5,7.5 9.5,12 6,9.5 2.5,12 3.5,7.5 0,4.5 4.5,4"
                    fill={GOLD}
                  />
                </svg>
                <Text size="xs" c="rgba(255,255,255,0.6)" fw={600}>
                  LeagueStarz
                </Text>
              </Group>
              <Text size="xs" c="rgba(255,255,255,0.6)">
                Rating
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container size="xl" py={40}>
        <Grid gutter="xl">
          {/* Left column: Bio + Info */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card
              padding="xl"
              radius="md"
              withBorder
              style={{ borderColor: "#e9ecef" }}
            >
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

            <Card
              padding="xl"
              radius="md"
              withBorder
              mt="xl"
              style={{ borderColor: "#e9ecef" }}
            >
              <Title order={4} mb="md">
                About
              </Title>
              <Text size="sm" c="dimmed" lh={1.7}>
                Aaron Charles Rodgers is an American football quarterback. After
                being the backup to Brett Favre for three seasons, Rodgers
                became the Packers&apos; starting quarterback in 2008. He led
                Green Bay to a Super Bowl XLV victory and was named Super Bowl
                MVP. Widely regarded as one of the most talented quarterbacks in
                NFL history, Rodgers holds numerous records including the best
                touchdown-to-interception ratio in league history.
              </Text>
            </Card>

            <Card
              padding="xl"
              radius="md"
              withBorder
              mt="xl"
              style={{ borderColor: "#e9ecef" }}
            >
              <Title order={4} mb="md">
                Coach&apos;s Notes
              </Title>
              <Box
                style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 12 }}
                mb="md"
              >
                <Text size="sm" c="dimmed" lh={1.7} fs="italic">
                  &ldquo;Aaron has the best arm talent I&apos;ve ever seen. His
                  ability to throw on the move, make off-platform throws, and
                  place the ball where only his receiver can catch it is
                  unmatched.&rdquo;
                </Text>
                <Text size="xs" fw={600} mt={6}>
                  &mdash; Mike McCarthy, Former Head Coach
                </Text>
              </Box>
              <Box
                style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 12 }}
                mb="md"
              >
                <Text size="sm" c="dimmed" lh={1.7} fs="italic">
                  &ldquo;He sees the field like no one else. Pre-snap reads,
                  adjustments at the line — he&apos;s essentially a coach on the
                  field. Defenses can&apos;t disguise anything from him.&rdquo;
                </Text>
                <Text size="xs" fw={600} mt={6}>
                  &mdash; Matt LaFleur, Head Coach
                </Text>
              </Box>
              <Box style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 12 }}>
                <Text size="sm" c="dimmed" lh={1.7} fs="italic">
                  &ldquo;The hard count alone wins us games. He draws more
                  offsides penalties than any quarterback in history. It&apos;s
                  a weapon nobody else has at that level.&rdquo;
                </Text>
                <Text size="xs" fw={600} mt={6}>
                  &mdash; Tom Clements, Former QB Coach
                </Text>
              </Box>
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
                <StatCard
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                />
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

      <Divider my={0} />

      <Container size="xl" py={40}>
        <SkillRatingsPanel />
      </Container>

      <Box style={{ backgroundColor: "#f8f9fa" }}>
        <Container size="xl" py={40}>
          <ScoutingReportsSection />
        </Container>
      </Box>

      <Container size="xl" py={40}>
        <LeagueMeetingLog />
      </Container>

      <Box py="xl" ta="center" style={{ borderTop: "1px solid #e9ecef" }}>
        <Text size="sm" c="dimmed">
          &copy; {new Date().getFullYear()} LeagueStarz. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
