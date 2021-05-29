import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms";
import { getId } from "../utils";

export const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue("");
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = event;
        setInputValue(value);
    };

    return (
        <div>
            <TextField value={inputValue} onChange={onChange} />
            <Button variant="contained" color="primary" onClick={addItem}>Add</Button>
        </div>
    );
};