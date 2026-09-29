import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

import {
  useLocalSearchParams,
  useRouter,
} from "expo-router";

import colors from "../../constants/colors";

import recipes from "../../data/recipes";

export default function RecipeDetails() {

  const { id } = useLocalSearchParams();

  const router = useRouter();

  const recipe = recipes.find(
    (item) => item.id === id
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
        {recipe.emoji}
      </Text>

      <Text style={styles.title}>
        {recipe.name}
      </Text>

      <Text style={styles.rating}>
        ⭐ {recipe.rating}
      </Text>

      <Text style={styles.time}>
        ⏱ {recipe.time} minutes
      </Text>

      <Text style={styles.description}>
        {recipe.description}
      </Text>

     <Text style={styles.sectionTitle}>
  Ingredients
</Text>

{recipe.ingredients.map((ingredient, index) => (
  <Text
    key={index}
    style={styles.ingredient}
  >
    • {ingredient}
  </Text>
))}



<Text style={styles.sectionTitle}>
  Instructions
</Text>

{recipe.instructions.map((instruction, index) => (
  <Text
    key={index}
    style={styles.instruction}
  >
    {index + 1}. {instruction}
  </Text>
))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },

  emoji: {
    fontSize: 80,
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
  },

  rating: {
    fontSize: 16,
    color: colors.primary,
    marginTop: 10,
  },

  time: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 8,
  },

  description: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 15,
    textAlign: "center",
  },
  

  content: {
  padding: 20,
  paddingBottom: 40,
},

sectionTitle: {
  fontSize: 22,
  fontWeight: "bold",
  color: colors.black,
  marginTop: 30,
  marginBottom: 12,
},

ingredient: {
  fontSize: 16,
  color: colors.black,
  marginBottom: 8,
},

instruction: {
  fontSize: 16,
  color: colors.black,
  lineHeight: 24,
  marginBottom: 12,
},

backButton: {
  alignSelf: "flex-start",
  marginBottom: 20,
  marginTop:30
},

backText: {
  fontSize: 16,
  fontWeight: "bold",
  color: colors.primary,
},
});