import CustomButton from '@/components/CustomButton';
import { SafeAreaView, FlatList, Text, View, Modal, Button, Pressable } from 'react-native';
import { useState } from 'react';

const data = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

type ItemProps = { title: string };
const Item = ({ title }: ItemProps) => (
  <View className="p-5">
    <Text className="font-lato text-2xl">{`\u003e ${title}`}</Text>
  </View>
);

export default function ToDo() {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    // alert('press');
    setModalVisible(true);
  };

  return (
    <SafeAreaView>
      <View className="p-5 h-full" style={{ backgroundColor: 'lightblue' }}>
        <Text className="font-lato-bold text-2xl">ToDo List</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          className="mt-10"
        />
        <CustomButton
          handlePress={handlePress}
          title={`\u002B Add`}
          containerStyle=""></CustomButton>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>This is the modal content</Text>
              <Button title="Submit" onPress={() => setModalVisible(!modalVisible)} />
              {/* <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text>Hide Modal</Text>
              </Pressable> */}
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
