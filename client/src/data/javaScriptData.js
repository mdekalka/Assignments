import React, { Fragment } from 'react';
import Highlight from '../components/Highlight';

export const utilsTask = [
  {
    id: 1,
    mark: 1,
    title: 'Search',
    content: [
      'Implement a function that sort array of numbers and return sorted array.'
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
    mark: 'robot',
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
        Coordinates can't be negative - ignore any move that change it on negative. <Highlight>report()</Highlight> should print robot coordinates and direction.
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
        your <Highlight>report()</Highlight> method should print result message: <Highlight>Coordinates: 2,3. Direction: EAST.</Highlight>
      </Fragment>
    ]
  }
]

export const loggerData = [
  {
    id: 1,
    mark: 'logger',
    title: 'Design and implement client-side Logging Library in adherence to following user stories:',
    content: [
      <Fragment>— I want to have an ability to <Highlight>log information</Highlight></Fragment>,
      <Fragment>— I want to have an ability to send log information to the <Highlight>console.</Highlight></Fragment>,
      <Fragment>— I want to have an ability to send log information to an <Highlight>alert window.</Highlight></Fragment>,
      <Fragment>— I want to have an ability to send log information to the <Highlight>current window.</Highlight></Fragment>,
      <Fragment>— I want to have an ability to send log information to <Highlight>abstract Web API 
      endpoint.</Highlight></Fragment>,
      <Fragment>— I want to have an ability to select from <Highlight>built-in</Highlight> logging methods.</Fragment>,
      <Fragment>— I want to be able to extend the library with <Highlight>custom</Highlight> logging methods.</Fragment>,
      <Fragment>— I want to library to automatically log all <Highlight>unhandled client-side exceptions.</Highlight></Fragment>,
      <Fragment>— I want to have an ability to extend library with my own <Highlight>instrumentation methods</Highlight> so that the library can monitor not only exceptions, but other events too.</Fragment>,
      <Fragment>— As a developer extending the library with my own logging or instrumentation methods I want to have <Highlight>established contracts in a form of base class of API documentation</Highlight> so that I can easily know how to extend the library.</Fragment>,
      <Fragment>— As a developer extending the library I want to see <Highlight>clear errors and warning</Highlight> in case if I violate the contract of logging or instrumentation methods.</Fragment>
    ]
  }
]

export const lectures = [
  {
    id: 1,
    title: 'JavaScript lecture 1',
    href: 'https://wiki.itechart-group.com/screencasts/trainings/Front-End%20Development%20Training/JavaScript/03-12-2013/JavaScript%20Course%20-%20Lecture%201.mp4'
  },
  {
    id: 2,
    title: 'JavaScript lecture 2',
    href: 'https://wiki.itechart-group.com/screencasts/trainings/Front-End%20Development%20Training/JavaScript/03-14-2013/JavaScript%20Course%20-%20Lecture%202.mp4'
  },
  {
    id: 3,
    title: 'JavaScript lecture 3',
    href: 'https://wiki.itechart-group.com/screencasts/trainings/Front-End%20Development%20Training/JavaScript/03-19-2013/JavaScript%20Course%20-%20Lecture%203.mp4'
  },
  {
    id: 4,
    title: 'JavaScript lecture 4',
    href: 'https://wiki.itechart-group.com/screencasts/trainings/Front-End%20Development%20Training/JavaScript/03-21-2013/JavaScript%20Course%20-%20Lecture%204.mp4'
  },
  {
    id: 5,
    title: 'JavaScript lecture 5',
    href: 'https://wiki.itechart-group.com/screencasts/trainings/Front-End%20Development%20Training/JavaScript/03-26-2013/JavaScript%20Course%20-%20Lecture%205.mp4'
  },
  {
    id: 6,
    title: 'JavaScript lecture 6',
    href: 'https://wiki.itechart-group.com/screencasts/trainings/Front-End%20Development%20Training/JavaScript/03-28-2013/JavaScript%20Course%20-%20Lecture%206.mp4'
  },
  {
    id: 7,
    title: 'JavaScript lecture 7',
    href: 'https://wiki.itechart-group.com/screencasts/trainings/Front-End%20Development%20Training/JavaScript/04-02-2013/JavaScript%20Course%20-%20Lecture%207.mp4'
  },
  {
    id: 8,
    title: 'Современный учебник Javascript',
    href: 'https://learn.javascript.ru/'
  },
  {
    id: 9,
    title: 'JavaScript Guide MDN',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'
  },
  {
    id: 9,
    title: 'Introduction to JavaScript by freeCodeCamp',
    href: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript'
  }
]

