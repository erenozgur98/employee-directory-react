import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';
import EmployeeCard from './EmployeeCard';
import API from '../utils/API';

class SearchResult extends Component {
    state ={ 
        result: [],
        filter: '',
        filterBy: 'lastName',
        sort: 'default',
        sortFiled: ''
    };

    componentDidMount() {
        API.search()
            .then(res => {
                this.setState({
                    result: res.data.results.map((emp, i) => ({
                        firstName: emp.name.first,
                        lastName: emp.name.last,
                        picture: emp.picture.large,
                        email: emp.email,
                        phone: emp.phone,
                        dob: emp.dob,
                        key: 1
                    }))
                })
            })
            .catch(err => console.log(err));
    }

    filterEmp = (key) => {
        let filterRes = this.state.result.filter(employee => employee.firstName === key)

        this.setState({
            result:filterRes
        })
    }
}