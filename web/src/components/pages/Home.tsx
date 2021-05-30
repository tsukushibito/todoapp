import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import { TodoList } from '../TodoList';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 1080,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
}

function Home() {
    return (
        <Container maxWidth="md">
            <TodoList></TodoList>
        </Container>
    );
};

export default Home;