import { View, Text } from 'react-native'
import TransactionItem from './TransactionItem';


const  TransactionCardList = () => {

    const transactions= [
        {name: "Starbucks" , price: 10.12},
        {name: "Givenchy" , price: 15.12},
        {name: "Target" , price: 6.99 },
        {name: "Bolt" , price: 16.03 },
        {name: "Electricity" , price: 45.05 }
    ]

    return (
            <View>
                { transactions.map((item , key) => {
                                                        return <TransactionItem vendor={item.name} 
                                                                                price={item.price}
                                                                                key={key}
                                                                 />
                                                   }
                                  )
                 }         
            </View>
    )
  }
  
  export default TransactionCardList;