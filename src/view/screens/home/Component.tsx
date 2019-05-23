import * as React from 'react';
import { View, FlatList, Text } from 'react-native';

import styles from './styles';

const extractKey = ({id}:any) => id

export interface Props {
  name: string;
  fetchMarketPrices: any,
  prices: any,
}

interface State {}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMarketPrices();
  }

  renderItem = ({item}:any) => {
    return (
      <View style={styles.row}>
        <View style={{flex: 1}}>
          <Text>{item.symbol}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'right'}}>{item.lastTrade}</Text>
        </View>
      </View>
    )
  }

  lastTradeList = (prices:any) => {
    return Object.keys(prices.result).map((pairName:any, index:number) => {
      return {
        symbol: pairName,
        lastTrade: prices.result[pairName].c[0],
        id: index.toString(),
      };
    });
  }

  render() {
    const { prices } = this.props;
    if(prices.result) {
      return (
        <View style={styles.container}>
          <FlatList
            style={styles.listContainer}
            data={this.lastTradeList(prices)}
            renderItem={this.renderItem}
            keyExtractor={extractKey}
          />
        </View>
      );
    } else {
      return (null);
    }
  }
}

export default Home;
