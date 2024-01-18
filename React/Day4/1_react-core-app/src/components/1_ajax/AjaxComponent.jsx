import React, { Component } from 'react';
import postApiClient from '../../services/post-api-client';
import LoaderAnimation from '../common/LoaderAnimation';
import DataTable from '../common/DataTable';

class AjaxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [], message: "Loading Data, please wait...", flag: false
        };
    }

    render() {
        return (
            <>
                <div className="row mt-5">
                    <h4 className="text-warning text-center text-uppercase font-weight-bold">{this.state.message}</h4>
                </div>

                {
                    !this.state.flag ? <LoaderAnimation /> : null
                }

                <DataTable items={this.state.posts}>
                    <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
                </DataTable>
            </>
        );
    }

    // componentDidMount() {
    //     // postApiClient.getAllPostsUsingCB((result) => {
    //     //     this.setState({ posts: result, message: "", flag: true });
    //     // }, (eMsg) => {
    //     //     this.setState({ posts: [], message: eMsg, flag: true });
    //     // });

    //     postApiClient.getAllPostsUsingPromise().then((result) => {
    //         this.setState({ posts: result, message: "", flag: true });
    //     }).catch((eMsg) => {
    //         this.setState({ posts: [], message: eMsg, flag: true });
    //     });
    // }

    async componentDidMount() {
        // try {
        //     var result = await postApiClient.getAllPostsUsingPromise();
        //     this.setState({ posts: result, message: "", flag: true });
        // } catch (eMsg) {
        //     this.setState({ posts: [], message: eMsg, flag: true });
        // }

        try {
            var result = await postApiClient.getAllPostsAsync();
            this.setState({ posts: result.data, message: "", flag: true });
        } catch (eMsg) {
            this.setState({ posts: [], message: eMsg, flag: true });
        }
    }
}

export default AjaxComponent;