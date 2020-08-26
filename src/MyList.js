import React, { Component } from 'react'
import './App.css'
import ListItem from './component/ListItem';


class MyList extends Component {
  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem:''
    }
  }

  clearList (e) {
    console.log('Clearing list!')
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange (e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e) {
    console.log("before setstate", this.state.newItem)
    // prevent the event from running the default "submit" event.
    e.preventDefault()
    const newArray = this.state.toDoItemArray;
    newArray.push(this.state.newItem);
    //make a new state
    this.setState({
      toDoItemArray: newArray,
      newItem: ''
    })
   
  }


  render() {
    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={'todo' + index} />
    ))

    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input type="text"
          placeholder="Type an item here"
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}
          /> 
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>

        <button onClick={(e) => 
          this.clearList(e)}>Finished the list!</button>
        
      </div>
    )
  }
}

export default MyList