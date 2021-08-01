import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome";

function App() {
    return (
        <div>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Anju's Home</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*<input className="form-control form-control-dark w-100" type="text" placeholder="Search"*/}
                {/*       aria-label="Search"/>*/}
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="#">Sign out</a>
                    </div>
                </div>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <span data-feather="home"></span>
                                        Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file"></span>
                                        Reminder
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file"></span>
                                        Shopping list
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file"></span>
                                        Documents
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="row"/>
                        <div className="row col-6 container">
                            <h3>Add an expense</h3>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Rs.</span>
                                <input type="text" className="form-control" placeholder="Amount" aria-label="Amount"
                                       aria-describedby="basic-addon1"/>
                            </div>

                            <div className="input-group mb-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Swiggy</option>
                                    <option value="2">BigBasket</option>
                                    <option value="3">BankLoan</option>
                                </select>
                            </div>
                            <div className="input-group mb-3 float-end">
                                <button type="button" className="btn btn-primary float-end">Add</button>
                            </div>

                        </div>

                        {/*<canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>*/}

                        <h2>This month's expenses</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Delete</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>12-May-2021, Sunday</td>
                                    <td>Swiggy</td>
                                    <td>320</td>
                                    <td><i className="bi bi-x-square"></i></td>
                                </tr>
                                <tr>
                                    <td>12-May-2021, Sunday</td>
                                    <td>Big basket</td>
                                    <td>1320</td>
                                    <td><i className="bi bi-x-square"></i></td>
                                </tr>
                                <tr>
                                    <td>12-May-2021, Sunday</td>
                                    <td>Fresh to home</td>
                                    <td>420</td>
                                    <td><i className="bi bi-x-square"></i></td>
                                </tr>
                                <tr>
                                    <td>12-May-2021, Sunday</td>
                                    <td>E bill</td>
                                    <td>320</td>
                                    <td><i className="bi bi-x-square"></i></td>
                                </tr>
                                <tr>
                                    <td>12-May-2021, Sunday</td>
                                    <td>Loan</td>
                                    <td>13320</td>
                                    <td><i className="bi bi-x-square"></i></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>

        </div>);
}

export default App;
