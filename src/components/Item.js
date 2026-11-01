import { Pressable, Text, StyleSheet } from "react-native";

const Item = ({ title }) => {
    return (
        <Pressable style={Item.done ? styles.taskContainer : styles.taskContainerT}>
            <Text>{title}</Text>
        </Pressable>
    )
}

export default Item;

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: "red",
        padding: 20,
        margin: 4,
        borderRadius: 8,
    },
    taskContainerT: {
        backgroundColor: "green",
        padding: 20,
        margin: 4,
        borderRadius: 8,
    }
})