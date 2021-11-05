import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import BookIcon from '@mui/icons-material/Book'
import DeleteIcon from '@mui/icons-material/Delete'

const BookItem = props => {
  const { deleteBook } = props

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
  )
}

const BookList = props => {
  const { books, deleteBook } = props
  return (
    <div>
      <Typography variant="h6">Books</Typography>
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
  )
}

export default BookList
