import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Navbarone from '../User/Navbarone';
import NavbarTwo from '../User/NavbarTwo';


const CreateRisk = () => {
  return(
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
            <Navbarone/>
            <NavbarTwo/>
            
            <div class="col-xl-6 col-md-6">
                  <div class="ms-panel" Style="height:620px;">
                     
                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
                           <div class="form-row">
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Select Risk Area</label>
                                 <div class="input-group">
                                    <select class="form-control" id="ddllistarea" required="">
                                        <option value="">Select Risk Area</option>
                                       <option value="">Breathing</option>
                                       <option value="">Caughing</option>
                                        <option value="">Incident</option>
                                        <option value="">Bed Rails Assessment</option>
                                        <option value="">Falls</option>
                                        <option value="">Accident</option>
                                        <option value="other">Others</option>
                                        
                                    </select>

                                 </div>
                              </div>
                               <div class="col-md-6 mb-3" id="textboxother" Style="display: none">
                                 <label for="validationCustom001">Others</label>
                                 <div class="input-group">
                                   <input type="text" id="others" class="form-control"/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Risk level before intervention</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Risk level before intervention</option>
                                       <option value="">Low</option>
                                       <option value="">Medium</option>
                                       <option value="">High</option>
                                      
                                    </select>

                                 </div>
                              </div>
                              
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Created by</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                    </select>

                                 </div>
                              </div>
                              
                           </div>
                           <div class="form-row">
                                 <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Case Id</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Time</label>
                                 <div class="input-group">
                                    <input type="time" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Last Assessment</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                           </div>
                           <div class="form-row">
                               
                              <div class="col-md-12 mb-3">
                                 <label for="validationCustom001"> Risk after intervention </label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Risk after intervention</option>
                                       <option value="">Breathing</option>
                                       <option value="">Caughing</option>
                                        <option value="">Incident</option>
                                        <option value="">Bed Rails Assessment</option>
                                        <option value="">Falls</option>
                                        <option value="">Accident</option>
                                        
                                    </select>

                                 </div>
                              </div>
                                <div class="col-md-12 mb-3">
                                 <label for="validationCustom001">Upload Attachment</label>
                                                        <div class="input-group">
      <input id="uploadFile" placeholder="Upload Photo" disabled="disabled" class="form-control"/>
      <span class="input-group-addon"> <label class="btn btn-primary" Style="padding: 0.5rem 1rem;
    margin-top: 0px;border-radius: 0px;"><input id="uploadBtn" type="file" Style="display:none;"/> Upload</label> </span>   
    </div>
                              </div>
                           </div>
                          
                           

                     </form></div>
                  </div>
            </div>
            
            <div class="col-xl-6 col-md-6">  
                    <div class="ms-panel" Style="height:620px;">
                     
                     <div class="ms-panel-body">
                          
                           
                            
                            <div class="form-row">
                               
                               <div class="col-md-12 mb-2">
                                
                                 <div class="input-group">
                                 <label><span><input type="checkbox"/></span> Review Required</label>
                               

                                 </div>
                              </div>
                             
                             </div> 
                               <div class="form-row">
                               <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Next Review Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                               </div>
                                <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Created by</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                    </select>

                                 </div>
                              </div>
                             
                           </div>
                           
                              <div class="form-row">
                               <div class="col-md-12 mb-2">
                                 <label for="validationCustom004">Previous Notes</label>
                                 <div class="input-group">
                                   <textarea class="form-control" placeholder="Previous Notes" Style="height:150px;"></textarea>

                                 </div>
                              </div>
                               <div class="col-md-12 mb-2">
                                 <label for="validationCustom004">Notes</label>
                                 <div class="input-group">
                                   <textarea class="form-control" placeholder="Notes" Style="height:150px;"></textarea>

                                 </div>
                              </div>
                             
                           </div>
                           
                         
                            
                      </div>
                  </div>
            </div>


            <div class="col-xl-12 col-md-12">
                <div class="ms-panel">
                 <div class="ms-panel-body">
                     
                   <label>Risk assessment </label>
                   <table class="table table-bordered">
                       <tbody><tr>
                           <td>Name:</td>
                           <td>Location: </td>
                           <td>Date: </td>
                           <td>Signed Manager:</td>
                       </tr>
                   </tbody></table>
                   <table class="table table-bordered">
                       <thead class="text-center">
                           <tr><th>Activity</th>
                           <th>Hazzard<br/>
                           (Remember - the potential to harm)</th>
                           <th>Risk before intervention <br/>(L M H)</th>
                           <th>Control Measure <br/> (what can be done?)</th>
                           <th>Remaining risk <br/> (L M H)</th>
                       </tr></thead>
                       <tbody>
                           <tr><td>Manageing a service user at a risk of seleft neglect</td>
                           <td>
                               <ul Style="list-Style: disc;padding:20px;">
                                   <li> Self care deflict</li>
                                    <li> Isolation/living alone</li>
                                     <li> Service refusal</li>
                                       <li> Feeling helplessness</li>
                                         <li> Cognitive impairement</li>
                               </ul>
                           </td>
                           <td class="text-center">H <br/><br/><br/> M <br/><br/><br/> M</td>
                           <td>
                               <ul Style="list-Style: disc;padding:20px;">
                                   <li>Carer should be well skilled to develop relationship the empower XXX.</li>
                                   <li>Carers to continue with efforts to engage with XXX and offer services.</li>
                                   <li>Carer to create time to chat with XXX during the call times.</li>
                                   <li>Carer to use person centred approach on XXX.</li>
                                   <li>Carer to provide an appropriate intervention for XXX and use a sensitive care approach which recognises choice, best interest and autonomy.</li>
                                   <li>Carer to aware of XXX's medical condition.</li>
                                   <li>Carer to value XXX's confidentiality and respect his/her wishes, maintain dignity and respect. </li>
                               </ul> 
                            </td>
                           <td>Risk is low with intervention</td>
                       </tr></tbody>
                   </table>
                 </div>
                 </div>
            </div>
            

            <div class="col-xl-12 col-md-12">  
               <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Create New</button>
                  <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Back</button>
               </div>
        </div>
    </div>
</main>
  );
};

export default CreateRisk;
