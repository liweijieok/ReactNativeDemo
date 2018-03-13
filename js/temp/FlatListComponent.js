/**
 * @author liweijie
 * create on 2018/3/12.
 * email:liweijie@aiyappp.com
 * desc:
 * lastModify:
 */
import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

export default class FlatListComponent extends React.Component {
    render() {
        return <View>
            <MultiSelectList data={[{title: 'a'}, {title: 'b'}, {title: 'c'}, {title: 'd'}, {title: 'e'}]}
            />

        </View>
    }
}

class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const textColor = this.props.selected ? "red" : "black";
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text style={{color: textColor, textAlign: "center", fontSize: 30}}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class MultiSelectList extends React.PureComponent {
    state = {selected: (new Map(): Map<string, boolean>)};

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return {selected};
        });
    };

    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />
    );

    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}