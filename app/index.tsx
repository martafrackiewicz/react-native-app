import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
      }}>
      <Link
        href="/test-link"
        style={{
          backgroundColor: 'white',
          borderStyle: 'solid',
          borderColor: 'solid',
          borderWidth: 1,
          paddingVertical: 4,
          paddingHorizontal: 8,
          alignSelf: 'auto',
          width: '30%',
          textAlign: 'center',
          margin: 10,
        }}>
        Test link
      </Link>
      <Text className="text-red-500 m-[10px]">NativeWind test</Text>
    </View>
  );
}
