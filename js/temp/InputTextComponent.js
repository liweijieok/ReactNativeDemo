/**
 * @author liweijie
 * create on 2018/3/12.
 * email:liweijie@aiyappp.com
 * desc:
 * lastModify:
 */
import React, {Component} from 'react';
import {TextInput, View, Text,} from 'react-native';

export default class InputTextComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }

    render() {
        return <View>
            <TextInput
                maxHeight={200}
                multiline={true}
                style={{color: "blue", fontSize: 20}}
                onChangeText={(change) => {
                    this.setState({
                        text: change,
                    })
                }}
                placeholderTextColor={"red"}
                placeholder={"you"}
            />
            <Text style={{fontSize: 20, color: "blue"}}>{this.state.text}</Text>
        </View>;
    }
};