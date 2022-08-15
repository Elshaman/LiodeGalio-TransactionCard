import { StyleSheet, Text, View } from 'react-native';
import TransactionCardHeader from './TransactionCardHeader';
import TransactionCardList from './TransactionCardList';

const TransactionCard = ( ) => {
    return (
        <View>
            <TransactionCardHeader />
            <TransactionCardList />
        </View>
    );
}

export default TransactionCard;