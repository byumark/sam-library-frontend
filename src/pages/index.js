import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import config from "../config";
import BookForm from "../containers/BookForm";
import BookList from "../containers/BookList";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "50%"
  }
});

const books = [
  { id: 1, title: "Book 1", author: "Author 1", pageCount: 243 },
  { id: 2, title: "Book 2", author: "Author 2", pageCount: 86 },
  { id: 3, title: "Book 3", author: "Author 3", pageCount: 314 }
];

class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = { books: [] };
    this.addBook = this.addBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    axios(`${config.apiRoot}/books`, {
      method: "GET"
    }).then(response => {
      this.setState({
        books: response.data.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        })
      });
    });
  }

  addBook(newBook) {
    axios({
      url: `${config.apiRoot}/books`,
      method: "POST",
      data: newBook
    }).then(() => this.getBooks());
  }

  deleteBook(id) {
    axios({
      url: `${config.apiRoot}/books/${id}`,
      method: "DELETE"
    }).then(() => this.getBooks());
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Library
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <Grid container justify="center">
          <Grid item xs={3}>
            <BookForm addBook={this.addBook} />
          </Grid>
          <Grid item xs={1}>
            <div
              style={{
                width: "50%",
                height: "200px",
                borderRight: "1px solid rgb(200,200,200)"
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <BookList deleteBook={this.deleteBook} books={books} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Books.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Books);
