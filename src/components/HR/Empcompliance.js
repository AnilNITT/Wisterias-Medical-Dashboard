import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
import EmpNavbar from './EmpNavbar';


const Empcompliance = () => {
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
                            <li class="breadcrumb-item active">Employee Check Items <a class="btn btn-primary" href="#" Style="float:right; margin-top:0px;" data-toggle="modal" data-target="#addnew">Create New</a></li>
                        </ol>
                    </nav>
                    <div class="ms-panel">
                      
                        <div class="ms-panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-2">
                                 <thead>
                 <tr>
               
                <th>Department</th>
                <th>Check Items</th>
                <th>Optional</th>
                <th>Upload required</th>
                <th>Expiry date</th>
                <th>Notes</th>

                <th>Action</th>
                
                </tr>
        </thead>
                                   <tbody>
                                    <tr role="row">
                                    <td>Admin</td>
                                    
                                    <td>Application	Form</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                    <tr role="row">
                                    <td>House Keeping</td>
                                    
                                    <td>Interview notes</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                    
                                     <tr role="row">
                                    <td>Nursing</td>
                                    
                                    <td>DBS	and	Identity Document</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                       <tr role="row">
                                    <td>Management</td>
                                    
                                    <td>Right to work</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                    <tr role="row">
                                    <td>Carer</td>
                                    
                                    <td>References x2</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                    <tr role="row">
                                    <td>House Keeping</td>
                                    
                                    <td>Interview notes</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                    
                                     <tr role="row">
                                    <td>Nursing</td>
                                    
                                    <td>DBS	and	Identity Document</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                    
                                      <tr role="row">
                                    <td>Kitchen</td>
                                    
                                    <td>Contract and New Starter Form</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                    <tr role="row">
                                    <td>Support worker</td>
                                    
                                    <td>Confidentiality	and	Data Protection	Confirmation slip</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                     <tr role="row">
                                    <td>Management</td>
                                    
                                    <td>Right to work</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                    <tr role="row">
                                    <td>Carer</td>
                                    
                                    <td>References x2</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                    <tr role="row">
                                    <td>House Keeping</td>
                                    
                                    <td>Interview notes</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                    
                                     <tr role="row">
                                    <td>Nursing</td>
                                    
                                    <td>DBS	and	Identity Document</td>
                                    <td>Optional</td>
                                    <td>yes</td>
                                    <td>12/12/2022</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> <a href="#"><i class="fa fa-trash" Style="font-size:22px;"></i></a></td>
                                    </tr>
                                    
                                      <tr>
                                    
                                    
                                  
                               
                                </tr></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>
        
                       
        </div>
       </div>
       <div class="new_modals">
                <div class="modal fade none-border" id="addnew" Style="display: none;" aria-hidden="true">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Add Checklist Items</strong></h4>
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
                                                 
                                                    <label for="exampleInputEmail1">Add Department<span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control"/>
                                                
                                               </div>
                                               <div class="form-group col-md-6">
                                                 
                                                    <label for="exampleInputEmail1">Check Items<span class="man_fields1">*</span></label>
                                                    <select class="form-control">
                                                        <option>Select check item</option>
                                                        <option>Application	Form,includes Health Declaration</option>
                                                        <option>References x2</option>
                                                        <option>Interview notes</option>
                                                        <option>DBS	and	Identity Document</option>
                                                        <option>Contract and New Starter Form</option>
                                                        <option>Confidentiality	and	Data Protection	Confirmation slip</option>
                                                        <option>Driver’s License</option>
                                                        <option>Training Records</option>
                                                        <option>Spot Checks</option>
                                                        <option>Supervisions</option>
                                                        
                                                    </select>
                                                
                                               </div>
                                             
                                                <div class="form-group col-md-12">
                                                 
                                                    <label for="exampleInputEmail1">Employment check: </label>
                                                  <label>Optional</label>
                                                
                                               </div>
                                                <div class="form-group col-md-12">
                                                 
                                                    <label for="exampleInputEmail1">Expiry date</label>
                                                  <input type="date" class="form-control"/>
                                                
                                               </div>
                                               <div class="form-group col-md-12">
                                                 
                                                    <label for="exampleInputEmail1">Reference</label>
                                                  <input type="text" class="form-control"/>
                                                
                                               </div>
                                               <div class="form-group col-md-12">
                                              <label for="exampleInputEmail1">Upload required</label>   
                                                                                <div class="can-toggle">
  <input id="b" type="checkbox" checked=""/>
  <label for="b">
    <div class="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
  </label>
</div>
</div>
                                               <div class="form-group col-md-12">
                                                 
                                                    <label for="exampleInputEmail1">Upload Documentation<span class="man_fields1">*</span></label>
                                                    <input type="file" class="form-control"/>
                                                
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

export default Empcompliance;