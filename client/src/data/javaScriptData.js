import React, { Fragment } from 'react';
import Highlight from '../components/Highlight';

export const utilsTask = [
  {
    id: 1,
    mark: 1,
    title: 'Search',
    content: [
      <Fragment>Implement a function that sort array of numbers and return sorted array.<br/>Sort type - all, except primitive like bubble sort.</Fragment>
    ]
  },
  {
    id: 2,
    mark: 2,
    title: 'Element search',
    content: [
      'Implement a function that returns the first element in array that satisfies given condition.'
    ]
  },
  {
    id: 3,
    mark: 3,
    title: 'Filter',
    content: ['Implement a function that filters array based on callback result.']
  },
  {
    id: 4,
    mark: 4,
    title: 'Map',
    content: ['Implement a function that creates new array with the results of calling a provided function on every element in this array.']
  },
  {
    id: 5,
    mark: 5,
    title: 'Average',
    content: ['Given array of numbers, find average of even.']
  }
]

export const robotTask = [
  {
    id: 1,
    mark: 1,
    title: 'Robot toy',
    content: [
      <Fragment>
        Implement a robot toy class with <Highlight>move(), left(), right(), report()</Highlight> functions.
        Robot has <Highlight>0, 0</Highlight> as initial coordinates and sees on <Highlight>NORTH.</Highlight>
      </Fragment>,
      <Fragment>
      Method <Highlight>move()</Highlight> should change coordinate by one, <Highlight>left()</Highlight> and <Highlight>right()</Highlight> will rotate the robot <Highlight>90</Highlight> degrees in the specified direction without changing the position of the robot.
      </Fragment>,
      <Fragment>
        Coordinates can't be negative - ignore any move that change it on negative. <Highlight>report()</Highlight> should print robot coordinates and position.
      </Fragment>,
      <Fragment>After calling next code:<br/>
        <Highlight>
          robot.move(); <br/>
          robot.move(); <br/>
          robot.move(); <br/>
          robot.right(); <br/>
          robot.move(); <br/>
          robot.move(); <br/>
          robot.report();
        </Highlight>
        <br/>
        your <Highlight>report():</Highlight> method should show result message: <Highlight>Coordinates: 2,3. Direction: EAST.</Highlight>
      </Fragment>
    ]
  }
]

// Implement a robot toy class with move(), left(), right(), report() functions. Robot has 0, 0 as initial coordinates and sees on NORTH.
// move() should change coordinate by one, left() and right() will rotate the robot 90 degrees in the specified direction without changing the position of the robot. 
// Coordinates can't be negative - ignore any move that change it on negative. report() should print robot coordinates and position.
// robot.move();
// robot.move();
// robot.move();
// robot.right();
// robot.move();
// robot.move();
// robot.report(); // 2,3,EAST
