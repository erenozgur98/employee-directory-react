import React, { Component } from 'react';
import Search from './Search';
// import Result from './Result';
import EmployeeCard from './EmployeeCard';
import API from '../utils/API';

class SearchResult extends Component {
    state = {
        result: [],
        search: '',
        filter: '',
        filterBy: 'lastName',
        sort: 'default',
        sortedName: ''
    };

    componentDidMount() {
        this.searchEmployee();
    }

    searchEmployee(query) {
        API.getUsers(query)
            .then(res => {
                this.setState({
                    result: res.data.results.map((emp, i) => ({
                        firstName: emp.name.first,
                        lastName: emp.name.last,
                        picture: emp.picture.large,
                        email: emp.email,
                        phone: emp.phone,
                        dob: emp.dob,
                        key: i
                    }))
                })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = e => {
        e.preventDefault();

        const filteredEmp = this.state.result.filter(x => {
            const empArr = [x.firstName.toLowerCase(), x.lastName.toLowerCase()]
            return empArr.some(x => x.includes(e.target.value.toLowerCase()))
        })

        this.setState({
            sortedName: filteredEmp
        })

        console.log(filteredEmp);
    }

    handleFormSubmit = e => {
        e.preventDefault();
    };

    sort = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Employee Directory</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Search
                            results={this.state.result}
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </div>
                </div>

                <div className="row">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Photo</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                            {this.state.sortedName.length ?
                                    this.state.sortedName.map(item => (
                                        <EmployeeCard
                                            picture={item.picture}
                                            firstName={item.firstName}
                                            lastName={item.lastName}
                                            phone={item.phone}
                                            email={item.email}
                                            key={item.key}
                                        />
                                    ))
                                :
                                    this.state.result.map(item => (
                                        <EmployeeCard
                                            picture={item.picture}
                                            firstName={item.firstName}
                                            lastName={item.lastName}
                                            phone={item.phone}
                                            email={item.email}
                                            key={item.key}
                                        />
                                    ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default SearchResult;