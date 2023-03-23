import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const Grouping = () => {
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
                            <li class="breadcrumb-item active">Grouping <a class="btn btn-primary" href="#" data-toggle="modal" data-target="#addzones" Style="float:right; margin-top:0px;">Add Group</a></li>
                        </ol>
                    </nav>
                    <div class="ms-panel">
                        
                        <div class="ms-panel-body">
                            
                            <div class="table-responsive">
                                <div class="row">
                                <div class="col-md-6">
                                <div class="col-md-12">     
                                <h5 Style="color: #651f70;">Manchester</h5>
                                 <div class="lmc-theme-gradient" Style="height: 2px; margin-bottom: 8px; margin-top: 0px; width: 100%;"></div>
                                <table class="table table-striped thead-primary w-100">
                       
                                   <tbody>
                                <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-1.jpg" alt="people" class="rogiimage"/> Michael Sullivan </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                 <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-2.jpg" alt="people" class="rogiimage"/> Linda Barrett </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                        <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                               
                               
                                </tbody>
                                </table>
                                </div>
                                  <div class="col-md-12"> 
                                 <h5 Style="color: #651f70;">Stockport</h5>
                                 <div class="lmc-theme-gradient" Style="height: 2px; margin-bottom: 8px; margin-top: 0px; width: 100%;"></div>
                                 <table class="table table-striped thead-primary w-100">
                       
                                   <tbody>
                                <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-8.jpg" alt="people" class="rogiimage"/> Cristina Groves </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                 <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-4.jpg" alt="people" class="rogiimage"/> Golopi Loeperd </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                 <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-5.jpg" alt="people" class="rogiimage"/> Aada Joles </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                 <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-3.jpg" alt="people" class="rogiimage"/>Guysads daad </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                               
                               
                               
                                </tbody>
                                </table>
                                </div>
                                </div>
                                <div class="col-md-6">
                                <div class="col-md-12"> 
                                <h5 Style="color: #651f70;">Bury</h5>
                                 <div class="lmc-theme-gradient" Style="height: 2px; margin-bottom: 8px; margin-top: 0px; width: 100%;"></div>
                                 <table class="table table-striped thead-primary w-100">
                       
                                   <tbody>
                                <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-1.jpg" alt="people" class="rogiimage"/> Ronald Jacobs </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-2.jpg" alt="people" class="rogiimage"/> Mark Hunter </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                 <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-3.jpg" alt="people" class="rogiimage"/> Mark Hunter </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                 <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-4.jpg" alt="people" class="rogiimage"/> Mark Hunter </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                 <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-5.jpg" alt="people" class="rogiimage"/> Mark Hunter </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                 <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-6.jpg" alt="people" class="rogiimage"/> Mark Hunter </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                 <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-4.jpg" alt="people" class="rogiimage"/> Mark Hunter </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary view"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger view1" data-toggle="modal" data-target="#delete"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                
                               
                               
                                </tbody>
                                </table>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="addzones" role="dialog" Style="display: none;" aria-hidden="true">
    <div class="modal-dialog">
    
      {/* <!-- Modal content--> */}
      <div class="modal-content">
        <div class="modal-header">
             <h4 class="modal-title"><strong>Add a new group</strong></h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
          
         
        </div>
        <div class="modal-body">
          <form>
              <div class="row">
                                            
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Title<span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control" placeholder="Title"/>
                                                </div>
                                            </div>
                                             <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Select User<span class="man_fields1">*</span></label>
                                                    <select class="form-control">
                                                        <option>Select User</option>
                                                        <option>Ronald Jacobs</option>
                                                        <option>Mark Hunter</option>
                                                         <option>Michael Sullivan</option>
                                                    </select>
                 
                                                </div>
                                            </div>
                                              
                                             <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                   
                                                    <input type="submit" name="submit" value="Save" class="btn btn btn-success"/>
                                                </div>
                                            </div>
                                        </div>
          </form>
        </div>
        
      </div>
      
    </div>
  </div>
    </main>
    )
}

export default Grouping