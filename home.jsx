
import {View, StyleSheet, Text} from "react-native";
import {Link} from "expo-router";

export default function Home() {

    const [course, setCourse] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Home Page</Text>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/courses" style={styles.link}>Courses</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
        </View>
        
    );
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f0f0",
        },
        text: {
            fontSize: 24,
            color: "#333",
        },
        link: {
            fontSize: 18,
            color: "#007bff",
            margin: 10,
        },
    });

}
