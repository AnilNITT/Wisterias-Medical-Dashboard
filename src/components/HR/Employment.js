import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
import EmpNavbar from './EmpNavbar';


const Employment = () => {
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
              <li class="breadcrumb-item active">Employment <Link class="btn btn-primary" to="/add-staff" Style="float:right; margin-top:0px;"> Edit</Link></li>
            </ol>
          </nav>
          </div>

          <div class="col-md-12">
         
         <div class="profile_content">
                        
    <div class="col-sm-12" Style="padding: 0px;">
     <div class="tab-content">

            <div id="profile_in" class="tab-pane active">
                <div class="row">
                    
                    <div class="col-sm-12 col-lg-9 par_ri">
                        <div class="section_box1">
                            <div class="row">
                                <div class="col-md-4">
                                     <div class="patient_left" id="divleftpatnt">
                <div class="profile_img">
                    <h4 Style="font-size: 16px !important;color: #651f70 !important;font-weight: 600;">Photo </h4>
                    <img src="../../assets/img/dashboard/doctor-3.jpg" class="img-responsive center-block img-circle" Style="width: 132px; height: 132px; border: 3px solid #1f4970 !important; border-top-left-radius: 35px;
    border-bottom-right-radius: 35px;"/>
            
                </div>

                
            </div>
                                </div>
                                <div class="col-md-8">
                                     <h2>Profile </h2>
                           

                            <div class="section_box1_content_p">
                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Name</div>
                                                <div class="profile_contacts" id="lblttl">John</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Surname</div>
                                                <div class="profile_contacts" id="lblfname">Doe</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Marital status</div>
                                                <div class="profile_contacts" id="lblfname">single</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Religion</div>
                                                <div class="profile_contacts" id="lblfname">Christian</div>
                                            </div>
                                        </div>
                                         <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Ethinicity</div>
                                                <div class="profile_contacts" id="lblfname">White</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Preferred Name</div>
                                                <div class="profile_contacts" id="lblfname">testss</div>
                                            </div>
                                        </div>
                                      
                                    </div>

                                    <div class="row">
                                         <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Address</div>
                                                <div class="profile_contacts" id="lbladr1">102 B, Vijay Nagar</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Gender</div>
                                                <div class="profile_contacts" id="lblgndr">Male</div>
                                            </div>
                                        </div>
                                         <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Date of Birth</div>
                                                <div class="profile_contacts" id="lblgndr">22-12-1999</div>
                                            </div>
                                        </div>
                                          <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Home Phone Number</div>
                                                <div class="profile_contacts" id="lblgndr">XX-XXXXXXXX</div>
                                            </div>
                                        </div>
                                        
                                    </div>


                                    <div class="row">
                                        
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Country</div>
                                                <div class="profile_contacts" id="lblmrtl">India</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Mobile Number</div>
                                                <div class="profile_contacts" id="lbloccu">XXXXXXXXXX</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Email1</div>
                                                <div class="profile_contacts" id="lbloccu">test@mail.com</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Email2</div>
                                                <div class="profile_contacts" id="lbloccu">test1@mail.com</div>
                                            </div>
                                        </div>
                                    </div>


                                   
                                    
                                </div>
                            </div>
                                </div>
                            </div>
                               
                           
                        </div>
                        <div class="section_box1">
                            <div class="row">
                               
                                <div class="col-md-12">
                                     <h2>Kin Details </h2>
                           

                            <div class="section_box1_content_p" Style="min-height:auto">
                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="form-group">
                                                <div class="profile_label">First Name</div>
                                                <div class="profile_contacts" id="lblttl">Adsaddsad</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="form-group">
                                                <div class="profile_label">Last Name</div>
                                                <div class="profile_contacts" id="lblfname">Gomdf</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="form-group">
                                                <div class="profile_label">Relationaship</div>
                                                <div class="profile_contacts" id="lblfname">Brother</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="form-group">
                                                <div class="profile_label">Phone</div>
                                                <div class="profile_contacts" id="lblfname">XXXXXXXXXX</div>
                                            </div>
                                        </div>
                                        
                                      
                                    </div>
  
                                </div>
                            </div>
                                </div>
                            </div>
                               
                           
                        </div>
                         <div class="section_box1">
                            <div class="row">
                               
                                <div class="col-md-12">
                                     <h2>Bank Details </h2>
                           

                            <div class="section_box1_content_p" Style="min-height:auto">
                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="form-group">
                                                <div class="profile_label">NI Number</div>
                                                <div class="profile_contacts" id="lblttl">55646545</div>
                                            </div>
                                        </div>
                                         <div class="col-sm-6 col-lg-3">
                                            <div class="form-group">
                                                <div class="profile_label">Account Number</div>
                                                <div class="profile_contacts" id="lblfname">XXXXXXXXXXXXXXX</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="form-group">
                                                <div class="profile_label">Bank Name</div>
                                                <div class="profile_contacts" id="lblfname">IFDYI Bank</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="form-group">
                                                <div class="profile_label">Sort Code</div>
                                                <div class="profile_contacts" id="lblfname">XX0004664</div>
                                            </div>
                                        </div>
                                       
                                       
                                        
                                      
                                    </div>
  
                                </div>
                            </div>
                                </div>
                            </div>
                               
                           
                        </div>
                    </div>
                     <div class="col-sm-6 col-lg-3 par_ri">
                        <div class="section_box1" Style="height:690px;">
                            <h2>Employee Details</h2>
                            

                            <div class="section_box1_content_p2">

                                <div class="form-group">
                                    <div class="profile_label">Employe Id</div>
                                    <div class="profile_contacts" id="lblwght">4564878</div>
                                </div>
                                <div class="form-group">
                                    <div class="profile_label">Start date</div>
                                    <div class="profile_contacts" id="lblhgt">12/12/2021</div>
                                </div>
                                <div class="form-group ">
                                    <div class="profile_label">Probation Period</div>
                                    <div class="profile_contacts" id="lbleye">6 Month</div>
                                </div>
                                <div class="form-group ">
                                    <div class="profile_label">Contract End date</div>
                                    <div class="profile_contacts" id="lblbld">01/06/2022</div>
                                </div>
                                <div class="form-group">
                                    <div class="profile_label">Payroll Id</div>
                                    <div class="profile_contacts" id="lblhair">1457674464</div>
                                </div>
                                <div class="form-group ">
                                    <div class="profile_label">Nursing board PIN No.</div>
                                    <div class="profile_contacts" id="lblglas">0000000</div>
                                </div>
                                <div class="form-group ">
                                    <div class="profile_label">Valid Until</div>
                                    <div class="profile_contacts" id="lblhear">11/10/2022</div>
                                </div>
                                <div class="form-group ">
                                    <div class="profile_label">Working Time </div>
                                    <div class="profile_contacts" id="lblhear">8 Hours</div>
                                </div>
                                <div class="form-group ">
                                    <div class="profile_label">Employemnt Type</div>
                                    <div class="profile_contacts" id="lblhear">None</div>
                                </div>
                                <div class="form-group ">
                                    <div class="profile_label">Reports To</div>
                                    <div class="profile_contacts" id="lblhear">None</div>
                                </div>
                               <div class="form-group ">
                                    <div class="profile_label">Recruitment Method</div>
                                    <div class="profile_contacts" id="lblhear">None</div>
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
        </div>
       </div>
    </main>
  )
}

export default Employment;