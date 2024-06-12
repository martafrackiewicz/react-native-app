import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function Index() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}>
        <Tabs.Screen
          name="todo"
          options={{
            title: 'ToDo List',
            headerShown: false,
            tabBarIcon: () => (
              <Image source={require('../../assets/images/list.png')} className="w-5 h-5" />
            ),
            // tabBarIcon: () => (
            //   <Image source={require('../../assets/images/picture.svg')} className="w-5 h-5" />
            // ),
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
