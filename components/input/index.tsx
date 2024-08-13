import { TextInput } from 'react-native-paper'
import {useState} from "react";

// @ts-ignore
const Input = (props) => {

    const [texto, setTexto] = useState('');

    // @ts-ignore
    return <TextInput {...props} onChange={text => setTexto(text)} />
};

export default Input;