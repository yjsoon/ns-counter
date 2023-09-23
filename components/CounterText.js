import { Text, StyleSheet } from "react-native";

export default function CounterText(props) {
  console.log(props);
  return (
    <Text
      style={{
        color: props.color,
        fontSize: props.fontSize,
        margin: props.margin
      }}>
      {props.children}
    </Text>
  );
}
