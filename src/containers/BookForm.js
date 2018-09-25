import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = theme => ({
	margin: {
		margin: theme.spacing.unit
	}
});

const initialState = {
	title: "",
	author: "",
	pageCount: ""
};

class BookForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = initialState;

		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleChange(e) {
		let change = {};
		change[e.target.name] = e.target.value;
		this.setState(change);
	}

	handleAdd() {
		this.props.addBook(this.state);
		this.setState(initialState);
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<form>
					<Grid container spacing={24} alignItems="flex-end">
						<Grid item sm={12}>
							<TextField
								name="title"
								label="Title"
								fullWidth
								onChange={this.handleChange}
								value={this.state.title}
							/>
						</Grid>
						<Grid item sm={8}>
							<TextField
								name="author"
								label="Author"
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
								onChange={this.handleChange}
								value={this.state.pageCount}
							/>
						</Grid>
						<Grid item sm={12}>
							<Button variant="raised" color="primary" onClick={this.handleAdd}>
								Add Book
							</Button>
						</Grid>
					</Grid>
				</form>
			</div>
		);
	}
}

BookForm.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookForm);
