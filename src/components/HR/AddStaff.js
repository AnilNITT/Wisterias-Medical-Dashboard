import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const AddStaff = () => {
  return (
        <main className="body-content">
            <Sidebar/>
            <div class="ms-content-wrapper">
                <div class="row">
                    <div class="col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb pl-0">
                                <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                           
                                <li class="breadcrumb-item active" aria-current="page">Add Staff</li>
                            </ol>
                        </nav>
                    </div>
                    
                    <div class="col-xl-12 col-md-12">
                        <div class="ms-panel">
                            
                            <div class="ms-panel-body">
                                <form class="needs-validation" novalidate="">
                                    <div class="form-row">
                                       
                                        
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom001">Select Staff</label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                    <option>Select Staff</option>
                                                    <option>Oatleigt Care Ltd.</option>
                                                    <option>Homeland Ltd.</option>
                                                    <option>Oatland LLP</option>
                                                    <option>All homes</option>
                                                    
                                                </select>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom001">Name</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom001" placeholder="Enter name" required=""/>

                                            </div>
                                        </div>
                                    
                                    
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Surname</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom2" placeholder="Enter surname" required=""/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                           <div class="form-group">
                                                    <label for="exampleInputEmail1">Marital Status</label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlMerital">
                                                        <option value="S">Single</option>
                                                        <option value="M">Married</option>
                                                        <option value="W">Widowed</option>
                                                        <option value="P">Separated</option>
                                                        <option value="D">Divorced</option>
                                                    </select></span>
                                                </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                             <div class="form-group">
                                                    <label for="exampleInputEmail1">Religion</label>
                                                    <input type="text" class="form-control" id="txtrelgn" maxlength="50"/>
                                                </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group">
                                            <label for="exampleInputEmail1">Ethnicity</label>
                                          <select class="form-control">
                                              <option>Select Ethnicity</option>
                                              <option>White</option>
                                              <option>Mixed/multiple ethinic</option>
                                              <option>Asian/Asian British</option>
                                              <option>Black/Africal/Caribbean/Black British</option>
                                               <option>Other ethnic group</option>
                                          </select>
                                        </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Preferred Name</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom2" placeholder="Preferred name" required=""/>

                                            </div>
                                        </div>
                                        
                                        <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">Address</label>
                                            <div class="input-group">
                                               <input id="pac-input" type="text" name="address" placeholder="Address" class="form-control pac-target-input" maxlength="150" autocomplete="off"/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Country</label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                   <option>Select Country</option>
                                                   <option>United State</option>
                                                   <option>India</option>
                                                   <option>Ireland</option>
                                                   <option>Russia</option>
                                                   
                                                </select>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">County</label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                   <option>Select County</option>
                                                   <option>test</option>
                                                </select>

                                            </div>
                                        </div>
                                         <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Gender</label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                   <option>Select Gender</option>
                                                   <option>Male</option>
                                                   <option>Female</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">Date of Birth</label>
                                            <div class="input-group">
                                                <input type="date" class="form-control" id="validationCustom003" required=""/>

                                            </div>
                                        </div>
                                        
                                         <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">Home Phone Number</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom003" placeholder="Home Phone Number" required=""/>

                                            </div>
                                        </div>
                                         <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">Mobile Number</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom003" placeholder="Mobile Number" required=""/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">Email1</label>
                                            <div class="input-group">
                                                <input type="email" class="form-control" id="validationCustom003" placeholder="Email1" required=""/>

                                            </div>
                                        </div>
                                         <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">Email2</label>
                                            <div class="input-group">
                                                <input type="email" class="form-control" id="validationCustom003" placeholder="Email2" required=""/>

                                            </div>
                                        </div>
                                         <div class="col-md-4 mb-3">
                                            <label for="validationCustom2">Status</label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                   <option>Select Status</option>
                                                   <option>Active</option>
                                                   <option>Inactive</option>
                                                   <option>Pending</option>
                                                  
                                                </select>

                                            </div>
                                        </div>
                                         <div class="col-md-4 mb-3">
                                            <label for="validationCustom2">Employment type</label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                   <option>Select type</option>
                                                   <option>Permanent</option>
                                                   <option>Part time</option>
                                                   <option>Bank staff</option>
                                                   <option>Fixed-term or temporary employment</option>
                                                   <option>Zero contract hours</option>
                                                   <option>Agency staff</option>
                                                   <option>Other (so they cab search)</option>
                                                  
                                                </select>

                                            </div>
                                        </div>
                                         <div class="col-md-4 mb-2">
                                            <label for="validationCustom003">Contracted hours</label>
                                            <div class="input-group">
                                                <input type="number" class="form-control" id="validationCustom003" placeholder="Contracted hours" required=""/>

                                            </div>
                                        </div>
                                         <div class="col-md-12 mb-3">
                                            <label for="validationCustom2">Departments</label>
                                             <ul class="ms-list d-flex">
                                                <li class="ms-list-item pl-0">
                                                    <label class="ms-checkbox-wrap">
                                                    <input type="radio" name="department" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span> Admin </span>
                                                </li>
                                                <li class="ms-list-item">
                                                    <label class="ms-checkbox-wrap">
                                                    <input type="radio" name="department" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span>Carer </span>
                                                </li>
                                                <li class="ms-list-item">
                                                    <label class="ms-checkbox-wrap">
                                                    <input type="radio" name="department" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span>Management </span>
                                                </li>
                                                <li class="ms-list-item">
                                                    <label class="ms-checkbox-wrap">
                                                    <input type="radio" name="department" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span>House keeping </span>
                                                </li>
                                                <li class="ms-list-item">
                                                    <label class="ms-checkbox-wrap">
                                                    <input type="radio" name="department" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span>Nursing </span>
                                                </li>
                                                <li class="ms-list-item">
                                                    <label class="ms-checkbox-wrap">
                                                    <input type="radio" name="department" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span>Kitchen </span>
                                                </li>
                                                <li class="ms-list-item">
                                                    <label class="ms-checkbox-wrap">
                                                    <input type="radio" name="department" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span>Support Worker </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">Add position</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom003" placeholder="Position" required=""/>

                                            </div>
                                        </div>
                                      
                                         <div class="col-md-6 mb-3">
                                            <label>Place of work</label>
                                            <ul class="ms-list d-flex">
                                                <li class="ms-list-item pl-0">
                                                    <label class="ms-checkbox-wrap">
                                                    <input type="radio" name="checkExample" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span> Residential Home </span>
                                                </li>
                                                <li class="ms-list-item">
                                                    <label class="ms-checkbox-wrap">
                                                    <input type="radio" name="checkExample" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span> Nursing Home </span>
                                                </li>
                                            </ul>
                                        </div>
                                          <div class="col-md-12  mb-3">
                                              <h6 Style="font-weight:600;">Kin Detail/Emergency Contacts</h6>
                                              <hr/>
                                              </div>
                                         <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">First Name</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom2" placeholder="First Name" required=""/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Last Name</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom2" placeholder="Last Name" required=""/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Relationship</label>
                                            <select class="form-control">
                                              <option>Select Relationship</option>
                                              <option>Father</option>
                                              <option>Mother</option>
                                              <option>Brother</option>
                                              <option>Sister</option>
                                          </select>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Phone</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom2" placeholder="Phone" required=""/>

                                            </div>
                                        </div>
                                        
                                         <div class="col-md-12  mb-3">
                                              <h6 Style="font-weight:600;">Bank Details</h6>
                                              <hr/>
                                              </div>
                                           <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">NI Number</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom2" placeholder="NI Number" required=""/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Bank Name</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom2" placeholder="Bank Name" required=""/>

                                            </div>
                                        </div>
                                         
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Sort Code</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom2" placeholder="Sort Code" required=""/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Account No</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom2" placeholder="Account No" required=""/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Account Holder Name</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom2" placeholder="Account Holder Name" required=""/>

                                            </div>
                                        </div>
                                         <div class="col-md-12 mb-3"> 
                                         <hr/>
                                         </div>
                                        {/* <!-- <div class="col-md-6 mb-3">-->
                                        <!--    <label >Status</label>-->
                                        <!--    <ul class="ms-list d-flex">-->
                                        <!--        <li class="ms-list-item pl-0">-->
                                        <!--            <label class="ms-checkbox-wrap">-->
                                        <!--            <input type="radio" name="radioExample" value="">-->
                                        <!--            <i class="ms-checkbox-check"></i>-->
                                        <!--            </label>-->
                                        <!--            <span> Active </span>-->
                                        <!--        </li>-->
                                        <!--        <li class="ms-list-item">-->
                                        <!--            <label class="ms-checkbox-wrap">-->
                                        <!--            <input type="radio" name="radioExample" value="">-->
                                        <!--            <i class="ms-checkbox-check"></i>-->
                                        <!--            </label>-->
                                        <!--            <span> Inactive </span>-->
                                        <!--        </li>-->
                                        <!--    </ul>-->
                                        <!--</div>--> */}
                                         <div class="col-md-12 mb-3">
                                            <label for="validationCustom2">Bank Staff</label>
                                            <div class="can-toggle">
  <input id="a" type="checkbox" checked=""/>
  <label for="a">
    <div class="can-toggle__switch" data-unchecked="Yes" data-checked="No"></div>
  </label>
</div>
                                        </div>
                                         <div class="col-md-12 mb-3">
                                            <label for="validationCustom2">Temperorily Suspend Staff</label>
                                            <div class="can-toggle">
  <input id="b" type="checkbox" checked=""/>
  <label for="b">
    <div class="can-toggle__switch" data-unchecked="Yes" data-checked="No"></div>
  </label>
</div>
                                        </div>
                                         <div class="col-md-12 mb-3">
                                            <label for="validationCustom2">Archive Employee</label>
                                            <div class="can-toggle">
  <input id="c" type="checkbox" checked=""/>
  <label for="c">
    <div class="can-toggle__switch" data-unchecked="Yes" data-checked="No"></div>
  </label>
</div>
                                        </div>
                                         <div class="col-md-12  mb-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Note </label>
                                                    <textarea class="form-control" placeholder="Note"></textarea>
                                                </div>
                                            </div>
                                    </div>
                        
                                   
                                   
                                    
                                  
                                    <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Save</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
  )
}

export default AddStaff