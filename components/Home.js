import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, Card, ListItem } from "react-native-elements";
import { connect } from "react-redux";

function Item({ title }) {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.text}>Transfer</Text>
      </View>
      <View style={styles.itemAmount}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
}
function HomeScreen({
  navigation,
  availableBalance,
  transferBalance,
  transferAmountList,
}) {
  return (
    <View style={styles.mainView}>
      <View style={styles.balanceView}>
        <Text style={styles.balanceText}>Balance</Text>
        <View>
          <Card
            title="Your earnings in April"
            containerStyle={styles.card}
            titleStyle={styles.cardTitle}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.transferView}>
                <Text style={styles.cardText}>{transferBalance}</Text>
                <Text>Transfers</Text>
              </View>
              <View style={styles.availableView}>
                <Text style={styles.cardText}>{availableBalance}</Text>
                <Text>Avaialble</Text>
              </View>
            </View>
          </Card>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.transferAmountList}>
            <FlatList
              keyExtractor={(item) => item.toString()}
              data={transferAmountList}
              renderItem={({ item }) => <Item title={item} />}
            />
          </View>
        </View>
      </View>

      <View>
        <Button
          buttonStyle={styles.transferButton}
          title="Transfer Money"
          onPress={() => navigation.navigate("Earnings")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 20,
  },
  transferView: {
    // marginLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    // padding: 30
  },
  availableView: {
    marginLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    // padding: 30
  },
  card: {
    marginTop: 50,
    width: 358,
  },
  cardTitle: {
    fontSize: 20,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
  cardText: {
    fontSize: 25,
  },
  balanceView: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  balanceText: {
    fontSize: 32,
    fontWeight: "600",
    color: "#171D33",
  },
  transferButton: {
    backgroundColor: "#613EEA",
    width: 363,
    alignItems: "flex-end",
    fontSize: 24,
    padding: 20,
    marginBottom: 40,
    marginLeft: 20,
  },
  transferAmountList: {
    marginTop: 50,
    flex: 1,
    marginBottom: 50
  },
  item: {
    backgroundColor: "#ffffff",
    width: 350,
    marginLeft: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },
  itemAmount: {
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    bottom: 20,
  },
  text: {
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  availableBalance: state.availableAmount,
  transferBalance: state.transferredAmount,
  transferAmountList: state.transferAmountList,
});
export default connect(mapStateToProps, null)(HomeScreen);
