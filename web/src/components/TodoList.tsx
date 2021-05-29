import List from "@material-ui/core/List";
import * as React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/atoms";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
    const todoList = useRecoilValue(todoListState);

    return (
        <div>
            {/* <TodoListStats /> */}
            {/* <TodoListFilters /> */}
            <TodoItemCreator />

            <List>
                {todoList.map((todoItem) => (
                    <TodoListItem key={todoItem.id} item={todoItem} />
                ))}
            </List>
        </div>
    );
};