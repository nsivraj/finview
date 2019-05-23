import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { View, FlatList, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './styles';
import { showTradesGraph } from '../../../navigators/navigation';

const extractKey = ({id}:any) => id

export interface Props {
  name: string;
  fetchMarketPrices: any,
  prices: any,
  setSelectedSymbol: any,
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
    this.props.setSelectedSymbol(symbol);
    showTradesGraph();
  }

  renderRightElement = (mostRecentTrade:any) => {
    return (
      <Text style={{fontSize: 12}}>{mostRecentTrade}</Text>
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
        rightElement={this.renderRightElement(item.mostRecentTrade)}
      />
    )
  }

  mostRecentTradeList = (prices:any) => {
    return Object.keys(prices.result).map((pairName:any, index:number) => {
      return {
        symbol: pairName,
        mostRecentTrade: prices.result[pairName].c[0],
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
            data={this.mostRecentTradeList(prices)}
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
