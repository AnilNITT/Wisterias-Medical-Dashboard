import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';


const Employee = () => {
  return (
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
        <div class="row">
           
           <div class="col-md-12">
                <nav aria-label="breadcrumb">
             <ol class="breadcrumb pl-0">
               <li class="breadcrumb-item">
                 <a href="#"><i class="material-icons">home</i> Home</a>
               </li>
               <li class="breadcrumb-item active">Employee</li>
             </ol>
           </nav>
           </div>
               <div class="col-md-12">
           <div class="tab">
     <button class="tablinks active" onclick="openCity(event, 'active')" id="defaultOpen">Admin</button>
   <button class="tablinks" onclick="openCity(event, 'carer')">Carer</button>
   
   <button class="tablinks" onclick="openCity(event, 'management')">Management </button>
   <button class="tablinks" onclick="openCity(event, 'house')">House keeping</button>
    <button class="tablinks" onclick="openCity(event, 'nursing')">Nursing</button>
       <button class="tablinks" onclick="openCity(event, 'kitchen')">Kitchen</button>
          <button class="tablinks" onclick="openCity(event, 'support')">Support Worker</button>
  
 </div>
 </div>
           
         <div class="col-md-12">
             <div class="row boxx">
             <div class="col-md-2">
                     <div class="ms-panel ms-panel-fh" Style="height:auto">
                       <div class="ms-panel-body clearfix text-center">
                         <h4>Admin</h4>
                         <p>1</p>
                        </div>
                      </div>
                </div>
             <div class="col-md-2">
                     <div class="ms-panel ms-panel-fh" Style="height:auto">
                       <div class="ms-panel-body clearfix text-center">
                         <h4>Carer</h4>
                         <p>0</p>
                        </div>
                      </div>
                </div>
             <div class="col-md-2">
                     <div class="ms-panel ms-panel-fh" Style="height:auto">
                       <div class="ms-panel-body clearfix text-center">
                         <h4>Management</h4>
                         <p>1</p>
                        </div>
                      </div>
                </div>
             <div class="col-md-2">
                     <div class="ms-panel ms-panel-fh" Style="height:auto">
                       <div class="ms-panel-body clearfix text-center">
                         <h4>House Keeping</h4>
                         <p>0</p>
                        </div>
                      </div>
                </div>
             <div class="col-md-2">
                     <div class="ms-panel ms-panel-fh" Style="height:auto">
                       <div class="ms-panel-body clearfix text-center">
                         <h4>Nursing</h4>
                         <p>0</p>
                        </div>
                      </div>
                </div>
             <div class="col-md-2">
                     <div class="ms-panel ms-panel-fh" Style="height:auto">
                       <div class="ms-panel-body clearfix text-center">
                         <h4>Kitchen</h4>
                         <p>0</p>
                        </div>
                      </div>
                </div>
             <div class="col-md-2">
                     <div class="ms-panel ms-panel-fh" Style="height:auto">
                       <div class="ms-panel-body clearfix text-center">
                         <h4>Support worker</h4>
                         <p>0</p>
                        </div>
                      </div>
                </div>
             </div>     
         </div>  
        <div class="col-md-12">
             
           
             <div class="row">
                <div class="col-md-12">
                    <div class="ms-panel ms-panel-fh searchbar" Style="height:auto">
                     
                      <div class="ms-panel-body clearfix">
                          <div class="row">
                                 <div class="col-sm-12">
                                     <div class="row">
                                     <div class="col-sm-3">
                                <div class="form-group">
     
                                         <input type="text" class="form-control" id="txtsrch" placeholder="Search by name"/>
                                     </div>
                                 </div>   
                                     <div class="col-sm-3">
                                   <select class="form-control">
           <option>Search all department</option>
           <option>Admin</option>
           <option>Care</option>
           <option>Management</option>
           <option>House Keeping</option>
           <option>Nursing</option>
           <option>Kitchen</option>
           <option>Support</option>
       </select> 
       </div>
                                  <div class="col-sm-3">
                                   <select class="form-control">
           <option>Select status</option>
           <option>Active</option>
           <option>Inactive</option>
           <option>Pending</option>
          
       </select> 
       </div>
                                 <div class="col-sm-2">
                                     <div class="form-group">
                                         <button type="button" class="btn btn-success search_btn" onclick="SearchPatients()" id="sbtn1">Search </button>
                                       
                                     </div>
                                 </div>
                                     </div>
                                 </div>
                               
                                
                             </div>
                     
                     </div>
                     </div>
                     <div class="ms-panel ms-panel-fh" Style="height:auto">
                     
                        <div class="ms-panel-body clearfix"> 
                       <div class="table-responsive tabcontent" id="active" Style="display: block;">
                                    <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="12">12</option><option value="25">25</option><option value="30">30</option><option value="-1">Todos</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-2" role="grid" aria-describedby="data-table-2_info">
                                          <thead>
                  <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" Style="width: 46.375px;">Name</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Surname: activate to sort column ascending" Style="width: 70.4062px;">Surname</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" Style="width: 72.6875px;">Status</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Work Location: activate to sort column ascending" Style="width: 111.266px;">Work Location</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Employment type : activate to sort column ascending" Style="width: 133.016px;">Employment type </th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Role: activate to sort column ascending" Style="width: 37.7812px;">Role</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Department: activate to sort column ascending" Style="width: 90.1094px;">Department</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Join On: activate to sort column ascending" Style="width: 61.7969px;">Join On</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Edit: activate to sort column ascending" Style="width: 33.5625px;">Edit</th></tr>
         </thead>
                                    <tbody>
                                     
                                     
                                    
                                    
                                
                                 <tr role="row" class="odd">
                                     <td class="sorting_1"><a href="employment.html" Style="color: gray;">John</a></td>
                                     <td>Doe</td>
                                     <td><label class="toggleSwitch nolabel" onclick="">
                                     <input type="checkbox" checked=""/>
                                     <span>
                                     <span>Inactive</span>
                                     <span>Active</span>
                                       </span>
                                      <a></a>
                                     </label></td>
                                     <td>Residential Home</td>
                                     <td>Permanent</td>
                                     <td>Admin</td>
                                     <td>Admin</td>
                                     <td>10/12/2021</td>
                                     
                                     <td><Link to="/add-staff"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></Link></td>
                                    </tr><tr role="row" class="even">
                                     <td class="sorting_1"><a href="employment.html" Style="color: gray;">Raonie</a></td>
                                     <td>Jacoob</td>
                                      <td><label class="toggleSwitch nolabel" onclick="">
                                     <input type="checkbox" checked=""/>
                                     <span>
                                     <span>Inactive</span>
                                     <span>Active</span>
                                       </span>
                                      <a></a>
                                     </label></td>
                                     <td>Residential Home</td>
                                       <td>Part time </td>
                                     <td>Admin</td>
                                     <td>Admin</td>
                                     <td>12/12/2021</td>
                                    
                                     <td><Link to="/add-staff"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></Link></td>
                                    </tr><tr role="row" class="odd">
                                     <td class="sorting_1"><a href="employment.html" Style="color: gray;">Samual</a></td>
                                     <td>Strauss</td>
                                     <td>Pending</td>
                                     <td>Residential Home</td>
                                     <td>Permanent </td>
                                     <td>Admin</td>
                                     <td>Admin</td>
                                     <td>12/12/2021</td>
                                     <td><Link to="/add-staff"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></Link></td>
                                    </tr></tbody>
                                     </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 3 of 3 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                                 </div>
                           
                           
                         </div>
                      </div>
                </div>
               
                
            </div>
               
           
                       
          </div>
       </div>
    </div>
    </main>
  )
}

export default Employee