import React from 'react';
import ProductDetails from './ProductDetails';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      fetch(`/api/products/categories/${this.props.match.params.cartegoryname}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            console.log("aaaa");
            for(let i=0;i<(response).length;i++)
           {
               console.log((response[i].title));
               const title = response[i].title;
               <ProductDetails title = {title} quantity={response[i].quantity} />
           }
            this.setState({category: response});
        });
    }

    render() {
        return (
          
            <div>Product data: {JSON.stringify(this.state.category)}</div>
        );
    }
}


// import React from 'react';

// class DeveloperProfile extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     componentDidMount() {
//         fetch(`/api/developers/${this.props.match.params.developerId}`)
//         .then(response => response.json())
//         .then(response => {
//             this.setState({developer: response});
//         });
//     }

//     render() {
//         return (
//             <div>Developer data: {JSON.stringify(this.state.developer)}</div>
//         );
//     }
// }

// export default DeveloperProfile;

//   onInput = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   }
  
//   onUpdate = () => {
//     const { firstName, lastName } = this.state;
//     fetch('/api/users/me', {
//       method: 'PUT',
//       body: JSON.stringify({ firstName, lastName }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//       }
//     }).then(res => {
//       if (res.status === 204) {
//         window.location = '/profile';
//       }
//     });
//   }

//   onLogout = () => {
//     fetch('/api/sessions/me', {
//       method: 'DELETE'
//     }).then(res => {
//       if (res.status === 204) {
//         window.location = '/';
//       }
//     });
//   }

//   render() {
//     return (<div className="Profile">
//         <div>Email: {this.state.email}</div>
//           <div>First Name: <input name="firstName" onInput={this.onInput} value={this.state.firstName || ''}></input></div>
//           <div>Last Name: <input name="lastName" onInput={this.onInput} value={this.state.lastName || ''}></input></div>
//           <div><input type="button" onClick={this.onUpdate} value="Update"></input></div>
//           <div><input type="button" onClick={this.onLogout} value="Logout"></input></div>
//       </div>);
//   }
// }

export default ProductList;
