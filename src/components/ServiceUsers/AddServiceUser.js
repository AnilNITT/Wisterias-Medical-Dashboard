import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Navbarone from '../User/Navbarone';
import NavbarTwo from '../User/NavbarTwo';

const AddServiceUser = () => {
    return (
        <>
        <main className="body-content">
            
            
            <aside id="ms-side-nav" class="side-nav fixed ms-aside-scrollable ms-aside-left ps ps--active-y" Style="background-color:#fff;">
    {/* <!-- Logo --> */}
    <div class="logo-sn ms-d-block-lg">
      <Link class="pl-0 ml-0 text-center" to="/"> <img src="../../assets/img/logo.png" alt="logo"/> </Link>
      <a href="#" class="text-center ms-logo-img-link"> <img src="../../assets/img/dashboard/doctor-3.jpg" alt="logo"/></a>
     
      {/* <!--<h6 class="text-center mb-3">Admin</h6>--> */}
    </div>
    {/* <!-- Navigation --> */}
   <div class="col-sm-12 col-lg-12" Style="padding:0px;">
                        <div class="section_box1" Style="border-radius:0px;     box-shadow: 0 0px 0px 0 rgb(164 173 186 / 25%);">
                           <div class="patient_left" id="divleftpatnt">
                <div class="profile_img">
                    <img src="../../assets/img/dashboard/patient-1.jpg" class="img-responsive center-block img-circle" Style="width: 132px; height: 132px; border: 3px solid #1f4970 !important; border-top-left-radius: 35px;
    border-bottom-right-radius: 35px;"/>
             {/* <!--<label class="uploadlabel"> <i class="fa fa-edit" data-toggle="modal" Style="font-size:20px;" data-target="#profile_image"></i></label>--> */}
                </div>

                <div class="profile_details">
                    <div class="profile_name">Michael Sullivan</div>
                    <div class="profile_age">32yrs Old</div>
                    <div class="profile_sex">Male</div>
                </div>

                <div class="clearfix"></div>

                <div class="profile_link">
                    <ul>
                        <li><a href="#">Known Allergies  <span id="spnallergy"></span></a></li>
                          <li><a href="#">Contact Status<span id="spnecont">Secondary</span></a></li>
                         <li><a href="#">Emergency Contact <span id="spnecont">John Doe</span> <span id="spnecont">6464646466</span>  
                         <span id="spnecont">Jameson Zokess</span> <span id="spnecont">7989799879</span></a></li>
                        <li><a href="#">Risk Status <span class="risk_pro" id="spnrisk">High</span></a></li>
                        
                       
                        <li><a href="#">GP <span id="spngp">Roxen Tylor</span></a></li>
                  
                        <li><a href="#">Room No <span id="spnroom">205</span></a></li>
                        
                        <li><a href="#">MUST Score<span id="spnmustscre"></span></a></li>
                        <li><a href="#">DNACPR<span id="spndnr">No order in place</span></a></li>
                    </ul>
                </div>
            </div>
                        </div>
                    </div>
            <div class="ps__rail-x" Style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" Style="left: 0px; width: 0px;"></div></div>
            <div class="ps__rail-y" Style="top: 0px; height: 657px; right: 0px;"><div class="ps__thumb-y" tabindex="0" Style="top: 0px; height: 589px;"></div></div>
            </aside>

            <Navbar/>

            <div className="ms-content-wrapper">
            <div className="row">
                

                <Navbarone />
                <NavbarTwo />
               
                <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                       
                        <li class="breadcrumb-item active" aria-current="page">Add Service User</li>
                     </ol>
                  </nav>
                </div>


                <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                     <div class="ms-panel-header ms-panel-custome">
                         
                       <h6 Style="margin-top: 0.9rem;">Profile</h6>
                        
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#AddPersonalAppearance">
   Add Personal Appearance 
</button>
                      
                     </div>
                     

                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
                             <div class="form-row justify-content-center">
                                 

                       <div role="form">
                                        <div class="row">
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Title <span class="man_fields1">*</span></label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlTtl">
                                                        <option value="">Title</option>
                                                        <option value="Mr">Mr</option>
                                                        <option value="Mrs">Mrs</option>
                                                        <option value="Ms">Ms</option>
                                                    </select></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">First Name <span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control" id="txtfname" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Middle Name</label>
                                                    <input type="text" class="form-control" id="txtfore1" maxlength="50"/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Last Name <span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control" id="txtlanme" maxlength="50"/>
                                                </div>
                                            </div>
                                             <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Preferred to be called  </label>
                                                    <input type="text" class="form-control" id="txtfore2" placeholder=" " maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Gender <span class="man_fields1">*</span></label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlGndr">
                                                        <option value="">Gender</option>
                                                        <option value="M">Male</option>
                                                        <option value="F">Female</option>
                                                    </select></span>
                                                </div>
                                            </div>
                                            
                                           
                                        </div>
                                        <div class="row">
                                              <div class="col-sm-8">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date of Birth <span class="man_fields1">*</span></label>
                                                      <input id="dob" class="form-control text-wrapper select-calander" type="text" placeholder="dd/mm/yyyy"/> 
                                                </div>
                                            </div>
                                            <div class="col-sm-4 ">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Age</label>
                                                     <span class="form-control" id="age"></span>
                                                </div>
                                            </div>
                                            
                                            <div class="col-sm-6">
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
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Last Occupation</label>
                                                    <input type="text" class="form-control" id="txtoccu" maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address</label>
                                                    <input type="text" class="form-control" maxlength="150" id="txtaddr1"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                            <label>Select Location</label>
                                            <select class="form-control">
                                                <option>Select location</option>
                                                <option>Residential Home</option>
                                                <option>Nursing Home</option>
                                            </select>
                                            {/* <!--<ul class="ms-list d-flex">-->
                                            <!--    <li class="ms-list-item pl-0">-->
                                            <!--        <label class="ms-checkbox-wrap">-->
                                            <!--        <input type="radio" name="checkExample" value="Residential Home" onclick="shownotdivfloor();">-->
                                            <!--        <i class="ms-checkbox-check"></i>-->
                                            <!--        </label>-->
                                            <!--        <span> Residential Home </span>-->
                                            <!--    </li>-->
                                            <!--    <li class="ms-list-item">-->
                                            <!--        <label class="ms-checkbox-wrap">-->
                                            <!--        <input type="radio" name="checkExample" value="Nursing Home"  onclick="showdivfloor();">-->
                                            <!--        <i class="ms-checkbox-check"></i>-->
                                            <!--        </label>-->
                                            <!--        <span> Nursing Home </span>-->
                                            <!--    </li>-->
                                            <!--</ul>--> */}
                                        </div>
                                         <div class="col-md-6 mb-3" id="divfloor" Style="display:none;">
                                            <label>Select Floor</label>
                                            <select class="form-control">
                                                <option>Select Floor</option>
                                            <option value="First floor">First floor</option>
                                            <option value="Second floor">Second floor</option>
                                           <option value="Third floor">Third floor</option>
                                           <option value="Fourth floor">Fourth floor</option>
                                            </select>
                                        </div>
                                            {/* <!--<div class="col-sm-4">-->
                                            <!--    <div class="form-group">-->
                                            <!--        <label for="exampleInputEmail1">Address 2</label>-->
                                            <!--        <input type="text" class="form-control" placeholder="Address 2" maxlength="150" id="txtaddr2">-->
                                            <!--    </div>-->
                                            <!--</div>-->
                                            <!--<div class="col-sm-4">-->
                                            <!--    <div class="form-group">-->
                                            <!--        <label for="exampleInputEmail1">Address 3</label>-->
                                            <!--        <input type="text" class="form-control" placeholder="Address 3" maxlength="150" id="txtaddr3">-->
                                            <!--    </div>-->
                                            <!--</div>--> */}
                                           
                                            
                                           
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Nationality</label>
                                                    <span class="select-wrapper"><select name="ctl00$cphContent$ddlCntry" id="ddlCntry" class="custom-select">
	<option value="0">Select Country</option>
	<option value="1">Ireland</option>

</select></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Religion</label>
                                                    <input type="text" class="form-control" id="txtrelgn" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
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
                                            
                                            
                                        </div>
                                        <div class="row">
                                            {/* <!--<div class="col-sm-3">-->
                                            <!--    <div class="form-group">-->
                                            <!--        <label for="exampleInputEmail1">Date of Birth <span class="man_fields1">*</span></label>-->
                                                    <!--<input type="text" class="form-control text-wrapper select-calander" id="txtdob"  onchange="CalculateAge()">-->
                                            <!--          <input id="dob"  class="form-control text-wrapper select-calander" type="text" placeholder="dd/mm/yyyy"> -->
                                            <!--    </div>-->
                                            <!--</div>-->
                                            <!--<div class="col-sm-2 ">-->
                                            <!--    <div class="form-group">-->
                                            <!--        <label for="exampleInputEmail1">Age</label>-->
                                            <!--         <span class="form-control" id="age"></span>-->
                                                    <!--<input type="text" class="form-control" id="txtage">-->
                                            <!--    </div>-->
                                            <!--</div>--> */}
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Service User Home ID</label>
                                                    <input type="text" class="form-control" id="txthmid"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Service User ID </label>
                                                    <input type="text" class="form-control" id="txtres"/>
                                                </div>
                                            </div>
                                        </div>
                                          <div class="row">
                                              <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email</label>
                                                    <input type="email" class="form-control" name="email"/>
                                                </div>
                                           </div> 
                                           <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Add language</label>
                                                    <input type="text" class="form-control" name="language"/>
                                                </div>
                                           </div> 
                                           <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Enterpreter</label>
                                                    <input type="text" class="form-control" name="enterpreter"/>
                                                </div>
                                           </div> 
                                            
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Telephone number1 </label>
                                                    <input type="text" class="form-control" name="Telephone1"/>
                                                </div>
                                            </div> 
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Telephone number2</label>
                                                    <input type="text" class="form-control" name="Telephone1"/>
                                                </div>
                                            </div> 
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Start date </label>
                                                    <input type="date" class="form-control" name="sdate"/>
                                                </div>
                                            </div> 
                                           <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">End date </label>
                                                    <input type="date" class="form-control" name="edate"/>
                                                </div>
                                            </div> 
                                            
                                          </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Resident home </label>
                                                    <input type="text" id="pac-input4" class="form-control pac-target-input" placeholder="" name="sitelocation" autocomplete="off"/>
                                                </div>
                                            </div>
                                              
                                        
                                 
                                   <div class="col-md-6 mb-3">
                                            <label>Status</label>
                                            <select class="form-control">
                                            <option>Select Status</option>
                                            <option>Active</option>
                                            <option>Inactive</option>
                                           <option>Hospitalised</option>
                                           <option>Respite</option>
                                            <option>Discharged</option>
                                             <option>Deceased</option>
                                              <option>Pre-admission</option>
                                            </select>
                                        </div>
                                   <div class="col-md-6 mb-3">
                                            <label>Grouping</label>
                                            <select class="form-control">
                                            <option>Select Grouping</option>
                                            <option>My Test Zones</option>
                                            <option>ABC Zone</option>
                                           
                                            </select>
                                        </div>
                                     <div class="col-md-6 mb-3">
                                            <div class="form-group">
                                 <label>Assign to all Carers</label><br/>
                                <span class="switch">
   
    <input type="checkbox" class="switch" id="switch-id" checked=""/>
    <label for="switch-id"></label>
  </span><br/>
  <p>All carers will be able to see any tasks allocated to this service user.</p>
                                 </div>
                                
                                 </div>  
                                 
                                 <div class="col-md-6 mb-3">
                                      <div class="contentA">
                                              <label>Carers</label>
                                            <select class="form-control">
                                            <option>Select Carer</option>
                                            <option>John doe</option>
                                            <option>Jenifer</option>
                                           <option>Goilex peter</option>
                                       
                                            </select>
                                      </div>

                                 </div>
                                 
                                  <div class="col-md-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Building</label>
                                                    <input type="text" class="form-control" name="building"/>
                                                </div>
                                  </div>
                                  <div class="col-md-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Floor</label>
                                                    <input type="text" class="form-control" name="floor"/>
                                                </div>
                                  </div>
                                  <div class="col-md-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Room</label>
                                                    <input type="text" class="form-control" name="room"/>
                                                </div>
                                  </div>
                                  <div class="col-md-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Bed</label>
                                                    <input type="text" class="form-control" name="bed"/>
                                                </div>
                                  </div>
                                  <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Note</label>
                                                   <textarea class="form-control" Style="height:100px;"></textarea>
                                                </div>
                                  </div>   
                             </div>
                            
                                        
                                    </div>
                          
                           
                     </div>
                  </form></div>
               </div>
               
               
                </div>


                
                <div class="col-xl-3 col-md-3">
                  <div class="ms-panel">
                  <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="font-size: 14px;">GP Contact Detail</h6>
                       
                     </div>
                    <div class="ms-panel-body">
                        
                        <div role="form">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Doctor name</label>
                                            <input type="text" class="form-control" placeholder="dname"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Surgery / Practice name</label>
                                            <input type="text" class="form-control" placeholder="Surgery / Practice name"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email</label>
                                            <input type="email" class="form-control" placeholder="Email"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Postcode</label>
                                            <input type="text" id="pac-input3" class="form-control pac-target-input" placeholder="Start typing here" autocomplete="off"/>
                                            <p class="requir_indicate text-danger">Type address manually <i class="fa fa-angle-right" aria-hidden="true"></i> </p>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Telephone</label>
                                            <input type="text" class="form-control" id="txtkinph" placeholder="Telephone"/>
                                        </div>
                                       
                                    </div>
                    </div>
                   </div>
                </div>


                <div class="col-xl-3 col-md-3">
                  <div class="ms-panel">
                  <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="font-size: 14px;">Next Of Kin Details</h6>
                       
                     </div>
                    <div class="ms-panel-body">
                         
                         <div role="form">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="text" class="form-control" id="txtkin" maxlength="50"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address</label>
                                            <input type="text" class="form-control" id="txtkinaddr1" maxlength="150"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Town/City</label>
                                            <input type="text" class="form-control" id="txtkinaddr3" maxlength="150"/>
                                        </div>
                                         <div class="form-group">
                                            <label for="exampleInputEmail1">Country</label>
                                            <input type="text" class="form-control" id="txtkinaddr3" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Postcode</label>
                                            <input id="pac-input" type="text" class="form-control pac-target-input" placeholder="Start typing here" maxlength="150" autocomplete="off"/>
                                             <p class="requir_indicate text-danger">Type address manually <i class="fa fa-angle-right" aria-hidden="true"></i> </p>
                                           
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Telephone</label>
                                            <input type="text" class="form-control" id="txtkinph"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Relationship</label>
                                          <select class="form-control">
                                              <option>Select Relationship</option>
                                              <option>Father</option>
                                              <option>Mother</option>
                                              <option>Brother</option>
                                              <option>Sister</option>
                                          </select>
                                            <p class="requir_indicate text-danger">Optional to be filled </p>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email</label>
                                            <input type="email" class="form-control" id="txtkinmail"/>
                                        </div>
                                                <div class="form-group">
                                    <label>Lasting power of attorney </label><br/>
                                 
                                 <div class="yesno ls1"><input type="radio" name="radio" value="Y" id="last1" onclick="show1();"/> Yes </div>
                                 <div class="yesno ls2"><input type="radio" name="radio" value="N" id="last2" onclick="show2();"/> No </div>
                                 </div>
                                    <div id="div1" Style="display:none;">
                                        <label class="checkbox-inline yesno heal1" Style="padding: 10px;">
      <input type="checkbox" value="" id="health1"/> Health and wellbeing 
    </label>
    <label class="checkbox-inline yesno fi1" Style="padding: 10px;">
      <input type="checkbox" value="" id="fin1"/> Financial 
    </label>
                                     </div>
                                       
                                        <div class="form-group">
                                    <label>Contact Status </label><br/>
                                 
                                 <div class="yesno pp1"><input type="radio" name="radio1" value="Priority" id="prio1" onclick="show11();"/> Priority </div>
                                 <div class="yesno ss1"><input type="radio" name="radio1" value="Secondary" id="secon1" onclick="show11();"/> Secondary </div>
                                 <div class="yesno dd1"><input type="radio" name="radio1" value="Do not contact" id="donot1" onclick="show12();"/> Do not contact </div>
                                 </div>
                                    <div id="div2" Style="display:none;">
                                       <div class="form-group">
                                            <label for="exampleInputEmail1">Note if user clicks on do not contact</label>
                                           <textarea class="form-control"></textarea>
                                        </div>
                                     </div>
                                     
                                       <div class="form-group">
                                 <label><img src="../../assets/img/cat-icon/Familyicon.png" Style="width:24px;"/> Is access to the family module granted to this contact?</label><br/>
                                 <div class="yesno"><input type="radio" name="radio" value="Yes"/> Yes </div>
                                  <div class="yesno"><input type="radio" name="radio" value="No"/> No </div>
                                 </div>
                               
                               
                                     
                                        <div class="clearfix"></div>
                                     
                                    </div>
                        
                    </div>
                   </div>
                </div>


                <div class="col-xl-3 col-md-3">
                  <div class="ms-panel">
                  <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="font-size: 14px;">Significant Contact 1</h6>
                       
                     </div>
                    <div class="ms-panel-body">
                          <div role="form">
                                       <div class="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="text" class="form-control" id="txtkin" maxlength="50"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address</label>
                                            <input type="text" class="form-control" id="txtkinaddr1" maxlength="150"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Town/City</label>
                                            <input type="text" class="form-control" id="txtkinaddr3" maxlength="150"/>
                                        </div>
                                         <div class="form-group">
                                            <label for="exampleInputEmail1">Country</label>
                                            <input type="text" class="form-control" id="txtkinaddr3" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Postcode</label>
                                            <input id="pac-input1" type="text" class="form-control pac-target-input" placeholder="Start typing here" maxlength="150" autocomplete="off"/>
                                                <p class="requir_indicate text-danger">Type address manually <i class="fa fa-angle-right" aria-hidden="true"></i> </p>
                                           
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Telephone</label>
                                            <input type="text" class="form-control" id="txtkinph"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Relationship</label>
                                          <select class="form-control">
                                              <option>Select Relationship</option>
                                              <option>Father</option>
                                              <option>Mother</option>
                                              <option>Brother</option>
                                              <option>Sister</option>
                                          </select>
                                            <p class="requir_indicate text-danger">Optional to be filled </p>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email</label>
                                            <input type="email" class="form-control" id="txtkinmail"/>
                                        </div>
                                                <div class="form-group">
                                    <label>Lasting power of attorney </label><br/>
                                 
                                 <div class="yesno lss1"><input type="radio" name="radio" value="Y" id="last3" onclick="show3();"/> Yes </div>
                                 <div class="yesno lss2"><input type="radio" name="radio" value="N" id="last4" onclick="show4();"/> No </div>
                                 </div>
                                    <div id="divsecond1" Style="display:none;">
                                        <label class="checkbox-inline yesno heal2" Style="padding: 10px;">
      <input type="checkbox" id="health2" name="check1" value=""/> Health and wellbeing 
    </label>
    <label class="checkbox-inline yesno fi2" name="check2" Style="padding: 10px;">
      <input type="checkbox" id="fin2" value=""/> Financial 
    </label>
                                     </div>
                                       
                                        <div class="form-group">
                                    <label>Contact Status </label><br/>
                                 
                                 <div class="yesno pp2"><input type="radio" name="radio2" value="Priority" id="prio2" onclick="show111();"/> Priority </div>
                                 <div class="yesno ss2"><input type="radio" name="radio2" value="Secondary" id="secon2" onclick="show111();"/> Secondary </div>
                                 <div class="yesno dd2"><input type="radio" name="radio2" value="Do not contact" id="donot2" onclick="show122();"/> Do not contact </div>
                                 </div>
                                    <div id="div22" Style="display:none;">
                                       <div class="form-group">
                                            <label for="exampleInputEmail1">Note if user clicks on do not contact</label>
                                           <textarea class="form-control"></textarea>
                                        </div>
                                     </div>
                                    <div class="form-group">
                                 <label><img src="../../assets/img/cat-icon/Familyicon.png" Style="width:24px;"/> Is access to the family module granted to this contact?</label><br/>
                                 <div class="yesno"><input type="radio" name="radio" value="Yes"/> Yes </div>
                                  <div class="yesno"><input type="radio" name="radio" value="No"/> No </div>
                                 </div>    
                                        <div class="clearfix"></div>
                                     
                                    </div>
                        
                    </div>
                   </div>
                </div>


                <div class="col-xl-3 col-md-3">
                  <div class="ms-panel">
                  <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="font-size: 14px;">Significant Contact 2</h6>
                       
                     </div>
                    <div class="ms-panel-body">
                          <div role="form">
                                       <div class="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="text" class="form-control" id="txtkin" maxlength="50"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address</label>
                                            <input type="text" class="form-control" id="txtkinaddr1" maxlength="150"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Town/City</label>
                                            <input type="text" class="form-control" id="txtkinaddr3" maxlength="150"/>
                                        </div>
                                         <div class="form-group">
                                            <label for="exampleInputEmail1">Country</label>
                                            <input type="text" class="form-control" id="txtkinaddr3" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Postcode</label>
                                            <input id="pac-input1" type="text" class="form-control pac-target-input" placeholder="Start typing here" maxlength="150" autocomplete="off"/>
                                                <p class="requir_indicate text-danger">Type address manually <i class="fa fa-angle-right" aria-hidden="true"></i> </p>
                                           
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Telephone</label>
                                            <input type="text" class="form-control" id="txtkinph"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Relationship</label>
                                          <select class="form-control">
                                              <option>Select Relationship</option>
                                              <option>Father</option>
                                              <option>Mother</option>
                                              <option>Brother</option>
                                              <option>Sister</option>
                                          </select>
                                            <p class="requir_indicate text-danger">Optional to be filled </p>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email</label>
                                            <input type="email" class="form-control" id="txtkinmail"/>
                                        </div>
                                                <div class="form-group">
                                    <label>Lasting power of attorney </label><br/>
                                 
                                 <div class="yesno lss1"><input type="radio" name="radio" value="Y" id="last3" onclick="show3();"/> Yes </div>
                                 <div class="yesno lss2"><input type="radio" name="radio" value="N" id="last4" onclick="show4();"/> No </div>
                                 </div>
                                    <div id="divsecond1" Style="display:none;">
                                        <label class="checkbox-inline yesno heal2" Style="padding: 10px;">
      <input type="checkbox" id="health2" name="check1" value=""/> Health and wellbeing 
    </label>
    <label class="checkbox-inline yesno fi2" name="check2" Style="padding: 10px;">
      <input type="checkbox" id="fin2" value=""/> Financial 
    </label>
                                     </div>
                                       
                                        <div class="form-group">
                                    <label>Contact Status </label><br/>
                                 
                                 <div class="yesno pp2"><input type="radio" name="radio2" value="Priority" id="prio2" onclick="show111();"/> Priority </div>
                                 <div class="yesno ss2"><input type="radio" name="radio2" value="Secondary" id="secon2" onclick="show111();"/> Secondary </div>
                                 <div class="yesno dd2"><input type="radio" name="radio2" value="Do not contact" id="donot2" onclick="show122();"/> Do not contact </div>
                                 </div>
                                    <div id="div22" Style="display:none;">
                                       <div class="form-group">
                                            <label for="exampleInputEmail1">Note if user clicks on do not contact</label>
                                           <textarea class="form-control"></textarea>
                                        </div>
                                     </div>
                                    <div class="form-group">
                                 <label><img src="../../assets/img/cat-icon/Familyicon.png" Style="width:24px;"/> Is access to the family module granted to this contact?</label><br/>
                                 <div class="yesno"><input type="radio" name="radio" value="Yes"/> Yes </div>
                                  <div class="yesno"><input type="radio" name="radio" value="No"/> No </div>
                                 </div>    
                                        <div class="clearfix"></div>
                                     
                                    </div>
                        
                    </div>
                   </div>
                </div>


                <div class="col-xl-12 col-md-12" Style="text-align: center;">
                 
                           <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Create Profile</button>
                       

                    
                 </div>

                 <div class="modal fade" id="cancel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
            <h4 class="modal-title" Style="color:#1f4970">ARE YOU SURE ?</h4>
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
      
      </div>
      <div class="modal-body">
       <h6>Are you sure you want to leave the page? Any modifications you make
will be lost.</h6>
      </div>
      <div class="modal-footer">
          <Link to="/add-service-user" type="button" class="btn btn-default" data-dismiss="modal" Style="color: #2196f3;font-weight: 600;font-size: 1rem;">Cancel</Link>
        <Link to="/" type="submit" class="btn btn-primary">OK</Link>
      </div>
    </div>
  </div>
</div>


            </div>
             </div>
        </main>
        <div class="modal fade" id="AddPersonalAppearance" tabindex="-1" role="dialog" aria-labelledby="AddPersonalAppearanceModalLabel" Style="display: none;" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" Style="color:#1f4970" id="AddPersonalAppearanceModalLabel">PERSONAL APPEARANCE</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
            <label for="exampleInputEmail1">Weight(kg)</label>
            <input type="number" class="form-control" id="txtweight" placeholder=""/>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Height(cm)</label>
            <input type="number" class="form-control" id="txtheight" placeholder=""/>
        </div>
        <div class="form-group ">
            <label for="exampleInputEmail1">Eye Color</label>
            <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlEye">
                <option value="">Eye Color</option>
                <option value="A">Amber</option>
                <option value="B">Blue</option>
                <option value="W">Brown</option>
                <option value="G">Gray</option>
                <option value="N">Green</option>
                <option value="H">Hazel</option>
                <option value="R">Red &amp; Violet</option>
            </select></span>
        </div>
        <div class="form-group ">
            <label for="exampleInputEmail1">Build</label>
            <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlBuild">
                <option value="">Select Build</option>
                <option value="1">Ectomorph</option>
                <option value="2">Mesomorph</option>
                <option value="3">Endomorph</option>
            </select></span>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Hair Color</label>
            <input type="text" class="form-control" id="txthair" placeholder="Hair Color" maxlength="50"/>
        </div>
        <div class="form-group ">
            <label for="exampleInputEmail1">Glasswear</label>
            <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlGlass">
                <option value="">Glasswear</option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
            </select></span>
        </div>
        <div class="form-group ">
            <label for="exampleInputEmail1">Hearing aid</label>
            <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlaid">
                <option value="">Hearing aid</option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
            </select></span>
        </div>  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default AddServiceUser
