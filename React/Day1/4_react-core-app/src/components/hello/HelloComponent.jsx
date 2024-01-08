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
// const HelloComponent = () => (
//     <>
//         <h1 className="red">Hello World!</h1>
//         <h1>Singleline Arrow Syntax!</h1>
//     </>
// );

const HelloComponent = () => (
    <div className="container text-center">
        <h1 className="red">Hello World!</h1>
        <h1 className="text-primary">Singleline Arrow Syntax!</h1>
        <h1 className="text-success">
            Icons
            <span className="bi bi-activity"></span>
            <span className="bi bi-arrow-up-square-fill"></span>
            <span className="bi bi-airplane-engines-fill"></span>    
        </h1>
    </div>
);

export default HelloComponent;