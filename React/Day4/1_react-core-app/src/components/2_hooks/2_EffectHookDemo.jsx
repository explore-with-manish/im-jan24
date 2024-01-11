import React, { useEffect, useState } from 'react';

const ChildComponent = () => {
    useEffect(() => {
        // Any Code in here, is fired on mounting of component
        console.log("Child useEffect is called, on mounting");
        return () => {
            // Any Code in here, is fired on unmounting of component
            console.log("Child useEffect is called, on unmounting");
        }
    }, []);

    return (
        <>
            <h2 className="text-center text-primary">Child Component</h2>
        </>
    );
}

const EffectHookDemo = () => {
    const [flag, setFlag] = useState(false);
    const [person, setPerson] = useState({ fname: "Manish", lname: "Sharma" });

    // With second parameter as empty array, useEffect behaves like ComponentDidMount()
    // useEffect(() => {
    //     console.log("useEffect is call, on mounting");
    // }, []);

    // Without second parameter, useEffect behaves like ComponentDidUpdate()
    // But will also be excuted when component mounts (ComponentDidMount)
    // useEffect(() => {
    //     console.log("useEffect is call, on mounting & state updates");
    // });

    // Without second parameter, useEffect behaves like ComponentDidUpdate(), only when flag changes
    // But will also be excuted when component mounts (ComponentDidMount)
    useEffect(() => {
        console.log("useEffect is called, on mounting & flag state updates only");
    }, [flag]);

    return (
        <>
            <h2 className="text-center text-primary">Effect Hook</h2>

            <h3 className="text-primary">Flag: {flag.toString()}</h3>
            <button className="btn btn-primary" onClick={e => { setFlag(!flag); }}>
                Click to Change Flag
            </button>

            <h3 className="text-primary">Firstname: {person.fname}</h3>
            <h3 className="text-primary">Lastname: {person.lname}</h3>

            <button className="btn btn-primary" onClick={e => { setPerson({ fname: "Abhijeet", lname: "Gole" }); }}>
                Click to Change Person
            </button>

            {flag ? <ChildComponent /> : null}
        </>
    );
};

export default EffectHookDemo;