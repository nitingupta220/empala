import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Input, Button } from "react-native-elements";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { transferAmount } from "../actions";

function Item({ amount, pressed, onSelect }) {
  return (
    <TouchableHighlight
      style={[
        styles.amountCircle,
        pressed ? { backgroundColor: "#613EEA" } : null,
      ]}
      onPress={() => onSelect(amount.toString())}
    >
      <Text style={[styles.amountText, pressed ? { color: "white" } : null]}>
        {amount}
      </Text>
    </TouchableHighlight>
  );
}

function Earnings({ navigation, transferAmount }) {
  const [amount, setAmount] = useState("");
  const circleAmountList = [
    { amount: 100, id: 1, pressed: false },
    { amount: 150, id: 2, pressed: false },
    { amount: 200, id: 3, pressed: false },
    { amount: 250, id: 4, pressed: false },
  ];
  const onButtonPress = () => {
    transferAmount(parseInt(amount));
    navigation.navigate("Home");
  };
  const onSelect = (amount) => {
    console.log("amount==>", amount);
    // setPressed(true);
    setAmount(amount);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={styles.balance}>
        <Text style={styles.balanceText}>Your balance</Text>
      </View>
      <View style={styles.transferEarning}>
        <Text style={styles.transferText}>Transfer Earnings</Text>
      </View>
      <View style={styles.amountContainer}>
        <FlatList
          contentContainerStyle={{ marginBottom: 50 }}
          data={circleAmountList}
          renderItem={({ item }) => (
            <Item
              amount={item.amount}
              pressed={item.pressed}
              onSelect={onSelect}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={4}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          value={amount}
          placeholder="Enter Amount"
          onChangeText={(text) => {
            setAmount(text);
          }}
          style={styles.inputBox}
        />
        <Text>+ $4.5 early payout fee will be charged</Text>
      </View>
      <View style={styles.confirmButton}>
        <Button
          buttonStyle={styles.transferButton}
          title="Confirm Transfer"
          onPress={onButtonPress}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  balance: {
    alignItems: "center",
  },
  balanceText: {
    fontSize: 25,
  },
  transferEarning: {
    marginTop: 20,
    padding: 30,
  },
  transferText: {
    fontSize: 30,
  },
  amountContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountCircle: {
    backgroundColor: "rgba(97, 62, 234, 0.2)",
    width: 75,
    height: 75,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  amountText: {
    fontSize: 18,
  },
  inputContainer: {
    marginTop: 20,
    padding: 20,
  },
  inputBox: {
    borderStyle: "solid",
  },
  confirmButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 320,
  },
  transferButton: {
    backgroundColor: "#613EEA",
    width: 363,
    alignItems: "flex-end",
    padding: 20,
  },
});

const mapDispatchToProps = (dispatch) => ({
  transferAmount: (amount) => dispatch(transferAmount(amount)),
});

export default connect(null, mapDispatchToProps)(Earnings);
