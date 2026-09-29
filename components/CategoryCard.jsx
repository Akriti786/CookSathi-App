import {
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import colors from "../constants/colors";

export default function CategoryCard({
  name,
  emoji,
  onPress,
}) {
  return (
    <Pressable
      style={styles.category}
      onPress={onPress}
    >
      <Text style={styles.categoryEmoji}>
        {emoji}
      </Text>

      <Text style={styles.categoryName}>
        {name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  category: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  categoryEmoji: {
    fontSize: 32,
    marginBottom: 5,
  },

  categoryName: {
    fontSize: 14,
    color: colors.black,
  },
});