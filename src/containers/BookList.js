import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import BookIcon from "@material-ui/icons/Book";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "50%"
  }
});

const BookItem = props => {
  const { deleteBook } = props;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <BookIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.title}
        secondary={`${props.author} • ${props.pageCount} pages`}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <DeleteIcon onClick={() => deleteBook(props.id)} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const BookList = props => {
  const { classes, books, deleteBook } = props;
  return (
    <div>
      <Typography variant="title" className={classes.title}>
        Books
      </Typography>
      {props.books.length === 0 ? (
        <p>Sorry, no books in the library.</p>
      ) : (
        <List>
          {books.map((book, i) => (
            <BookItem key={i} deleteBook={deleteBook} {...book} />
          ))}
        </List>
      )}
    </div>
  );
};

BookList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookList);
