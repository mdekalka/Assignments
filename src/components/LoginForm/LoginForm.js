
// import React, { Component } from 'react';
// import gql from "graphql-tag"
// import { Mutation } from "react-apollo";


// const LOGIN = gql`
//   mutation($login: String!, $password: String!) {
//     login(login: $login, password: $password) {
//       errorCode
//       errorMessage
//       refreshToken
//       token
//     }
//   }
// `;

// class Component1 extends Component {
//   state = {
//     username: 'aleh.isakau',
//     password: 'hybertyhui123'
//   }

//   onHandleChange = ({ target }) => {
//     this.setState({
//       [target.name]: target.value
//     })
//   }

//   render() {
//     const { username, password } = this.state

//     return (
//       <div>
//       <Mutation mutation={LOGIN}>
//         {(login, { data }) => {
//           return (
//             <div>
//               <form
//                 onSubmit={e => {
//                   e.preventDefault();
//                   debugger

//                   login({ variables: {
//                     login: 'aleh.isakau',
//                     password: 'hybertyhui123'
//                   }})
//                 }}
//               >
//                 <button type="submit">Add Todo</button>
//               </form>
//             </div>
//           )

//         }}
//       </Mutation>
//       <form onSubmit={this.onLogin}>
//         <div>
//           <label htmlFor="username">username</label>
//           <input type="text" name="username" id="username" value={username} onChange={this.onHandleChange} />
//         </div>
//         <div>
//           <label htmlFor="password">password</label>
//           <input type="password" name="password" id="password" value={password} onChange={this.onHandleChange} />
//         </div>
//         <input type="submit" />
//       </form>

//       </div>
//     );
//   }
// }

// export default Component1;
