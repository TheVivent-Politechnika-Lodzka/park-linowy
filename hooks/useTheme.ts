import { useColorScheme, useLocalStorage } from "@mantine/hooks";

export default function useTheme() {
    const colorScheme = useColorScheme("dark");
    return useLocalStorage<'dark' | 'light'>({ key: "theme", defaultValue: colorScheme });
}