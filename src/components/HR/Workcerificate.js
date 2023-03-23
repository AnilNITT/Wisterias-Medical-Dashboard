import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
import EmpNavbar from './EmpNavbar';


const Workcerificate = () => {
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
                            <li class="breadcrumb-item active">Work Certificate <a class="btn btn-primary" href="#" Style="float:right; margin-top:0px;" data-toggle="modal" data-target="#addworkcertificate">Create New</a></li>
                        </ol>
                    </nav>
                    <div class="ms-panel">
                      
                        <div class="ms-panel-body">
                            <div class="table-responsive">
                                <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="12">12</option><option value="25">25</option><option value="30">30</option><option value="-1">Todos</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-2" role="grid" aria-describedby="data-table-2_info">
                                 <thead>
                 <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Certificate: activate to sort column descending" Style="width: 68.4688px;">Certificate</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Reference: activate to sort column ascending" Style="width: 67.7031px;">Reference</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Certificate Documentation: activate to sort column ascending" Style="width: 174.25px;">Certificate Documentation</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Issue date: activate to sort column ascending" Style="width: 68.4844px;">Issue date</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Expiry date: activate to sort column ascending" Style="width: 75.4844px;">Expiry date</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Notes: activate to sort column ascending" Style="width: 318.156px;">Notes</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" Style="width: 47.1875px;">Action</th></tr>
        </thead>
                                   <tbody>
                                    
                                       
                                     
                                     
                                  
                               
                                <tr role="row" class="odd">
                                    <td class="sorting_1">DBS</td>
                                    
                                    <td>Lorem ipsum</td>
                                    <td>Document1</td>
                                    <td>10/12/2021</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr><tr role="row" class="even">
                                    <td class="sorting_1">Passport</td>
                                    
                                    <td>Lorem ipsum</td>
                                    <td>Document4</td>
                                    <td>10/12/2021</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr><tr role="row" class="odd">
                                    <td class="sorting_1">Revalidation</td>
                                    
                                    <td>Lorem ipsum</td>
                                    <td>Document2</td>
                                    <td>10/12/2021</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr><tr role="row" class="even">
                                    <td class="sorting_1">Work permit</td>
                                    
                                    <td>Lorem ipsum</td>
                                    <td>Document3</td>
                                    <td>10/12/2021</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr></tbody>
                                </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 4 of 4 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
           
        
                       
        </div>
       </div>
       <div class="new_modals">
                <div class="modal fade none-border" id="addworkcertificate">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Add Work Certificate</strong></h4>
                               <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SavePatients()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            
                                               <div class="form-group col-md-6">
                                                 
                                                    <label for="exampleInputEmail1">Certificate<span class="man_fields1">*</span></label>
                                                    <select class="form-control">
                                                        <option>Select Certificate</option>
                                                        <option>DBS</option>
                                                        <option>Passwort</option>
                                                        <option>Revalidation</option>
                                                        <option>Work permit</option>
                                                        <option>Other</option>
                                                        
                                                    </select>
                                                
                                               </div>
                                             
                                                <div class="form-group col-md-6">
                                                 
                                                    <label for="exampleInputEmail1">Others</label>
                                                  <input type="text" class="form-control"/>
                                                
                                               </div>
                                               <div class="form-group col-md-12">
                                                 
                                                    <label for="exampleInputEmail1">Reference</label>
                                                  <input type="text" class="form-control"/>
                                                
                                               </div>
                                               <div class="form-group col-md-12">
                                                 
                                                    <label for="exampleInputEmail1">Upload Documentation<span class="man_fields1">*</span></label>
                                                    <input type="file" class="form-control"/>
                                                
                                               </div>
                                               <div class="form-group col-md-6">
                                                 
                                                    <label for="exampleInputEmail1">Issue Date<span class="man_fields1">*</span></label>
                                                    <input type="date" class="form-control"/>
                                                
                                               </div>
                                               <div class="form-group col-md-6">
                                                 
                                                    <label for="exampleInputEmail1">Expiry Date<span class="man_fields1">*</span></label>
                                                    <input type="date" class="form-control"/>
                                                
                                               </div>
                                               
                                             <div class="form-group col-md-12">
                                                 
                                                    <label for="exampleInputEmail1">Notes<span class="man_fields1">*</span></label>
                                                   <textarea class="form-control" Style="height:120px;"></textarea>
                                                
                                               </div>
                                           
                                            
                                            
                                            
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

export default Workcerificate;