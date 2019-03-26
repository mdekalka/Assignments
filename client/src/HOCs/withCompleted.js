import React, { Component } from 'react';

import { storage } from '../services/storage'


const withCompleted = storageKey => WrappedComponent => {
  return class extends Component {
    state = {
      completed: []
    }

    componentDidMount() {
      const completed = storage.getItem(storageKey) || []

      this.setState({ completed });
    }

    onToggleCompleted = (markId) => {
      const { completed } = this.state
      let updated
  
      if (completed.includes(markId)) {
        updated = completed.filter(id => id !== markId)
      } else {
        updated = [...completed, markId]
      }

      this.setState({ completed: updated })
      storage.setItem(storageKey, updated)
    }

    render() {
      const { completed } = this.state

      return <WrappedComponent onToggle={this.onToggleCompleted} completed={completed} {...this.props} />
    }
  }
}

export default withCompleted
