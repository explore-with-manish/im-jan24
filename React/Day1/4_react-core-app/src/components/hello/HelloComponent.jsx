// import React from 'react';

// class HelloComponent extends React.Component {
//     render() {
//         return (
//             <h1>Hello World!</h1>
//         );
//     }
// }

// export default HelloComponent;

// // ------------------------------

// import React, { Component } from 'react';

// class HelloComponent extends Component {
//     render() {
//         return (
//             <h1>Hello World!</h1>
//         );
//     }
// }

// export default HelloComponent;

// ------------------------------

// import React, { Component } from 'react';

// class HelloComponent extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </div>
//         );
//     }
// }

// export default HelloComponent;

// // ------------------------------

// import React, { Component } from 'react';

// class HelloComponent extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </React.Fragment>
//         );
//     }
// }

// export default HelloComponent;

// ------------------------------

// import React, { Component, Fragment } from 'react';

// class HelloComponent extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </Fragment>
//         );
//     }
// }

// export default HelloComponent;

// ------------------------------

// import React, { Component } from 'react';

// class HelloComponent extends Component {
//     render() {
//         return (
//             <>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </>
//         );
//     }
// }

// export default HelloComponent;

//-----------------------------------

// function HelloComponent() {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Function Declaration Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = function () {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Function Expression Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent =  () => {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Multiline Arrow Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = () => (
//     <>
//         <h1>Hello World!</h1>
//         <h1>Singleline Arrow Syntax!</h1>
//     </>
// );

// export default HelloComponent;

// --------------------------------------------- uSING gLOBAL css
const HelloComponent = () => (
    <>
        <h1 className="red">Hello World!</h1>
        <h1>Singleline Arrow Syntax!</h1>
    </>
);

export default HelloComponent;