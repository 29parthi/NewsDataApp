import React, {Component} from 'react';
import {Image, Linking} from 'react-native';
import {
  Container,
  Header,
  View,
  Button,
  Card,
  CardItem,
  Content,
  Text,
  Left,
  Body,
  Icon,
} from 'native-base';

export default class ArticleData extends Component {
  render() {
    let forecasts = this.props.data.map(function(forecastData, index) {
      return (
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>
              <Body>
                <Text>{forecastData.source.name}</Text>
                <Text note>{forecastData.title}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{
                  uri: forecastData.urlToImage ? forecastData.urlToImage : '',
                }}
                style={{height: 200, width: 400, flex: 1}}
              />
              <Text>{forecastData.description}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="link" />
                <Text
                  onPress={() => {
                    Linking.openURL(forecastData.url);
                  }}>
                  Click Here For Details
                </Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      );
    });
    return (
      <Container>
        <Header>
          <Text style={{fontWeight: 'bold'}}>Indian News App</Text>
        </Header>
        <Content>{forecasts}</Content>
      </Container>
    );
  }
}
