import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

/**
 * Стилизованная кнопка.
 * @param {*} param0 В параметрах текст и событие нажатия на кнопку.
 * @returns Возвращает html компонент.
 */
export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={buttonStyles.button}>
                <Text style={buttonStyles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
/**
 * Стили.
 */
const buttonStyles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "none",
        height: 20,
        marginTop: "-6rem",

    },
    buttonText: {
        color: "#979797",
        fontSize: 14,
        textAlign: 'center',
    }
});