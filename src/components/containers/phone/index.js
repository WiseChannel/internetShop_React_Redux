import React, {Component} from "react";
import {connect} from 'react-redux'
import * as R from 'ramda'

import {fetchPhoneById} from "../actions/index";
import {getPhoneById} from "../../selectors";

class Phone extends Component {
    componentDidMount() {
        this.props.fetchPhoneById(this.props.match.params.id)
    }

    renderContent() {
        const {phone} = this.props
        console.log(phone)
        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={phone.image}
                             alt={phone.name}
                             className='img-thumbnail'/>
                    </div>
                    <div className="col-md-6">
                        {this.renderField()}
                    </div>
                </div>
                <div className="caption-full">
                    <h4 className='pull-right'>${phone.price}</h4>
                    <h4>{phone.name}</h4>
                    <p>{phone.description}</p>
                </div>
            </div>
        )
    }

    renderField() {
        const {phone} =this.props
        console.log(phone)

        const columnField = R.compose(
            R.toPairs,
            R.pick([
                'cpu',
                'camera',
                'size',
                'weight',
                'display',
                'battery',
                'memory'
            ])
        )(phone)

        return columnField.map(([key, value]) => (
            <div className='column' key={key}>
                <div className='ab-details-title'>
                    <p>{key}</p>
                </div>
                <div className='ab-details-info'>
                   <p>{value}</p>
                </div>
            </div>
        ))
    }

    renderSideBar() {
        return(
            <div>SideBar</div>
        )
    }

    render() {
        const {phone} = this.props
        console.log(phone)
        return(
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                           {this.renderContent()}
                        </div>
                        <div className='col-md-3'>
                            {this.renderSideBar()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        phone: getPhoneById(state, state.phonePage.id)
    }
};


const mapDispatchToProps = {
    fetchPhoneById
};


export default connect(mapStateToProps, mapDispatchToProps)(Phone)