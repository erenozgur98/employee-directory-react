import React, { Component } from 'react';
import Search from './Search';
import EmployeeCard from './EmployeeCard';
import API from '../utils/API';
import '../Search.css'

class SearchResult extends Component {
    state = {
        result: [],
        search: '',
        filter: '',
        filterBy: 'lastName',
        sortEmp: [],
        sortedName: '',
        order: false,
    };

    componentDidMount() {
        this.searchEmployee();
        this.setState({
            sort: this.state.empList
        })
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
    }

    handleFormSubmit = e => {
        e.preventDefault();
    };

    sortName = () => {
        const newResults = this.state.result
        let asc = 1;
        let desc = -1;
        if (!this.state.order) {
            asc = 1
            desc = -1
        } else {
            asc = -1
            desc = 1
        }

        let sortedEmployees = newResults.sort((a, b) => {
            if (a.firstName < b.firstName) {
                return desc;
            }
            if (a.firstName > b.firstName) {
                return asc;
            }
            return 0;
        })

        this.setState({
            sortEmp: sortedEmployees,
            order: !this.state.order
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="h1">Employee Directory</h1>
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
                                <th style={{ cursor: 'pointer' }} onClick={this.sortName}>Name</th>
                                <th>Surname</th>
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