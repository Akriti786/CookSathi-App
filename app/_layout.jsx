// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }


import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>

      <Stack.Screen
        name="index"
        options={{
          title: "CookSathi",
        }}
      />

      <Stack.Screen
        name="recipes/[id]"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="category/[name]"
        options={{
          headerShown: false,
        }}
      />

    </Stack>
  );
}