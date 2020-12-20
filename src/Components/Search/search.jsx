import React from 'react'
import {BsSearch} from 'react-icons/bs'
import './search.css'

const Search = (props) => {
    return ( 
        <div className="search">
            <form>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div role="separator" className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <input type="text" className="form-control" name="search" id="search" placeholder="Search Products..." autoComplete="off" />
                    <BsSearch className="search-icon"/>
                </div>
            </form>
        </div>
     );
}
 
export default Search;