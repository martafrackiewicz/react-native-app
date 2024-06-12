import { Tabs } from 'expo-router';

export default function Index() {
  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen
          name="todo"
          options={{
            title: 'ToDo List',
            headerShown: false,
            //   tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="photo"
          options={{
            title: 'Photo',
            headerShown: false,
            //   tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="gallery"
          options={{
            title: 'Gallery',
            headerShown: false,
            //   tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}