import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  useLocalSearchParams,
} from "expo-router";

import colors from "../../constants/colors";

export default function RecipeDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Recipe Details
      </Text>

      <Text style={styles.text}>
        Recipe ID: {id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
  },

  text: {
    fontSize: 18,
    color: colors.gray,
    marginTop: 10,
  },
});