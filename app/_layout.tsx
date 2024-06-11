import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'beige',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'black',
        },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'ToDo list',
        }}
      />
      <Stack.Screen
        name="test-link"
        options={{
          title: 'Test link title',
        }}
      />
    </Stack>
  );
}
