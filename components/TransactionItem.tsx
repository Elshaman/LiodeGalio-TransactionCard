import { View, Text } from 'react-native'

interface Purchase{
    vendor: string;
    price: number;
}


const TransactionItem = ( props: Purchase) => {
    return(
        <View>
                <Text>{props.vendor}</Text>
                <Text>$ {props.price}</Text>
        </View>
    )
}

export default TransactionItem;