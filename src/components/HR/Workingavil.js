import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
import EmpNavbar from './EmpNavbar';


const Workingavil = () => {
  return (
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
        <div class="row">
           <EmpNavbar />

           <div class="col-md-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb pl-0">
                            <li class="breadcrumb-item">
                                <a href="#"><i class="material-icons">home</i> Home</a>
                            </li>
                            <li class="breadcrumb-item active">Work Availability </li>
                        </ol>
                    </nav>
                    <div class="ms-panel">
                      
                        <div class="ms-panel-body">
                        <form>     
                         <div role="form">
                                        <div class="row">
                                             <div class="col-sm-4 col-lg-4">
                                                 <label for="exampleInputEmail1">Available for work </label>
                                                <div class="can-toggle">
  <input id="b" type="checkbox" checked=""/>
  <label for="b">
    <div class="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
  </label>
</div>
                                            </div>
                                             <div class="col-sm-4 col-lg-4">
                                                 <label for="exampleInputEmail1">Working pattern required </label>
                                                <div class="can-toggle">
  <input id="a" type="checkbox" checked=""/>
  <label for="a">
    <div class="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
  </label>
</div>
                                            </div>
                                            
                                             <div class="col-sm-4 col-lg-4">
                                                 <label for="exampleInputEmail1">Work bank holiday </label>
                                                <div class="can-toggle">
  <input id="c" type="checkbox" checked=""/>
  <label for="c">
    <div class="can-toggle__switch" data-unchecked="Yes" data-checked="No"></div>
  </label>
</div>
                                            </div>
                                            <div class="col-sm-12 col-lg-12 mb-2">
                                             <label for="exampleInputEmail1">Availability Notes<span class="man_fields1">*</span></label>
                                                   <textarea class="form-control" Style="height:100px;"></textarea>
                                             </div> 
                                             <div class="col-sm-12 col-lg-12">
                                             <label for="exampleInputEmail1">Working Patterns - Week 1</label>
                                                   
                                             </div> 
                                             <div class="col-sm-12 col-lg-12 mb-2">
                                                 <table class="table">
                                                   <thead>
                                                       <tr><th>Day</th>
                                                       <th>Availability</th>
                                                       <th>Available start time</th>
                                                       <th>Available end time</th>
                                                   </tr></thead>
                                                   <tbody>
                                                       <tr>
                                                           <td>Monday</td>
                                                           <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-outline-dark">Fully</button>
                                                            <button type="button" class="btn btn-outline-dark">Partial</button>
                                                              <button type="button" class="btn btn-primary">None</button>
                                                            </div>
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                       </tr>
                                                       <tr>
                                                           <td>Tuesday</td>
                                                           <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-outline-dark">Fully</button>
                                                            <button type="button" class="btn btn-outline-dark">Partial</button>
                                                              <button type="button" class="btn btn-primary">None</button>
                                                            </div>
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                       </tr>
                                                       <tr>
                                                           <td>Wednesday</td>
                                                           <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-outline-dark">Fully</button>
                                                            <button type="button" class="btn btn-primary">Partial</button>
                                                              <button type="button" class="btn btn-outline-dark">None</button>
                                                            </div>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="06.00"/>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="21.00"/>
                                                            </td>
                                                       </tr>
                                                       <tr>
                                                           <td>Thursday</td>
                                                           <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-outline-dark">Fully</button>
                                                            <button type="button" class="btn btn-primary">Partial</button>
                                                              <button type="button" class="btn btn-outline-dark">None</button>
                                                            </div>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="08.00"/>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="18.00"/>
                                                            </td>
                                                       </tr>
                                                       <tr>
                                                           <td>Friday</td>
                                                           <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-outline-dark">Fully</button>
                                                            <button type="button" class="btn btn-primary">Partial</button>
                                                              <button type="button" class="btn btn-outline-dark">None</button>
                                                            </div>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="06.00"/>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="21.00"/>
                                                            </td>
                                                       </tr>
                                                       <tr>
                                                           <td>Saturday</td>
                                                           <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-outline-dark">Fully</button>
                                                            <button type="button" class="btn btn-primary">Partial</button>
                                                              <button type="button" class="btn btn-outline-dark">None</button>
                                                            </div>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="08.00"/>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="18.00"/>
                                                            </td>
                                                       </tr>
                                                   </tbody>
                                                 </table>
                                            </div>
                                            
                                             <div class="col-sm-12 col-lg-12">
                                             <label for="exampleInputEmail1">Working Patterns - Week 2</label>
                                                   
                                             </div> 
                                             <div class="col-sm-12 col-lg-12 mb-2">
                                                 <table class="table">
                                                   <thead>
                                                       <tr><th>Day</th>
                                                       <th>Availability</th>
                                                       <th>Available start time</th>
                                                       <th>Available end time</th>
                                                   </tr></thead>
                                                   <tbody>
                                                       <tr>
                                                           <td>Monday</td>
                                                           <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-outline-dark">Fully</button>
                                                            <button type="button" class="btn btn-primary">Partial</button>
                                                            <button type="button" class="btn btn-outline-dark">None</button>
                                                            </div></td>
                                                            <td>
                                                                <input type="text" class="form-control" value="08.00"/>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="18.00"/>
                                                            </td>
                                                       </tr>
                                                       <tr>
                                                           <td>Tuesday</td>
                                                           <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-outline-dark">Fully</button>
                                                            <button type="button" class="btn btn-primary">Partial</button>
                                                            <button type="button" class="btn btn-outline-dark">None</button> 
                                                            </div>
                                                            </td>
                                                             <td>
                                                                <input type="text" class="form-control" value="06.00"/>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="21.00"/>
                                                            </td>
                                                       </tr>
                                                       <tr>
                                                           <td>Wednesday</td>
                                                           <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-outline-dark">Fully</button>
                                                            <button type="button" class="btn btn-primary">Partial</button>
                                                            <button type="button" class="btn btn-outline-dark">None</button>
                                                            </div>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="06.00"/>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="21.00"/>
                                                            </td>
                                                       </tr>
                                                       <tr>
                                                           <td>Thursday</td>
                                                           <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-outline-dark">Fully</button>
                                                            <button type="button" class="btn btn-primary">Partial</button>
                                                              <button type="button" class="btn btn-outline-dark">None</button>
                                                            </div>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="08.00"/>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="18.00"/>
                                                            </td>
                                                       </tr>
                                                       <tr>
                                                           <td>Friday</td>
                                                           <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-outline-dark">Fully</button>
                                                            <button type="button" class="btn btn-primary">Partial</button>
                                                              <button type="button" class="btn btn-outline-dark">None</button>
                                                            </div>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="06.00"/>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="21.00"/>
                                                            </td>
                                                       </tr>
                                                       <tr>
                                                           <td>Saturday</td>
                                                           <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-outline-dark">Fully</button>
                                                            <button type="button" class="btn btn-primary">Partial</button>
                                                              <button type="button" class="btn btn-outline-dark">None</button>
                                                            </div>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="08.00"/>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="18.00"/>
                                                            </td>
                                                       </tr>
                                                   </tbody>
                                                 </table>
                                            </div>
                                             
                                        </div>   
                          </div>  
                          <div class="col-xl-12 col-md-12 text-right">  
               <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Save</button>
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Cancel</button>
                        
                        </div>
                        </form></div>
                        
                        
                    </div>
                </div>
         

        </div>
       </div>
       
    </main>
  )
}

export default Workingavil;