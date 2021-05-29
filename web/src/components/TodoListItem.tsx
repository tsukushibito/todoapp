import * as React from "react";
import { useRecoilState } from "recoil";
import { TodoItem } from "../types";
import { todoListState } from "../recoil/atoms";
import { replaceItemAtIndex, removeItemAtIndex } from "../utils";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import DeleteIcon from "@material-ui/icons/Delete"

type Props = {
    item: TodoItem;
};

export const TodoListItem = (props: Props) => {
    const { item } = props;

    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = event;
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });

        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    };

    // return (
    //     <div>
    //         <input type="text" value={item.text} onChange={editItemText} />
    //         <input
    //             type="checkbox"
    //             checked={item.isComplete}
    //             onChange={toggleItemCompletion}
    //         />
    //         <button onClick={deleteItem}>X</button>
    //     </div>
    // );
    return (
        <ListItem key={item.id} role={undefined} dense button onClick={toggleItemCompletion}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={item.isComplete}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText primary={item.text} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                </IconButton>
                <IconButton edge="end" aria-label="comments" onClick={deleteItem}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};