import CustomButton from '@/components/CustomButton';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Modal,
  Button,
  Pressable,
  TextInput,
} from 'react-native';
import { SetStateAction, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

type FormData = {
  title: string;
  priority: string;
  // priority: boolean;
};
type ItemProps = { title: string; priority: string };
// priority: boolean

const Item = ({ title, priority }: ItemProps) => (
  <View className="flex flex-row items-end p-5">
    <Text className="font-lato text-2xl">{`\u003e ${title}`}</Text>
    <Text className="font-lato text-lg ml-auto">{priority}</Text>
  </View>
);

export default function ToDo() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'First Item',
      priority: 'low',
      // priority: true,
    },
    {
      id: '2',
      title: 'Second Item',
      priority: 'high',
      // priority: false,
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({});

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
    console.log(data);

    setModalVisible(!modalVisible);
    reset();

    const id = (tasks.length + 1).toString();

    setTasks([...tasks, { ...data, id }]);
  };

  return (
    <SafeAreaView>
      <View className="p-5 h-full" style={{ backgroundColor: 'lightblue' }}>
        <Text className="font-lato-bold text-2xl">ToDo List</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Item title={item.title} priority={item.priority} />}
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
            <View style={{ backgroundColor: 'white', padding: 20, minWidth: '90%' }}>
              <View>
                <Text>Title*</Text>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      className="border border-gray-300 p-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 mt-2"
                    />
                  )}
                  name="title"
                  rules={{ required: true }}
                  defaultValue=""
                />
                {errors.title?.type === 'required' && (
                  <Text className="font-lato text-red-500">Title is required</Text>
                )}
                <Text className="mt-4">Priority*</Text>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      className="border border-gray-300 p-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 mt-2"
                    />
                  )}
                  name="priority"
                  rules={{ required: true }}
                  defaultValue=""
                  // defaultValue={false}
                />
                {errors.priority?.type === 'required' && (
                  <Text className="font-lato text-red-500">Priority is required</Text>
                )}
                <View>
                  <Button color="black" title="Add" onPress={handleSubmit(onSubmit)} />
                </View>
              </View>
              {/* <Button title="Submit" onPress={() => setModalVisible(!modalVisible)} /> */}
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
