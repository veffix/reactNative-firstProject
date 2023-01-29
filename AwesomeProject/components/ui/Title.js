import { Text, StyleSheet } from "react-native";

export default ({children}) => {
   return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: "bold",
      color:  'white',
      textAlign: 'center',
      borderWidth: 2,
      borderColor: 'white',
      padding: 12,
      marginBottom: 24
    }
  })