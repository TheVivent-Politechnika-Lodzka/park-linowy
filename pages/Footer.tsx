import { Center, Text } from "@mantine/core";

export default function Footer() {
  return (
    <Center sx={{ color: "#AAA", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <Text ta="center">
        &copy; {new Date().getFullYear()} OnlyRopes - All rights reserved by
        Adam Kapuściński
      </Text>
    </Center>
  );
}
