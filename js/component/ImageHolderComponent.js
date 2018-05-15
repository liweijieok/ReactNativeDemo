/**
 * @author liweijie
 * create on 2018/4/9.
 * email:liweijie@aiyappp.com
 * desc: 有place holder的组件，支持自定义样式
 * lastModify:
 */
import React, {Component} from "react";
import {Image, TouchableWithoutFeedback, Alert} from "react-native";


export default class ImageHolderComponent extends Component {
    static defaultProps = {
        url: "",
        imageStyle: {},
        holderResizeMode: "cover"
    };

    constructor(props) {
        super(props);
        this.state = {
            loadState: 0
        }
    }

    _emptyUri = () => {
        return <Image
            resizeMode={this.props.holderResizeMode}
            source={this._holder()}

            style={[{
                width: 60,
                height: 60,
                borderRadius: 60,
            }, this.props.imageStyle]}/>;
    };

    _normal = () => {
        return <Image
            source={{uri: this.props.url}}
            defaultSource={this._holder()}
            onError={() => {
                if (this.state.loadState === 1) {
                    return;
                }
                this.setState({loadState: 1});
            }}
            onLoad={() => {
                if (this.state.loadState === 2) {
                    return
                }
                this.setState({loadState: 2});
            }
            }
            style={[{
                width: 60,
                height: 60,
                borderRadius: 60,
            }, this.props.imageStyle]}/>;
    };

    _holder = () => {
        const {holder} = this.props;
        if (holder) {
            return holder();
        }
        return require("../../img/pic_empty_data.png");
    };

    render() {
        const showView = this.props.url && (this.props.url.indexOf("http") >= 0) && this.state.loadState !== 1 ? this._normal() : this._emptyUri();
        return (
            <TouchableWithoutFeedback onPress={() => {
                const {onPress} = this.props;
                if (onPress) {
                    onPress(this.props.url);
                }
            }}>
                {showView}
            </TouchableWithoutFeedback>
        );
    }
}
