import { Text, TouchableHighlight, TouchableOpacity } from 'react-native';

type ButtonProps = {
  handlePress: () => void;
  title: string;
  containerStyle: string;
};

export default function Button({ handlePress, title, containerStyle }: ButtonProps) {
  return (
    // <TouchableOpacity
    //   className={`bg-orange-100 rounded-xl min-h-[58px] items-center justify-center w-full ${containerStyle}`}
    //   onPress={handlePress}
    //   activeOpacity={0.7}>
    //   <Text className="text-xl font-lato-bold uppercase">{title}</Text>
    // </TouchableOpacity>
    <TouchableHighlight
      className={`bg-orange-100 rounded-xl min-h-[58px] items-center justify-center w-full ${containerStyle}`}
      onPress={handlePress}
      activeOpacity={0.6}
      underlayColor="#DDDDDD">
      <Text className="text-xl font-lato-bold uppercase">{title}</Text>
    </TouchableHighlight>
  );
}
