import { View, Text } from 'react-native'
import TransactionItem from './TransactionItem';


const  TransactionCardList = () => {
    return (
            <View>
                <TransactionItem vendor={"Starbucks"} price={22.35}  />
                <TransactionItem vendor={"Givenchy"} price={15.99}/>
                <TransactionItem vendor={"Accolade"} price={8.99}/>
            </View>
            
            
      
    )
  }
  
  export default TransactionCardList;