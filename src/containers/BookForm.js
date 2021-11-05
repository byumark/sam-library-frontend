import React from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const initialState = {
  title: '',
  author: '',
  pageCount: '',
}

class BookForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  handleAdd() {
    this.props.addBook(this.state)
    this.setState(initialState)
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <form>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item sm={12}>
              <TextField
                name="title"
                label="Title"
                variant="standard"
                fullWidth
                onChange={this.handleChange}
                value={this.state.title}
              />
            </Grid>
            <Grid item sm={8}>
              <TextField
                name="author"
                label="Author"
                variant="standard"
                fullWidth
                onChange={this.handleChange}
                value={this.state.author}
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                name="pageCount"
                label="Pages"
                fullWidth
                variant="standard"
                onChange={this.handleChange}
                value={this.state.pageCount}
              />
            </Grid>
            <Grid item sm={12}>
              <Button variant="contained" onClick={this.handleAdd}>
                Add Book
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}

export default BookForm
