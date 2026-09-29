import {
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

import {
  useLocalSearchParams,
  useRouter,
} from "expo-router";

import colors from "../../constants/colors";
import recipes from "../../data/recipes";
import RecipeCard from "../../components/RecipeCard";

export default function CategoryPage() {
  const { name } = useLocalSearchParams();

  const router = useRouter();

  const categoryRecipes = recipes.filter((recipe) =>
    recipe.category.toLowerCase() ===
    name.toLowerCase()
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <Pressable
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>
          ← Back to Home
        </Text>
      </Pressable>

      <Text style={styles.emoji}>
        🍽️
      </Text>

      <Text style={styles.title}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Text>

      <Text style={styles.subtitle}>
        Recipes from this category
      </Text>

      {categoryRecipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.name}
          rating={recipe.rating}
          time={recipe.time}
          description={recipe.description}
          emoji={recipe.emoji}
          onPress={() =>
            router.push(`/recipes/${recipe.id}`)
          }
        />
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  backButton: {
    marginBottom: 25,
    marginTop: 30
  },

  backText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },

  emoji: {
    fontSize: 60,
    textAlign: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginTop: 15,
    textTransform: "capitalize",
  },

  subtitle: {
    fontSize: 16,
    color: colors.gray,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 25,
  },
});