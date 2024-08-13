import { Surface } from 'react-native-paper'

// @ts-ignore
const Grid = ({children, ...props}) => {

    // @ts-ignore
    return <Surface {...props}>{children}</Surface>
};

export default Grid;