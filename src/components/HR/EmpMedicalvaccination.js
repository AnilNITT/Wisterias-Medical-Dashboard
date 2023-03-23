import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
import EmpNavbar from './EmpNavbar';


const EmpMedicalvaccination = () => {
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
                            <li class="breadcrumb-item active">Medical &amp; Vaccination - John Doe <a class="btn btn-primary" href="#" Style="float:right; margin-top:0px;" data-toggle="modal" data-target="#createnew">Create New</a></li>
                        </ol>
                    </nav>
                    <div class="ms-panel">
                      
                        <div class="ms-panel-body">
                            <div class="table-responsive">
                                <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="12">12</option><option value="25">25</option><option value="30">30</option><option value="-1">Todos</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-2" role="grid" aria-describedby="data-table-2_info">
                                 <thead>
                 <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Vaccine: activate to sort column descending" Style="width: 201.688px;">Vaccine</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending" Style="width: 121.219px;">Date</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Valid Until: activate to sort column ascending" Style="width: 148.312px;">Valid Until</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" Style="width: 112.781px;">Action</th></tr>
        </thead>
                                   <tbody>
                                    
                                   
                                   
                                   
                                  
                               
                                <tr role="row" class="odd">
                                    <td class="sorting_1">Hapatitis</td>
                                    <td>10/05/2021</td>
                                    <td>01/01/2023</td>
                                    
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                   </tr><tr role="row" class="even">
                                    <td class="sorting_1">test2</td>
                                    <td>12/12/2021</td>
                                    <td>01/01/2023</td>
                                   
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                   </tr><tr role="row" class="odd">
                                    <td class="sorting_1">Winter Flu Vaccine</td>
                                    <td>12/12/2021</td>
                                    <td>01/01/2023</td>
                                   
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                   </tr></tbody>
                                </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 3 of 3 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
       </div>
       
       <div class="new_modals">
                <div class="modal fade none-border" id="createnew" Style="display: none;" aria-hidden="true">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Medical &amp; Vaccination</strong></h4>
                               <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SavePatients()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            
                                               
                                            
                                           <div class="form-group col-md-12">
                                                 
                                                    <label for="exampleInputEmail1">Vaccine<span class="man_fields1">*</span></label>
                                                    <select class="form-control">
                                                        <option>Select Vaccine</option>
                                                        <option>Winter Flu Vaccine</option>
                                                        <option>test2</option>
                                                        <option>Hapatitis</option>
                                                    </select>
                                                
                                               </div>
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date<span class="man_fields1">*</span></label>
                                                    <input type="date" class="form-control"/>
                                                </div>
                                            </div>
                                           <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Valid Until<span class="man_fields1">*</span></label>
                                                    <input type="date" class="form-control"/>
                                                </div>
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

export default EmpMedicalvaccination;