import { useState } from "react";
import { useRouter } from "expo-router";

import { View, Text, StyleSheet, ScrollView } from "react-native";

import colors from "../constants/colors";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import CategoryCard from "../components/CategoryCard";

const categories = [
  {
    id: "1",
    name: "Indian",
    emoji: "🍛",
  },
  {
    id: "2",
    name: "Healthy",
    emoji: "🥗",
  },
  {
    id: "3",
    name: "Desserts",
    emoji: "🍰",
  },
  {
    id: "4",
    name: "Chinese",
    emoji: "🍜",
  },
];


const recipes = [
  {
    id: "101",
    name: "Chicken Biryani",
    rating: "4.8",
    time: "45",
    description: "Delicious and flavorful Indian rice dish.",
    emoji: "🍛",
  },
  {
    id: "102",
    name: "Matar Paneer",
    rating: "4.7",
    time: "30",
    description: "Creamy paneer cooked with green peas.",
    emoji: "🥘",
  },
  {
    id: "103",
    name: "Masala Dosa",
    rating: "4.6",
    time: "25",
    description: "Crispy dosa served with delicious potato masala.",
    emoji: "🥞",
  },
];

export default function HomeScreen() {

  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchText.toLowerCase())
  );

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

      <SearchBar
        value={searchText}
        onChangeText={setSearchText}

      />

      <Text style={styles.sectionTitle}>Categories</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >

        {categories.map((category) => (

          <CategoryCard
            key={category.id}
            name={category.name}
            emoji={category.emoji}
          />

        ))}

      </ScrollView>

      <Text style={styles.sectionTitle}>Popular Recipes</Text>

      {filteredRecipes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>🔍</Text>

          <Text style={styles.emptyTitle}>
            No recipes found
          </Text>

          <Text style={styles.emptyText}>
            Try searching for another dish.
          </Text>
        </View>
      ) : (
        filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            rating={recipe.rating}
            time={recipe.time}
            description={recipe.description}
            emoji={recipe.emoji}
            onPress={() => router.push(`/recipes/${recipe.id}`)}
          />
        ))
      )}

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

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    marginTop: 30,
    marginBottom: 15,
  },

  emptyContainer: {
    alignItems: "center",
    marginTop: 40,
  },

  emptyEmoji: {
    fontSize: 45,
    marginBottom: 10,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
  },

  emptyText: {
    fontSize: 14,
    color: colors.gray,
    marginTop: 8,
  },

});