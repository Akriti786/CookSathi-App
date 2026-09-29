import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from "react-native";

import colors from "../constants/colors";

export default function RecipeCard({
    name,
    rating,
    time,
    description,
    emoji,
    onPress,
}) {
    return (
        <Pressable
            style={styles.recipeCard}
            onPress={onPress}
        >
            <Text style={styles.recipeImage}>
                {emoji}
            </Text>

            <View style={styles.recipeInfo}>
                <Text style={styles.recipeName}>
                    {name}
                </Text>

                <Text style={styles.recipeDetails}>
                    ⭐ {rating}   •   ⏱ {time} min
                </Text>

                <Text style={styles.recipeDescription}>
                    {description}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
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