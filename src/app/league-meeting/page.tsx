"use client";

import { useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Container,
  Group,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Navbar } from "@/components/Navbar";

const BLUE = "#0064F0";
const GOLD = "#FCD43D";

type VoteTier = "1st Team" | "2nd Team" | "Honorable Mention" | null;

interface Player {
  name: string;
  team: string;
  position: string;
  rating: number;
  initials: string;
  photo?: string;
  href?: string;
  gradient: { from: string; to: string };
}

interface VotedPlayer extends Player {
  vote: "1st Team" | "2nd Team" | "Honorable Mention";
}

const quarterbacks: Player[] = [
  { name: "Aaron Rodgers", team: "Pleasant Valley HS", position: "QB", rating: 96, initials: "AR", photo: "/aaron_rodgers_hs.webp", href: "/players/aaron-rodgers", gradient: { from: BLUE, to: "#003985" } },
  { name: "Patrick Mahomes", team: "Whitehouse HS", position: "QB", rating: 94, initials: "PM", gradient: { from: GOLD, to: "#e6bf2a" } },
  { name: "Josh Allen", team: "Firebaugh HS", position: "QB", rating: 91, initials: "JA", gradient: { from: BLUE, to: "#003985" } },
  { name: "Joe Burrow", team: "Athens HS", position: "QB", rating: 93, initials: "JB", gradient: { from: GOLD, to: "#e6bf2a" } },
];

const runningBacks: Player[] = [
  { name: "Saquon Barkley", team: "Whitehall HS", position: "RB", rating: 95, initials: "SB", gradient: { from: BLUE, to: "#003985" } },
  { name: "Derrick Henry", team: "Yulee HS", position: "RB", rating: 93, initials: "DH", gradient: { from: GOLD, to: "#e6bf2a" } },
  { name: "Christian McCaffrey", team: "Valor Christian HS", position: "RB", rating: 92, initials: "CM", gradient: { from: BLUE, to: "#003985" } },
  { name: "Jonathan Taylor", team: "Salem HS", position: "RB", rating: 90, initials: "JT", gradient: { from: GOLD, to: "#e6bf2a" } },
];

const wideReceivers: Player[] = [
  { name: "Tyreek Hill", team: "Coffee HS", position: "WR", rating: 96, initials: "TH", gradient: { from: GOLD, to: "#e6bf2a" } },
  { name: "Justin Jefferson", team: "Destrehan HS", position: "WR", rating: 97, initials: "JJ", gradient: { from: BLUE, to: "#003985" } },
  { name: "Ja'Marr Chase", team: "Archbishop Rummel HS", position: "WR", rating: 95, initials: "JC", gradient: { from: GOLD, to: "#e6bf2a" } },
  { name: "CeeDee Lamb", team: "Foster HS", position: "WR", rating: 94, initials: "CL", gradient: { from: BLUE, to: "#003985" } },
];

const POSITION_STEPS = [
  { label: "Quarterbacks", short: "QB", players: quarterbacks },
  { label: "Running Backs", short: "RB", players: runningBacks },
  { label: "Wide Receivers", short: "WR", players: wideReceivers },
];

const TIERS: ("1st Team" | "2nd Team" | "Honorable Mention")[] = [
  "1st Team",
  "2nd Team",
  "Honorable Mention",
];

// Simulated votes from other coaches for multi-coach consensus
const SIMULATED_COACH_VOTES: Record<string, { first: number; second: number; hm: number }> = {
  "Aaron Rodgers":         { first: 5, second: 1, hm: 0 },
  "Patrick Mahomes":       { first: 3, second: 2, hm: 1 },
  "Josh Allen":            { first: 1, second: 3, hm: 2 },
  "Joe Burrow":            { first: 2, second: 2, hm: 2 },
  "Saquon Barkley":        { first: 4, second: 2, hm: 0 },
  "Derrick Henry":         { first: 3, second: 2, hm: 1 },
  "Christian McCaffrey":   { first: 2, second: 3, hm: 1 },
  "Jonathan Taylor":       { first: 0, second: 2, hm: 4 },
  "Tyreek Hill":           { first: 4, second: 1, hm: 1 },
  "Justin Jefferson":      { first: 5, second: 1, hm: 0 },
  "Ja'Marr Chase":         { first: 3, second: 3, hm: 0 },
  "CeeDee Lamb":           { first: 2, second: 2, hm: 2 },
};

const COACH_NAMES = ["Coach Rivera", "Coach Thompson", "Coach Williams", "Coach Davis", "Coach Martinez", "Coach Patel"];

function getTierStyle(tier: string, isActive: boolean) {
  if (!isActive) return { bg: "white", fg: "#495057", border: "#dee2e6" };
  if (tier === "1st Team") return { bg: GOLD, fg: "#1a1a1a", border: GOLD };
  if (tier === "2nd Team") return { bg: BLUE, fg: "white", border: BLUE };
  return { bg: "#868e96", fg: "white", border: "#868e96" };
}

function PlayerImage({ player, vote }: { player: Player; vote: VoteTier }) {
  return (
    <div
      style={{
        height: 180, overflow: "hidden", position: "relative",
        background: player.photo ? undefined : `linear-gradient(135deg, ${player.gradient.from}, ${player.gradient.to})`,
      }}
    >
      {player.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={player.photo} alt={player.name} style={{ width: "100%", height: 180, objectFit: "cover", objectPosition: "top", display: "block" }} />
      ) : (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
          <span style={{ color: "white", fontWeight: 700, fontSize: "2.5rem", opacity: 0.6 }}>{player.initials}</span>
        </div>
      )}
      <span style={{ position: "absolute", top: 8, right: 8, backgroundColor: BLUE, color: "white", padding: "2px 8px", borderRadius: 4, fontSize: 12, fontWeight: 600 }}>
        {player.position}
      </span>
      {vote != null && (
        <span style={{
          position: "absolute", bottom: 8, left: 8,
          backgroundColor: vote === "1st Team" ? GOLD : vote === "2nd Team" ? BLUE : "#868e96",
          color: vote === "1st Team" ? "#1a1a1a" : "white",
          padding: "4px 12px", borderRadius: 4, fontSize: 13, fontWeight: 700,
        }}>
          {vote}
        </span>
      )}
    </div>
  );
}

function PlayerCard({ player, vote, onVote }: { player: Player; vote: VoteTier; onVote: (t: VoteTier) => void }) {
  const borderColor = vote ? getTierStyle(vote, true).border : "#adb5bd";

  return (
    <div style={{ borderRadius: 12, border: `2px solid ${borderColor}`, overflow: "hidden", backgroundColor: "white" }}>
      {player.href ? (
        <a href={player.href} style={{ display: "block", textDecoration: "none" }}>
          <PlayerImage player={player} vote={vote} />
        </a>
      ) : (
        <PlayerImage player={player} vote={vote} />
      )}
      <div style={{ padding: 16 }}>
        <div style={{ marginBottom: 8 }}>
          {player.href ? (
            <a href={player.href} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{player.name}</div>
            </a>
          ) : (
            <div style={{ fontWeight: 700, fontSize: 16 }}>{player.name}</div>
          )}
          <div style={{ fontSize: 14, color: "#868e96" }}>{player.team}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: BLUE }}>{player.rating}</span>
          <span style={{ fontSize: 12, color: "#868e96" }}>LeagueStarz Rating</span>
        </div>
        {TIERS.map((tier) => {
          const isActive = vote === tier;
          const s = getTierStyle(tier, isActive);
          return (
            <button
              type="button"
              key={tier}
              onClick={() => onVote(isActive ? null : tier)}
              style={{
                display: "block", width: "100%", padding: "10px 12px", marginBottom: 6,
                borderRadius: 8, border: `2px solid ${s.border}`,
                backgroundColor: s.bg, color: s.fg,
                fontWeight: 600, fontSize: 14, cursor: "pointer", textAlign: "center",
              }}
            >
              {tier}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Review Your Picks ─── */
function ReviewSection({
  votes,
  onGoBack,
  onConfirm,
}: {
  votes: Record<string, VoteTier>;
  onGoBack: (posIndex: number) => void;
  onConfirm: () => void;
}) {
  const allPlayers = [...quarterbacks, ...runningBacks, ...wideReceivers];
  const voted = allPlayers.filter((p) => votes[p.name]);
  const unvoted = allPlayers.filter((p) => !votes[p.name]);

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: "50%", backgroundColor: `${BLUE}15`, marginBottom: 12 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M9 12l2 2 4-4" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="10" stroke={BLUE} strokeWidth="2" />
          </svg>
        </div>
        <Title order={3}>Review Your Picks</Title>
        <Text component="span" size="sm" c="dimmed">
          {voted.length} of {allPlayers.length} players voted — confirm below to submit
        </Text>
      </div>

      <Stack gap="xl">
        {POSITION_STEPS.map((posStep, posIndex) => {
          const posPlayers = posStep.players;
          return (
            <Card key={posStep.short} padding="lg" radius="md" withBorder style={{ borderColor: "#e9ecef" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <Group gap="sm">
                  <Badge size="lg" variant="filled" style={{ backgroundColor: BLUE }}>{posStep.short}</Badge>
                  <Title order={4}>{posStep.label}</Title>
                </Group>
                <button
                  type="button"
                  onClick={() => onGoBack(posIndex)}
                  style={{
                    padding: "6px 14px", borderRadius: 6, border: `1px solid ${BLUE}`,
                    backgroundColor: "transparent", color: BLUE,
                    fontWeight: 600, fontSize: 13, cursor: "pointer",
                  }}
                >
                  Edit
                </button>
              </div>
              {posPlayers.map((player) => {
                const vote = votes[player.name];
                return (
                  <div
                    key={player.name}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: "1px solid #f1f3f5",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <Avatar size={36} radius="xl" src={player.photo} variant="gradient" gradient={player.gradient}>
                        {player.initials}
                      </Avatar>
                      <div>
                        <Text fw={600} size="sm">{player.name}</Text>
                        <Text size="xs" c="dimmed">{player.team}</Text>
                      </div>
                    </div>
                    {vote ? (
                      <Badge
                        size="md"
                        variant="filled"
                        style={{
                          backgroundColor: vote === "1st Team" ? GOLD : vote === "2nd Team" ? BLUE : "#868e96",
                          color: vote === "1st Team" ? "#1a1a1a" : "white",
                        }}
                      >
                        {vote === "Honorable Mention" ? "HM" : vote}
                      </Badge>
                    ) : (
                      <Badge size="md" variant="light" color="red">No Vote</Badge>
                    )}
                  </div>
                );
              })}
            </Card>
          );
        })}
      </Stack>

      {unvoted.length > 0 && (
        <Card padding="md" radius="md" mt="lg" style={{ backgroundColor: "#fff9db", border: "1px solid #ffe066" }}>
          <Text fw={600} size="sm" c="#664d03">
            {unvoted.length} player{unvoted.length > 1 ? "s" : ""} not yet voted on
          </Text>
          <Text size="xs" c="#997404" mt={4}>
            {unvoted.map((p) => p.name).join(", ")}
          </Text>
        </Card>
      )}

      <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
        <Button
          size="lg"
          style={{ backgroundColor: GOLD, color: "#1a1a1a", paddingLeft: 40, paddingRight: 40 }}
          onClick={onConfirm}
        >
          Confirm &amp; Submit Votes
        </Button>
      </div>
    </div>
  );
}

/* ─── Multi-Coach Consensus Bar ─── */
function ConsensusBar({ first, second, hm }: { first: number; second: number; hm: number }) {
  const total = first + second + hm;
  if (total === 0) return null;
  const pFirst = (first / total) * 100;
  const pSecond = (second / total) * 100;
  const pHm = (hm / total) * 100;

  return (
    <div style={{ display: "flex", borderRadius: 6, overflow: "hidden", height: 24, width: "100%" }}>
      {pFirst > 0 && (
        <div style={{ width: `${pFirst}%`, backgroundColor: GOLD, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#1a1a1a" }}>{first}</span>
        </div>
      )}
      {pSecond > 0 && (
        <div style={{ width: `${pSecond}%`, backgroundColor: BLUE, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "white" }}>{second}</span>
        </div>
      )}
      {pHm > 0 && (
        <div style={{ width: `${pHm}%`, backgroundColor: "#dee2e6", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#495057" }}>{hm}</span>
        </div>
      )}
    </div>
  );
}

function CoachConsensusSection() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title order={3} mb={4}>Coach Consensus</Title>
        <Text component="span" size="sm" c="dimmed">
          Aggregated votes from {COACH_NAMES.length} coaches across the conference
        </Text>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 14, height: 14, borderRadius: 3, backgroundColor: GOLD }} />
          <Text component="span" size="xs" fw={500}>1st Team</Text>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 14, height: 14, borderRadius: 3, backgroundColor: BLUE }} />
          <Text component="span" size="xs" fw={500}>2nd Team</Text>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 14, height: 14, borderRadius: 3, backgroundColor: "#dee2e6" }} />
          <Text component="span" size="xs" fw={500}>Honorable Mention</Text>
        </div>
      </div>

      <Stack gap="xl">
        {POSITION_STEPS.map((posStep) => (
          <Card key={posStep.short} padding="lg" radius="md" withBorder style={{ borderColor: "#e9ecef" }}>
            <Group gap="sm" mb="md">
              <Badge size="lg" variant="filled" style={{ backgroundColor: BLUE }}>{posStep.short}</Badge>
              <Title order={4}>{posStep.label}</Title>
            </Group>
            {posStep.players.map((player) => {
              const cv = SIMULATED_COACH_VOTES[player.name] || { first: 0, second: 0, hm: 0 };
              const total = cv.first + cv.second + cv.hm;
              const consensus = cv.first >= cv.second && cv.first >= cv.hm
                ? "1st Team"
                : cv.second >= cv.hm
                  ? "2nd Team"
                  : "HM";
              return (
                <div key={player.name} style={{ padding: "12px 0", borderBottom: "1px solid #f1f3f5" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <Avatar size={36} radius="xl" src={player.photo} variant="gradient" gradient={player.gradient}>
                        {player.initials}
                      </Avatar>
                      <div>
                        <Text fw={600} size="sm">{player.name}</Text>
                        <Text size="xs" c="dimmed">{player.team}</Text>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Badge
                        size="sm"
                        variant="filled"
                        style={{
                          backgroundColor: consensus === "1st Team" ? GOLD : consensus === "2nd Team" ? BLUE : "#868e96",
                          color: consensus === "1st Team" ? "#1a1a1a" : "white",
                        }}
                      >
                        {consensus}
                      </Badge>
                      <div style={{ fontSize: 11, color: "#868e96", marginTop: 2 }}>
                        {cv.first}/{total} first team votes
                      </div>
                    </div>
                  </div>
                  <ConsensusBar first={cv.first} second={cv.second} hm={cv.hm} />
                </div>
              );
            })}
          </Card>
        ))}
      </Stack>
    </div>
  );
}

/* ─── Results ─── */
function ResultCard({ player, showPosition }: { player: VotedPlayer; showPosition?: boolean }) {
  return (
    <Card padding="md" radius="md" withBorder style={{ borderColor: "#e9ecef" }}>
      <Group gap="sm" wrap="nowrap">
        <Avatar size={50} radius="xl" src={player.photo} variant="gradient" gradient={player.gradient}>
          {player.initials}
        </Avatar>
        <div style={{ flex: 1 }}>
          <Text fw={600} size="sm">{player.name}</Text>
          <Text size="xs" c="dimmed">{player.team}</Text>
        </div>
        {showPosition ? (
          <Badge size="sm" variant="light" color={BLUE}>{player.position}</Badge>
        ) : (
          <Badge size="md" variant="filled" style={{
            backgroundColor: player.vote === "1st Team" ? GOLD : player.vote === "2nd Team" ? BLUE : "#868e96",
            color: player.vote === "1st Team" ? "#1a1a1a" : "white",
          }}>
            {player.vote === "Honorable Mention" ? "HM" : player.vote}
          </Badge>
        )}
      </Group>
    </Card>
  );
}

function ResultsSection({ players }: { players: VotedPlayer[] }) {
  const [view, setView] = useState("position");
  const tierOrder = ["1st Team", "2nd Team", "Honorable Mention"] as const;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 8 }}>
        <Title order={3}>Voting Results</Title>
        <SegmentedControl
          size="sm"
          value={view}
          onChange={setView}
          data={[
            { label: "By Position", value: "position" },
            { label: "By Tier", value: "tier" },
            { label: "Coach Consensus", value: "consensus" },
          ]}
        />
      </div>

      {view === "consensus" ? (
        <CoachConsensusSection />
      ) : view === "position" ? (
        players.length === 0 ? (
          <Card padding="xl" radius="md" withBorder style={{ borderColor: "#e9ecef" }}>
            <Text ta="center" c="dimmed" py="xl">No votes have been cast yet.</Text>
          </Card>
        ) : (
          <Stack gap="xl">
            {POSITION_STEPS.map((posStep) => {
              const posPlayers = players
                .filter((p) => p.position === posStep.short)
                .sort((a, b) => tierOrder.indexOf(a.vote) - tierOrder.indexOf(b.vote));
              return (
                <div key={posStep.short}>
                  <Group gap="sm" mb="md">
                    <Badge size="lg" variant="light" color={BLUE}>{posStep.short}</Badge>
                    <Title order={4}>{posStep.label}</Title>
                  </Group>
                  {posPlayers.length === 0 ? (
                    <Text component="span" size="sm" c="dimmed" fs="italic">No votes cast</Text>
                  ) : (
                    <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4 }} spacing="md">
                      {posPlayers.map((p) => <ResultCard key={p.name} player={p} />)}
                    </SimpleGrid>
                  )}
                </div>
              );
            })}
          </Stack>
        )
      ) : (
        players.length === 0 ? (
          <Card padding="xl" radius="md" withBorder style={{ borderColor: "#e9ecef" }}>
            <Text ta="center" c="dimmed" py="xl">No votes have been cast yet.</Text>
          </Card>
        ) : (
          <Stack gap="xl">
            {tierOrder.map((tier) => {
              const tierPlayers = players.filter((p) => p.vote === tier);
              return (
                <div key={tier}>
                  <Group gap="sm" mb="md">
                    <Badge size="lg" variant="filled" style={{
                      backgroundColor: tier === "1st Team" ? GOLD : tier === "2nd Team" ? BLUE : "#868e96",
                      color: tier === "1st Team" ? "#1a1a1a" : "white",
                    }}>
                      {tier}
                    </Badge>
                  </Group>
                  {tierPlayers.length === 0 ? (
                    <Text component="span" size="sm" c="dimmed" fs="italic">No players selected</Text>
                  ) : (
                    <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4 }} spacing="md">
                      {tierPlayers.map((p) => <ResultCard key={p.name} player={p} showPosition />)}
                    </SimpleGrid>
                  )}
                </div>
              );
            })}
          </Stack>
        )
      )}
    </div>
  );
}

/* ─── Main Page ─── */
// Steps: 0=QB, 1=RB, 2=WR, 3=Review, 4=Results
const STEP_REVIEW = POSITION_STEPS.length;
const STEP_RESULTS = POSITION_STEPS.length + 1;

export default function LeagueMeetingPage() {
  const [step, setStep] = useState(0);
  const [votes, setVotes] = useState<Record<string, VoteTier>>({});
  const [submitted, setSubmitted] = useState(false);

  const isReview = step === STEP_REVIEW;
  const isResults = step === STEP_RESULTS;

  function handleVote(playerName: string, tier: VoteTier) {
    const next = { ...votes };
    if (tier === null) {
      delete next[playerName];
    } else {
      next[playerName] = tier;
    }
    setVotes(next);
  }

  function getVotedCount(posIndex: number): number {
    let count = 0;
    for (const p of POSITION_STEPS[posIndex].players) {
      if (votes[p.name]) count++;
    }
    return count;
  }

  function getAllVotedPlayers(): VotedPlayer[] {
    const result: VotedPlayer[] = [];
    const all = [...quarterbacks, ...runningBacks, ...wideReceivers];
    for (const p of all) {
      const v = votes[p.name];
      if (v) result.push({ ...p, vote: v });
    }
    return result;
  }

  function handleConfirm() {
    setSubmitted(true);
    setStep(STEP_RESULTS);
  }

  const totalVoted = Object.keys(votes).length;

  return (
    <div>
      <Navbar />

      <div style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #003985 100%)`, padding: "40px 0" }}>
        <Container size="xl">
          <Title order={2} c="white" mb={4}>League Meeting</Title>
          <Text component="span" c="rgba(255,255,255,0.7)" size="md">
            West Valley Conference — Fall 2025 All-League Selection
          </Text>
        </Container>
      </div>

      <Container size="xl" py="xl">
        {/* Navigation Tabs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, marginBottom: 24 }}>
          {POSITION_STEPS.map((s, i) => {
            const active = step === i;
            return (
              <button
                type="button"
                key={s.short}
                onClick={() => setStep(i)}
                style={{
                  padding: "12px 16px", borderRadius: 10,
                  border: `2px solid ${active ? BLUE : "#dee2e6"}`,
                  backgroundColor: active ? BLUE : "white",
                  cursor: "pointer", textAlign: "left",
                }}
              >
                <span style={{ display: "block", fontWeight: 700, fontSize: 14, color: active ? "white" : "#1a1a1a" }}>
                  {s.label}
                </span>
                <span style={{ display: "block", fontSize: 12, color: active ? "rgba(255,255,255,0.7)" : "#868e96" }}>
                  {getVotedCount(i)}/{s.players.length} voted
                </span>
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setStep(STEP_REVIEW)}
            style={{
              padding: "12px 16px", borderRadius: 10,
              border: `2px solid ${isReview ? BLUE : "#dee2e6"}`,
              backgroundColor: isReview ? BLUE : "white",
              cursor: "pointer", textAlign: "left",
            }}
          >
            <span style={{ display: "block", fontWeight: 700, fontSize: 14, color: isReview ? "white" : "#1a1a1a" }}>Review</span>
            <span style={{ display: "block", fontSize: 12, color: isReview ? "rgba(255,255,255,0.7)" : "#868e96" }}>
              {totalVoted}/12 picks
            </span>
          </button>
          <button
            type="button"
            onClick={() => setStep(STEP_RESULTS)}
            style={{
              padding: "12px 16px", borderRadius: 10,
              border: `2px solid ${isResults ? GOLD : "#dee2e6"}`,
              backgroundColor: isResults ? GOLD : "white",
              cursor: "pointer", textAlign: "left",
            }}
          >
            <span style={{ display: "block", fontWeight: 700, fontSize: 14, color: "#1a1a1a" }}>Results</span>
            <span style={{ display: "block", fontSize: 12, color: isResults ? "rgba(0,0,0,0.5)" : "#868e96" }}>
              {submitted ? "Submitted" : "Summary"}
            </span>
          </button>
        </div>

        {/* Step Content */}
        {isResults ? (
          <ResultsSection players={getAllVotedPlayers()} />
        ) : isReview ? (
          <ReviewSection
            votes={votes}
            onGoBack={(posIndex) => setStep(posIndex)}
            onConfirm={handleConfirm}
          />
        ) : (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Badge size="xl" variant="filled" style={{ backgroundColor: BLUE }}>
                  {POSITION_STEPS[step].short}
                </Badge>
                <Title order={3}>{POSITION_STEPS[step].label}</Title>
              </div>
              <Text component="span" size="sm" c="dimmed">
                {getVotedCount(step)} of {POSITION_STEPS[step].players.length} players voted
              </Text>
            </div>

            <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="lg">
              {POSITION_STEPS[step].players.map((player) => (
                <PlayerCard
                  key={player.name}
                  player={player}
                  vote={votes[player.name] ?? null}
                  onVote={(tier) => handleVote(player.name, tier)}
                />
              ))}
            </SimpleGrid>
          </div>
        )}

        {/* Bottom Navigation */}
        <Group justify="space-between" mt="xl">
          <Button variant="subtle" color="dark" disabled={step === 0} onClick={() => setStep(step - 1)}>
            Back
          </Button>
          <Group gap="sm">
            {!isResults && !isReview && (
              <Button variant="light" color="gray" onClick={() => setStep(step + 1)}>Skip</Button>
            )}
            {!isResults && !isReview && (
              <Button
                style={{ backgroundColor: BLUE, color: "white" }}
                onClick={() => setStep(step + 1)}
              >
                {step === POSITION_STEPS.length - 1 ? "Review Picks" : "Next Position"}
              </Button>
            )}
            {isResults && (
              <Button
                style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
                onClick={() => { setStep(0); setVotes({}); setSubmitted(false); }}
              >
                Start Over
              </Button>
            )}
          </Group>
        </Group>
      </Container>

      <div style={{ padding: "24px 0", textAlign: "center", borderTop: "1px solid #e9ecef" }}>
        <Text component="span" size="sm" c="dimmed">© 2025 LeagueStarz. All rights reserved.</Text>
      </div>
    </div>
  );
}
