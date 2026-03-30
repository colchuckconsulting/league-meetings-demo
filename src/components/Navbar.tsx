"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Text,
} from "@mantine/core";
import Link from "next/link";

const BLUE = "#0064F0";

export function Navbar() {
  return (
    <Box
      component="nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "white",
        borderBottom: "1px solid #e9ecef",
      }}
    >
      <Container size="xl" py="sm">
        <Flex align="center" justify="space-between">
          <Group gap="xl">
            <Link href="/">
              <Image
                src="/leaguestarz_01.svg"
                alt="LeagueStarz"
                h={30}
                w="auto"
              />
            </Link>
            <Group gap="lg" visibleFrom="sm">
              <Text
                component="a"
                href="/#players"
                size="sm"
                fw={500}
                c="dark"
                style={{ textDecoration: "none" }}
              >
                Players
              </Text>
              <Text
                component="a"
                href="#"
                size="sm"
                fw={500}
                c="dark"
                style={{ textDecoration: "none" }}
              >
                About
              </Text>
            </Group>
          </Group>
          <Group gap="sm">
            <Button variant="subtle" color="dark" size="sm">
              Sign In
            </Button>
            <Button size="sm" style={{ backgroundColor: BLUE }}>
              Sign Up
            </Button>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
}
