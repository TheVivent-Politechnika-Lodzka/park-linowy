import { Center, Text } from "@mantine/core";

export default function Footer() {
  return (
    <Center sx={{ color: "#AAA" }}>
      <Text ta="center">
        <Text>
          &copy; {new Date().getFullYear()} OnlyRopes - All rights reserved
        </Text>
        <Text>by Adam Kapuściński</Text>
      </Text>
    </Center>
  );
}
