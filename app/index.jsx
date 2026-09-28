import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import colors from "../constants/colors";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>🍳 CookSathi</Text>
          <Text style={styles.subtitle}>
            Your Recipe. Your Kitchen. Your Sathi.
          </Text>
        </View>

        <Text style={styles.notification}>🔔</Text>
      </View>

      <Text style={styles.heading}>
        What do you want to cook?
      </Text>

      <TextInput
        style={styles.search}
        placeholder="🔍 Search recipes..."
        placeholderTextColor={colors.gray}
      />

      <Text style={styles.sectionTitle}>Categories</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.category}>
          <Text style={styles.categoryEmoji}>🍛</Text>
          <Text>Indian</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryEmoji}>🥗</Text>
          <Text>Healthy</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryEmoji}>🍰</Text>
          <Text>Desserts</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryEmoji}>🍜</Text>
          <Text>Chinese</Text>
        </View>
      </ScrollView>

      <Text style={styles.sectionTitle}>Popular Recipes</Text>

      <View style={styles.recipeCard}>
        <Text style={styles.recipeImage}>🍛</Text>

        <View style={styles.recipeInfo}>
          <Text style={styles.recipeName}>
            Chicken Biryani
          </Text>

          <Text style={styles.recipeDetails}>
            ⭐ 4.8   •   ⏱ 45 min
          </Text>

          <Text style={styles.recipeDescription}>
            Delicious and flavorful Indian rice dish.
          </Text>
        </View>
      </View>

      <View style={styles.recipeCard}>
        <Text style={styles.recipeImage}>🥘</Text>

        <View style={styles.recipeInfo}>
          <Text style={styles.recipeName}>
            Matar Paneer
          </Text>

          <Text style={styles.recipeDetails}>
            ⭐ 4.7   •   ⏱ 30 min
          </Text>

          <Text style={styles.recipeDescription}>
            Creamy paneer cooked with green peas.
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
  },

  subtitle: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 4,
  },

  notification: {
    fontSize: 25,
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.black,
    marginTop: 30,
    marginBottom: 15,
  },

  search: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    marginTop: 30,
    marginBottom: 15,
  },

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

  recipeCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
  },

  recipeImage: {
    fontSize: 55,
    width: 80,
    textAlign: "center",
  },

  recipeInfo: {
    flex: 1,
    marginLeft: 10,
  },

  recipeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
  },

  recipeDetails: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 6,
  },

  recipeDescription: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 8,
  },
});