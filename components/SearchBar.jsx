import { TextInput, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function SearchBar({ value, onChangeText }) {
    return (
        <TextInput
            style={styles.search}
            placeholder="🔍 Search recipes..."
            placeholderTextColor={colors.gray}
            value={value}
            onChangeText={onChangeText}
        />
    );
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.lightGray,
    },
});