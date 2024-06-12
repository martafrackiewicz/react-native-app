import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import Button from '@/components/Button';

export default function Index() {
  return (
    <SafeAreaView className="bg-sky-100 h-full border-2 border-blue-500 border-solid">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full flex items-center justify-center px-5 border-2 border-green-500 border-solid">
          <Image
            source={require('../assets/images/icon.png')}
            // source="https://picsum.photos/seed/696/3000/2000"
            contentFit="contain"
            transition={1000}
            className="w-[100px] h-[100px]"
          />
          <View className="flex flex-row mt-10">
            <Text className="font-lato-bold text-4xl">TaskSnap</Text>
            <Image source={require('../assets/images/picture.svg')} className="w-10 h-10 ml-5" />
          </View>
          <Text className="font-lato text-xl text-center mt-4 text-gray-800">
            Capture moments, organize tasks, and embrace life’s journey with our app
          </Text>
          <Button
            title="Continue"
            handlePress={() => {
              router.push('/todo');
            }}
            containerStyle="mt-8"></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
