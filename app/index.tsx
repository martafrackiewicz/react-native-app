import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
      }}
    >
      <Link href="/test-link" style={{
        backgroundColor: 'white', 
        borderStyle: 'solid', 
        borderColor: 'solid', 
        borderWidth: 1, 
        paddingVertical: 4, 
        paddingHorizontal: 8, 
        alignSelf: 'auto', 
        width: '30%', 
        textAlign: 'center', 
        margin: 10}}>
          Test link
      </Link>
      <Text style={{alignSelf: 'center'}}>tu bedzie todo lista</Text>
    </View>
  );
}
