import React from 'react';

const Th = ({ item }) => {
    var allHeads = Object.keys(item).concat("", "actions", "");

    var ths = allHeads.map((head, index) => {
        return <th key={index}>{head.toUpperCase()}</th>
    });

    return (
        <tr>
            {ths}
        </tr>
    );
}

const Tr = ({ item }) => {
    var allValues = Object.values(item).concat(
        <a href="/#" className='text-primary'>Details</a>,
        <a href="/#" className='text-warning'>Edit</a>,
        <a href="/#" className='text-danger'>Delete</a>,
    );

    var tds = allValues.map((value, index) => {
        return <td key={index}>{value}</td>
    });

    return (
        <tr>
            {tds}
        </tr>
    );
}

const DataTable = ({ items, children }) => {
    if (items && items.length) {
        var [item] = items;
        var headers = <Th item={item} />;
        var trs = items.map((item, index)=>{
            return <Tr key={index} item={item} />
        });
    }
    return (
        <>
            {children && children}
            <hr />
            <table className='table table-striped'>
                <thead>
                    {headers}
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </>
    );
};

export default DataTable;