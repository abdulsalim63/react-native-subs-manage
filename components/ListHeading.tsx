import { Href, Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const ListHeading = ({ title, viewLink }: ListHeadingProps) => {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>

      <TouchableOpacity className="list-action">
        <Link href={(viewLink as Href) ?? "/"} className="list-action-text">
          View All
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeading;
