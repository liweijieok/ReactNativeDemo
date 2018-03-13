/**
 * @author liweijie
 * create on 2018/3/12.
 * email:liweijie@aiyappp.com
 * desc: 固定传入text作为内容，color作为颜色，textSize作为大小
 * lastModify:
 */
import React, {Component} from "react";
import {
    View,
    Text,
} from 'react-native';


export default class Text28 extends Component {
    static defaultProps = {
        text: "content",
        color: "#508BED",
        textSize: 14,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return <View>
            <Text style={{
                color: this.props.color,
                fontSize: this.props.fontSize,
                textAlign: "center",
            }}>{this.props.text}</Text>
        </View>;
    }
}