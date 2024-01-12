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

const Tr = ({ item, onSelect, onDelete }) => {
    var allValues = Object.values(item).concat(
        <a href='/#' className='text-primary' onClick={
            (e) => {
                e.preventDefault();
                if (onSelect)
                    onSelect(item, false);
            }
        }>Details</a>,
        <a href='/#' className='text-warning' onClick={
            (e) => {
                e.preventDefault();
                if (onSelect)
                    onSelect(item, true);
            }
        }>Edit</a>,
        <a href="/#" className='text-danger' onClick={
            (e) => {
                e.preventDefault();
                if (onDelete)
                    if (window.confirm('Are you, you want to delete the record?')) {
                        onDelete(item.id);
                    }
            }
        }>Delete</a>
    );

    var tds = allValues.map((item, index) => {
        return <td key={index}>{item}</td>
    });

    return (
        <tr>
            {tds}
        </tr>
    );
}

const DataTable = ({ items, children, onSelect, onDelete }) => {
    if (items && items.length) {
        var [item] = items;
        var headers = <Th item={item} />;
        var trs = items.map((item, index) => {
            return <Tr item={item} key={item.id} onSelect={onSelect} onDelete={onDelete} />
        });
    }
    return (
        <>
            {children && children}
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