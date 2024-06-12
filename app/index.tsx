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
          margin: 16,
        }}>
        Test link
      </Link>
      <View className="m-4">
        <Text className="text-red-500">NativeWind test</Text>
        <Text className="text-xl font-spacemono">Space Mono font test</Text>
        <Text className="text-xl font-lato">Lato font test</Text>
      </View>
    </View>
  );
}
