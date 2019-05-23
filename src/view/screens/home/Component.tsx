import * as React from 'react';
import { View, FlatList, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
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

  recentTradesScreen = (symbol:any):any => {
    console.log("recent trades for symbol: " + symbol);
  }

  renderRightElement = (lastTrade:any) => {
    return (
      <Text style={{fontSize: 12}}>{lastTrade}</Text>
    );
  }

  renderItem = ({item}:any) => {
    return (
      <ListItem
        onPress={() => {this.recentTradesScreen(item.symbol)}}
        key={item.id}
        title={item.symbol}
        titleStyle={{fontSize: 12}}
        topDivider={true}
        chevron
        rightElement={this.renderRightElement(item.lastTrade)}
      />
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
